import { featuredProjects, projectTypeLabels } from "@/data/projects";

const baseUrl = "https://kidsintech.school";

export const metadata = {
  title: "Student Projects",
  description:
    "See what Kids in Tech students build — games, websites, robots and apps, created by young makers ages 8–18. Filter by Scratch, web, robotics, AI, game and mobile.",
  keywords: [
    "kids coding projects",
    "student tech projects",
    "kids game development",
    "children web projects",
    "scratch games",
  ],
  alternates: { canonical: "/student-projects" },
  openGraph: {
    title: "Student Projects | Kids in Tech",
    description:
      "Games, websites, robots and apps built by Kids in Tech students ages 8–18.",
    url: `${baseUrl}/student-projects`,
    images: [
      {
        url: "/assets/images/heroImg3.avif",
        width: 1200,
        height: 630,
        alt: "Kids in Tech student projects",
      },
    ],
  },
  twitter: {
    title: "Student Projects | Kids in Tech",
    description: "Projects built by Kids in Tech students ages 8–18.",
    images: ["/assets/images/heroImg3.avif"],
  },
};

// CreativeWork JSON-LD for featured projects (generic — no real names).
const creativeWorks = featuredProjects.map((p) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: p.title,
  genre: projectTypeLabels[p.type] || p.track,
  creator: { "@type": "Person", name: "Kids in Tech student" },
  isPartOf: {
    "@type": "EducationalOrganization",
    name: "Kids in Tech",
    url: baseUrl,
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
      name: "Student Projects",
      item: `${baseUrl}/student-projects`,
    },
  ],
};

export default function StudentProjectsLayout({ children }) {
  return (
    <>
      {creativeWorks.map((cw) => (
        <script
          key={cw.name}
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD from local data.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cw) }}
        />
      ))}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD from local data.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
