import projectMeta from './projectMeta';

type ProjectRecord = (typeof projectMeta)[keyof typeof projectMeta] & {
	githubRepository?: string;
	github?: {
		pushedAt?: number;
		archived?: boolean;
		description?: string | null;
	};
};

type GitHubRepositoryResponse = {
	data?: Record<string, {
		pushedAt?: string | null;
		isArchived?: boolean;
		description?: string | null;
	} | null>;
};

let projectsPromise: Promise<Record<string, ProjectRecord>> | undefined;

async function getGitHubRepositories(repositories: string[]) {
	const token = process.env.GITHUB_TOKEN;
	if (!token) {
		console.info('[projects] Skipping GitHub enrichment: set GITHUB_TOKEN during production builds to use current repository metadata.');
		return new Map<string, NonNullable<ProjectRecord['github']>>();
	}

	try {
		const fields = repositories.map((repository, index) => {
			const [owner, name] = repository.split('/');
			return `repository${index}: repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(name)}) { pushedAt isArchived description }`;
		}).join('\n');
		const response = await fetch('https://api.github.com/graphql', {
			method: 'POST',
			headers: {
				Accept: 'application/vnd.github+json',
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ query: `query ProjectMetadata { ${fields} }` }),
		});
		if (!response.ok) {
			console.warn(`[projects] Could not enrich project metadata: GitHub returned ${response.status}.`);
			return new Map<string, NonNullable<ProjectRecord['github']>>();
		}
		const repositoryData = (await response.json()) as GitHubRepositoryResponse;
		const enrichedRepositories = new Map<string, NonNullable<ProjectRecord['github']>>();
		repositories.forEach((repository, index) => {
			const data = repositoryData.data?.[`repository${index}`];
			if (!data) return;
			enrichedRepositories.set(repository, {
				pushedAt: data.pushedAt ? Date.parse(data.pushedAt) : undefined,
				archived: data.isArchived,
				description: data.description,
			});
		});
		return enrichedRepositories;
	} catch {
		console.warn('[projects] Could not enrich project metadata: continuing with local project data.');
		return new Map<string, NonNullable<ProjectRecord['github']>>();
	}
}

export function getProjects(): Promise<Record<string, ProjectRecord>> {
	projectsPromise ??= (async () => {
		const entries = Object.entries(projectMeta) as [string, ProjectRecord][];
		if (import.meta.env.DEV) return Object.fromEntries(entries);
		const repositories = [...new Set(entries.flatMap(([, project]) => project.githubRepository ? [project.githubRepository] : []))];
		const githubByRepository = await getGitHubRepositories(repositories);
		return Object.fromEntries(entries.map(([id, project]) => {
			const github = project.githubRepository ? githubByRepository.get(project.githubRepository) : undefined;
			return [id, github ? { ...project, github } : project];
		}));
	})();

	return projectsPromise;
}
