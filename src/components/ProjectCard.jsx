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
		<h3>
			{projectObj.title}
		</h3>
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


export default ProjectCard;
