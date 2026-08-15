const baseUrl = "https://kidsintech.school";

export const metadata = {
  title: "About Us - Our Story & Mission",
  description:
    "Learn about Kids in Tech's journey from a small family activity to a community-driven initiative — our mission, vision, team, and roadmap to inspire children ages 8–18 through technology education.",
  keywords: [
    "about kids in tech",
    "our story",
    "mission statement",
    "team members",
    "founder story",
    "tech education mission",
    "children coding programs",
    "STEM education Nigeria",
  ],
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About Us - Our Story & Mission | Kids in Tech",
    description:
      "Kids in Tech's journey, mission, vision, team and roadmap — a STEM program by StarNova Labs for children ages 8–18.",
    url: `${baseUrl}/about-us`,
    images: [
      {
        // Real on-disk .avif (was a missing aboutHeading.png).
        url: "/assets/images/aboutImg1.avif",
        width: 1200,
        height: 630,
        alt: "Kids in Tech team and mission",
      },
    ],
  },
  twitter: {
    title: "About Us - Our Story & Mission | Kids in Tech",
    description: "Kids in Tech's journey, mission, vision, team and roadmap.",
    images: ["/assets/images/aboutImg1.avif"],
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
      name: "About Us",
      item: `${baseUrl}/about-us`,
    },
  ],
};

export default function AboutUsLayout({ children }) {
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
