import ProjectCard from "../../components/ProjectCard";
import SubheadingAnchor from "../../components/SubheadingAnchor";
import projectMeta from "../../projectMeta";
import "../../styles/ArticleContent.css";
import "../../styles/Projects.css";

function Projects() {
	return (
		<div className="articleContent" id="projectsPage">
			<section>
				<p>
					Lists of projects, whether they're videogames or websites or general tools or something completely different, that I&apos;ve worked on.
				</p>

			</section>

			<section>
				<SubheadingAnchor headingLevel="h3">
					In Progress
				</SubheadingAnchor>
				<p>Projects that are still on-going, may or may not be released to the public, and are privately-developed - probably through my BigfootDS business.</p>
				<ul>
					<li>Patron Simulator (real-time strategy game)</li>
					<li>The Bestest Beehive (open-world cosy crafting game)</li>
				</ul>
			</section>

			<section>
				<SubheadingAnchor headingLevel="h3">
					Open Source
				</SubheadingAnchor>
				<p>Projects that are still on-going, released to the public, and open to contributions. Yay for open-source software!</p>
				<div className="projectCardContainer">
				<ProjectCard projectObj={projectMeta["sourcepool"]} />
				<ProjectCard projectObj={projectMeta["supercamo"]} />
				<ProjectCard projectObj={projectMeta["unityautomatedsemver"]} />
				<ProjectCard projectObj={projectMeta["unityupmsemver"]} />
				<ProjectCard projectObj={projectMeta["npmcompliancehelper"]} />
				<ProjectCard projectObj={projectMeta["commitswithintime"]} />
				</div>

			</section>

			<section>
				<SubheadingAnchor headingLevel="h3">
					Completed and/or Archived
				</SubheadingAnchor>
				<p>Projects that are are done & dusted.</p>
				<div className="projectCardContainer">
				<ProjectCard projectObj={projectMeta["ppvr"]} />
				<ProjectCard projectObj={projectMeta["ggj2020"]} />
				<ProjectCard projectObj={projectMeta["ggj2019"]} />
				<ProjectCard projectObj={projectMeta["aitvrtour"]} />
				<ProjectCard projectObj={projectMeta["scotsyukivr"]} />
				</div>
			</section>








		</div>
	);
}


export default Projects;