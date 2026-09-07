# Next website work plan

**Prepared:** 7 September 2026  
**Scope:** The next substantial usability, content-discovery, and presentation work for `alexstormwood.com`.

## The situation

The website is now on Astro 7, with a clearer homepage and article taxonomy. The next work should make that content easier to find, usable on a phone, and easier to maintain as the project list, appearance history, and evidence of skills grow.

This remains a static Astro site. That is a good fit here. The plan avoids adding a hosted search service, client-side requests to GitHub on every page load, or a CMS solely to support a few structured lists.

## Decisions to keep the work sane

1. **Use static generation first.** Search indexes, article metadata, and public GitHub data should be prepared during the build. Visitors should not need a database or a third-party API request to browse the site.
2. **Use native HTML before a package.** Native `<dialog>` and `<details>` already cover the lightbox, search modal, and skill accordions well. React stays useful for state-heavy islands such as article filtering or a carousel.
3. **Keep content in typed data modules.** Appearances, skills, work history, home-gallery images, and projects should move out of page components into `src/data/`. Pages should render data, not contain hundreds of lines of one-off list markup.
4. **Treat accessibility and mobile as product requirements.** Every interactive control needs a visible label, keyboard operation, focus handling, and a no-motion-friendly behaviour. Every feature is checked at 320 px, 768 px, and a desktop width before it is considered finished.
5. **Do not infer project activity from the wrong date.** A repository's latest GitHub push is useful, but it is not automatically the date a project was last meaningfully worked on. Keep the editorial project date and display a separate `Last GitHub push` field when it is available.

## Current-state note: latest homepage articles

This item is already implemented by `fee671e`. `src/pages/index.astro` calls `getVisiblePosts()` and uses `.slice(0, 3)`, so the homepage displays the three newest publishable posts. The current result is three Japan-trip posts because they are genuinely the newest posts.

No replacement sampler should be added. The work here is to preserve this behaviour with a small test when the article directory is rebuilt.

## Phase 0: establish a safe baseline and fix current regressions

### Employment History timeline

`src/pages/workhistory.astro` currently passes a large inline data structure to `react-chrono` with `client:only`. This is an avoidable weak point after the Astro and React upgrades.

1. Reproduce the broken page from a clean production build and capture the browser console error and screenshots before changing it. Do not assume that `fee671e` is the direct cause.
2. Move the entries into `src/data/work-history.ts`, including nested roles, organisation URLs, dates, and image details.
3. Replace `react-chrono` with a bespoke semantic `<ol>` timeline. Each employer becomes a list item and nested roles are a nested list. Use CSS for the vertical line, date rail, cards, and a single-column mobile layout.
4. Remove `react-chrono` only after the replacement is in use and the production build is clean.
5. Send timeline images through the common image-lightbox system described in Phase 2.

This is preferable to trying to make a client-only visualisation library behave across an Astro major upgrade. The page is primarily editorial content, not a data visualisation that needs a large React dependency.

**Done when:** all roles, images, links, and dates are visible at desktop and mobile widths; the document remains useful without JavaScript; the old `react-chrono` import and dependency are gone.

### Project-card visual regression

The current project-card changes need a dedicated visual pass instead of being treated as an incidental part of a later GitHub integration.

1. Capture desktop, tablet, and mobile screenshots for long descriptions, a card with many links, a card without an image, and a card without a repository.
2. Make card height, action-button wrapping, image cropping, contrast, and grid breakpoints deliberate in `src/components/ProjectCard.jsx` and `src/styles/ProjectCard.css`.
3. Confirm that each card has a useful heading hierarchy, a readable context line, an optional manual project date, and links that remain easy to tap.

**Done when:** there is no clipped card content or overlapping action row at the three target widths, and all project variations have been checked.

## Phase 1: responsive site shell and navigation

### Header behaviour

Rebuild `src/components/Header.astro` around two explicit layouts rather than allowing the desktop links to wrap.

| Viewport | Required header content | Behaviour |
| --- | --- | --- |
| Desktop, 769 px and up | Alex Stormwood title, primary links, visible search input | Links stay in one navigation row. Search results open without leaving the page. |
| Mobile, 768 px and below | Alex Stormwood title, search button, hamburger button | The title remains visible. Search opens a modal input. The hamburger expands and collapses the primary navigation. |

