/**
 * Human-maintained source of truth for the portfolio directory.
 *
 * Each project records its public context (`brand`, `role`, `technologies`,
 * `projectType`, and `status`) independently of its public links. A
 * `githubRepository` is only used for optional build-time enrichment.
 */

const date = (year, month, day) => new Date(year, month - 1, day).getTime();

export default {
	ppvr: {
		id: "ppvr", title: "Planet Protector VR",
		description: "Arcade-style virtual reality shooter where you must shoot down invading aliens before they destroy your city.",
		builtFor: "Originally built using Unity for BigfootDS, published to Google Daydream and Steam.",
		brand: "BigfootDS", role: "Founder and developer", technologies: ["Unity", "C#", "Virtual reality"], projectType: "Game", status: "Released",
		lastUpdated: date(2020, 12, 2), createdAt: date(2017, 10, 13), imageUrl: "/projects/PPVR_Gameplay_001.jpg",
		projectUrls: [{ websiteName: "Steam", url: "https://store.steampowered.com/app/656320/Planet_Protector_VR/" }],
	},
	ggj2020: {
		id: "ggj2020", title: "Sculpture Clash",
		description: "A client has brought you a broken sculpture, and it's up to you to fix it. A mix-up means other sculptors are trying to make it too, so create the closest match before time runs out.",
		builtFor: "Originally built using Unity with AirConsole, published as an AirConsole game for Global Game Jam 2020.",
		brand: "Alex Stormwood", role: "Developer", technologies: ["Unity", "C#", "AirConsole"], projectType: "Game jam", status: "Released",
		lastUpdated: date(2020, 2, 1), createdAt: date(2020, 1, 31), imageUrl: "/projects/GGJ2020-SculptureClash.png", githubRepository: "AlexStormwood/BigfootGGJ2020",
		projectUrls: [
			{ websiteName: "GitHub", url: "https://github.com/AlexStormwood/BigfootGGJ2020" },
			{ websiteName: "Global Game Jam submission", url: "https://v3.globalgamejam.org/2020/games/sculpture-clash-3" },
		],
	},
	ggj2019: {
		id: "ggj2019", title: "Hurdles of a Turtle",
		description: "After a mystical storm gives Turtle lightning powers, he must find his way back to his home reef while helping the sea creatures he meets.",
		builtFor: "Originally built using Unity for Global Game Jam 2019.",
		brand: "Alex Stormwood", role: "Developer", technologies: ["Unity", "C#"], projectType: "Game jam", status: "Released",
		lastUpdated: date(2019, 1, 27), createdAt: date(2019, 1, 25), imageUrl: "/projects/GGJ2019-HurdlesOfATurtle.png",
		projectUrls: [
			{ websiteName: "GitHub", url: "https://github.com/AlexStormwood/BigfootGGJ2019" },
			{ websiteName: "Global Game Jam submission", url: "https://v3.globalgamejam.org/2019/games/hurdles-turtle" },
		],
	},
	aitvrtour: {
		id: "aitvrtour", title: "AIT VR Tour Prototype", description: "Explore the AIT Sydney campus in full 360-degree virtual reality.",
		builtFor: "Originally built as a client project for AIT's marketing team, using Unity. This app reached the prototype/MVP stage before the project stopped.",
		brand: "Australian Institute of Technology", role: "Developer", technologies: ["Unity", "C#", "Virtual reality"], projectType: "Client prototype", status: "Prototype",
		lastUpdated: date(2017, 12, 15), createdAt: date(2019, 11, 4), projectUrls: [],
	},
	scotsyukivr: {
		id: "scotsyukivr", title: "VR Art Project Tutoring & Development", description: "An immersive art experience designed by a student at The Scots College, Sydney, with additional tutoring and development by me.",
		builtFor: "Originally built as a client project for The Scots College art faculty using Unity. It was developed with video fly-throughs exported for the client.",
		brand: "The Scots College", role: "Tutor and developer", technologies: ["Unity", "C#", "Virtual reality"], projectType: "Client work", status: "Completed",
		lastUpdated: date(2020, 10, 31), createdAt: date(2020, 8, 1), projectUrls: [],
	},
	supercamo: {
		id: "supercamo", title: "SuperCamo", description: "Camo-inspired ODM for NeDB, built specifically for BigfootDS' needs.", builtFor: "Open-source Node.js project.",
		brand: "BigfootDS", role: "Founder and developer", technologies: ["Node.js", "JavaScript", "NeDB", "NPM"], projectType: "Developer tooling", status: "Released",
		lastUpdated: date(2024, 5, 30), createdAt: date(2024, 5, 12), imageUrl: "/projects/SuperCamo.png", githubRepository: "BigfootDS/supercamo",
		projectUrls: [{ websiteName: "GitHub", url: "https://github.com/BigfootDS/supercamo" }, { websiteName: "NPM", url: "https://www.npmjs.com/package/@bigfootds/supercamo" }],
	},
	npmcompliancehelper: {
		id: "npmcompliancehelper", title: "NPM Compliance Helper", description: "Tool to help generate legal and copyright notices about project dependencies.", builtFor: "Open-source Node.js project.",
		brand: "BigfootDS", role: "Founder and developer", technologies: ["Node.js", "JavaScript", "NPM"], projectType: "Developer tooling", status: "Released",
		lastUpdated: date(2024, 5, 3), createdAt: date(2024, 4, 30), imageUrl: "/projects/NPMComplianceHelper.png", githubRepository: "BigfootDS/pkg-npm-compliance-helper",
		projectUrls: [
			{ websiteName: "Project page", url: "https://bigfootds.com/projects/npmcompliancehelper/" },
			{ websiteName: "GitHub", url: "https://github.com/BigfootDS/pkg-npm-compliance-helper" },
			{ websiteName: "NPM", url: "https://www.npmjs.com/package/@bigfootds/npm-compliance-helper" },
		],
	},
	sourcepool: {
		id: "sourcepool", title: "Sourcepool", description: "TTRPG content management system, ready for you to self-host.", builtFor: "Open-source Node.js project.",
		brand: "BigfootDS", role: "Founder and developer", technologies: ["Node.js", "JavaScript", "TTRPG"], projectType: "Web application", status: "Released",
		lastUpdated: date(2024, 3, 27), createdAt: date(2023, 6, 15), imageUrl: "/projects/Sourcepool.png", githubRepository: "BigfootDS/Sourcepool",
		projectUrls: [
			{ websiteName: "GitHub", url: "https://github.com/BigfootDS/Sourcepool" },
			{ websiteName: "GitHub (server component)", url: "https://github.com/BigfootDS/Sourcepool-Server" },
			{ websiteName: "GitHub (client component)", url: "https://github.com/BigfootDS/Sourcepool-Client-Web" },
		],
	},
	hackathonarchive: {
		id: "hackathonarchive", title: "Hackathon Archive", description: "A public archive of hackathons and game jams, with event rules, results, and useful references for people planning creative events.", builtFor: "Open-source Astro and Starlight site.",
		brand: "Alex Stormwood", role: "Creator and developer", technologies: ["Astro", "Starlight", "Markdown"], projectType: "Documentation site", status: "Released",
		lastUpdated: date(2026, 8, 9), createdAt: date(2026, 7, 23), imageUrl: "/projects/HackathonArchive.png", githubRepository: "AlexStormwood/hackathon-archive",
		projectUrls: [{ websiteName: "GitHub", url: "https://github.com/AlexStormwood/hackathon-archive" }],
	},
	awesomerepos: {
		id: "awesomerepos", title: "Awesome Repos", description: "A searchable home for the useful GitHub repositories I have starred, grouped into practical lists and topics instead of one giant pile.", builtFor: "Open-source Astro site.",
		brand: "Alex Stormwood", role: "Creator and developer", technologies: ["Astro", "JavaScript", "GitHub API"], projectType: "Web application", status: "Released",
		lastUpdated: date(2026, 8, 28), createdAt: date(2026, 8, 23), imageUrl: "/projects/AwesomeRepos.png", githubRepository: "AlexStormwood/awesome-repos",
		projectUrls: [{ websiteName: "Website", url: "https://awesome-repos.alexstormwood.com/" }, { websiteName: "GitHub", url: "https://github.com/AlexStormwood/awesome-repos" }],
	},
	unityautomatedsemver: {
		id: "unityautomatedsemver", title: "Unity Automated Semver", description: "Action to increment relevant version numbers in a Unity project in GitHub Actions workflows.", builtFor: "Open-source Node.js project.",
		brand: "Alex Stormwood", role: "Creator and developer", technologies: ["Node.js", "JavaScript", "Unity", "GitHub Actions"], projectType: "GitHub Action", status: "Released",
		lastUpdated: date(2024, 5, 28), createdAt: date(2020, 10, 2), imageUrl: "/projects/UnityAutomatedSemver.png", githubRepository: "AlexStormwood/UnityAutomatedSemver",
		projectUrls: [{ websiteName: "GitHub", url: "https://github.com/AlexStormwood/UnityAutomatedSemver" }],
	},
	unityupmsemver: {
		id: "unityupmsemver", title: "Unity UPM Semver", description: "GitHub Action to handle automated semantic-version modification for Unity UPM packages.", builtFor: "Open-source Node.js project.",
		brand: "Alex Stormwood", role: "Creator and developer", technologies: ["Node.js", "JavaScript", "Unity", "GitHub Actions"], projectType: "GitHub Action", status: "Released",
		lastUpdated: date(2020, 10, 5), createdAt: date(2020, 10, 5), imageUrl: "/projects/UnityUPMSemver.png", githubRepository: "AlexStormwood/UnityUPMSemver",
		projectUrls: [{ websiteName: "GitHub", url: "https://github.com/AlexStormwood/UnityUPMSemver" }],
	},
	commitswithintime: {
		id: "commitswithintime", title: "Commits Within Time", description: "A helper action that returns true if commits are detected on a repository within a supplied timeframe.", builtFor: "Open-source Node.js project.",
		brand: "Alex Stormwood", role: "Creator and developer", technologies: ["Node.js", "JavaScript", "GitHub Actions"], projectType: "GitHub Action", status: "Released",
		lastUpdated: date(2024, 4, 11), createdAt: date(2020, 10, 6), imageUrl: "/projects/CommitsWithinTime.png", githubRepository: "AlexStormwood/CommitsWithinTime",
		projectUrls: [{ websiteName: "GitHub", url: "https://github.com/AlexStormwood/CommitsWithinTime" }],
	},
	unitysemverupdater: {
		id: "unitysemverupdater", title: "Unity Semver Updater", description: "Node.js tool to update a Unity project's version to a specified format, typically semantic versioning.", builtFor: "Open-source NPM package.",
		brand: "BigfootDS", role: "Founder and developer", technologies: ["Node.js", "TypeScript", "Unity", "NPM"], projectType: "NPM package", status: "Released",
		lastUpdated: date(2026, 8, 27), createdAt: date(2024, 7, 7), githubRepository: "BigfootDS/pkg-unity-semver-updater",
		projectUrls: [
			{ websiteName: "Project page", url: "https://bigfootds.com/projects/unitysemverupdater/" },
			{ websiteName: "GitHub", url: "https://github.com/BigfootDS/pkg-unity-semver-updater" },
			{ websiteName: "NPM", url: "https://www.npmjs.com/package/@bigfootds/unity-semver-updater" },
		],
	},
	godmaker: {
		id: "godmaker", title: "Godmaker: Patrons & Prophets", description: "Build a gathering of followers, manipulate the mortal realm, and grow your godhood to become the highest power in a fantasy world.", builtFor: "BigfootDS strategy game in active development.",
		brand: "BigfootDS", role: "Founder and developer", technologies: ["TypeScript", "JavaScript", "Node.js", "Electron", "React"], projectType: "Game", status: "In development",
		projectUrls: [
			{ websiteName: "Project page", url: "https://bigfootds.com/projects/patronsimulator/" },
			{ websiteName: "Steam", url: "https://store.steampowered.com/app/1792550/Patron_Simulator/" },
		],
	},
	tcgsetdesigner: {
		id: "tcgsetdesigner", title: "TCG Set Designer", description: "A tool for designing trading-card-game sets, expansions, and other collections of cards. It is a design-management tool, not a gameplay simulator.", builtFor: "BigfootDS card-game design tool in active development.",
		brand: "BigfootDS", role: "Founder and developer", technologies: ["Docker", "Web application", "TCG"], projectType: "Web application", status: "In development",
		projectUrls: [
			{ websiteName: "Project page", url: "https://bigfootds.com/projects/tcgsetdesigner/" },
			{ websiteName: "Documentation", url: "https://tcgsetdesigner.com/" },
			{ websiteName: "GitHub", url: "https://github.com/BigfootDS/tcg-set-designer" },
		],
	},
	thebestestbeehive: {
		id: "thebestestbeehive", title: "The Bestest Beehive", description: "Explore infinite worlds of flourishing flora, brilliant bees, and long-forgotten wonders while rebuilding the world with friends.", builtFor: "BigfootDS open-world cosy crafting game in prototyping.",
		brand: "BigfootDS", role: "Founder and developer", technologies: ["Game development", "ECS", "Godot"], projectType: "Game", status: "In development",
		projectUrls: [
			{ websiteName: "Project page", url: "https://bigfootds.com/projects/thebestestbeehive/" },
			{ websiteName: "Steam", url: "https://store.steampowered.com/app/749460/The_Bestest_Beehive/" },
		],
	},
	streamdockicons: {
		id: "streamdockicons", title: "BigfootDS Stream Dock Icons", description: "Icon pack for MiraBox Stream Dock products, focused on BigfootDS games, apps, and computer operations.", builtFor: "Open-source icon pack.",
		brand: "BigfootDS", role: "Founder and developer", technologies: ["Icon design", "Stream Deck"], projectType: "Icon pack", status: "Released",
		lastUpdated: date(2024, 11, 19), createdAt: date(2024, 11, 12), githubRepository: "BigfootDS/bigfootds-stream-dock-icons",
		projectUrls: [{ websiteName: "GitHub", url: "https://github.com/BigfootDS/bigfootds-stream-dock-icons" }],
	},
	nodejstrickplay: {
		id: "nodejstrickplay", title: "NodeJS Trickplay", description: "Generate trickplay images for a video file for use in NodeJS environments.", builtFor: "Open-source NPM package.",
		brand: "BigfootDS", role: "Founder and developer", technologies: ["Node.js", "TypeScript", "NPM", "Video processing"], projectType: "NPM package", status: "Released",
		lastUpdated: date(2025, 4, 23), createdAt: date(2025, 4, 20), githubRepository: "BigfootDS/pkg-nodejs-trickplay",
		projectUrls: [{ websiteName: "NPM", url: "https://www.npmjs.com/package/@bigfootds/nodejs-trickplay" }, { websiteName: "GitHub", url: "https://github.com/BigfootDS/pkg-nodejs-trickplay" }],
	},
	godotsemverupdater: {
		id: "godotsemverupdater", title: "Godot Semver Updater", description: "NodeJS tool to update a Godot project's game version to a specified format, typically semantic versioning.", builtFor: "Open-source NPM package.",
		brand: "BigfootDS", role: "Founder and developer", technologies: ["Node.js", "JavaScript", "Godot", "NPM"], projectType: "NPM package", status: "Released",
		lastUpdated: date(2026, 8, 21), createdAt: date(2024, 7, 11), githubRepository: "BigfootDS/pkg-godot-semver-updater",
		projectUrls: [{ websiteName: "NPM", url: "https://www.npmjs.com/package/@bigfootds/godot-semver-updater" }, { websiteName: "GitHub", url: "https://github.com/BigfootDS/pkg-godot-semver-updater" }],
	},
	unrealsemverupdater: {
		id: "unrealsemverupdater", title: "Unreal Semver Updater", description: "Update an Unreal Engine project's game-version values from NodeJS.", builtFor: "Open-source NPM package.",
		brand: "BigfootDS", role: "Founder and developer", technologies: ["Node.js", "JavaScript", "Unreal Engine", "NPM"], projectType: "NPM package", status: "Released",
		lastUpdated: date(2026, 8, 21), createdAt: date(2026, 8, 21), githubRepository: "BigfootDS/pkg-unreal-semver-updater",
		projectUrls: [{ websiteName: "NPM", url: "https://www.npmjs.com/package/@bigfootds/unreal-semver-updater" }, { websiteName: "GitHub", url: "https://github.com/BigfootDS/pkg-unreal-semver-updater" }],
	},
	nodejssemverupdater: {
		id: "nodejssemverupdater", title: "NodeJS Semver Updater", description: "Update a NodeJS project's version values from NodeJS.", builtFor: "Open-source NPM package.",
		brand: "BigfootDS", role: "Founder and developer", technologies: ["Node.js", "JavaScript", "NPM", "Electron"], projectType: "NPM package", status: "Released",
		lastUpdated: date(2026, 8, 27), createdAt: date(2026, 8, 27), githubRepository: "BigfootDS/pkg-nodejs-semver-updater",
		projectUrls: [{ websiteName: "NPM", url: "https://www.npmjs.com/package/@bigfootds/nodejs-semver-updater" }, { websiteName: "GitHub", url: "https://github.com/BigfootDS/pkg-nodejs-semver-updater" }],
	},
	gameautomatedsemver: {
		id: "gameautomatedsemver", title: "Game Automated Semver", description: "Automate a game project's semantic versioning with a GitHub Action.", builtFor: "Open-source GitHub Action.",
		brand: "BigfootDS", role: "Founder and developer", technologies: ["TypeScript", "GitHub Actions", "Game development", "Semver"], projectType: "GitHub Action", status: "Released",
		lastUpdated: date(2026, 8, 27), createdAt: date(2026, 8, 21), githubRepository: "BigfootDS/actions-game-automated-semver",
		projectUrls: [{ websiteName: "GitHub", url: "https://github.com/BigfootDS/actions-game-automated-semver" }],
	},
};
