/*
 * news.js — News/Blog posts (Batch 09).
 * PLACEHOLDER data. `slug` drives /news/[slug]. `cover` null → components
 * render an on-brand placeholder tile.
 */
export const news = [
  {
    slug: "placeholder-post-1",
    title: "[Cohort 4 announcement — TODO]",
    excerpt: "[One-line excerpt — TODO]",
    date: "2026-06-01",
    author: "Kids in Tech",
    category: "Announcement",
    cover: null,
    tags: ["announcement"],
    body: "[Post body — TODO]",
    published: true,
  },
  {
    slug: "placeholder-post-2",
    title: "[Graduation recap — TODO]",
    excerpt: "[One-line excerpt — TODO]",
    date: "2026-04-15",
    author: "Kids in Tech",
    category: "Event",
    cover: null,
    tags: ["event"],
    body: "[Post body — TODO]",
    published: true,
  },
  {
    slug: "placeholder-post-3",
    title: "[Partner school spotlight — TODO]",
    excerpt: "[One-line excerpt — TODO]",
    date: "2026-03-02",
    author: "Kids in Tech",
    category: "Community",
    cover: null,
    tags: ["community"],
    body: "[Post body — TODO]",
    published: true,
  },
];

export const publishedNews = news
  .filter((p) => p.published)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export const latestNews = publishedNews.slice(0, 3);

export default news;
