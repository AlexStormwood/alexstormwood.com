---
title: 'Compiled ReactJS with Astro'
description: 'Digging into the foundations of what makes ReactJS and Astro work well together.'
pubDate: 'Jan 15 2025'
heroImage: '/articles/compiledreactjswithastro/ArticleHeader.png'
---

This article can be used as an example for Coder Academy's assessment item, "Technical Blog Post and Prototype", for the ISK1002 Industry Skills 2 subject. I've kept this article focused on the rubric where I can, not necessarily the assessment brief - the rubric is what you'll be graded on, after all!


<details>
	<summary>For a walkthrough of how this article maps to the rubric, click this text.</summary>

- At least two referenced external sources to support an explanation of an industry-relevant trend or opportunity
	- Usage of Astro to build static websites involving ReactJS components
- At least two referenced external sources to support an explanation of an industry-relevant ethical issue in detail 
	- compiled versus dynamic website pages
	- the issue of trend-driven development
	- the issue of ReactJS potentially being co-opted by Vercel to improve Vercel profits
- At least two referenced external sources to support an explanation of a problem or scenario and solution to the problem or scenario
	- how to use ReactJS to make static compiled HTML without using React Server Components
	- how to use Astro to make a ReactJS-based website
	- how to automate the deployment of an Astro-plus-ReactJS website
- Article should include a plan covering the steps required to address the problem or scenario
	- tutorial on how to set up Astro with ReactJS usage
	- tutorial on how to set up GitHub Actions to automatically build and deploy the Astro-plus-ReactJS website
- Identify the essential skills, knowledge, tools, etc, required to implement the solution to the problem or scenario, explain why those are needed, identify alternatives to those identified things, and explain why the chosen things are used in the solution instead of the alternatives.
	- comparison of Astro to React Server Components, in detail
	- comparison of Astro to other React compiler systems
	- identification and explanation of what a React compiler system needs to be suitable for usage
	- identification of CI/CD systems, quick comparison of GitHub Actions to other CI/CD systems, explanation of why GitHub Actions was used over other CI/CD systems
- No formatting issues, and uses correct spelling & grammar throughout the article.
	- This can be as "manual" as just spell-checking everything yourself, but I like automation. I've implemented a GitHub Action that runs two spelling & grammar tools: ReviewDog's "misspell" action and ReviewDog's "languagetool" action. They'll validate and suggest fixes for the articles I write into this blog repository.
- Creates code with comments, comments are relevant to the project, comments are all easy to understand, and ideally stick to a specific commenting or documentation style.
	- JSDoc comments to cover syntax-related commenting automatically, plus manually-written descriptions inserted into those JSDoc comments.

Each top-level dot point in the list above matches one rubric item (or rubric row, however you want to call it) in the assessment. If you're working on this assessment yourself, you may benefit from planning things out in a similar list! Or at least, including a similar list into your work will help any assessment graders to see everything that you're intending to show.
</details>


So! Let's begin.

## ReactJS in "Current Year"

It is an understatement to say that ReactJS is a widely-used front-end framework. In Stack Overflow's 2024 Developer Survey, the latest at the time of writing, the results are clear: ReactJS is the most-used front-end web framework by professional developers. [^1] 

<div align="center">
<img width="60%" src="/articles/compiledreactjswithastro/stackoverflowwebframeworkchart.png" alt="A bar graph of web frameworks and technologies from StackOverflow, depicting ReactJS used by 41.6% of professional developers. While NodeJS is second at 40.7%, it is not a front-end framework - and the next-closest front-end framework is over 20 percentage points lower." />
</div>
<div align="center">
<caption>
	<a href="https://survey.stackoverflow.co/2024/technology#most-popular-technologies-webframe-prof">Screenshot from 2024 Stack Overflow Developer Survey results.</a>
</caption>
</div>

The results mix it in with other frameworks and technologies, but if you dig into what the other items are: ReactJS is the top pick for front-ends - the actual webpages that users see and click on - by a large margin.

ReactJS is still around and still widely in use over a decade after its first public release - and using it in various types of websites can bring great benefits to our projects. Components and stateful data can make a web project complex, but frameworks like ReactJS, including ReactJS, make those much easier to manage and implement.

The main ability that I really love from ReactJS is its ability to create _components_ of content. Everything in ReactJS is a component, as part of its component-based architecture. This is really handy, especially in content-driven websites!

