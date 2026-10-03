PROJECT NAME: personal-blog

META-INSTRUCTIONS:

<Read it all before acting. Ask about anything unclear, contradictory or
 underspecified — before starting and mid-build. Ask in the question widget
 (AskUserQuestion): related questions batched, concrete options, your
 recommendation first. Plain text only if the widget isn't available.>

<Don't expand scope. Anything not listed here is a proposal, including changes
 to this file — propose it, don't do it.>

<Prefer doing over describing: run the code, write the files, test it.>

<Always in scope, no proposal needed: when it goes on GitHub, a short README
 that leads with visuals (screenshots, a diagram or a chart) and a line on what
 it is, linking to docs/GUIDE.md for setup and usage; and a small unobtrusive
 feedback tab if what you're building is an application rather than a script.>

<If what you're building is an application, build it as a Mac app first; the
 website comes after, as its own step.>

<Name things the way a person would say them — "Goal Tracker", not
 goal_tracker — for the app, its windows, titles, files people open, repo
 descriptions and README headings. Where a name can't hold spaces (repo names,
 bundle IDs), use hyphens, never underscores.>

<Finish by listing every deliverable: path, what it is, how to check it works.>

<Git rules (no Claude attribution, never commit .claude/) are in
 ~/.claude/CLAUDE.md and apply on their own — nothing to repeat here.>

<Keep the changelog at the bottom current.>

CONTEXT:

blog to describe learnings / musings / explanatsions 

clean and simple

OPEN QUESTIONS / ASSUMPTIONS:

<Agent fills in: what it guessed, what it decided without asking.>

Decided with the owner (2026-09-29):
- Static website only. A blog is a site, not an application, so there is no Mac
  app step and no feedback tab.
- Built with Eleventy 3 (Nunjucks templates, Markdown posts).
- Extras: build-time code highlighting (Prism), KaTeX math, tags, an Atom feed
  and automatic dark mode.
- Site title is "Amal Mehta".
- Public GitHub repo amalmehta/personal-blog, deployed to GitHub Pages by a
  GitHub Actions workflow on every push to main (asked for 2026-09-29).

Decided without asking:
- Tags are learning, musing and explanation, and each gets a page and a header
  link. Any new tag in a post gets a page automatically.
- Dark mode follows the system setting. A ◐ button in the header overrides it
  and the choice is saved in the browser (toggle asked for 2026-09-30).
- The KaTeX CSS and fonts are served locally (no CDN) and only load on pages
  that contain math.
- Three sample posts (one per tag) show the features and are marked as samples.
- The repo is public: Pages on a free account needs that, and the user asked to
  "open it up".
- Fonts are system fonts (a serif for body text, a sans-serif for UI), so no
  web fonts load.

- The About page (asked for 2026-09-30) only says what the blog is and links to
  the three tags; no bio or contact details were invented.

- Accent color ("a tinge of color", asked for 2026-10-01): one deep teal,
  used only for a 3px top bar, post-list dates, links, the post's tag link, the
  current header link, quote borders and text selection.

Proposals (not done):
(none open)

CHANGELOG:

- 2026-09-29 — created
- 2026-09-15 — added meta-instruction: built-out applications include a small feedback tab
- 2026-09-15 — added meta-instruction: no "Claude" attribution in commits, PRs, or branches
- 2026-09-16 — added meta-instruction: always include a README when adding to GitHub
- 2026-09-16 — changed meta-instruction: ask clarifying questions in the question widget
- 2026-09-17 — added meta-instructions: Claude never a contributor; never commit .claude/
- 2026-09-26 — compressed the meta-instructions and every field prompt; git rules moved to the global instruction file
- 2026-09-27 — added meta-instruction: applications are built as a Mac app first, then a website
- 2026-09-28 — folded inputs, instructions, constraints, deliverables and done criteria into one free-form CONTEXT
- 2026-09-28 — changed meta-instruction: a README on GitHub always includes a visual
- 2026-09-28 — added meta-instruction: name things like a person would, never snake_case
- 2026-09-28 — changed meta-instruction: README leads with visuals; instructions live in a linked guide
- 2026-09-29 — built: Eleventy static blog, sample posts, README and docs/GUIDE.md; filled in assumptions
- 2026-09-29 — published to GitHub (public) with a GitHub Pages deploy workflow
- 2026-09-30 — bumped the deploy workflow's GitHub Actions to their current major versions
- 2026-09-30 — added an About page and a header link to it
- 2026-09-30 — added a light/dark toggle to the header
- 2026-10-01 — added a teal accent color in a few small places
