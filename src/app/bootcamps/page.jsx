"use client";
import Breadcrumb from "@/components/Breadcrumb";
import CohortCard from "@/components/CohortCard";
import CtaBanner from "@/components/CtaBanner";
import DecorativeArrow from "@/components/DecorativeArrow";
import SectionHeader from "@/components/SectionHeader";
import SkewPill from "@/components/SkewPill";
import StatCounter from "@/components/StatCounter";
import { bootcamps } from "@/data/bootcamps";
import { site } from "@/data/site";
import { stats } from "@/data/stats";
/*
 * Bootcamps index — hero + cohort grid (status-driven) + impact strip + CTA.
 * Cards come from data/bootcamps.js; the open/upcoming cohort is emphasised
 * automatically via `status`.
 */
import { fadeUp, Reveal, RevealGroup } from "@/lib/motion";
import HeroArr1 from "../../../public/assets/images/heroArr1.svg";

// Show the current (open/upcoming) cohort first, then ended newest-first.
const order = { open: 0, upcoming: 0, ended: 1 };
const sortedCohorts = [...bootcamps].sort(
  (a, b) => order[a.status] - order[b.status] || b.cohort - a.cohort,
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://kidsintech.school",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Bootcamps",
      item: "https://kidsintech.school/bootcamps",
    },
  ],
};

export default function BootcampsPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD from local data.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="bg-cream px-4 sm:px-8 lg:px-[160px] pt-10 pb-16 lg:pb-20">
        <div className="container relative flex flex-col items-center gap-6 text-center">
          <DecorativeArrow
            src={HeroArr1}
            width={110}
            height={78}
            className="hidden lg:block absolute top-0 right-[8%] opacity-70"
          />
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Bootcamps" }]}
          />
          <Reveal variant={fadeUp}>
            <SkewPill bg="bg-gold" text="text-brown">
              Our Bootcamps
            </SkewPill>
          </Reveal>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-maroon leading-tight max-w-3xl">
            Hands-on tech bootcamps for ages {site.ages}
          </h1>
          <Reveal
            as="p"
            variant={fadeUp}
            custom={1}
            className="text-base sm:text-lg lg:text-xl text-ink max-w-2xl"
          >
            Every cohort is a few joyful weeks of coding, design and STEM —
            ending with real projects and a certificate. See where we've been,
            and join what's next.
          </Reveal>
        </div>
      </section>

      {/* Cohort grid */}
      <section
        className="bg-cream px-4 sm:px-8 lg:px-[160px] pb-16 lg:pb-24"
        aria-labelledby="cohorts-heading"
      >
        <div className="container flex flex-col gap-10">
          <SectionHeader
            eyebrow="All Cohorts"
            title="Browse our bootcamp cohorts"
            headingId="cohorts-heading"
            pillBg="bg-tint-lime"
          />
          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCohorts.map((c, i) => (
              <Reveal key={c.slug} variant={fadeUp} custom={i} className="flex">
                <CohortCard cohort={c} />
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Impact strip */}
      <section
        className="bg-maroon px-4 sm:px-8 lg:px-[160px] py-14"
        aria-label="Bootcamp impact"
      >
        <RevealGroup className="container grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <Reveal
              key={s.id}
              variant={fadeUp}
              className="flex flex-col items-center gap-1"
            >
              <span className="text-4xl lg:text-5xl font-bold text-gold tabular-nums">
                <StatCounter value={s.value} suffix={s.suffix} />
              </span>
              <span className="text-sm text-cream/80">{s.label}</span>
            </Reveal>
          ))}
        </RevealGroup>
      </section>

      {/* CTA */}
      <CtaBanner
        title="Ready to join the next cohort?"
        subtitle="Registration is open — secure your child's spot for the upcoming bootcamp."
        primaryLabel="Register Now!"
        primaryHref={site.registrationUrl}
        secondaryLabel="Explore programs"
        secondaryHref="/programs"
      />
    </div>
  );
}
