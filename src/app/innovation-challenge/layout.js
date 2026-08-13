import { challenge } from "@/data/challenge";

const baseUrl = "https://kidsintech.school";

export const metadata = {
  title: "Innovation Challenge",
  description:
    "The Kids in Tech STEM Innovation Challenge — young makers ages 8–18 pitch and build creative tech solutions to real problems. Tracks in Scratch, web, robotics and AI.",
  keywords: [
    "kids innovation challenge",
    "youth tech competition",
    "STEM challenge Nigeria",
    "kids hackathon",
    "student tech contest",
  ],
  alternates: { canonical: "/innovation-challenge" },
  openGraph: {
    title: "Innovation Challenge | Kids in Tech",
    description:
      "Young makers pitch and build creative tech solutions. Tracks in Scratch, web, robotics and AI.",
    url: `${baseUrl}/innovation-challenge`,
    images: [
      {
        url: "/assets/images/heroImg4.avif",
        width: 1200,
        height: 630,
        alt: "Kids in Tech Innovation Challenge",
      },
    ],
  },
  twitter: {
    title: "Innovation Challenge | Kids in Tech",
    description: "The Kids in Tech STEM Innovation Challenge for ages 8–18.",
    images: ["/assets/images/heroImg4.avif"],
  },
};

const start = challenge.timeline?.find((t) => t.date)?.date || null;
const end =
  [...(challenge.timeline || [])].reverse().find((t) => t.date)?.date || null;

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: challenge.title,
  description: challenge.overview,
  url: `${baseUrl}/innovation-challenge`,
  ...(start ? { startDate: start } : {}),
  ...(end ? { endDate: end } : {}),
  eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
  eventStatus:
    challenge.status === "open"
      ? "https://schema.org/EventScheduled"
      : challenge.status === "closed"
        ? "https://schema.org/EventCancelled"
        : "https://schema.org/EventScheduled",
  location: { "@type": "Place", name: "Nigeria" },
  organizer: { "@type": "Organization", name: "Kids in Tech", url: baseUrl },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "Innovation Challenge",
      item: `${baseUrl}/innovation-challenge`,
    },
  ],
};

export default function InnovationChallengeLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD from local data.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
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
