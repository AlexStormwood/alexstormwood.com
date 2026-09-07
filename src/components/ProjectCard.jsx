import "../styles/ProjectCard.css";

const dateFormatOptions = {
	month: "long",
	day: "numeric",
	year: "numeric",
};

function ProjectCard({ projectObj, compact = false, featured = false, kind }) {
	const imageUrl = projectObj.imageUrl ?? "/NoImageAvailable.png";
	const imageAlt = projectObj.imageAlt ?? (projectObj.imageUrl
		? `Screenshot of ${projectObj.title}.`
		: "No image available for this project.");
	const projectLinks = projectObj.projectUrls ?? [];
	const [primaryLink, ...secondaryLinks] = projectLinks;
	const repositoryUpdatedAt = projectObj.github?.pushedAt;
	const updatedAt = repositoryUpdatedAt ?? projectObj.lastUpdated;
	const updatedLabel = repositoryUpdatedAt ? "Public repository updated" : "Last worked on";
	const projectType = projectObj.projectType ?? kind;
	const technologies = projectObj.technologies ?? [];

	return (
		<article className={`project-card${compact ? " project-card--compact" : ""}${featured ? " project-card--featured" : ""}`} id={projectObj.id}>
			<button type="button" className="project-card__image" data-lightbox-trigger data-lightbox-src={imageUrl} data-lightbox-caption={imageAlt} aria-label={`Open full-size image: ${imageAlt}`}>
				<img src={imageUrl} alt={imageAlt} loading="lazy" decoding="async" />
			</button>
			<div className="project-card__body">
				<div className="project-card__metadata">
					{projectType && <p className="project-card__kind">{projectType}</p>}
					{projectObj.status && <p className="project-card__status">{projectObj.status}</p>}
				</div>
				<h3>{projectObj.title}</h3>
				{projectObj.brand && (
					<p className="project-card__attribution">
						<strong>{projectObj.brand}</strong>{projectObj.role ? <> <span aria-hidden="true">·</span> {projectObj.role}</> : null}
					</p>
				)}
				<p className="project-card__description">{projectObj.description}</p>
				{technologies.length > 0 && (
					<ul className="project-card__technologies" aria-label="Technologies used">
						{technologies.slice(0, 5).map((technology) => <li key={technology}>{technology}</li>)}
					</ul>
				)}
				{projectObj.builtFor && <p className="project-card__context">{projectObj.builtFor}</p>}
				{!compact && updatedAt && (
					<p className="project-card__updated">
						{updatedLabel} <time dateTime={new Date(updatedAt).toISOString()}>{new Date(updatedAt).toLocaleDateString("en-AU", dateFormatOptions)}</time>{projectObj.github?.archived ? ' · Archived repository' : ''}
					</p>
				)}
				{(projectObj.caseStudyPath || primaryLink) && (
					<div className="project-card__actions">
						{projectObj.caseStudyPath && <a className="project-card__case-study" href={projectObj.caseStudyPath}>Read case study <span aria-hidden="true">→</span></a>}
						{primaryLink && (
						<a className="project-card__primary-action" target="_blank" rel="noreferrer" href={primaryLink.url}>
							View {primaryLink.websiteName} <span aria-hidden="true">↗</span>
						</a>
						)}
						{secondaryLinks.length > 0 && (
							<details className="project-card__more-links">
								<summary>More links ({secondaryLinks.length})</summary>
								<div>
									{secondaryLinks.map((urlEntry) => (
										<a key={urlEntry.url} target="_blank" rel="noreferrer" href={urlEntry.url}>
											View {urlEntry.websiteName} <span aria-hidden="true">↗</span>
										</a>
									))}
								</div>
							</details>
						)}
					</div>
				)}
			</div>
		</article>
	);
}

export default ProjectCard;
