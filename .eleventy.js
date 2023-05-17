const pluginMermaid = require("@kevingimbel/eleventy-plugin-mermaid");
const directoryOutputPlugin = require("@11ty/eleventy-plugin-directory-output");

module.exports = (eleventyConfig) => {
	eleventyConfig.setQuietMode(true);
	eleventyConfig.addPlugin(directoryOutputPlugin);
	eleventyConfig.addPlugin(pluginMermaid);
};