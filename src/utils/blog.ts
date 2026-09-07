import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

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
