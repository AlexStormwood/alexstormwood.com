/*
{
	route: {
		title: "Something Nice And Human Readable",
		lastUpdated: "manually do this",
		createdAt: "manually do this"
	}
}

*/

import EventsAndAppearances from "./pages/articles/EventsAndAppearances";
import Projects from "./pages/articles/Projects";
import VideogamesDontNeedBlockchain from "./pages/articles/VideogamesDontNeedBlockchain";
import ZeroDepNodeJsLogging from "./pages/articles/ZeroDepNodeJsLogging";

export default {
	appearances: {
		title:"Events & Appearances",
		lastUpdated: new Date(2024, 4, 30).getTime(),
		createdAt: new Date(2024, 4, 30).getTime(),
		component: <EventsAndAppearances />,
		tags: ["appearances", "projects"],
		section: "About Me",
		description: "List of events, exhibits, workshops, etc, where you might've bumped into me."
	},
	projects: {
		title:"Projects",
		lastUpdated: new Date(2024, 4, 30).getTime(),
		createdAt: new Date(2024, 4, 30).getTime(),
		component: <Projects />,
		tags: ["appearances", "projects"],
		section: "About Me",
		description: "Index of cool things that I've worked on over the years."
	},
	doesyourvideogameneedablockchain: {
		title: "Does your videogame need a blockchain?",
		lastUpdated: new Date(2023, 6, 24).getTime(),
		createdAt: new Date(2023, 6, 24).getTime(),
		component: <VideogamesDontNeedBlockchain />,
		tags: ["gamedev", "web3", "blockchain", "technology"],
		section: "Technology",
		description: "A quiz for you to use when deciding if your game needs blockchain."
	},
	japantrip2024tokyo: {
		title: "Japan Trip January 2024 - Tokyo",
		lastUpdated: new Date(2099, 6, 24).getTime(),
		createdAt: new Date(2099, 6, 24).getTime(),
		component: null,
		tags: ["travel", "japan"],
		section: "Travel",
	},
	japantrip2024kyoto: {
		title: "Japan Trip January 2024 - Kyoto & Osaka",
		lastUpdated: new Date(2099, 6, 25).getTime(),
		createdAt: new Date(2099, 6, 25).getTime(),
		component: null,
		tags: ["travel", "japan"],
		section: "Travel",
	},
	japantrip2024sapporo: {
		title: "Japan Trip January 2024 - Sapporo",
		lastUpdated: new Date(2099, 6, 26).getTime(),
		createdAt: new Date(2099, 6, 26).getTime(),
		component: null,
		tags: ["travel", "japan"],
		section: "Travel",
	},
	nodejslogging: {
		title: "Zero-Dependency NodeJS Logging",
		lastUpdated: new Date(2024, 5, 9).getTime(),
		createdAt: new Date(2024, 5, 9).getTime(),
		component: <ZeroDepNodeJsLogging />,
		tags: ["technology", "programming", "javascript", "nodejs"],
		section: "Technology",
	},
}