That means that we can have projects laying out pages in a way that adheres to "D.R.Y" principles - "do not repeat yourself", minimise duplicate code in your projects and improve your workflow as a developer. Instead of rewriting the same headers, footers, navbars, and so on within each HTML file - we can write each of those just once in a component, and pass those components into whatever web content format file we want. 

For ReactJS, that means writing components in JSX or TSX, and that gets compiled into HTML for browsers to use. It's awesome. There's a lot more to ReactJS than that, but for the sake of this article: that's the important bit. Components.


## Compiled Content on the Web

I'm a big fan of compilers - my first professionally-used "tech stack" with Unity with C#, which meant I was using a compiled language in a game engine that compiled games into executables for different operating systems and platforms. Compilers are a sign of "this is optimised for production usage, ready for customers" to me. I love it.

ReactJS has been around since 2013, rising to fame through its ability to make single-page applications (SPA) with good, reusable components. It's stayed popular since its public release, and has been pioneered by developers for apps that scale to millions of users - specifically, developers working on Facebook. It's great!

One of the downsides of ReactJS is that it - when used for SPA projects - puts so much content into a user's web browser. When using ReactJS to make a SPA, users visit the `index.html` page of the website, that file loads the bundled ReactJS JavaScript content, and the JavaScript runs all of the ReactJS code that you and your development team have been writing. Routing and pages in a ReactJS SPA are emulated - they're not real, separate HTML files. 

This means that even after its compilation or build or bundle step, every bit of content in the ReactJS app is going to end up in the user's web browser right from the start of their visit, no matter which page they visit. This means that:

1. A user's browser may run more slowly due to the bulk of what it has received.
2. A user's browser may take longer to become interactive due to the bulk of JavaScript code that must be processed, and the nature of how ReactJS content is loaded. There are more round-trip network requests to make to retrieve data, and more CPU cycles spent processing JavaScript that might not even be relevant to the page that you're visiting.
3. A developer's project architecture may change due to the unsecure nature of the web browser (e.g. no JWT generation secret keys should be in the browser).
4. Search engine optimisation (SEO), website metadata, and scraping may be harder to implement and/or behave inconsistently.

So, to address those problems, recent years of ReactJS feature development has focused on a compiler system. 

React Server Components [^2] are a system that allows developers to compile ReactJS components into... a special payload format used only by React components? And then then a ReactJS client-side web page processes that format to render static content? [^3] 

And it doesn't need a server, except the ReactJS developers actually redefined "server" to just mean "not the computer or phone or device of the person viewing the webpage".

<div align="center">
<img src="/articles/compiledreactjswithastro/reactserverconfusion.png" alt="A screenshot of a Reddit post where a user is asking for people to explain React Server Components as if the question-asker is 10 years old, and citing a tweet from ReactJS core contributor Dan Abramov about how React Server Components never required a server." />
</div>

What the ReactJS team has been doing with regards to compiling ReactJS components into static HTML is confusing, to say the least. Documentation is unclear, answers are unclear, and nuggets of wisdom have been lost to account deletions on platforms like Twitter/X.

<div align="center">
<img width="50%" src="/articles/compiledreactjswithastro/rsctwitter.png" alt="A screenshot of a Twitter post by user '@MichelleBakels' suggesting that Dan Abramov, core contributor of ReactJS, gets his tweets preserved into a chatbot since they are so useful. Dan Abramov's Twitter account does not exist at the time of writing this article." />
</div>
<div align="center">
<caption>
	<a href="https://www.telerik.com/blogs/current-state-react-server-components-guide-perplexed">Screenshot from "The Current State of React Server Components: A Guide for the Perplexed", by Kathryn Grayson Nanz, written on the 20th of February 2024.</a>
</caption>
</div>

Dan Abramov's Twitter account no longer exists, so the chatbot preservation idea is a non-starter. Confusion persists.

Worse still, is that the ReactJS team seems to have tossed out its SPA-focused roots and focused on full-stack server-side-rendering ReactJS projects. Their "Start a New React Project" documentation [^4] no longer mentions ReactJS in the context of SPA-friendly systems like Create React App (which is deprecated), and the only off-handedly mentions modern Create React App alternatives such as Vite in a block of "Oh, you're not wanting to use ReactJS in a full framework?" text. That might seem like such a minor issue, but from an educational perspective: removing content that existed for over a decade is absolutely a way to tell people to stop doing something. The ReactJS development team's current documentation content makes it seem like SPAs are lesser-than and incomplete usages of ReactJS, which is just plain opinion grating against the decade-plus industry-wide usage of ReactJS. 

