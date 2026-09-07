import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

export interface ArticleSummary {
	id: string;
	title: string;
	description: string;
	pubDate: string;
	tags: string[];
	series?: string;
	featured: boolean;
	heroImage?: string;
	readingMinutes: number;
}

function sortNewestFirst(posts: BlogPost[]) {
	return posts.toSorted(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);
}

/** Returns posts that are safe to publish on the public site and RSS feed. */
export function isPublishedPost(post: BlogPost, now = new Date()) {
	return (
		post.data.draft !== true &&
		post.data.hidden !== true &&
		post.data.pubDate.valueOf() <= now.valueOf()
	);
}

/**
 * Keeps drafts available while developing locally, but never exposes hidden
 * entries. Production builds only include published posts.
 */
export function isVisiblePost(post: BlogPost, now = new Date()) {
	if (import.meta.env.DEV) {
		return post.data.hidden !== true;
	}

	return isPublishedPost(post, now);
}

export async function getPublishedPosts() {
	const posts = await getCollection('blog');
	return sortNewestFirst(posts.filter((post) => isPublishedPost(post)));
}

export async function getVisiblePosts() {
	const posts = await getCollection('blog');
	return sortNewestFirst(posts.filter((post) => isVisiblePost(post)));
}

export function estimateReadingMinutes(content: string) {
	const wordCount = content.trim().match(/\S+/g)?.length ?? 0;
	return Math.max(1, Math.ceil(wordCount / 220));
}

export async function getArticleSummaries(): Promise<ArticleSummary[]> {
	const posts = await getVisiblePosts();
	return posts.map((post) => ({
		id: post.id,
		title: post.data.title,
		description: post.data.description,
		pubDate: post.data.pubDate.toISOString(),
		tags: post.data.tags,
		series: post.data.series,
		featured: post.data.featured,
		heroImage: post.data.heroImage,
		readingMinutes: estimateReadingMinutes(post.body),
	}));
}
