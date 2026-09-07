import { useEffect, useMemo, useState } from 'react';
import ProjectCard from './ProjectCard';
import '../styles/ProjectDirectory.css';

const PAGE_SIZE = 12;
const collator = new Intl.Collator('en-AU', { sensitivity: 'base' });

function initialFilters() {
	if (typeof window === 'undefined') {
		return { query: '', brand: '', technologies: [], types: [], status: '', evidence: '', sort: 'date-desc', page: 1 };
	}

	const params = new URLSearchParams(window.location.search);
	return {
		query: params.get('q') ?? '',
		brand: params.get('brand') ?? '',
		technologies: (params.get('technologies') ?? '').split(',').filter(Boolean),
		types: (params.get('types') ?? '').split(',').filter(Boolean),
		status: params.get('status') ?? '',
		evidence: params.get('evidence') ?? '',
		sort: params.get('sort') ?? 'date-desc',
		page: Math.max(1, Number(params.get('page') ?? '1')),
	};
}

function projectDate(project) {
	return project.github?.pushedAt ?? project.lastUpdated ?? project.createdAt ?? 0;
}

function hasEvidence(project, evidence) {
	if (!evidence) return true;
	const urls = (project.projectUrls ?? []).map(({ url }) => url.toLocaleLowerCase('en-AU'));
	if (evidence === 'github') return Boolean(project.githubRepository) || urls.some((url) => url.includes('github.com'));
	if (evidence === 'npm') return urls.some((url) => url.includes('npmjs.com'));
	if (evidence === 'steam') return urls.some((url) => url.includes('store.steampowered.com'));
	if (evidence === 'website') return urls.some((url) => !url.includes('github.com') && !url.includes('npmjs.com') && !url.includes('store.steampowered.com'));
	return false;
}

