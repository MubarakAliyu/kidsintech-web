import { notFound } from "next/navigation";
import CohortDetail from "@/components/views/bootcamps/CohortDetail";
import { bootcamps, currentBootcamp, getBootcamp } from "@/data/bootcamps";

const baseUrl = "https://kidsintech.school";

// Statically generate every cohort page at build time (output: "export").
export function generateStaticParams() {
  return bootcamps.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cohort = getBootcamp(slug);
  if (!cohort) return {};

  const description = `${cohort.title} — ${cohort.overview}`
    .replace(/\s+/g, " ")
    .slice(0, 200);
  const ogImage = `/assets/images/gallerypic${cohort.cohort}.avif`; // real on-disk .avif

  return {
    title: cohort.title,
    description,
    alternates: { canonical: `/bootcamps/${cohort.slug}` },
    openGraph: {
      title: `${cohort.title} | Kids in Tech`,
      description,
      url: `${baseUrl}/bootcamps/${cohort.slug}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: cohort.title }],
    },
    twitter: {
      title: `${cohort.title} | Kids in Tech`,
      description,
      images: [ogImage],
    },
  };
}

function buildJsonLd(cohort) {
  const instance = {
    "@type": "CourseInstance",
    courseMode: "Onsite",
    ...(cohort.startDate ? { startDate: cohort.startDate } : {}),
    ...(cohort.endDate ? { endDate: cohort.endDate } : {}),
    ...(cohort.location && !cohort.location.includes("TODO")
      ? { location: { "@type": "Place", name: cohort.location } }
      : {}),
    ...(cohort.price
      ? {
          offers: {
            "@type": "Offer",
            price: cohort.price.amount,
            priceCurrency: cohort.price.currency,
            availability:
              cohort.status === "ended"
                ? "https://schema.org/SoldOut"
                : "https://schema.org/InStock",
          },
        }
      : {}),
  };

  const course = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: cohort.title,
    description: cohort.overview,
    url: `${baseUrl}/bootcamps/${cohort.slug}`,
    provider: {
      "@type": "EducationalOrganization",
      name: "Kids in Tech",
      url: baseUrl,
      parentOrganization: { "@type": "Organization", name: "StarNova Labs" },
    },
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType: "children",
      suggestedMinAge: 8,
      suggestedMaxAge: 18,
    },
    hasCourseInstance: instance,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bootcamps",
        item: `${baseUrl}/bootcamps`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: cohort.edition,
        item: `${baseUrl}/bootcamps/${cohort.slug}`,
      },
    ],
  };

  return [course, breadcrumb];
}

export default async function CohortPage({ params }) {
  const { slug } = await params;
  const cohort = getBootcamp(slug);
  if (!cohort) notFound();

  const nextCohort =
    currentBootcamp && currentBootcamp.slug !== cohort.slug
      ? currentBootcamp
      : null;
  const jsonLd = buildJsonLd(cohort);

  return (
    <>
      {jsonLd.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD from local data.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <CohortDetail cohort={cohort} nextCohort={nextCohort} />
    </>
  );
}
