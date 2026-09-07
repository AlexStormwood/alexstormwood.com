import { defineHastPlugin } from 'satteri';

function withAttribute(node, name, value) {
	if (node.attributes.some((attribute) => attribute.type === 'mdxJsxAttribute' && attribute.name === name)) {
		return node;
	}

	return {
		...node,
		attributes: [...node.attributes, { type: 'mdxJsxAttribute', name, value }],
	};
}

function deferMdxMedia(node) {
	if (node.name === 'img') {
		return withAttribute(withAttribute(withAttribute(node, 'loading', 'lazy'), 'decoding', 'async'), 'data-lightbox', '');
	}

	return withAttribute(node, 'preload', 'metadata');
}

/** Adds non-blocking loading behaviour to Markdown and MDX media. */
export const deferMediaPlugin = defineHastPlugin({
	name: 'defer-media',
	element: {
		filter: ['img', 'video'],
		visit(node, context) {
			if (node.tagName === 'img') {
				context.setProperty(node, 'loading', 'lazy');
				context.setProperty(node, 'decoding', 'async');
				context.setProperty(node, 'data-lightbox', '');
			} else {
				context.setProperty(node, 'preload', 'metadata');
			}
		},
	},
	mdxJsxFlowElement: {
		filter: ['img', 'video'],
		visit: deferMdxMedia,
	},
	mdxJsxTextElement: {
		filter: ['img', 'video'],
		visit: deferMdxMedia,
	},
});
