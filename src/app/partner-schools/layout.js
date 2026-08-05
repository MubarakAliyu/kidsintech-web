const baseUrl = "https://kidsintech.school";

export const metadata = {
  title: "Partner Schools",
  description:
    "Schools partnering with Kids in Tech to bring coding, design and STEM to their students ages 8–18 across Nigeria. See our partners and start a school partnership.",
  keywords: [
    "partner schools",
    "school STEM partnership Nigeria",
    "coding in schools",
    "kids in tech partners",
    "STEM for schools",
  ],
  alternates: { canonical: "/partner-schools" },
  openGraph: {
    title: "Partner Schools | Kids in Tech",
    description:
      "Schools partnering with Kids in Tech to bring coding, design and STEM to their students.",
    url: `${baseUrl}/partner-schools`,
    images: [
      {
        url: "/assets/images/heroImg1.avif",
        width: 1200,
        height: 630,
        alt: "Kids in Tech partner schools",
      },
    ],
  },
  twitter: {
    title: "Partner Schools | Kids in Tech",
    description: "Schools partnering with Kids in Tech.",
    images: ["/assets/images/heroImg1.avif"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "Partner Schools",
      item: `${baseUrl}/partner-schools`,
    },
  ],
};

export default function PartnerSchoolsLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD from local data.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
