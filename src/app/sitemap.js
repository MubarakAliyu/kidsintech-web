/*
 * sitemap.js — build-time sitemap for the static export. Next writes this to
 * out/sitemap.xml. Includes every static route + the dynamic bootcamp and
 * news post routes (from the data layer), so adding a cohort/post updates
 * the sitemap automatically.
 */
import { bootcamps } from "@/data/bootcamps";
import { publishedNews } from "@/data/news";

const baseUrl = "https://kidsintech.school";

// Required for metadata routes under `output: export`.
export const dynamic = "force-static";

const staticRoutes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about-us", priority: 0.8, changeFrequency: "monthly" },
  { path: "/programs", priority: 0.9, changeFrequency: "monthly" },
  { path: "/bootcamps", priority: 0.9, changeFrequency: "weekly" },
  { path: "/student-projects", priority: 0.7, changeFrequency: "monthly" },
  { path: "/innovation-challenge", priority: 0.7, changeFrequency: "monthly" },
  { path: "/gallery", priority: 0.6, changeFrequency: "monthly" },
  { path: "/news", priority: 0.7, changeFrequency: "weekly" },
  { path: "/kitos", priority: 0.6, changeFrequency: "monthly" },
  { path: "/partner-schools", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
];

export default function sitemap() {
  const now = new Date();

  const entries = staticRoutes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  for (const b of bootcamps) {
    entries.push({
      url: `${baseUrl}/bootcamps/${b.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const p of publishedNews) {
    entries.push({
      url: `${baseUrl}/news/${p.slug}`,
      lastModified: p.date ? new Date(p.date) : now,
      changeFrequency: "yearly",
      priority: 0.6,
    });
  }

  return entries;
}
