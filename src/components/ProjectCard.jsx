import PropTypes from "prop-types";
import "../styles/ProjectCard.css";

let dateFormatOptions = {
	month: "long",
	day: "numeric",
	year: "numeric"
}

function ProjectCard({projectObj}){

	let projectUrls = projectObj.projectUrls.map((urlEntry) => {
		return <div key={urlEntry.url} className="projectButton">
			<a target="_blank" href={urlEntry.url} >View {urlEntry.websiteName}</a>
		</div>
	})

	return (<div className="projectCard" id={projectObj.id}>
		{projectObj.imageUrl ? 
			<img src={projectObj.imageUrl} alt="Screenshot of the project that this card is about." />
			:
			<img src={"/NoImageAvailable.png"} alt="No image found for this project." />

		}
		<h1>
			{projectObj.title}
		</h1>
		<p>{projectObj.description}</p>
		<p className="builtFor">{projectObj.builtFor}</p>
		<div className="projectCardDatesContainer">
			<h6>
				Created {new Date(projectObj.createdAt).toLocaleDateString("en-AU",dateFormatOptions)}
			</h6>
			<h6>
				Last Updated {new Date(projectObj.lastUpdated).toLocaleDateString("en-AU",dateFormatOptions)}
			</h6>
		</div>
		<div className="projectButtonsContainer">
			{projectUrls}
		</div>
	</div>)
}

ProjectCard.propTypes = {
	projectObj: PropTypes.object.isRequired
}

export default ProjectCard;
