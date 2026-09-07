import { useEffect, useMemo, useState } from 'react';
import '../styles/ArticleDirectory.css';

const PAGE_SIZE = 9;
const collator = new Intl.Collator('en-AU', { sensitivity: 'base' });

function initialFilters() {
	if (typeof window === 'undefined') return { query: '', tags: [], sort: 'date-desc', page: 1 };
	const params = new URLSearchParams(window.location.search);
	return {
		query: params.get('q') ?? '',
		tags: (params.get('tags') ?? '').split(',').filter(Boolean),
		sort: params.get('sort') ?? 'date-desc',
		page: Math.max(1, Number(params.get('page') ?? '1')),
	};
}

function formatDate(date) {
	return new Intl.DateTimeFormat('en-AU', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(date));
}

export default function ArticleDirectory({ posts }) {
	const [filters, setFilters] = useState(initialFilters);
	const allTags = useMemo(() => [...new Set(posts.flatMap((post) => post.tags))].sort(collator.compare), [posts]);

	const matchingPosts = useMemo(() => {
		const query = filters.query.trim().toLocaleLowerCase('en-AU');
		const filtered = posts.filter((post) => {
			const matchesText = !query || [post.title, post.description, post.series, ...post.tags]
				.filter(Boolean)
				.join(' ')
				.toLocaleLowerCase('en-AU')
				.includes(query);
			const matchesTags = !filters.tags.length || post.tags.some((tag) => filters.tags.includes(tag));
			return matchesText && matchesTags;
		});

		return filtered.toSorted((left, right) => {
			switch (filters.sort) {
				case 'date-asc': return new Date(left.pubDate) - new Date(right.pubDate);
				case 'title-asc': return collator.compare(left.title, right.title);
				case 'title-desc': return collator.compare(right.title, left.title);
				case 'reading-asc': return left.readingMinutes - right.readingMinutes || new Date(right.pubDate) - new Date(left.pubDate);
				case 'reading-desc': return right.readingMinutes - left.readingMinutes || new Date(right.pubDate) - new Date(left.pubDate);
				default: return new Date(right.pubDate) - new Date(left.pubDate);
			}
		});
	}, [filters, posts]);

	const totalPages = Math.max(1, Math.ceil(matchingPosts.length / PAGE_SIZE));
	const page = Math.min(filters.page, totalPages);
	const pagePosts = matchingPosts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

	useEffect(() => {
		const params = new URLSearchParams();
		if (filters.query) params.set('q', filters.query);
		if (filters.tags.length) params.set('tags', filters.tags.join(','));
		if (filters.sort !== 'date-desc') params.set('sort', filters.sort);
		if (page > 1) params.set('page', String(page));
		const query = params.toString();
		window.history.replaceState(null, '', `${window.location.pathname}${query ? `?${query}` : ''}`);
	}, [filters.query, filters.sort, filters.tags, page]);

	function updateFilters(change) {
		setFilters((current) => ({ ...current, ...change, page: change.page ?? 1 }));
	}

	function toggleTag(tag) {
		updateFilters({
			tags: filters.tags.includes(tag) ? filters.tags.filter((value) => value !== tag) : [...filters.tags, tag],
		});
	}

	function openImage(post, event) {
		document.dispatchEvent(new CustomEvent('lightbox:open', {
			detail: { src: post.heroImage, alt: `${post.title} hero image`, trigger: event.currentTarget },
		}));
	}

	return (
		<div className="article-directory">
			<form className="article-directory__controls" onSubmit={(event) => event.preventDefault()}>
				<label className="article-directory__search">
					<span>Search articles</span>
					<input value={filters.query} onChange={(event) => updateFilters({ query: event.target.value })} type="search" placeholder="Title, topic, or series" />
				</label>
				<label className="article-directory__sort">
					<span>Sort by</span>
					<select value={filters.sort} onChange={(event) => updateFilters({ sort: event.target.value })}>
						<option value="date-desc">Newest first</option>
						<option value="date-asc">Oldest first</option>
						<option value="title-asc">Title, A to Z</option>
						<option value="title-desc">Title, Z to A</option>
						<option value="reading-asc">Shortest read</option>
						<option value="reading-desc">Longest read</option>
					</select>
				</label>
				<div className="article-directory__tag-filter" aria-labelledby="article-tag-filter-label">
					<span id="article-tag-filter-label">Topics</span>
					<div>
						{allTags.map((tag) => (
							<button type="button" key={tag} className={filters.tags.includes(tag) ? 'is-selected' : ''} onClick={() => toggleTag(tag)} aria-pressed={filters.tags.includes(tag)}>{tag}</button>
						))}
					</div>
				</div>
				{(filters.query || filters.tags.length || filters.sort !== 'date-desc') && <button className="article-directory__clear" type="button" onClick={() => setFilters({ query: '', tags: [], sort: 'date-desc', page: 1 })}>Clear filters</button>}
			</form>

			<p className="article-directory__count" aria-live="polite">{matchingPosts.length} {matchingPosts.length === 1 ? 'article' : 'articles'} found{filters.tags.length > 0 ? ', matching any selected topic' : ''}.</p>

			{pagePosts.length ? (
				<ol className="article-directory__list">
					{pagePosts.map((post) => (
						<li key={post.id} className="article-directory__card">
							{post.heroImage && <button type="button" className="article-directory__image" onClick={(event) => openImage(post, event)} aria-label={`Open full-size image: ${post.title} hero image`}><img src={post.heroImage} alt={`${post.title} hero image`} loading="lazy" decoding="async" /></button>}
							<div className="article-directory__body">
								<p className="article-directory__eyebrow">{post.series ?? post.tags[0] ?? 'Article'}</p>
								<h2><a href={`/articles/${post.id}/`}>{post.title}</a></h2>
								<p>{post.description}</p>
								<div className="article-directory__meta"><time dateTime={post.pubDate}>{formatDate(post.pubDate)}</time><span>{post.readingMinutes} min read</span></div>
								{post.tags.length > 0 && <ul className="article-directory__tags" aria-label="Topics">{post.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}
								<a className="article-directory__read-link" href={`/articles/${post.id}/`}>Read article <span aria-hidden="true">→</span></a>
							</div>
						</li>
					))}
				</ol>
			) : <p className="article-directory__empty">Nothing matches those filters yet. Try clearing a topic or searching for something else.</p>}

			{totalPages > 1 && (
				<nav className="article-directory__pagination" aria-label="Article pages">
					<button type="button" disabled={page === 1} onClick={() => updateFilters({ page: page - 1 })}>Previous</button>
					<span>Page {page} of {totalPages}</span>
					<button type="button" disabled={page === totalPages} onClick={() => updateFilters({ page: page + 1 })}>Next</button>
				</nav>
			)}
		</div>
	);
}
