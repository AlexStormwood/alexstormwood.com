export interface WorkHistoryRole {
	title: string;
	description: string;
}

export interface WorkHistoryEntry {
	dateLabel: string;
	title: string;
	description: string;
	url?: string;
	image?: { src: string; alt: string };
	roles?: WorkHistoryRole[];
}

export const workHistoryEntries: WorkHistoryEntry[] = [
	{
		dateLabel: '2016 to present',
		title: 'Variety of roles at NextEd',
		url: 'https://nexted.com.au/',
		description: 'Previously known as iCollege and Redhill Education. Relevant sub-businesses include Coder Academy (previously Coder Factory and Coder Factory Academy) and AIT (also known as Academy of Interactive Technology, previously Academy of Information Technology).',
		image: { src: '/workhistory/AIT-3DModellingAndUnityWorkshop-001.jpg', alt: 'Alex teaching a 3D modelling and Unity workshop at AIT.' },
		roles: [
			{ title: 'Subject Coordinator, May 2025 to present', description: 'Permanent role working exclusively within Coder Academy, delivering and supporting hundreds of tertiary education students per year as they make a career-change into web development with an accredited higher education course. Now also helping staff across multiple departments keep these accredited courses running.' },
			{ title: 'Academic Teacher, February 2022 to May 2025', description: 'Permanent role working exclusively within Coder Academy, delivering and supporting hundreds of tertiary education students per year as they make a career-change into web development with an accredited higher education course.' },
			{ title: 'Trainer and Program Coordinator, September 2017 to February 2022', description: 'Permanent role shared between Coder Academy and AIT. Assisting and running all sorts of events, including unaccredited short courses and bespoke training, and wrangling new staff into the variety of programs run across multiple schools, libraries, and corporate environments.' },
			{ title: 'Short Course and Workshop Trainer, December 2016 to September 2017', description: 'Contract work shared between Coder Academy and AIT. Assisting and running all sorts of events, including unaccredited short courses and bespoke training.' },
			{ title: 'Event Assistant, January 2016 to December 2016', description: 'Casual work in the AIT brand, carrying out anything and everything needed to help industry events, marketing events, and general campus life run smoothly.' },
		],
	},
	{
		dateLabel: '2015 to present',
		title: 'Variety of roles at BigfootDS',
		description: 'My self-run business, used for freelance and contract work as well as my own video game and software development projects.',
		image: { src: '/aboutme/SupanovaSydney2018.jpg', alt: 'Alex at Supanova Sydney in 2018.' },
		roles: [
			{ title: 'Open-source software development, 2022 to present', description: 'Building things that help others. Contributing to fun projects through Hacktoberfest, as well as spearheading open-source projects that aid game development and the self-hosted movement.' },
			{ title: 'Game development, 2016 to present', description: 'My studies at AIT got me hooked, and I was able to create and publish my own games on platforms such as Google Play and the Nintendo Wii U.' },
			{ title: 'Education, 2017 to 2022', description: 'Private tutoring and bespoke training beyond my AIT and Coder Academy work, including tutoring at private schools throughout Eastern Sydney. I now prefer to keep education work managed through my day job at NextEd.' },
			{ title: 'Graphic design, 2015', description: 'Before I wrapped my head around programming, I did more visual work: graphic design, photo editing, animation, and freelance contract work. These days, I would much rather be programming.' },
		],
	},
	{
		dateLabel: 'October to December 2016',
		title: 'Junior Developer, Red Cartel',
		url: 'https://www.redcartel.com/',
		description: 'My first foray into software development, conveniently learning a heap about virtual reality development just as XR became a trending market. This internship lasted a couple of months.',
		image: { src: '/workhistory/Simosity_RedCartel.jpg', alt: 'A virtual reality project developed during Alex’s Red Cartel internship.' },
	},
	{
		dateLabel: '2013 to 2015',
		title: 'Retail Assistant, Bargain Choice',
		description: 'General shopkeeping duties, including point of sale, stock management, and customer service.',
		image: { src: '/workhistory/BargainChoice.jpg', alt: 'Bargain Choice storefront.' },
	},
	{
		dateLabel: '2011 to 2012',
		title: 'Junior Team Member, Laserzone Sunshine Coast',
		url: 'https://www.laserzonesunshinecoast.com.au/',
		description: 'Organising rounds of laser tag, wrangling people of all ages, and working in a team through fast-paced, sometimes midnight shifts. Epic as a high-schooler.',
		image: { src: '/workhistory/LaserzoneFBCover.jpg', alt: 'Laserzone Sunshine Coast venue.' },
	},
	{
		dateLabel: '2010',
		title: 'Recording Studio Technician, Infinite Beats',
		description: 'Assisting with general music-studio duties and occasional audio editing and mastering at Infinite Beats in Caloundra, Queensland. A sweet high-school job that began as work experience and became roughly a year of casual work.',
	},
];