In the opinions of many online, myself included, the ReactJS team is hurting their own product with this recent focus. Check out these opinions across these Reddit threads:

<div align="center">
<img width="75%"  src="/articles/compiledreactjswithastro/rscreddit01.png" alt="A screenshot of a Reddit comment by a user disgruntled by React's work on React Server Components." />
</div>
<div align="center">
<caption>
	<a href="https://www.reddit.com/r/react/comments/19djfb3/comment/kj6q2ko/">Comment by "After_Medicine8859" in "Why React Server Components?", comment created on the 23rd of January, 2024. </a>
</caption>
</div>

<div align="center">
<img  width="75%" src="/articles/compiledreactjswithastro/rscreddit02.png" alt="A screenshot of a Reddit comment by a user disgruntled by React's work on React Server Components." />
</div>
<div align="center">
<caption>
	<a href="https://www.reddit.com/r/react/comments/19djfb3/comment/kjbtztu/">Comment by "stercoraro6" in "Why React Server Components?", comment created on the 24th of January, 2024. </a>
</caption>
</div>

<div align="center">
<img  width="75%" src="/articles/compiledreactjswithastro/rscreddit03.png" alt="A screenshot of a Reddit comment by a user disgruntled by React's work on React Server Components." />
</div>
<div align="center">
<caption>
	<a href="https://www.reddit.com/r/react/comments/19djfb3/comment/kq5v7pk/">Comment by "No_Record_60" in "Why React Server Components?", comment created on the 13th of February, 2024. </a>
</caption>
</div>

<div align="center">
<img  width="75%" src="/articles/compiledreactjswithastro/rscreddit04.png" alt="A screenshot of a Reddit comment by a user disgruntled by React's work on React Server Components." />
</div>
<div align="center">
<caption>
	<a href="https://www.reddit.com/r/reactjs/comments/1c7mp6g/comment/l099yzf/">Comment by "romgrk" in "React Server Components: A Bad Idea?", comment created on the 19th of April, 2024. </a>
</caption>
</div>

But wait, there's more!

<div align="center">
<img  width="75%" src="/articles/compiledreactjswithastro/rscreddit08.png" alt="A screenshot of a Reddit comment by a user disgruntled by React's work on React Server Components." />
</div>
<div align="center">
<caption>
	<a href="https://www.reddit.com/r/reactjs/comments/13l1fou/comment/jknjps2/">Comment by "fredericheem" in "How are folks feeling about the React team's push toward server components?", comment created on the 19th of May, 2023. </a>
</caption>
</div>

<div align="center">
<img  width="75%" src="/articles/compiledreactjswithastro/rscreddit09.png" alt="A screenshot of a Reddit comment by a user disgruntled by React's work on React Server Components." />
</div>
<div align="center">
<caption>
	<a href="https://www.reddit.com/r/reactjs/comments/13l1fou/comment/jkogkt1/">Comment by "captrespect" in "How are folks feeling about the React team's push toward server components?", comment created on the 19th of May, 2023. </a>
</caption>
</div>

<div align="center">
<img  width="75%" src="/articles/compiledreactjswithastro/rscreddit09.png" alt="A screenshot of a Reddit comment by a user disgruntled by React's work on React Server Components." />
</div>
<div align="center">
<caption>
	<a href="https://www.reddit.com/r/reactjs/comments/13l1fou/comment/jknd32d/">Comment by "lIIllIIlllIIllIIl" in "How are folks feeling about the React team's push toward server components?", comment created on the 19th of May, 2023. </a>
</caption>
</div>


And of course, with any up-and-coming trend, there's also some conspiracy theories floating around: one of the bigger contributors to ReactJS these days - either by direct contribution, or by hiring the developers who primarily contribute to ReactJS - is Vercel. They manage a server hosting business, and this React Server Component stuff benefits from running on a server. So...

<div align="center">
<img  width="75%" src="/articles/compiledreactjswithastro/rscreddit05.png" alt="A screenshot of a Reddit comment by a user disgruntled by React's work on React Server Components." />

</div>
<caption>
	<a href="https://www.reddit.com/r/reactjs/comments/187k52a/comment/kbetiqu/">Comment by "avoere" in "What's the purpose of server components when component libs aren't supported this way?", comment created on the 1st of December, 2023. </a>
