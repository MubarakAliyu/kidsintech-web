/*
 * robots.js — build-time robots.txt for the static export (Next writes it to
 * out/robots.txt). Allows all crawlers and points to the sitemap.
 */
const baseUrl = "https://kidsintech.school";

// Required for metadata routes under `output: export`.
export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
