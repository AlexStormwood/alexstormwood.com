import "../styles/ProjectCard.css";

const dateFormatOptions = {
	month: "long",
	day: "numeric",
	year: "numeric",
};

function ProjectCard({ projectObj, compact = false }) {
	const imageUrl = projectObj.imageUrl ?? "/NoImageAvailable.png";
	const imageAlt = projectObj.imageUrl
		? `Screenshot of ${projectObj.title}.`
		: "No image available for this project.";

	return (
		<article className={`project-card${compact ? " project-card--compact" : ""}`} id={projectObj.id}>
			<button type="button" className="project-card__image" data-lightbox-trigger data-lightbox-src={imageUrl} data-lightbox-caption={imageAlt} aria-label={`Open full-size image: ${imageAlt}`}>
				<img src={imageUrl} alt={imageAlt} loading="lazy" decoding="async" />
			</button>
			<div className="project-card__body">
				<p className="project-card__context">{projectObj.builtFor}</p>
				<h3>{projectObj.title}</h3>
				<p className="project-card__description">{projectObj.description}</p>
				{!compact && (
					<p className="project-card__updated">
						Project last worked on <time dateTime={new Date(projectObj.lastUpdated).toISOString()}>{new Date(projectObj.lastUpdated).toLocaleDateString("en-AU", dateFormatOptions)}</time>
					</p>
				)}
				{projectObj.github?.pushedAt && (
					<p className="project-card__github">Last public GitHub push <time dateTime={new Date(projectObj.github.pushedAt).toISOString()}>{new Date(projectObj.github.pushedAt).toLocaleDateString("en-AU", dateFormatOptions)}</time>{projectObj.github.archived ? ' · Archived repository' : ''}</p>
				)}
				{projectObj.projectUrls?.length > 0 && (
					<div className="project-card__actions">
						{projectObj.projectUrls.map((urlEntry) => (
							<a key={urlEntry.url} target="_blank" rel="noreferrer" href={urlEntry.url}>
								View {urlEntry.websiteName} <span aria-hidden="true">↗</span>
							</a>
						))}
					</div>
				)}
			</div>
		</article>
	);
}

export default ProjectCard;