Implementation details:

- Keep the title as the homepage link in both modes.
- Use real `<button>` controls for search and the menu, with `aria-expanded`, `aria-controls`, an accessible name, and `Escape` to close the open panel.
- Make the mobile menu a panel below the header, not a full-screen overlay, unless user testing shows the overlay is genuinely easier to use.
- Restore focus to the opening button after closing the menu or search dialog.
- Do not hide navigation with hover-only behaviour. Touch and keyboard users must have the same controls.

**Done when:** the title, search control, and menu control fit at 320 px; the mobile navigation is keyboard-operable; the desktop header does not wrap at normal laptop widths.

## Phase 2: shared media system and the homepage hero

### Clickable full-size images

Build one lightbox system rather than adding click handlers to individual pages.

1. Create a `Lightbox.astro` component using a native `<dialog>` and a small client script. Native dialogs provide the focus and Escape-key behaviour that a custom shadowbox would otherwise need to recreate. See [MDN's dialog documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog).
2. Give every informative image in main content a `data-lightbox` contract containing the full-size source and its caption or alt text. This covers article images, hero images, project images, work-history images, appearance images, and the home carousel.
3. Extend `src/plugins/defer-media.mjs` so Markdown and MDX image elements receive the same opt-in data automatically. Astro and React image components should use a small shared `LightboxImage` wrapper or equivalent attributes.
4. Treat decorative icons as decorative. They receive an empty `alt` or `aria-hidden` and do not open a modal. Existing images that are already the only content of an external link need a deliberate choice: use a separate visible `View source` link, rather than nesting an anchor inside a lightbox button.
5. The dialog must have a close button, click-outside behaviour, focus restoration, a caption when available, and image dimensions constrained to the viewport without downloading a second image until it is opened.

No React lightbox package is recommended for this. A single document-level native dialog is smaller, works in Markdown as well as React and Astro components, and does not require each page to hydrate an image gallery.

### Hero carousel

The old gallery components are unsuitable: they include duplicated implementations, global DOM selectors, console logging, and automatic movement. Do not restore them.

1. Create `src/data/home-hero-images.ts` with a small, deliberately chosen image set. Each record needs `src`, `width`, `height`, `alt`, and a short optional caption. Start with five to eight varied images, not every image in `public/homepagegallery`.
2. Add a `HomeHeroCarousel` island to the right column of the homepage hero. It should have previous/next buttons, dots or a count, swipe support, a clear visible caption, and an image click that opens the shared lightbox.
3. Prefer `embla-carousel-react`, pinned to a current stable version compatible with React 19, instead of reviving the previous hand-rolled gallery. The [Embla accessibility guidance](https://www.embla-carousel.com/docs/plugins/accessibility) is useful for slide labels, controls, and focus behaviour.
4. Do not autoplay by default. A static first slide and direct controls are calmer, make the hero easier to read, and respect `prefers-reduced-motion`. If autoplay is later wanted, it must pause on hover, focus, and user interaction, and remain disabled for reduced motion.
5. At mobile widths, the carousel sits below the introductory copy and calls to action. It should not create horizontal overflow or push the two main calls to action below the initial viewport unnecessarily.

**Done when:** every content image can open in the lightbox, carousel controls work by mouse, touch, and keyboard, and no carousel animation runs for reduced-motion users.

## Phase 3: static site search and article discovery

### Site-wide full-text search

Use [Pagefind](https://pagefind.app/docs/) for full-text search. It builds a static search bundle after Astro outputs `dist`, so it adds no hosted search bill and no visitor-time search API. Pagefind's [browser API](https://pagefind.app/docs/api/) supports a custom interface, which is needed for the different desktop and mobile header controls.

1. Add `pagefind` as a development dependency and change the production build command to run Pagefind after `astro build`, targeting `dist`.
2. Mark the meaningful page content with `data-pagefind-body`; Pagefind documents this approach for excluding navigation and other boilerplate from results. See [configuring indexed content](https://pagefind.app/docs/indexing/).
3. Create a reusable `SearchDialog.astro` plus a small client module:
   - Desktop: a labelled full-text input in the header with a result popover.
   - Mobile: an icon-and-text search button that opens the same modal with the input focused.
   - Results: title, excerpt, route, keyboard navigation, an empty state, and a link to a dedicated `/search?q=` view for a larger result list.
4. Index published content only. Drafts, hidden posts, navigation, repeated card metadata, and the search UI itself should not pollute results.
5. Test search against a project name, an article phrase, a skill name, and an appearance title after each production build.

### Articles directory

The `/articles` page needs its own structured directory in addition to site-wide text search.

1. Add a build-time article view model in `src/utils/blog.ts`: `slug`, title, description, publication date, tags, series, featured status, and estimated reading minutes. Calculate minutes from rendered text using a documented words-per-minute constant, rather than hand-maintaining a field in every frontmatter block.
2. Replace the fixed sections in `src/pages/articles/index.astro` with an `ArticleDirectory` client island. Keep an initial server-rendered list for progressive enhancement.
3. Provide controls for:
   - text match within the article directory;
   - tag multi-select;
   - sort by newest and oldest publication date, title A-Z and Z-A, and reading time shortest and longest;
   - pagination, initially 9 articles per page.
4. Make each control update the URL query string. A shared URL makes a filtered view linkable and means Back and Forward work as expected.
5. Explain the filter semantics in the UI. Tags should use OR matching by default, with a clear count and a `Clear filters` button. A visitor should not have to guess why an article disappeared.
6. Retain the starter/featured concept only as a visible badge or optional default sort, not as a second competing content layout.

**Done when:** a visitor can find, filter, sort, paginate, copy a filtered URL, and read an article result at mobile and desktop widths. With JavaScript disabled, the complete chronological list remains available.

## Phase 4: structured skills and appearances content

### Skills page

Move the inline `skillsList` array from `src/pages/skills.astro` into `src/data/skills.ts`.

Each skill should contain:

```ts
{
  id: 'react',
  name: 'React',
  category: 'Front-end',
  icon: '/brandLogos/react.svg',
  referenceUrl: 'https://react.dev/',
  summary: 'What this skill is and where it is useful.',
  evidence: [
    // Alex-maintained claims, projects, roles, outcomes, links, and dates.
  ]
}
```

Render each skill as a compact card with two native `<details>` accordions:

1. **What this is**: a plain-English explanation of the skill.
2. **My experience and evidence**: manually maintained proof, claims, links, projects, or a clear `Evidence to be added` placeholder.

The reference link remains available but does not consume the card's only interaction. The layout should use a responsive grid and work with long evidence entries without collapsing the icon or heading.

**Done when:** every skill has the two requested accordion sections, all summaries and evidence are editable in one typed data file, and no accordion depends on hover or JavaScript.

### Appearances page

`src/pages/appearances.astro` is currently a long static list with inconsistent date formats. Filtering cannot be reliable until this is structured.

1. Create `src/data/appearances.ts`. Every appearance becomes a record with an ID, title, appearance type, `startDate`, optional `endDate`, organisation, role or context, source link where available, and optional image.
2. Define appearance types from the current headings: Accredited Multi-Session Courses, Non-Accredited Multi-Session Courses, One-Session Courses, Presentations & Public Speaking, Hackathons & Game Jams, Exhibitions, and Meetups, Conferences & Workshop Attendance.
3. Put each type's existing explanatory copy in an `appearanceTypeDefinitions` record. Render it next to a small `?` button that shows a keyboard-accessible tooltip or popover. The button must work on touch, hover, focus, and click.
4. Build an `AppearanceDirectory` island with an appearance-type select or chips, inclusive start/end date inputs, `Clear filters`, a result count, and a no-results state.
5. Default to every record sorted newest first. An appearance spanning several days appears when its date range overlaps the selected range, rather than only when its first day falls inside it.
6. Preserve uncertain dates honestly. Use a supported precision field such as `year`, `month`, or `day` instead of inventing a day to make the filter work. The UI can then say `August 2017` rather than pretending it knows the exact date.

**Done when:** all current entries have structured dates or an explicit lower precision, all type definitions are visible through the `?` control, and date/type filters compose correctly with the default newest-first order.

## Phase 5: GitHub-enriched project data

Refactor `src/utils/projectMeta.jsx` into a typed project data module. Add an explicit optional repository identifier instead of attempting to infer a canonical repository from every project URL.

```ts
{
  id: 'sourcepool',
  title: 'Sourcepool',
  projectLastWorkedOn: '2024-03-27',
  githubRepository: 'BigfootDS/Sourcepool', // optional
  links: [...]
}
```

At static build time:

1. A memoised project-data helper fetches public repository details only for entries with `githubRepository`.
2. It uses GitHub's `Get a repository` endpoint and reads `pushed_at`, repository URL, archived state, description, and any other field explicitly approved for display. The GitHub repository endpoint and its response fields are documented in the [GitHub REST repository docs](https://docs.github.com/en/rest/repos). GitHub API rate limits still apply, so a deployment-only `GITHUB_TOKEN` should be supported but never committed. See [GitHub's rate-limit docs](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api).
3. The helper degrades to the manually maintained project data on a missing repository, API error, rate-limit response, or offline local build. A failed enrichment must warn during the build, not break deployment.
4. The page displays `Last GitHub push` only when the fetch succeeds. It retains `Project last worked on` as a separately authored, optional field.
5. There are no GitHub requests in the browser. This keeps the page fast, avoids exposing a token, and means unlisted or non-GitHub projects remain first-class cards.

Finish the visual card work from Phase 0 at the same time: group links by kind, show the updated information without dominating the description, and give image-less projects a deliberate placeholder treatment.

**Done when:** public-repository metadata is obtained once per build, failures fall back safely, no browser request is made, and projects without repositories look complete rather than broken.

## Verification and release checklist

Add a lightweight end-to-end test suite, ideally with Playwright, once these client interactions exist. It should build the static site, serve the production output, and cover the things that caused regressions here.

- `npm run build` includes the Pagefind indexing step and completes cleanly.
- The mobile header retains the Alex Stormwood title, search button, and hamburger at 320 px.
- Search returns a known article and a known project.
- The homepage renders the three newest visible posts in date order.
- Image lightbox opens, closes with Escape, restores focus, and does not trap a mobile user.
- Carousel buttons and dots work, with no autoplay for reduced-motion users.
- Article filters, sorting, pagination, and shareable URLs work.
- Appearance date overlap and type filtering work.
- Skills accordions work using keyboard alone.
- Work History has no client-side render error and remains legible without JavaScript.
- Project cards work with zero, one, and several outbound links, plus a project that has no image or GitHub repository.

## Recommended working order

1. **Fix visible regressions first:** replace the Employment History timeline, then complete the project-card visual regression pass.
2. **Make the shell responsive:** deliver the mobile header, title, hamburger menu, and search trigger before adding more page-level interactions.
3. **Add shared media infrastructure:** native lightbox first, then the home hero carousel using it. Confirm the homepage continues to show the newest three posts.
4. **Build discovery:** add Pagefind site search, then the richer articles directory. The directory can share the search-dialog patterns but keeps its own tag and sort controls.
5. **Migrate editorial data:** structure skills, then appearances. These are content-heavy moves and benefit from the now-established responsive and filter patterns.
6. **Enrich projects at build time:** introduce typed project data and optional GitHub metadata, then make the final project cards match that model.
7. **Test the whole result:** add browser tests and run the complete mobile, accessibility, and production-build checklist before deployment.

This sequence deals with broken public pages before new polish, creates shared components before repeating interactions, and leaves external API enrichment until the rest of the project cards are stable.

## Suggested commit boundaries

- `fix(work-history): restore accessible employment timeline`
- `fix(projects): repair responsive project card layout`
- `feat(navigation): add responsive header and search trigger`
- `feat(media): add accessible image lightbox and home carousel`
- `feat(search): add static site and article directory search`
- `refactor(content): structure skills and appearances data`
- `feat(projects): enrich public repository metadata at build time`
- `test(site): cover responsive discovery and content interactions`
