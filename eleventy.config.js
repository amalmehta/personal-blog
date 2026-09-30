import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import markdownItKatex from "@vscode/markdown-it-katex";
import metadata from "./src/_data/metadata.js";

const SECTION_TAGS = ["learning", "musing", "explanation"];

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.amendLibrary("md", (md) => md.use(markdownItKatex.default ?? markdownItKatex));

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    collection: { name: "posts", limit: 20 },
    metadata: {
      language: metadata.language,
      title: metadata.title,
      subtitle: metadata.description,
      base: metadata.url,
      author: { name: metadata.author },
    },
  });

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy({
    "node_modules/katex/dist/katex.min.css": "css/katex/katex.min.css",
    "node_modules/katex/dist/fonts": "css/katex/fonts",
  });

  eleventyConfig.addFilter("readableDate", (date) =>
    new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })
  );
  eleventyConfig.addFilter("isoDate", (date) => new Date(date).toISOString().slice(0, 10));
  eleventyConfig.addFilter("sectionTags", (tags = []) => tags.filter((t) => t !== "posts"));
  eleventyConfig.addFilter("readingTime", (html = "") => {
    const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    return `${Math.max(1, Math.round(words / 220))} min read`;
  });

  eleventyConfig.addCollection("tagList", (api) => {
    const tags = new Set();
    for (const item of api.getFilteredByTag("posts")) (item.data.tags || []).forEach((t) => t !== "posts" && tags.add(t));
    // Known sections first, then anything else alphabetically.
    return [...tags].sort((a, b) => {
      const ia = SECTION_TAGS.indexOf(a), ib = SECTION_TAGS.indexOf(b);
      if (ia !== -1 || ib !== -1) return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
      return a.localeCompare(b);
    });
  });

  return {
    dir: { input: "src", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