export default function ProjectDirectory({ projects }) {
	const [filters, setFilters] = useState(initialFilters);
	const [hasHydrated, setHasHydrated] = useState(false);
	const brands = useMemo(() => [...new Set(projects.map((project) => project.brand).filter(Boolean))].sort(collator.compare), [projects]);
	const technologies = useMemo(() => [...new Set(projects.flatMap((project) => project.technologies ?? []))].sort(collator.compare), [projects]);
	const projectTypes = useMemo(() => [...new Set(projects.map((project) => project.projectType).filter(Boolean))].sort(collator.compare), [projects]);
	const statuses = useMemo(() => [...new Set(projects.map((project) => project.status).filter(Boolean))].sort(collator.compare), [projects]);

	const matchingProjects = useMemo(() => {
		const query = filters.query.trim().toLocaleLowerCase('en-AU');
		const filtered = projects.filter((project) => {
			const searchable = [
				project.title,
				project.description,
				project.builtFor,
				project.brand,
				project.role,
				project.projectType,
				project.status,
				...(project.technologies ?? []),
				...(project.projectUrls ?? []).flatMap(({ websiteName, url }) => [websiteName, url]),
			].filter(Boolean).join(' ').toLocaleLowerCase('en-AU');
			const matchesText = !query || searchable.includes(query);
			const matchesBrand = !filters.brand || project.brand === filters.brand;
			const matchesTechnology = !filters.technologies.length || (project.technologies ?? []).some((technology) => filters.technologies.includes(technology));
			const matchesType = !filters.types.length || filters.types.includes(project.projectType);
			const matchesStatus = !filters.status || project.status === filters.status;
			return matchesText && matchesBrand && matchesTechnology && matchesType && matchesStatus && hasEvidence(project, filters.evidence);
		});

		return filtered.toSorted((left, right) => {
			switch (filters.sort) {
				case 'date-asc': return projectDate(left) - projectDate(right);
				case 'title-asc': return collator.compare(left.title, right.title);
				case 'title-desc': return collator.compare(right.title, left.title);
				default: return projectDate(right) - projectDate(left);
			}
		});
	}, [filters, projects]);

	const totalPages = Math.max(1, Math.ceil(matchingProjects.length / PAGE_SIZE));
	const page = Math.min(filters.page, totalPages);
	const pageProjects = matchingProjects.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
	const hasActiveFilters = filters.query || filters.brand || filters.technologies.length || filters.types.length || filters.status || filters.evidence || filters.sort !== 'date-desc';

	useEffect(() => {
		const params = new URLSearchParams();
		if (filters.query) params.set('q', filters.query);
		if (filters.brand) params.set('brand', filters.brand);
		if (filters.technologies.length) params.set('technologies', filters.technologies.join(','));
		if (filters.types.length) params.set('types', filters.types.join(','));
		if (filters.status) params.set('status', filters.status);
		if (filters.evidence) params.set('evidence', filters.evidence);
		if (filters.sort !== 'date-desc') params.set('sort', filters.sort);
		if (page > 1) params.set('page', String(page));
		const query = params.toString();
		window.history.replaceState(null, '', `${window.location.pathname}${query ? `?${query}` : ''}`);
	}, [filters, page]);

	useEffect(() => setHasHydrated(true), []);

	function updateFilters(change) {
		setFilters((current) => ({ ...current, ...change, page: change.page ?? 1 }));
	}

	function toggleValue(field, value) {
		const selected = filters[field];
		updateFilters({ [field]: selected.includes(value) ? selected.filter((entry) => entry !== value) : [...selected, value] });
	}

	return (
		<div className="project-directory" data-hydrated={hasHydrated ? 'true' : 'false'}>
			<form className="project-directory__controls" onSubmit={(event) => event.preventDefault()}>
				<label className="project-directory__search">
					<span>Search projects</span>
					<input value={filters.query} onChange={(event) => updateFilters({ query: event.target.value })} type="search" placeholder="Project, technology, or keyword" />
				</label>
				<label>
					<span>Sort by</span>
					<select value={filters.sort} onChange={(event) => updateFilters({ sort: event.target.value })}>
						<option value="date-desc">Recently updated</option>
						<option value="date-asc">Oldest first</option>
						<option value="title-asc">Title, A to Z</option>
						<option value="title-desc">Title, Z to A</option>
					</select>
				</label>
				<label>
					<span>Brand</span>
					<select value={filters.brand} onChange={(event) => updateFilters({ brand: event.target.value })}>
						<option value="">All brands</option>
						{brands.map((brand) => <option key={brand} value={brand}>{brand}</option>)}
					</select>
				</label>
				<label>
					<span>Status</span>
					<select value={filters.status} onChange={(event) => updateFilters({ status: event.target.value })}>
						<option value="">All statuses</option>
						{statuses.map((status) => <option key={status} value={status}>{status}</option>)}
					</select>
				</label>
				<label>
					<span>Evidence</span>
					<select value={filters.evidence} onChange={(event) => updateFilters({ evidence: event.target.value })}>
						<option value="">Any public evidence</option>
						<option value="website">Website or documentation</option>
						<option value="github">GitHub repository</option>
						<option value="npm">NPM package</option>
						<option value="steam">Steam page</option>
					</select>
				</label>
				<div className="project-directory__chip-filter" aria-labelledby="project-technology-filter-label">
					<span id="project-technology-filter-label">Technologies</span>
					<div>{technologies.map((technology) => <button type="button" key={technology} className={filters.technologies.includes(technology) ? 'is-selected' : ''} onClick={() => toggleValue('technologies', technology)} aria-pressed={filters.technologies.includes(technology)}>{technology}</button>)}</div>
				</div>
				<div className="project-directory__chip-filter" aria-labelledby="project-type-filter-label">
					<span id="project-type-filter-label">Project types</span>
					<div>{projectTypes.map((type) => <button type="button" key={type} className={filters.types.includes(type) ? 'is-selected' : ''} onClick={() => toggleValue('types', type)} aria-pressed={filters.types.includes(type)}>{type}</button>)}</div>
				</div>
				{hasActiveFilters && <button className="project-directory__clear" type="button" onClick={() => setFilters({ query: '', brand: '', technologies: [], types: [], status: '', evidence: '', sort: 'date-desc', page: 1 })}>Clear filters</button>}
			</form>

			<p className="project-directory__count" aria-live="polite">{matchingProjects.length} {matchingProjects.length === 1 ? 'project' : 'projects'} found{(filters.technologies.length || filters.types.length) ? ', matching any selected tag' : ''}.</p>

			{pageProjects.length ? <div className="projects-page__grid">{pageProjects.map((project) => <ProjectCard key={project.id} projectObj={project} kind={project.projectType} />)}</div> : <p className="project-directory__empty">Nothing matches those filters yet. Try clearing a filter or searching for something else.</p>}

			{totalPages > 1 && <nav className="project-directory__pagination" aria-label="Project pages">
				<button type="button" disabled={page === 1} onClick={() => updateFilters({ page: page - 1 })}>Previous</button>
				<span>Page {page} of {totalPages}</span>
				<button type="button" disabled={page === totalPages} onClick={() => updateFilters({ page: page + 1 })}>Next</button>
			</nav>}
		</div>
	);
}
