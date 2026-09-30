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
tags: learning
---

Your post, in Markdown.
```

- **tags**: `learning`, `musing` or `explanation`. A post can have several (`tags: [learning, explanation]`). Each tag gets a page at `/tags/<tag>/` and a link in the header. A new tag name creates its own page automatically.
- **Code**: fenced code blocks with a language (```` ```js ````, ```` ```python ````, and so on) are highlighted at build time.
- **Math**: `$inline$` and `$$display$$` use KaTeX. The KaTeX stylesheet only loads on pages that contain math.
- **Drafts**: to keep a post off the site, add `permalink: false` and `eleventyExcludeFromCollections: true` to its front matter.

The three posts in `src/posts/` are samples, so replace or delete them.

## Site settings

Edit `src/_data/metadata.js` to set the title, description, author and `url`. Set `url` to the real address before you publish, because the feed uses it to build links.

## Where things live

| Path | What it is |
| --- | --- |
| `src/posts/` | Posts |
| `src/_includes/` | Page templates (`base.njk`, `post.njk`, `post-list.njk`) |
| `src/index.njk`, `src/tags.njk` | Home page and tag pages |
| `src/css/style.css` | All styling, including light and dark colors |
| `eleventy.config.js` | Plugins, filters and the feed |

## Publishing

`npm run build` produces a static `_site/` folder that any static host can serve, such as GitHub Pages, Netlify, Cloudflare Pages or your own server. The feed is at `/feed.xml`.
