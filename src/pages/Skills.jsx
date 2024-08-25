import { Helmet } from "react-helmet";
import "../styles/Skills.css";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";


const skillsList = [
	{
		categoryName: "Front-End",
		items: [
			{
				name: "HTML",
				icon: "/brandLogos/html5.svg",
				colourCode: "#E34F26",
				link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
			},
			{
				name: "CSS",
				icon: "/brandLogos/css3.svg",
				colourCode: "#1572B6",
				link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
			},
			{
				name: "JavaScript",
				icon: "/brandLogos/javascript.svg",
				colourCode: "#F7DF1E",
				link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview"
			},
			{
				name: "ReactJS",
				icon: "/brandLogos/react.svg",
				colourCode: "#61DAFB",
				link: "https://react.dev/"
			}
		]
	},
	{
		categoryName: "Back-End",
		items: [
			{
				name: "NodeJS",
				icon: "/brandLogos/nodedotjs.svg",
				colourCode: "#5FA04E",
				link: "https://nodejs.org/"
			},
			{
				name: "ExpressJS",
				icon: "/brandLogos/express.svg",
				colourCode: "#FFFFFF",
				link: "https://expressjs.com/"
			},
			{
				name: "Electron",
				icon: "/brandLogos/electron.svg",
				colourCode: "#47848F",
				link: "https://electronjs.org/"
			},
			{
				name: "Python",
				icon: "/brandLogos/python.svg",
				colourCode: "#3776AB",
				link: "https://www.python.org/"
			},
			{
				name: "Flask",
				icon: "/brandLogos/flask.svg",
				colourCode: "#FFFFFF",
				link: "https://flask.palletsprojects.com/"
			},
			{
				name: "C#",
				icon: "/brandLogos/c--4.svg",
				colourCode: "#682876",
				link: "https://dotnet.microsoft.com/en-us/"
			},
			{
				name: ".NET",
				icon: "/brandLogos/dotnet.svg",
				colourCode: "#512BD4",
				link: "https://dotnet.microsoft.com/en-us/"
			}
		]
	},
	{
		categoryName: "Game Engine",
		items: [
			{
				name: "Unity",
				icon: "/brandLogos/unity.svg",
				colourCode: "#FFFFFF",
				link: "https://unity.com/"
			},
			{
				name: "Godot Engine",
				icon: "/brandLogos/godotengine.svg",
				colourCode: "#478CBF",
				link: "https://godotengine.org/"
			},
			{
				name: "FNA",
				icon: "/brandLogos/FNA.png",
				colourCode: "#FFFFFF",
				link: "https://fna-xna.github.io/"
			},
			{
				name: "Monogame",
				icon: "/brandLogos/monogame.svg",
				colourCode: "#E73C00",
				link: "https://monogame.net/"
			}
		]
	},
	{
		categoryName: "Database",
		items: [
			{
				name: "PostgreSQL",
				icon: "/brandLogos/postgresql.svg",
				colourCode: "#4169E1",
				link: "https://www.postgresql.org/"
			},
			{
				name: "Sequelize",
				icon: "/brandLogos/sequelize.svg",
				colourCode: "#52B0E7",
				link: "https://sequelize.org/"
			},
			{
				name: "MongoDB",
				icon: "/brandLogos/mongodb.svg",
				colourCode: "#47A248",
				link: "https://www.mongodb.com/"
			},
			{
				name: "MongooseJS",
				icon: "/brandLogos/mongoose.svg",
				colourCode: "#880000",
				link: "https://mongoosejs.com/"
			},
			{
				name: "Firebase Cloud Firestore",
				icon: "/brandLogos/firebase.svg",
				colourCode: "#DD2C00",
				link: "https://console.firebase.google.com/"
			}
		]
	},
	{
		categoryName: "Cloud",
		items: [
			{
				name: "Amazon AWS",
				icon: "/brandLogos/amazonwebservices.svg",
				colourCode: "#232F3E",
				link: "https://aws.amazon.com/"
			},
			{
				name: "Google Cloud",
				icon: "/brandLogos/googlecloud.svg",
				colourCode: "#4285F4",
				link: "https://cloud.google.com/"
			},
			{
				name: "Google Firebase",
				icon: "/brandLogos/firebase.svg",
				colourCode: "#DD2C00",
				link: "https://console.firebase.google.com/"
			},
			{
				name: "Docker",
				icon: "/brandLogos/docker.svg",
				colourCode: "#2496ED",
				link: "https://www.docker.com/"
			}
		]
	},
	{
		categoryName: "Testing",
		items: [
			{
				name: "Jest",
				icon: "/brandLogos/jest.svg",
				colourCode: "#C21325",
				link: "https://jestjs.io/"
			},
			{
				name: "Pytest",
				icon: "/brandLogos/pytest.svg",
				colourCode: "#0A9EDC",
				link: "https://docs.pytest.org/en/stable/"
			},
			{
				name: "xUnit.net",
				icon: "/brandLogos/xUnit.png",
				colourCode: "#FFFFFF",
				link: "https://xunit.net/"
			}
		]
	},
	{
		categoryName: "Version Control",
		items: [
			{
				name: "Git",
				icon: "/brandLogos/git.svg",
				colourCode: "#F05032",
				link: "https://git-scm.com/"
			},
			{
				name: "GitHub",
				icon: "/brandLogos/github.svg",
				colourCode: "#FFFFFF",
				link: "https://github.com/"
			},
			{
				name: "GitHub Desktop",
				icon: "/brandLogos/github.svg",
				colourCode: "#FFFFFF",
				link: "https://github.com/apps/desktop"
			}
		]
	},
	{
		categoryName: "Automation",
		items: [
			{
				name: "GitHub Actions",
				icon: "/brandLogos/githubactions.svg",
				colourCode: "#2088FF",
				link: "https://github.com/actions"
			},
			{
				name: "Power Automate",
				icon: "/brandLogos/Microsoft_Power_Automate_Large.png",
				colourCode: "#FFFFFF",
				link: "https://make.powerautomate.com/"
			}
		]
	},
	{
		categoryName: "Programming Integrations",
		items: [
			{
				name: "Steamworks",
				icon: "/brandLogos/steam.svg",
				colourCode: "#FFFFFF",
				link: "https://partner.steamgames.com/"
			},
			{
				name: "Vuforia",
				icon: "/brandLogos/Vuforia_Large.png",
				colourCode: "#FFFFFF",
				link: "https://developer.vuforia.com/"
			},
			{
				name: "Twitch API",
				icon: "/brandLogos/twitch.svg",
				colourCode: "#9146FF",
				link: "https://dev.twitch.tv/docs/api/"
			},
			{
				name: "Discord API",
				icon: "/brandLogos/discord.svg",
				colourCode: "#5865F2",
				link: "https://discord.com/developers/docs/intro"
			},
			{
				name: "Razer API",
				icon: "/brandLogos/razer.svg",
				colourCode: "#00FF00",
				link: "https://api.razer.com/"
			},
			{
				name: "Xbox Live",
				icon: "/brandLogos/xbox-1.svg",
				colourCode: "#107C10",
				link: "https://www.xbox.com/"
			},
			{
				name: "Nintendo Switch Online",
				icon: "/brandLogos/nintendoswitch.svg",
				colourCode: "#E60012",
				link: "https://developer.nintendo.com/"
			}
		]
	},
	{
		categoryName: "3D Design",
		items: [
			{
				name: "Autodesk 3DS Max",
				icon: "/brandLogos/autodesk-3ds-max-product-icon-social-400.webp",
				colourCode: "#FFFFFF",
				link: "https://www.autodesk.com/au/products/3ds-max/overview"
			},
			{
				name: "Zbrush",
				icon: "/brandLogos/zbrush.svg",
				colourCode: "#FFFFFF",
				link: "https://www.maxon.net/en/zbrush"
			}
		]
	},
	{
		categoryName: "2D Design & Illustration",
		items: [
			{
				name: "Adobe Photoshop",
				icon: "/brandLogos/adobephotoshop.svg",
				colourCode: "#31A8FF",
				link: "https://www.adobe.com/au/products/photoshop.html"
			},
			{
				name: "Adobe Illustrator",
				icon: "/brandLogos/adobeillustrator.svg",
				colourCode: "#FF9A00",
				link: "https://www.adobe.com/au/products/illustrator.html"
			},
			{
				name: "Canva",
				icon: "/brandLogos/canva.svg",
				colourCode: "#00C4CC",
				link: "https://www.canva.com/en_gb/"
			},
			{
				name: "Krita",
				icon: "/brandLogos/krita.svg",
				colourCode: "#3BABFF",
				link: "https://krita.org/en/"
			}
		]
	},
	{
		categoryName: "Video Editing",
		items: [
			{
				name: "Adobe Premiere Pro",
				icon: "/brandLogos/adobepremierepro.svg",
				colourCode: "#9999FF",
				link: "https://www.adobe.com/au/products/premiere.html"
			},
			{
				name: "DaVinci Resolve",
				icon: "/brandLogos/davinciresolve.svg",
				colourCode: "#233A51",
				link: "https://www.blackmagicdesign.com/au/products/davinciresolve"
			}
		]
	},
	{
		categoryName: "Software Publishing",
		items: [
			{
				name: "Steam",
				icon: "/brandLogos/steam.svg",
				colourCode: "#FFFFFF",
				link: "https://partner.steamgames.com/"
			},
			{
				name: "Google Play",
				icon: "/brandLogos/googleplay.svg",
				colourCode: "#FFFFFF",
				link: "https://play.google.com/console/"
			},
			{
				name: "Google Daydream",
				icon: "/brandLogos/Google_Daydream_Logo_Square.png",
				colourCode: "#FFFFFF",
				link: "https://en.wikipedia.org/wiki/Google_Daydream"
			},
			{
				name: "Xbox One",
				icon: "/brandLogos/xbox-1.svg",
				colourCode: "#107C10",
				link: "https://www.xbox.com/"
			},
			{
				name: "Microsoft Store",
				icon: "/brandLogos/microsoft-store-2022.svg",
				colourCode: "#005FB8",
				link: "https://apps.microsoft.com/"
			},
			{
				name: "Nintendo Wii U",
				icon: "/brandLogos/wii-u.svg",
				colourCode: "#FFFFFF",
				link: "https://developer.nintendo.com/"
			},
			{
				name: "Nintendo 3DS",
				icon: "/brandLogos/nintendo3ds.svg",
				colourCode: "#D12228",
				link: "https://developer.nintendo.com/"
			},
			{
				name: "Nintendo Switch",
				icon: "/brandLogos/nintendoswitch.svg",
				colourCode: "#E60012",
				link:"https://developer.nintendo.com/"
			}		
		]
	},
	{
		categoryName: "Media Publishing",
		items: [
			{
				name: "Amazon Kindle Direct Publishing",
				icon: "/brandLogos/amazon.svg",
				colourCode: "#FF9900",
				link: "https://kdp.amazon.com/"
			},
			{
				name: "DistroKid",
				icon: "/brandLogos/distrokid.svg",
				colourCode: "#FFFFFF",
				link: "https://distrokid.com/"
			}
		]
	}
	
]


