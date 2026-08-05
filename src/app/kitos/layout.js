const baseUrl = "https://kidsintech.school";

export const metadata = {
  title: "KITOS",
  description:
    "KITOS (Kids in Tech Operating System) — the upcoming Kids in Tech learning platform and home of the Certificate of Completion for young learners ages 8–18. Coming soon.",
  keywords: [
    "KITOS",
    "kids in tech platform",
    "online STEM learning kids",
    "certificate of completion",
    "kids learning platform",
  ],
  alternates: { canonical: "/kitos" },
  openGraph: {
    title: "KITOS | Kids in Tech",
    description:
      "The upcoming Kids in Tech learning platform — where the spark from our bootcamps keeps growing. Coming soon.",
    url: `${baseUrl}/kitos`,
    images: [
      {
        url: "/assets/images/heroImg2.avif",
        width: 1200,
        height: 630,
        alt: "KITOS — Kids in Tech learning platform",
      },
    ],
  },
  twitter: {
    title: "KITOS | Kids in Tech",
    description: "The upcoming Kids in Tech learning platform. Coming soon.",
    images: ["/assets/images/heroImg2.avif"],
  },
};

// SoftwareApplication (not yet released → no offers/price).
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "KITOS — Kids in Tech Operating System",
  description:
    "The upcoming Kids in Tech learning platform: student/parent/teacher portals, an AI tutor, progress tracking, and the Certificate of Completion.",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  url: `${baseUrl}/kitos`,
  publisher: { "@type": "Organization", name: "Kids in Tech", url: baseUrl },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "KITOS",
      item: `${baseUrl}/kitos`,
    },
  ],
};

export default function KitosLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD from local data.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD from local data.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
