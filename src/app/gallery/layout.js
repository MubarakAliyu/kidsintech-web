const baseUrl = "https://kidsintech.school";

export const metadata = {
  title: "Gallery - Kids in Tech Bootcamp Photos & Videos",
  description:
    "Browse the Kids in Tech gallery, organised by cohort and category — coding sessions, robotics, certificates, graduations and more. Moments of curiosity, teamwork and growth from our bootcamps.",
  keywords: [
    "kids in tech gallery",
    "coding bootcamp photos",
    "children learning technology",
    "STEM education gallery",
    "kids programming photos",
    "tech bootcamp Nigeria",
    "coding class pictures",
    "children creativity gallery",
  ],
  openGraph: {
    title: "Gallery - Kids in Tech Bootcamp Photos & Videos",
    description:
      "Photos and videos from our bootcamps, organised by cohort and category — curiosity, teamwork and growth as children build their future in tech.",
    url: `${baseUrl}/gallery`,
    // Real on-disk .avif (was a missing .png).
    images: [
      {
        url: "/assets/images/gallerypic1.avif",
        width: 1200,
        height: 630,
        alt: "Kids in Tech gallery",
      },
    ],
  },
  twitter: {
    title: "Gallery - Kids in Tech Bootcamp Photos & Videos",
    description:
      "Photos and videos from our bootcamps, organised by cohort and category.",
    images: ["/assets/images/gallerypic1.avif"],
  },
  alternates: { canonical: "/gallery" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "Gallery",
      item: `${baseUrl}/gallery`,
    },
  ],
};

const imageGallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Kids in Tech Gallery",
  url: `${baseUrl}/gallery`,
  about:
    "Photos from Kids in Tech coding, design and STEM bootcamps for ages 8–18.",
};

export default function GalleryLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD from local data.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD from local data.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />
      {children}
    </>
  );
}
