---
title: 'Helping Others Cite, Reference, or Attribute Your Work'
description: 'Exploring some modern techniques and new industry standards to improve software attribution, referencing, and citations.'
pubDate: 'Jan 27 2025'
heroImage: '/articles/compiledreactjswithastro/ArticleHeader.png'

---

import RandomPokemonFetcher from "../../components/RandomPokemonFetcher.jsx";


This article can be used as an example for Coder Academy's assessment item, "Technical Blog Post and Prototype", for the ISK1002 Industry Skills 2 subject. I've kept this article focused on the rubric where I can, not necessarily the assessment brief - the rubric is what you'll be graded on, after all!


<details>
	<summary>For a walkthrough of how this article maps to the rubric, click this text.</summary>

- At least two referenced external sources to support an explanation of an industry-relevant trend or opportunity
	- Rise of "CI/CD/CC" movement
	- Platforms like Github increasing the ease of citations/referencing/attribution with new features
	- Explanation of the CodeMeta project metadata format and the Citation File Format
- At least two referenced external sources to support an explanation of an industry-relevant ethical issue in detail 
	- The importance of licensing/copyright/referencing/attribution
	- Reiterate some of of the info CodeMeta explains for their data format
- At least two referenced external sources to support an explanation of a problem or scenario and solution to the problem or scenario
	- Problem: Lack of developer awareness about these tools, hurdles that stop developers implementing such "simple" things in their work
	- Solution: Demonstrate how to implement CodeMeta and CFF files in software projects
- Article should include a plan covering the steps required to address the problem or scenario
	- Tutorial on how to implement CodeMeta and CFF files in software projects
	- Brief example of how CodeMeta/CFF data can be used in projects (e.g. read in a version number, contributors array, etc, to display in appropriate UI of an app)
- Identify the essential skills, knowledge, tools, etc, required to implement the solution to the problem or scenario, explain why those are needed, identify alternatives to those identified things, and explain why the chosen things are used in the solution instead of the alternatives.
	- Comparison of metadata formats (e.g. using CodeMeta "crosswalks" to highlight gaps in some formats)
	- Show how GitHub currently supports CFF and has plans to support future formats (link to GitHub issues/discussions where this popped up)
- No formatting issues, and uses correct spelling & grammar throughout the article.
	- This can be as "manual" as just spell-checking everything yourself, but I like automation. I've implemented a GitHub Action that runs two spelling & grammar tools: ReviewDog's "misspell" action and ReviewDog's "languagetool" action. They'll validate and suggest fixes for the articles I write into this blog repository.
- Creates code with comments, comments are relevant to the project, comments are all easy to understand, and ideally stick to a specific commenting or documentation style.
	- JSDoc comments to cover syntax-related commenting automatically, plus manually-written descriptions inserted into those JSDoc comments.

Each top-level dot point in the list above matches one rubric item (or rubric row, however you want to call it) in the assessment. If you're working on this assessment yourself, you may benefit from planning things out in a similar list! Or at least, including a similar list into your work will help any assessment graders to see everything that you're intending to show.

And no, this article does not get perfect marks for the rubric. It might meet a high distinction overall, almost definitely a distinction overall at least.

</details>


So! Let's begin.

## 