export interface CaseStudySection {
	heading: string;
	paragraphs: string[];
}

export interface CaseStudy {
	slug: string;
	projectId: string;
	title: string;
	description: string;
	role: string;
	period: string;
	stack: string[];
	sections: CaseStudySection[];
}

export const caseStudies: CaseStudy[] = [
	{
		slug: 'planet-protector-vr',
		projectId: 'ppvr',
		title: 'Planet Protector VR',
		description: 'An arcade-style VR shooter that became a real released game, rather than staying a student prototype.',
		role: 'Founder, game developer, and producer through BigfootDS',
		period: '2016 to 2020',
		stack: ['Unity', 'C#', 'Virtual reality', 'Google Daydream', 'Steam'],
		sections: [
			{ heading: 'The job', paragraphs: ['I wanted to move from studying game development into actually shipping a game. Planet Protector VR became the project for that: a readable, arcade-style shooter where the player protects a city from incoming aliens in virtual reality.'] },
			{ heading: 'What I worked on', paragraphs: ['I developed the game through BigfootDS, covering the gameplay, Unity implementation, VR presentation, and the work needed to turn a game project into a release. That meant the technical work and the less-glamorous product work had to move together.'] },
			{ heading: 'What came out of it', paragraphs: ['Planet Protector VR was published on Google Daydream and Steam. It is still useful evidence that I can take a game beyond a prototype, work within platform constraints, and get a public release across the line.'] },
		],
	},
	{
		slug: 'npm-compliance-helper',
		projectId: 'npmcompliancehelper',
		title: 'NPM Compliance Helper',
		description: 'A small developer tool for generating the legal and copyright notices that dependency-heavy projects need.',
		role: 'Founder and developer through BigfootDS',
		period: '2024',
		stack: ['Node.js', 'JavaScript', 'NPM'],
		sections: [
			{ heading: 'The job', paragraphs: ['Modern JavaScript projects can accumulate a heap of dependencies. Keeping legal and copyright notices current is important, but manually gathering the information is tedious and easy to put off.'] },
			{ heading: 'What I built', paragraphs: ['NPM Compliance Helper is a Node.js package that turns dependency data into organised material for a front-end display. I built it as a focused utility rather than hiding the job inside one project.'] },
			{ heading: 'What came out of it', paragraphs: ['The result is published as an open-source package with public source code and an NPM listing. It demonstrates the sort of small, practical tooling I like making: a real annoyance, a bounded solution, and evidence someone else can inspect or use.'] },
		],
	},
	{
		slug: 'awesome-repos',
		projectId: 'awesomerepos',
		title: 'Awesome Repos',
		description: 'A searchable website for turning a large personal GitHub-star collection into useful, browsable reference lists.',
		role: 'Creator and developer',
		period: '2025 to present',
		stack: ['Astro', 'JavaScript', 'GitHub API'],
		sections: [
			{ heading: 'The job', paragraphs: ['GitHub stars are useful until the list gets enormous. I wanted a practical way to organise repositories by topic and use case, rather than repeatedly trying to remember why I starred something months ago.'] },
			{ heading: 'What I built', paragraphs: ['Awesome Repos turns that pile into a searchable catalogue of lists and topics. The work is mostly about deciding the shape of useful data, then presenting it so the groupings are quicker to browse than raw GitHub stars.'] },
			{ heading: 'What came out of it', paragraphs: ['The project is a public Astro site with its source available on GitHub. It is a good example of a smaller information product: a problem from my own workflow, a clear data model, and a website that makes the data useful to other people too.'] },
		],
	},
	{
		slug: 'hackathon-archive',
		projectId: 'hackathonarchive',
		title: 'Hackathon Archive',
		description: 'A public reference for hackathons and game jams, built so event information does not disappear into old posts and dead links.',
		role: 'Creator and developer',
		period: '2026 to present',
		stack: ['Astro', 'Starlight', 'Markdown'],
		sections: [
			{ heading: 'The job', paragraphs: ['Hackathons and game jams leave behind useful rules, results, and lessons, but that material is often difficult to find once an event has passed. I wanted a place to preserve it in a format that remains useful for people planning or joining creative events.'] },
			{ heading: 'What I built', paragraphs: ['Hackathon Archive is a documentation-focused Astro and Starlight site. It uses structured Markdown content so entries can be maintained like a reference library rather than a one-off announcement.'] },
			{ heading: 'What came out of it', paragraphs: ['The public repository and site give the project a proper paper trail. It is a useful demonstration of documentation architecture, content modelling, and the kind of long-term maintenance thinking that public information needs.'] },
		],
	},
	{
		slug: 'unity-automated-semver',
		projectId: 'unityautomatedsemver',
		title: 'Unity Automated Semver',
		description: 'A GitHub Action for keeping the version numbers in Unity projects moving with a release workflow.',
		role: 'Creator and developer',
		period: '2020 to present',
		stack: ['Node.js', 'JavaScript', 'Unity', 'GitHub Actions'],
		sections: [
			{ heading: 'The job', paragraphs: ['Version numbers live in more than one place in a game project. Updating them manually during releases is repetitive, and it is easy for one of those values to drift out of step.'] },
			{ heading: 'What I built', paragraphs: ['Unity Automated Semver is a GitHub Action that increments the relevant version numbers as part of a Unity project workflow. It turns a manual release chore into a versioned, reviewable automation step.'] },
			{ heading: 'What came out of it', paragraphs: ['The action is public on GitHub. It connects the game-development work in my portfolio with the build and release systems that make shipping software less fragile.'] },
		],
	},
];

export function getCaseStudy(slug: string) {
	return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
