import { Helmet } from "react-helmet";
import "../styles/WorkHistory.css";
import { Chrono } from "react-chrono";



export function WorkHistory() {

	const workHistoryEntries = [
		{
			title: "2016-Present",
			cardTitle: "Variety of Roles @ NextEd - 2016-Present",
			cardSubtitle: "Previously known as iCollege and Redhill Education.Relevant sub-businesses Coder Academy (previously known as Coder Factory and Coder Factory Academy) and AIT (also known as Academy of Interactive Technology, previously known as Academy of Information Technology).",
			url: "https://nexted.com.au/",
			cardDetailedText: "A variety of roles over time!",
			media: {
				type: "IMAGE",
				source: {
					url: "/workhistory/AIT-3DModellingAndUnityWorkshop-001.jpg"
				}
			},
			items: [
				{
					cardTitle: "Academic Teacher - February 2022 to Present",
					cardDetailedText: "Permanent role working exclusively within Coder Academy, delivering and supporting hundreds of tertiary education students per year as they make a career-change into web development with an accredited higher education (university) course.",
				},
				{
					cardTitle: "Trainer & Program Coordinator - September 2017 to February 2022",
					cardDetailedText: "Permanent role shared between Coder Academy and AIT. Assisting and running in all sorts of events, including unaccredited  short courses and bespoke training, and wrangling new staff into the variety of programs run across multiple schools, libraries, and corporate environments.",
				},
				{
					cardTitle: "Short Course & Workshop Trainer - December 2016 to September 2017",
					cardDetailedText: "Contract work shared between Coder Academy and AIT. Assisting and running in all sorts of events, including unaccredited  short courses and bespoke training.",
				},
				{
					cardTitle: "Event Assistant - January 2016 to December 2016",
					cardDetailedText: "Casual work in the AIT brand, carrying out anything and everything needed to help industry events, marketing events, and general campus life run smoothly.",
				}
			]
		},
		{
			title: "2015-Present",
			cardTitle: "Variety of Roles @ BigfootDS - Early 2015 to Present",
			cardDetailedText: "This is me! My self-run business, to aid in carrying out freelance/contract work as well as my own videogame development and software development projects.",
			media: {
				type: "IMAGE",
				source: {
					url: "/aboutme/SupanovaSydney2018.jpg"
				}
			},
			items: [
				{
					cardTitle: "Open Source Software Development - 2022-Present",
					cardDetailedText: "Building things that help others! Contributing to some fun projects through Hacktoberfest, as well as spearheading my own open-source projects that aid with various aspects of game development and the self-hosted movement.",
				},
				{
					cardTitle: "Game Development - 2016-Present",
					cardDetailedText: "My studies at AIT had got me hooked, and I was able to both create and publish my own games on platforms such as Google Play and the Nintendo Wii U. I began developing my own projects here.",
				},
				{
					cardTitle: "Education - 2017-2022",
					cardDetailedText: "Private tutoring and bespoke training beyond whatever I was doing at AIT/Coder Academy, such as additional tutoring at private schools throughout Eastern Sydney, Australia. Not really doing this any more, would prefer to keep my education work managed by my day job at NextEd!",
				},
				{
					cardTitle: "Graphic Design - 2015",
					cardDetailedText: "Before I really wrapped my head around programming, I was doing more visual works. Graphic design, photo editing, animation - all as a freelancer/contractor. While I can still do the occasional fix-up or post-processing here and there, I would much prefer to be programming these days!",
				}
			]
		},
		{
			title: "2016",
			cardTitle: "Junior Developer (Internship) @ Red Cartel - October 2016 to December 2016",
			url: "https://www.redcartel.com/",
			cardDetailedText: "My first foray into software development, and conveniently learning a heap about virtual reality development just as XR became a trending market. This was an internship that lasted for a couple of months.",
			media: {
				type: "IMAGE",
				source: {
					url: "/workhistory/Simosity_RedCartel.jpg"
				}
			}
		},
		{
			title: "2013-2015",
			cardTitle: "Retail Assistant @ Bargain Choice",
			cardDetailedText: "General shopkeeping duties, including point of sale, stock management, and custom service.",
			media: {
				type: "IMAGE",
				source: {
					url: "/workhistory/BargainChoice.jpg"
				}
			}
		},
		{
			title: "2011/2012",
			cardTitle: "Junior Team Member @ Laserzone Sunshine Coast",
			url: "https://www.laserzonesunshinecoast.com.au/",
			cardDetailedText: "Organizing rounds of laser tag, wrangling people of all ages, and working in a team within a fast-paced environment while pulling crazy hours. Midnight lasertag shifts were epic as a highschooler!",
			media: {
				type: "IMAGE",
				source: {
					url: "/workhistory/LaserzoneFBCover.jpg"
				}
			}
		},
		{
			title: "2010",
			cardTitle: "Recording Studio Technician @ Infinite Beats",
			url: "",
			cardDetailedText: "Assisting with general music studio duties and occasional audio editing/mastering at Infinite Beats in Caloundra, Queensland. Sweet highschool job that began as work experience, turned into roughly a year of casual work.",

			
		}
	];

	return (
		<div id="employmenthistory-page">
			<Helmet>
				<meta name="twitter:title" content="Alex Stormwood's History of Work" />
				<meta property="og:type" content="profile" />
				<meta property="og:title" content="Alex Stormwood's History of Work" />
				<meta property="og:url" content="https://alexstormwood.com/workhistory" />
				<meta property="og:description" content="Learn about the things that Alex has worked on or for." />
				<meta property="profile:first_name" content="Alex" />
				<meta property="profile:last_name" content="Stormwood" />
				<meta property="profile:username" content="alexstormwood" />
				<meta property="og:image" content="/opengraph/website-ogimage-default.png" />
				<meta name="twitter:image" content="/opengraph/website-ogimage-default.png" />
				<meta name="twitter:image:alt" content="Banner image depicting Alex. He writes about gamedev, webdev, and more." />
			</Helmet>

			<h1>Employment History</h1>

			<p>At the time of this page&apos;s last update (August 2024), I currently work full-time at Coder Academy within NextEd. I also, slowly, work for myself at BigfootDS - making videogames and open-source tools.</p>

			<div id="timelineContainer">
			<Chrono 
				items={workHistoryEntries} 
				mode="VERTICAL_ALTERNATING" 
				allowDynamicUpdate={true}
				disableInteraction={false}
				enableDarkToggle={true}
				enableLayoutSwitch={false}
				disableToolbar={true}
				classNames={{cardMedia:"card-photo-content"}}
				mediaSettings={{fit:'contain'}}
				responsiveBreakpoint={600}
				mediaHeight={350}
				useReadMore={false}
			/>
			</div>
			
		</div>
	);
}