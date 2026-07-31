import { programs } from "@/data/programs";

const baseUrl = "https://kidsintech.school";

export const metadata = {
  title: "Programs",
  description:
    "Explore the Kids in Tech learning path for ages 8–18: Scratch Programming, Web Development, Robotics & Embedded Systems, and an Advanced Track in AI & Prompt Engineering, Game Development and Mobile App Development.",
  keywords: [
    "kids coding programs",
    "scratch programming for kids",
    "web development for children",
    "robotics for kids",
    "AI for teens",
    "STEM tracks Nigeria",
  ],
  alternates: { canonical: "/programs" },
  openGraph: {
    title: "Programs | Kids in Tech",
    description:
      "Four learning levels for ages 8–18: Scratch, Web Development, Robotics & Embedded Systems, and an Advanced Track (AI, Game Dev, Mobile).",
    url: `${baseUrl}/programs`,
    images: [
      {
        // Real on-disk asset (.avif) — avoids the broken .png OG references.
        url: "/assets/images/heroImg1.avif",
        width: 1200,
        height: 630,
        alt: "Kids in Tech students learning to code",
      },
    ],
  },
  twitter: {
    title: "Programs | Kids in Tech",
    description: "The Kids in Tech 4-level learning path for ages 8–18.",
    images: ["/assets/images/heroImg1.avif"],
  },
};

// Course JSON-LD per track + a Home → Programs breadcrumb.
const courseSchema = programs.map((p) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: `${p.name} — Kids in Tech`,
  description: p.overview,
  url: `${baseUrl}/programs#${p.slug}`,
  provider: {
    "@type": "EducationalOrganization",
    name: "Kids in Tech",
    url: baseUrl,
    parentOrganization: { "@type": "Organization", name: "StarNova Labs" },
  },
  educationalLevel: p.stage,
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
    audienceType: "children",
    suggestedMinAge: 8,
    suggestedMaxAge: 18,
  },
}));

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "Programs",
      item: `${baseUrl}/programs`,
    },
  ],
};

export default function ProgramsLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD built from local data (matches StructuredData.jsx pattern).
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD built from local data.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
