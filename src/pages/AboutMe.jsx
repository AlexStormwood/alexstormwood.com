import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../styles/AboutMe.css";
import ImageZoom from "react-image-zooom";

export function AboutMe() {

	return (
		<div id="aboutme-page">
			<Helmet>
				<meta name="twitter:title" content="About Alex Stormwood" />
				<meta property="og:type" content="profile" />
				<meta property="og:title" content="About Alex Stormwood" />
				<meta property="og:url" content="https://alexstormwood.com/aboutme" />
				<meta property="og:description" content="Learn about the things that Alex is interested in." />
				<meta property="profile:first_name" content="Alex" />
				<meta property="profile:last_name" content="Stormwood" />
				<meta property="profile:username" content="alexstormwood" />
				<meta property="og:image" content="/opengraph/website-ogimage-default.png" />
				<meta name="twitter:image" content="/opengraph/website-ogimage-default.png" />
				<meta name="twitter:image:alt" content="Banner image depicting Alex. He writes about gamedev, webdev, and more." />
			</Helmet>

			<div id="aboutPageContent">
				<header id="aboutPageHeading">
					<h1>About Me</h1>

				</header>

				<div id="aboutPageMainContent">
					<div id="aboutIntro">
						<div id="aboutIntroHeaderImg">
							<img src="/aboutme/selfie.jpg" alt="A photo of Alex himself." />
						</div>
						<div>
							<p>
								I&apos;m Alex!
							</p>
							<p>
								So, this website is basically a persistent blog. I don&apos;t expect it to update too frequently, but you can find some of my thoughts and other experiences here.
							</p>
							<p>
								I have a bunch of skills and experience in a variety of areas, but find myself especially comfortable with computer programming - making software.
							</p>
							<p>
								This might sound a bit like a wide area too, but here&apos;s the thing: I&apos; been going through various types of programming, building various types of projects, creating various types of software. Programming is my jam. You can see more of what I like to do over in <Link to={"/articles/projects"}>the Projects page.</Link>
							</p>
						</div>
					</div>


					<div id="aboutWorkRelated">
						<h2>Brief History</h2>

						<div className="contentWithSideImage">
							<div className="content">
								<p>
									When I was a little kid, I wanted to be a firetruck. Not a firefighter - a truck.
								</p>
								<p>
									Then, dad came home from some overseas work trip and gave me a GameBoy Colour (Pokémon Yellow Version Edition) with Pokémon Yellow.
								</p>
							</div>
							<ImageZoom className="sideImage zoomableBodyImage" src="/aboutme/gbc.jpg" alt="My old Pokemon edition GameBoy Colour." zoom={250} />

						</div>





						<div className="contentWithSideImage">
							<div>
								<p>
									Since then, I&apos;ve wanted to create videogames. I wasn&apos;t exactly sure how exactly, or where to start - so in highschool and my early university days, I was trying out a variety of different fields or career paths. Turns out, videogames are the combination of so many other skilled professions - there is a huge variety of ways to enter the gamedev world, since there is a huge variety of skills involved in creating videogames!
								</p>
							</div>

						</div>

						<div className="contentWithSideImage">
							<ImageZoom className="sideImage zoomableBodyImage" src="/aboutme/trombone.png" alt="Me in high school, playing a trombone." zoom={250} />
							<div className="content">
								<p>
									I began with music in highschool - playing a variety of instruments and learning music composition. It was cool, but it didn&apos;t feel like &quot;the&quot; way for me.
								</p>

								<p>
									Later in highschool, I tried graphic design. I even got some freelance graphic design work after graduating highschool - it was a doable profession! I wanted to take that even further.
								</p>
							</div>

						</div>

						<div className="contentWithSideImage">
							<div className="">
								<p>
									In my first university - Queensland University of Technology (QUT) - I learned animation. This ventured more into 3D than 2D, and was really cool - I could see direct professional usage of the things I was learning from that degree. But I kept hitting walls with my own expectations: I wanted the things I was making to be interactive.
								</p>

								<p>
									The programming classes I had taken in highschool and at QUT were not great - they were actually so painful and tedious that they were part of the reason I clung to the arts for as long as I did. But in 2015, I moved to Sydney, and transferred from QUT to the Academy of Interactive Technology (AIT). The programming teachers there were much better than anything I had had before, and I could make things interactive! I could make games!
								</p>


							</div>

							<div>

							</div>
						</div>


						<div className="contentWithSideImage">
							<div className="content">


								<p>
									During my studies at AIT, I started to find a knack for teaching as well.
								</p>
								<p>
									I had joined their marketing & events team while being a student, running workshops during school holidays, carrying out corporate training courses at local games studios, and helping with games & film industry events (though admittedly, I was basically a doorman for the first ~6 months of that work).
								</p>
								<p>
									I couldn&apos;t legally teach the university courses, as you need a qualification related to <em>and</em> higher than whatever you&apos;re teaching - and I didn&apos;t have that yet. So, after I graduated from AIT, I went and tried a few things simultaneously...
								</p>
							</div>
							<ImageZoom className="sideImage zoomableBodyImage" src="/homepagegallery/CorporateTrainingJuly2018.png" alt="An example of me delivering corporate training courses, from 2018." zoom={250} />

						</div>

						<p>
							I joined Red Cartel briefly, as an intern. It was perfect timing: they were diving into a bunch of virtual reality projects, meaning that I was learning things on the job that were new and in-demand in the wider gamedev industry. But the idea of working in a production house or contract agency wasn&apos;t for me - at least, not when I was a fresh grad with all the skills needed to make my own games <i>myself!</i>
						</p>

						<p>
							While at Red Cartel, I was also doing more and more school workshops with AIT (and their newly-acquired coding bootcamp: Coder Factory). That was continuing to be great.
						</p>

						<div className="contentWithSideImage">
							<ImageZoom className="sideImage zoomableBodyImage" src="/aboutme/AIEIncubator001.jpg" alt="My workspace at the AIE Incubator in 2017." zoom={250} />
							<div className="content">

								<p>
									After leaving Red Cartel, I began some post-graduate studies at the Academy of Interactive Entertainment (AIE). Another 3-letter technology school - this time, with a business incubator! This was great - a bunch of breezy business education, and great mentorship to build my own game and business.
								</p>
								<p>
									So, as BigfootDS, I was developing a virtual reality game named Planet Protector VR, and using that to get a leg up in the incubator and start putting things out there into the videogame industry. I released Planet Protector VR at the end of that one-year course, while other teams in the incubator (yes, teams vs lil solo me) were still bouncing around ideas.
								</p>

							</div>

						</div>

						<div className="contentWithSideImage">
							<div className="content">


							<p>
								Being in New South Wales, games funding wasn&apos;t great at that time, and the AIE Incubator was no exception. AIT was offering me more and more work, becoming a permanent employee - and the incubator was barely offering enough funding for me to take one day per week away from AIT, with the expectation that I&apos;d work on a new game full-time and find additional funding during that process. 
							</p>
							<p>
								I had to turn AIE down, and focus on work with AIT.
							</p>
							<p>
								Since I had achieved a post-graduate qualification through AIE, subjects and classes in bachelor&apos;s degrees and diplomas were something I could now teach!
							</p>
							</div>
							<ImageZoom className="sideImage zoomableBodyImage" src="/aboutme/SupanovaSydney2018.jpg" alt="A compilation of attendees trying out Planet Protector VR at Supanova Sydney in 2018." zoom={250} />

						</div>

						


						<div className="contentWithSideImage">
							<ImageZoom className="sideImage zoomableBodyImage" src="/homepagegallery/DeloitteDisruptorsInTechXRFeb2018.png" alt="A presentation delivered at a Deloitte Disruptors In Tech meetup in February 2018." zoom={250} />
							<div className="content">

							<p>
							Coder Factory rebranded into Coder Factory Academy, and then later into Coder Academy. They continued to have increasing demand, and I was continuing to ask for more and more work - I wanted to lock in that full-time role so I could slowly chip away on my own projects outside of work. And that scenario was finally sliding into place.
						</p>
						<p>
							That process took several years, and I was able to learn numerous new technologies and languages through that process. It also helped expand my own capabilities in ways that most others wouldn&apos;t think of: like how the combination of gamedev and webdev creates live-ops, an increasingly-in-demand part of all software to manage features like subscriptions and ecommerce.
						</p>
						<p>
							I&apos;ve been able to do speaking engagements at various meetups, conferences, schools, and businesses about different types of software projects. My unique combination of development skill across different types of games, as well as different hardware (remember, VR and AR is a niche thing!) helped to exchange knowledge and ideas with other developers around Australia.
						</p>

							</div>

						</div>
						
						<p>
							Throughout all of that, I gained a big appreciation for tooling and systems. Processes and documentation. Data and planning. So many aspects of software projects that most people just don&apos;t think of - especially if they just go &quot;making games is making Super Mario do a jump!&quot; or &quot;making websites is just making navbars and blogs!&quot; - those things are just a portion of what actually can be built for those projects, and through my journey to get to where I am now, I&apos;ve got a nice wider view of what those projects need and how to build them.
						</p>
					</div>

					

				</div>
			</div>


		</div>
	);
}