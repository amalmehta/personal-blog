# Guide

## Setup

You need Node.js 18 or newer.

```bash
npm install
npm start        # live preview at http://localhost:8080
npm run build    # writes the finished site to _site/
```

## Writing a post

Add a Markdown file to `src/posts/`. The file name becomes the URL, so `src/posts/my-first-idea.md` is published at `/posts/my-first-idea/`.

```markdown
---
title: My first idea
description: One line that shows under the title in post lists.
date: 2026-10-01
tags: history
---

Your post, in Markdown.
```

- **tags**: `history`, `art` or `architecture`. A post can have several (`tags: [art, architecture]`). Each tag gets a page at `/tags/<tag>/` and a link in the header. A new tag name creates its own page automatically.
- **Code**: fenced code blocks with a language (```` ```js ````, ```` ```python ````, and so on) are highlighted at build time.
- **Math**: `$inline$` and `$$display$$` use KaTeX. The KaTeX stylesheet only loads on pages that contain math.
- **Drafts**: to keep a post off the site, add `permalink: false` and `eleventyExcludeFromCollections: true` to its front matter.

The three posts in `src/posts/` are samples, so replace or delete them.

## Site settings

Edit `src/_data/metadata.js` to set the title, description, author and `url` (the live address; the feed uses it to build links).

## Light and dark

The site follows the system setting. The ◐ button in the header switches theme, and the browser remembers the choice. The colors for both themes are at the top of `src/css/style.css`; the dark set appears twice (once for the system setting, once for the button), so change both together.

## Where things live

| Path | What it is |
| --- | --- |
| `src/posts/` | Posts |
| `src/_includes/` | Page templates (`base.njk`, `post.njk`, `page.njk`, `post-list.njk`) |
| `src/index.njk`, `src/tags.njk` | Home page and tag pages |
| `src/about.md` | The About page |
| `src/css/style.css` | All styling, including light and dark colors |
| `eleventy.config.js` | Plugins, filters and the feed |

## Publishing

The site is live at **https://amalmehta.github.io/personal-blog/**.

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages. To publish a post, commit it and push:

```bash
git add src/posts && git commit -m "New post: My first idea" && git push
```

The Actions tab on GitHub shows each deploy. Because the site lives under `/personal-blog/`, the workflow builds with `PATH_PREFIX=/personal-blog/`, and every link picks that up automatically. Locally the site is served from `/`.

To host it somewhere else, run `npm run build` (setting `PATH_PREFIX` if the site isn't at the root of its domain) and upload `_site/`.
