/*
{
	projectId: {
		id: "same as object key"
		title: "Something Nice And Human Readable",
		description: "Something nice and human readable with moderate detail.",
		builtFor: "Brief human readable description. eg. Game Jam, Client",
		lastUpdated: "manually do this",
		createdAt: "manually do this",
		imageUrl: "Path to image in public folder, should begin with a slash",
		projectUrls: [
			{
				websiteName: "GitHub",
				url: "https://github.com/something/something"
			}
		]
	}
}

*/

export default {
	ppvr: {
		id: "ppvr",
		title: "Planet Protector VR",
		description: "Arcade-style virtual reality shooter where you must shoot down invading aliens before they destroy your city.",
		builtFor: "Originally built using Unity for BigfootDS, published to Google Daydream and Steam.",
		lastUpdated: new Date(2020, 11, 2).getTime(),
		createdAt: new Date(2017, 9, 13).getTime(),
		imageUrl: "/projects/PPVR_Gameplay_001.jpg",
		projectUrls: [
			{
				websiteName: "Steam",
				url: "https://store.steampowered.com/app/656320/Planet_Protector_VR/"
			}
		]
	},
	ggj2020: {
		id: "ggj2020",
		title: "Sculpture Clash",
		description: "A client has brought you a broken sculpture, and it's up to you to fix it! ... Seems like there's been a mix-up though - there are other sculptors trying to sculpt your item! Fight with your friends to create the sculpture closest to what your client wants before time runs out!",
		builtFor: "Originally built using Unity with AirConsole, published as an AirConsole game for Global Game Jam 2020.",
		lastUpdated: new Date(2020, 1, 1).getTime(),
		createdAt: new Date(2020, 0, 31).getTime(),
		imageUrl: "/projects/GGJ2020-SculptureClash.png",
		projectUrls: [
			{
				websiteName: "GitHub",
				url: "https://github.com/AlexStormwood/BigfootGGJ2020"
			},
			{
				websiteName: "Global Game Jam 2020 Submission",
				url: "https://v3.globalgamejam.org/2020/games/sculpture-clash-3"
			}
		]
	},
	ggj2019: {
		id: "ggj2019",
		title: "Hurdles of a Turtle",
		description: "After a wild & mystical storm gave Turtle new lightning powers and stranded him in an unfamiliar part of the ocean, he must find his way back to his home reef. Using his new lightning powers & trusty sonar tracker, Turtle can help out many other sea creatures while on his journey home.",
		builtFor: "Originally built using Unity for Global Game Jam 2019.",
		lastUpdated: new Date(2019, 0, 27).getTime(),
		createdAt: new Date(2019, 0, 25).getTime(),
		imageUrl: "/projects/GGJ2019-HurdlesOfATurtle.png",
		projectUrls: [
			{
				websiteName: "GitHub",
				url: "https://github.com/AlexStormwood/BigfootGGJ2019"
			},
			{
				websiteName: "Global Game Jam 2020 Submission",
				url: "https://v3.globalgamejam.org/2019/games/hurdles-turtle"
			}
		]
	},
	aitvrtour: {
		id: "aitvrtour",
		title: "AIT VR Tour Prototype",
		description: "Explore the AIT Sydney campus in full 360-degree virtual reality.",
		builtFor: "Originally built as a client project for AIT's marketing team, using Unity. This app was not released, just developed to the prototype/MVP stage and then the project stopped.",
		lastUpdated: new Date(2017, 11, 15).getTime(),
		createdAt: new Date(2019, 10, 4).getTime(),
		projectUrls: []
	},
	scotsyukivr: {
		id: "scotsyukivr",
		title: "VR Art Project Tutoring & Development",
		description: "An immersive art experience designed and developed by a student at The Scots College, Sydney, with additional tutoring and development by me.",
		builtFor: "Originally built as a client project for The Scots College art faculty, using Unity. This app was not released, just developed and video fly-throughs exported for the client.",
		lastUpdated: new Date(2020, 9, 31).getTime(),
		createdAt: new Date(2020, 7, 1).getTime(),
		projectUrls: []
	},
	supercamo: {
		id: "supercamo",
		title: "SuperCamo",
		description: "Camo-inspired ODM for NeDB, built specifically for BigfootDS' needs.",
		builtFor: "Open-source NodeJS project.",
		lastUpdated: new Date(2024, 4, 30).getTime(),
		createdAt: new Date(2024, 4, 12).getTime(),
		projectUrls: [
			{
				websiteName: "GitHub",
				url: "https://github.com/BigfootDS/supercamo"
			},
			{
				websiteName: "NPM",
				url:"https://www.npmjs.com/package/@bigfootds/supercamo"
			}
		]
	},
	npmcompliancehelper: {
		id: "npmcompliancehelper",
		title: "NPM Compliance Helper",
		description: "Tool to help generate legal & copyright notices about project dependencies.",
		builtFor: "Open-source NodeJS project.",
		lastUpdated: new Date(2024, 4, 2).getTime(),
		createdAt: new Date(2024, 3, 30).getTime(),
		projectUrls: [
			{
				websiteName: "GitHub",
				url: "https://github.com/BigfootDS/npm-compliance-helper"
			},
			{
				websiteName: "NPM",
				url:"https://www.npmjs.com/package/@bigfootds/npm-compliance-helper"
			}
		]
	},
	sourcepool: {
		id: "sourcepool",
		title: "Sourcepool",
		description: "TTRPG content management system, ready for you to self-host.",
		builtFor: "Open-source NodeJS project.",
		lastUpdated: new Date(2024, 2, 27).getTime(),
		createdAt: new Date(2023, 5, 15).getTime(),
		imageUrl: "/projects/Sourcepool-SocialBanner.png",
		projectUrls: [
			{
				websiteName: "GitHub",
				url: "https://github.com/BigfootDS/Sourcepool"
			},
			{
				websiteName: "GitHub (Server Component)",
				url:"https://github.com/BigfootDS/Sourcepool-Server"
			},
			{
				websiteName: "GitHub (Client Component)",
				url:"https://github.com/BigfootDS/Sourcepool-Client-Web"
			}
		]
	},
	unityautomatedsemver: {
		id: "unityautomatedsemver",
		title: "Unity Automated Semver",
		description: "Action to increment relevant version numbers in a Unity project in your Github Action workflows.",
		builtFor: "Open-source NodeJS project.",
		lastUpdated: new Date(2024, 4, 28).getTime(),
		createdAt: new Date(2020, 9, 2).getTime(),
		projectUrls: [
			{
				websiteName: "GitHub",
				url: "https://github.com/AlexStormwood/UnityAutomatedSemver"
			}
		]
	},
	unityupmsemver: {
		id: "unityupmsemver",
		title: "Unity UPM Semver",
		description: "Github Action to handle automated semver modification for Unity UPM packages.",
		builtFor: "Open-source NodeJS project.",
		lastUpdated: new Date(2024, 9, 5).getTime(),
		createdAt: new Date(2020, 9, 5).getTime(),
		projectUrls: [
			{
				websiteName: "GitHub",
				url: "https://github.com/AlexStormwood/UnityUPMSemver"
			}
		]
	},
	commitswithintime: {
		id: "commitswithintime",
		title: "Commits Within Time",
		description: "A helper action that returns true if commits are detected on a repository within a supplied timeframe.",
		builtFor: "Open-source NodeJS project.",
		lastUpdated: new Date(2024, 3, 11).getTime(),
		createdAt: new Date(2020, 9, 6).getTime(),
		projectUrls: [
			{
				websiteName: "GitHub",
				url: "https://github.com/AlexStormwood/CommitsWithinTime"
			}
		]
	},
}