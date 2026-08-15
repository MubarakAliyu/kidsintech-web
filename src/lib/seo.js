/*
 * seo.js — small helper to build consistent per-page metadata. Existing page
 * layouts already export their own `metadata`; new pages (or refactors) can
 * use `buildMetadata` to stay consistent. Keeps the title template, canonical,
 * and OG/Twitter shape in one place.
 *
 *   export const metadata = buildMetadata({
 *     title: "Programs",
 *     description: "...",
 *     path: "/programs",
 *     image: "/assets/images/heroImg1.avif", // real on-disk .avif
 *   });
 */
export const SITE = {
  name: "Kids in Tech",
  baseUrl: "https://kidsintech.school",
  defaultImage: "/assets/images/heroImg1.avif",
  twitter: "@kidsintechkb",
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image = SITE.defaultImage,
  keywords,
  type = "website",
} = {}) {
  const url = `${SITE.baseUrl}${path}`;
  const fullTitle = title
    ? `${title} | ${SITE.name}`
    : `${SITE.name} - Empowering Children Through Technology Education`;
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      type,
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      images: [
        { url: image, width: 1200, height: 630, alt: title || SITE.name },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export default buildMetadata;
