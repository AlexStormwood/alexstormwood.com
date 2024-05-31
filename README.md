# Alexander Stormwood's Online Journal

This repository contains the website systems and content for my online journal.

Built with ReactJS using Vite's ReactJS template running on JavaScript + SWC.

Feel free to raise issues or whatever else for content on the website.

# URLs

This website is currently deployed at:

- [alexstormwood.github.io](https://alexstormwood.github.io)
- [https://alexstormwood.com/](https://alexstormwood.com/)


# React Rebuild

This is a rebuild of what was a functioning blog. Just wanna add more-complex functionality to it and the original blog framework was hard to work with.


## Feature Planning

- Image Gallery Component
	- shows multiple images at thumbnail size
	- click one image to show it in the main gallery part of component
	- main gallery image can be clicked on to zoom
	- NPM packages:
		- gallery: https://www.npmjs.com/package/react-image-gallery
		- zoom: https://www.npmjs.com/package/react-image-zooom
- Code snippets with syntax highlighting
	- NPM packages: 
		- https://www.npmjs.com/package/react-syntax-highlighter 
- Page scroll progress bar
	- NPM packages:
		- https://www.npmjs.com/package/react-scroll-progress-bar
- Post metadata in high-tree-level context provider
	- post metadata should include url-usable ID, published date, array of tags, and component
- Headings-based Table of Contents widget in post pages
	- comb through post content for headings, build ToC out of that
	- widget stays fixed on page view
	- widget is hidden on mobile (RIP mobile users on longer posts)
- Open Graph descriptors
	- https://ogp.me/
	- Twitter has similar meta tags too
		- https://developer.x.com/en/docs/twitter-for-websites/cards/guides/getting-started
- Maybe prevent AI/bot scrapers?
	- NPM packages:
		- https://www.npmjs.com/package/@noscrape/noscrape

## Page planning 

- Post display page
	- React Router can use the post.id as a URL param and post.component as route element
	- display links to posts with similar tags
- Post List
	- display a list of available posts from the post context provider
	- sortable? default is by date, newest at top
	- take a number as param for limit of how many posts to show 
		- would make this reusable by Recent Posts page
- Recent Posts
	- sort a copy of the post metadata to get the 5 most-recent posts, display links to their pages
- Tag list page
	- map through the post context data to create an array of tags
	- display the list of tags as links to the Post List By Tag page
- Post List By Tag page
	- tag provided as route param
	- map through the post context data to create an array of posts, filtered by the tag
- "Events and Appearances" page 
	- static page, not a post
	- just a list of data, nice and simple
	- uses the headings-based ToC too
