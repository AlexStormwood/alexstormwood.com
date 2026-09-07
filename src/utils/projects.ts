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
	pushed_at?: string | null;
	archived?: boolean;
	description?: string | null;
};

let projectsPromise: Promise<Record<string, ProjectRecord>> | undefined;

async function getGitHubRepository(repository: string) {
	try {
		const token = process.env.GITHUB_TOKEN;
		const response = await fetch(`https://api.github.com/repos/${repository}`, {
			headers: {
				Accept: 'application/vnd.github+json',
				...(token ? { Authorization: `Bearer ${token}` } : {}),
			},
		});
		if (!response.ok) {
			console.warn(`[projects] Could not enrich ${repository}: GitHub returned ${response.status}.`);
			return undefined;
		}
		const repositoryData = (await response.json()) as GitHubRepositoryResponse;
		return {
			pushedAt: repositoryData.pushed_at ? Date.parse(repositoryData.pushed_at) : undefined,
			archived: repositoryData.archived,
			description: repositoryData.description,
		};
	} catch {
		console.warn(`[projects] Could not enrich ${repository}: continuing with local project data.`);
		return undefined;
	}
}

export function getProjects(): Promise<Record<string, ProjectRecord>> {
	projectsPromise ??= (async () => {
		const entries = Object.entries(projectMeta) as [string, ProjectRecord][];
		if (import.meta.env.DEV) return Object.fromEntries(entries);

		const enrichedEntries = await Promise.all(entries.map(async ([id, project]) => {
			if (!project.githubRepository) return [id, project] as const;
			const github = await getGitHubRepository(project.githubRepository);
			return [id, github ? { ...project, github } : project] as const;
		}));
		return Object.fromEntries(enrichedEntries);
	})();

	return projectsPromise;
}
