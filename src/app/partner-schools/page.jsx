"use client";
import { MapPin, Users } from "lucide-react";
/*
 * Partner Schools (8B) — hero → schools grid → impact strip (reused
 * StatCounter) → school testimonials (reused carousel) → partnership CTA.
 * Placeholder schools (no invented names). Reuses SectionHeader, StatCounter,
 * TestimonialsCarousel, CtaBanner, Breadcrumb.
 */
import dynamic from "next/dynamic";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import DecorativeArrow from "@/components/DecorativeArrow";
import SectionHeader from "@/components/SectionHeader";
import SkewPill from "@/components/SkewPill";
import StatCounter from "@/components/StatCounter";
import { schools, schoolTestimonials } from "@/data/schools";
import { site } from "@/data/site";
import { stats } from "@/data/stats";
import { fadeUp, Reveal, RevealGroup } from "@/lib/motion";
import HeroArr1 from "../../../public/assets/images/heroArr1.svg";

const TestimonialsCarousel = dynamic(
  () => import("@/components/TestimonialsCarousel"),
);
const partnershipMailto = `mailto:${site.email}?subject=${encodeURIComponent("School Partnership Enquiry")}`;

function SchoolCard({ school }) {
  return (
    <div className="group flex flex-col gap-3 rounded-4xl bg-white border border-hairline p-6 h-full transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg">
      <div className="h-16 flex items-center">
        {school.logo ? (
          <Image
            src={school.logo}
            alt={school.name}
            width={140}
            height={56}
            className="max-h-14 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        ) : (
          <span className="font-bold text-maroon">{school.name}</span>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink/70">
        <span className="inline-flex items-center gap-1">
          <MapPin className="w-4 h-4 text-brand-red" aria-hidden="true" />{" "}
          {school.location}
        </span>
        {school.studentsTrained != null && (
          <span className="inline-flex items-center gap-1">
            <Users className="w-4 h-4 text-brand-red" aria-hidden="true" />{" "}
            {school.studentsTrained} trained
          </span>
        )}
      </div>
      {school.bootcampConducted && (
        <p className="text-sm text-maroon font-semibold">
          {school.bootcampConducted}
        </p>
      )}
      {school.testimonial && (
        <p className="text-sm text-ink/80 italic">“{school.testimonial}”</p>
      )}
    </div>
  );
}

export default function PartnerSchoolsPage() {
  return (
    <div>
      {/* 1. Hero */}
      <section className="bg-cream px-4 sm:px-8 lg:px-[160px] pt-10 pb-16 lg:pb-20">
        <div className="container relative flex flex-col items-center gap-6 text-center">
          <DecorativeArrow
            src={HeroArr1}
            width={110}
            height={78}
            className="hidden lg:block absolute top-0 right-[7%] opacity-70"
          />
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Partner Schools" }]}
          />
          <Reveal variant={fadeUp}>
            <SkewPill bg="bg-gold" text="text-brown">
              Partner Schools
            </SkewPill>
          </Reveal>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-maroon leading-tight max-w-3xl">
            Schools we've worked with
          </h1>
          <Reveal
            as="p"
            variant={fadeUp}
            custom={1}
            className="text-base sm:text-lg lg:text-xl text-ink max-w-2xl"
          >
            We partner with schools to bring coding, design and STEM to their
            students — running bootcamps on-site and growing a community of
            young makers ages {site.ages}.
          </Reveal>
        </div>
      </section>

      {/* 2. Schools grid */}
      {schools.length > 0 && (
        <section
          className="bg-cream px-4 sm:px-8 lg:px-[160px] pb-16 lg:pb-24"
          aria-labelledby="schools-grid-heading"
        >
          <div className="container flex flex-col items-center gap-10">
            <SectionHeader
              eyebrow="Our Partners"
              title="Schools in the community"
              headingId="schools-grid-heading"
              pillBg="bg-tint-lime"
            />
            <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {schools.map((s) => (
                <Reveal key={s.id} variant={fadeUp} className="flex">
                  <SchoolCard school={s} />
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* 3. Impact strip (reused StatCounter) */}
      <section
        className="bg-maroon px-4 sm:px-8 lg:px-[160px] py-14"
        aria-label="Partner-school impact"
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

      {/* 4. School testimonials (reused carousel) */}
      {schoolTestimonials.length > 0 && (
        <section
          className="bg-tint-blue px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
          aria-labelledby="school-testimonials"
        >
          <div className="container flex flex-col items-center gap-10">
            <SectionHeader
              eyebrow="Kind Words"
              title="What schools say"
              headingId="school-testimonials"
              pillBg="bg-white"
            />
            <Reveal variant={fadeUp} className="w-full flex justify-center">
              <TestimonialsCarousel items={schoolTestimonials} />
            </Reveal>
          </div>
        </section>
      )}

      {/* 5. Partnership CTA */}
      <CtaBanner
        title="Bring Kids in Tech to your school"
        subtitle="Partner with us to run coding, design and STEM bootcamps for your students."
        primaryLabel="Start a partnership"
        primaryHref={partnershipMailto}
        secondaryLabel="Contact us"
        secondaryHref="/contact"
      />
    </div>
  );
}