</caption>


<div align="center">
<img  width="75%" src="/articles/compiledreactjswithastro/rscreddit07.png" alt="A screenshot of a Reddit comment by a user disgruntled by React's work on React Server Components." />

</div>
<caption>
	<a href="https://www.reddit.com/r/reactjs/comments/187k52a/comment/kbh75mi/">Comment by "ddyess" in "What's the purpose of server components when component libs aren't supported this way?", comment created on the 1st of December, 2023. </a>
</caption>

<div align="center">
<img  width="75%" src="/articles/compiledreactjswithastro/rscreddit06.png" alt="A screenshot of a Reddit comment by a user disgruntled by React's work on React Server Components." />

</div>
<caption>
	<a href="https://www.reddit.com/r/reactjs/comments/187k52a/comment/kbh75mi/">Comment by "_hypnoCode" in "What's the purpose of server components when component libs aren't supported this way?", comment created on the 1st of December, 2023. </a>
</caption>

Now, coming from the land of video game development: vendor lock-in sucks. It really sucks. Unity changed their licenses, pricing, and pricing model, often enough that it has become a gigantic business risk for developers to use their engine in a game project. If ReactJS is heading down a path of vendor lock-in, it will not be fun or safe for many businesses to rely on this tool for building websites.

ReactJS did not rise to popularity because it locked developers into doing things in a certain way - as long as you write your website code into ReactJS components, you could do whatever you want! 

When you build a ReactJS SPA project, you can compile the app and deploy it as static HTML, CSS, and JavaScript files to whatever static website deployment platform you like. That way of using ReactJS allows for so many types of websites to be deployed in a cost-effective way. It's not pure static content - you only end up with one `index.html` file, and everything else is emulated, which really makes it difficult (but not impossible!) to set up good search engine optimisation - but it's static compared to running a dedicated web server. 

Netlify, GitHub Pages, and other static website hosts let you deploy static websites for free, with generous resource limits before it starts costing money - to the point where most developers, and safe-to-assume all students, do not see costs in making and deploying static websites. Start-ups and new businesses benefit from this awesome low-cost approach as well, to the point where it's my personal belief that part of the big tech boom from the 2010s stems from how cheap and easy it is to just make a complex, interactive website that works for millions of users.

But servers? They cost. The big cloud providers (Amazon Web Services, Google Cloud Platform, Microsoft Azure) do offer free tiers as an introductory offer - but that introductory offer does not last forever. Costs come for servers, so server-side rendering and server-side generated websites are much rare than static SPA websites.

So, I don't want to run a server to just make a static website work. But I do want to properly compile ReactJS components into static, actual HTML files. Not a SPA loaded into a bulky `index.html` file that emulates every webpage from that one file, but actual one-file-per-page HTML files! 

I want easy search engine optimisation ability! (SPAs typically suck at this.[^5])

I want easy social-sharing content preview snippets! (SPAs typically suck at this.[^5])

I want to easily cache the website in case it does somehow become a big popular hit! (SPAs typically suck at this.[^5])

I want to make a static, multi-page, multi-HTML-file website! (SPAs typically suck at this.[^5])

How can we do that without using React Server Components?

## Enter: Astro

Astro is a very modern web framework for content-driven websites. Meaning, if the content doesn't live in a database: your project will probably benefit from using this framework.

## Astro Projects From Templates

Aaa

## Astro Projects From Scratch

Aaa

## Summary

Aaa


## References

[^1]: Technology | 2024 Stack Overflow Developer Survey. (2024). Stackoverflow.co. https://survey.stackoverflow.co/2024/technology#most-popular-technologies-webframe-prof
[^2]: React Server Components – React. (2024). React.dev. https://react.dev/reference/rsc/server-components
[^3]: Comment by "michaelfrieze" on "React server components are terrible to implement". (2025). Reddit.com. https://www.reddit.com/r/reactjs/comments/1hpvlpg/comment/m4ku5z4/
[^4]: Start a New React Project – React. (n.d.). React.dev. https://react.dev/learn/start-a-new-react-project
[^5]: What I wish I had known about single page applications - Michael Pratt, Stack Overflow. (2021, December 28). Stackoverflow.blog. https://stackoverflow.blog/2021/12/28/what-i-wish-i-had-known-about-single-page-applications/

‌
‌
‌
‌