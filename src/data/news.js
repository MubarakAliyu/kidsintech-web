/*
 * news.js — News/Blog posts (Batch 09).
 * PLACEHOLDER data. `slug` drives /news/[slug]. `body` can be plain
 * text or MD depending on how Batch 09 renders it.
 */
export const news = [
  {
    slug: "placeholder-post",
    title: "[News post title — TODO]",
    excerpt: "[One-line excerpt — TODO]",
    date: "2026-01-01", // TODO: real publish date (ISO)
    author: "Kids in Tech",
    cover: null, // TODO: /assets/images/...
    tags: ["announcement"],
    body: "[Post body — TODO]",
    published: false,
  },
];

export const publishedNews = news.filter((p) => p.published);

export default news;
