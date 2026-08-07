/*
 * news.js — News/Blog posts (Batch 09).
 * Content-editable via structured `body` blocks (no MDX pipeline). Block
 * types the renderer supports:
 *   { type: "paragraph", text }
 *   { type: "heading", level: 2|3, text }
 *   { type: "image", src, alt, caption? }   // src = /assets/... public path
 *   { type: "youtube", id, title }          // reused VideoEmbed facade
 *   { type: "quote", text, cite? }
 *   { type: "list", ordered?: bool, items: [] }
 *
 * Post shape: { slug, title, date, author, category, excerpt, cover,
 *   body[], featured, readTime, published, tags }
 * Categories: "Bootcamp Recap" | "Student Story" | "Partnership"
 *   | "STEM Article" | "Company Update" | "Press".
 *
 * PLACEHOLDER content — do not fabricate real quotes/names. TODO: replace.
 */
export const news = [
  {
    slug: "bootcamp-3-recap",
    title: "[Bootcamp 3 Recap — TODO title]",
    date: "2025-08-25",
    author: "Kids in Tech",
    category: "Bootcamp Recap",
    excerpt:
      "[One-line recap of Cohort 3 — three weeks of HTML, CSS and JavaScript. TODO: real excerpt.]",
    cover: "/assets/images/gallerypic1.avif", // TODO: real cover
    featured: true,
    readTime: 4,
    published: true,
    tags: ["bootcamp", "cohort 3"],
    body: [
      {
        type: "paragraph",
        text: "[Intro paragraph — what Cohort 3 was about and who took part. TODO.]",
      },
      { type: "heading", level: 2, text: "Three weeks, one big leap" },
      {
        type: "paragraph",
        text: "[Week-by-week summary: HTML, then CSS, then JavaScript. TODO: real detail.]",
      },
      {
        type: "image",
        src: "/assets/images/gallerypic3.avif",
        alt: "Kids coding during Bootcamp 3",
        caption: "[Caption — TODO]",
      },
      {
        type: "quote",
        text: "[A real, consented quote from a student or parent — TODO. Do not fabricate.]",
        cite: "[Name/role — TODO]",
      },
      { type: "heading", level: 2, text: "What the kids built" },
      {
        type: "list",
        ordered: false,
        items: [
          "[Project 1 — TODO]",
          "[Project 2 — TODO]",
          "[Project 3 — TODO]",
        ],
      },
      {
        type: "paragraph",
        text: "[Closing paragraph + link to the next cohort. TODO.]",
      },
    ],
  },
  {
    slug: "welcome-to-kids-in-tech",
    title: "[Welcome to Kids in Tech — TODO]",
    date: "2025-06-01",
    author: "Kids in Tech",
    category: "Company Update",
    excerpt: "[Who we are and what we're building. TODO: real excerpt.]",
    cover: "/assets/images/gallerypic5.avif",
    featured: false,
    readTime: 3,
    published: true,
    tags: ["about"],
    body: [
      {
        type: "paragraph",
        text: "[Company update / intro post. TODO: real content.]",
      },
      { type: "heading", level: 2, text: "Our mission" },
      { type: "paragraph", text: "[Mission paragraph. TODO.]" },
    ],
  },
  {
    slug: "partnering-with-schools",
    title: "[Partnering with schools — TODO]",
    date: "2025-04-15",
    author: "Kids in Tech",
    category: "Partnership",
    excerpt: "[How we bring bootcamps into schools. TODO: real excerpt.]",
    cover: "/assets/images/gallerypic8.avif",
    featured: false,
    readTime: 3,
    published: true,
    tags: ["partnership", "schools"],
    body: [
      {
        type: "paragraph",
        text: "[Partnership story. TODO: real content, no invented school names.]",
      },
    ],
  },
];

// Categories present (for the reused FilterBar).
const categoryOrder = [
  "Bootcamp Recap",
  "Student Story",
  "Partnership",
  "STEM Article",
  "Company Update",
  "Press",
];
export const newsCategories = categoryOrder.filter((c) =>
  news.some((p) => p.published && p.category === c),
);

export const newsFilters = [
  { key: "all", label: "All", count: news.filter((p) => p.published).length },
  ...newsCategories.map((c) => ({
    key: c,
    label: c,
    count: news.filter((p) => p.published && p.category === c).length,
  })),
];

export const publishedNews = news
  .filter((p) => p.published)
  .sort((a, b) => new Date(b.date) - new Date(a.date));
export const latestNews = publishedNews.slice(0, 3);
export const featuredPost = publishedNews.find((p) => p.featured) || null;

export const getPost = (slug) =>
  news.find((p) => p.slug === slug && p.published) || null;
export const relatedPosts = (post, n = 3) =>
  publishedNews
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, n);

export default news;
