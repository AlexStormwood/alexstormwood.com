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

export default {
	appearances: {
		title:"Events & Appearances",
		lastUpdated: Date.now(),
		createdAt: Date.now(),
		component: <EventsAndAppearances />,
		tags: ["appearances", "projects"]
	},
	projects: {
		title:"Projects",
		lastUpdated: Date.now(),
		createdAt: Date.now(),
		component: <Projects />,
		tags: ["appearances", "projects"]
	},
	doesyourvideogameneedablockchain: {
		title: "Does your videogame need a blockchain?",
		lastUpdated: new Date(2023, 6, 24).getTime(),
		createdAt: new Date(2023, 6, 24).getTime(),
		component: <VideogamesDontNeedBlockchain />,
		tags: ["gamedev", "web3", "blockchain", "technology"]
	},
	japantrip2024tokyo: {
		title: "Japan Trip January 2024 - Tokyo",
		lastUpdated: new Date(2024, 6, 24).getTime(),
		createdAt: new Date(2024, 6, 24).getTime(),
		component: null,
		tags: ["travel", "japan"]
	},
	japantrip2024kyoto: {
		title: "Japan Trip January 2024 - Kyoto & Osaka",
		lastUpdated: new Date(2024, 6, 25).getTime(),
		createdAt: new Date(2024, 6, 25).getTime(),
		component: null,
		tags: ["travel", "japan"]
	},
	japantrip2024sapporo: {
		title: "Japan Trip January 2024 - Sapporo",
		lastUpdated: new Date(2024, 6, 26).getTime(),
		createdAt: new Date(2024, 6, 26).getTime(),
		component: null,
		tags: ["travel", "japan"]
	},
}