export function Skills(){ 

	return (
		<div id="skills-page">
			<Helmet>
				<meta name="twitter:title" content="Alex Stormwood's Skills" />
				<meta property="og:type" content="profile" />
				<meta property="og:title" content="Alex Stormwood's Skills"/>
				<meta property="og:url" content="https://alexstormwood.com/skills"/>
				<meta property="og:description" content="Learn about the things that Alex has done and can do."/>
				<meta property="profile:first_name" content="Alex"/>
				<meta property="profile:last_name" content="Stormwood"/>
				<meta property="profile:username" content="alexstormwood"/>
				<meta property="og:image" content="/opengraph/website-ogimage-default.png" />
				<meta name="twitter:image" content="/opengraph/website-ogimage-default.png" />
				<meta name="twitter:image:alt" content="Banner image depicting Alex. He writes about gamedev, webdev, and more." />
			</Helmet>

			<h1>My Skills</h1>

			<p>Over the years, I&apos;ve used and learned a variety of technologies, languages and tools.</p>
			<p>This list isn&apos;t technically exhaustive, but it is the stuff that I am most comfortable with or at least can talk about with some experience behind my words.</p>
			<br />

			<div id="skillPageMainContent">
				

				<div id="skillChart">
					<Tabs>
						<TabList id={"skillsPanelHeadersContainer"}>
						{skillsList.map((category, index) => {
							return <Tab key={"tablist-"+ index}>{category.categoryName}</Tab>
						})}
						</TabList>
						
						<div id="skillCardsContainer">
						{skillsList.map((category, index) => {
							return <TabPanel key={index} heading={category.categoryName}>
								<h3>{category.categoryName}</h3>
								<div className="skillCardsLocalContainer">
									{category.items.map((skill, skillIndex) => {
										return <div className="skillItemCard" key={skill.colourCode + "-" + index + "-" + skillIndex}>
											<a href={skill.link} target="_blank">
												<img src={skill.icon} style={{backgroundColor: skill.colourCode}} />
												<h4>{skill.name}</h4>
											</a>
											
										</div>
									})}
								</div>
								
							</TabPanel>
						})}
						</div>
						
					</Tabs>
				</div>



				{/* <div id="skillStories">
					<h2>Examples of some of the skills listed above, put into action.</h2>
					<Tabs>
						<TabList id="skillStoryHeaderTabs">
							<Tab>GameDev Skills</Tab>
							<Tab>Automation Skills</Tab>
							<Tab>WebDev Skills</Tab>

						</TabList>


						<TabPanel>
							<h3>GameDev Skills in Action</h3>
						</TabPanel>
						<TabPanel>
							<h3>Automation Skills in Action</h3>
						</TabPanel>
						<TabPanel>
							<h3>WebDev Skills in Action</h3>
						</TabPanel>
					</Tabs>
				

				</div> */}


			</div>
		</div>
		);
}