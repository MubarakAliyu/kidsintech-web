"use client";
import { Award, Calendar, MapPin, Tag, Users } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
/*
 * CohortDetail — full per-cohort page body. Every section is guarded so
 * only sections with data render. Status (from data) drives the header CTA
 * and whether the countdown shows. Heavy/interactive bits (Countdown,
 * Lightbox, VideoEmbed, TestimonialsCarousel) are dynamically imported.
 */
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import CurriculumWeek from "@/components/CurriculumWeek";
import OutcomeChip from "@/components/OutcomeChip";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import StatusBadge from "@/components/StatusBadge";
import { getGalleryByCohort } from "@/data/gallery";
import { programs } from "@/data/programs";
import projects from "@/data/projects";
import { site } from "@/data/site";
import { testimonials as allTestimonials } from "@/data/testimonials";
import { fadeUp, Reveal, RevealGroup } from "@/lib/motion";

const Countdown = dynamic(() => import("@/components/Countdown"));
const Lightbox = dynamic(() => import("@/components/Lightbox"));
const VideoEmbed = dynamic(() => import("@/components/VideoEmbed"));
const TestimonialsCarousel = dynamic(
  () => import("@/components/TestimonialsCarousel"),
);

const fmtDate = (d) =>
  d
    ? new Date(d).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

export default function CohortDetail({ cohort, nextCohort }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const isEnded = cohort.status === "ended";
  const gallery = getGalleryByCohort(cohort.galleryCohort);
  const cohortProjects = projects.filter((p) =>
    (cohort.projectRefs || []).includes(p.slug),
  );
  const cohortTestimonials = allTestimonials.filter((t) =>
    (cohort.testimonialRefs || []).includes(t.id),
  );
  const outcomes = [
    ...new Set(
      programs
        .filter((p) => (cohort.tracks || []).includes(p.slug))
        .flatMap((p) => p.outcomes),
    ),
  ];

  const facts = [
    {
      icon: Calendar,
      label: "Dates",
      value: fmtDate(cohort.startDate)
        ? `${fmtDate(cohort.startDate)}${cohort.endDate ? ` – ${fmtDate(cohort.endDate)}` : ""}`
        : "To be announced",
    },
    { icon: Users, label: "Ages", value: cohort.ages },
    { icon: Tag, label: "Fee", value: cohort.price?.label || "Free" },
    { icon: MapPin, label: "Venue", value: cohort.location },
  ];

  return (
    <div>
      {/* 1. Header */}
      <section
        className="bg-cream px-4 sm:px-8 lg:px-[160px] pt-8 pb-12 lg:pb-16"
        aria-labelledby="cohort-heading"
      >
        <div className="container flex flex-col gap-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Bootcamps", href: "/bootcamps" },
              { label: cohort.edition },
            ]}
          />
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-brown">
                {cohort.edition}
              </span>
              <StatusBadge status={cohort.status} />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-maroon leading-tight">
              <span id="cohort-heading">{cohort.title}</span>
            </h1>
          </div>

          {/* Facts */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {facts.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 rounded-2xl bg-white border border-hairline px-4 py-3"
              >
                <f.icon
                  className="w-5 h-5 text-brand-red shrink-0"
                  aria-hidden="true"
                />
                <span className="flex flex-col leading-tight">
                  <span className="text-[11px] uppercase tracking-wide text-ink/50">
                    {f.label}
                  </span>
                  <span className="text-sm font-semibold text-maroon">
                    {f.value}
                  </span>
                </span>
              </div>
            ))}
          </div>

          {/* Header CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {isEnded ? (
              <>
                <span className="text-maroon font-semibold">
                  This cohort has ended.
                </span>
                {nextCohort && (
                  <Link
                    href={`/bootcamps/${nextCohort.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-red text-paper px-6 py-3 font-bold transition-all duration-150 hover:bg-ink active:scale-[0.98]"
                  >
                    Join the next cohort
                  </Link>
                )}
              </>
            ) : (
              <Link
                href={site.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-red text-paper px-8 py-4 font-bold text-lg transition-all duration-150 hover:bg-ink active:scale-[0.98]"
              >
                Register Now!
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* 2. Countdown (open/upcoming only) */}
      {!isEnded && (
        <section
          className="bg-tint-peach px-4 sm:px-8 lg:px-[160px] py-12"
          aria-label="Countdown to start"
        >
          <div className="container flex flex-col items-center gap-4 text-center">
            {cohort.startDate ? (
              <>
                <p className="text-lg font-semibold text-maroon">Starts in</p>
                <Countdown
                  date={cohort.startDate}
                  endedLabel="This cohort has ended — join the next one"
                />
              </>
            ) : (
              <div className="inline-flex items-center rounded-full bg-maroon/10 px-5 py-3">
                <span className="font-semibold text-maroon">
                  Dates to be announced — register your interest now
                </span>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 3. Overview + highlights */}
      {(cohort.overview || cohort.highlights?.length > 0) && (
        <section
          className="bg-white px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
          aria-labelledby="overview-heading"
        >
          <div className="container flex flex-col items-center gap-8">
            <SectionHeader
              eyebrow="Overview"
              title="What this cohort is about"
              subtitle={cohort.overview}
              headingId="overview-heading"
              pillBg="bg-tint-lime"
            />
            {cohort.highlights?.length > 0 && (
              <RevealGroup className="flex flex-wrap justify-center gap-3">
                {cohort.highlights.map((h) => (
                  <Reveal key={h} variant={fadeUp}>
                    <span className="inline-flex items-center gap-2 rounded-full bg-tint-butter px-4 py-2 text-sm font-semibold text-brown transition-transform duration-150 hover:scale-[1.03]">
                      {h}
                    </span>
                  </Reveal>
                ))}
              </RevealGroup>
            )}
          </div>
        </section>
      )}

      {/* 4. Curriculum */}
      {cohort.curriculumWeeks?.length > 0 && (
        <section
          className="bg-tint-blue px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
          aria-labelledby="curriculum-heading"
        >
          <div className="container flex flex-col items-center gap-10">
            <SectionHeader
              eyebrow="Curriculum"
              title="Week by week"
              headingId="curriculum-heading"
              pillBg="bg-white"
            />
            <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {cohort.curriculumWeeks.map((w) => (
                <Reveal key={w.week} variant={fadeUp} className="flex">
                  <CurriculumWeek week={w} />
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* 5. Gallery */}
      {gallery.length > 0 && (
        <section
          className="bg-cream px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
          aria-labelledby="cohort-gallery-heading"
        >
          <div className="container flex flex-col items-center gap-10">
            <SectionHeader
              eyebrow="Gallery"
              title="Moments from this cohort"
              headingId="cohort-gallery-heading"
              pillBg="bg-gold"
            />
            <RevealGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
              {gallery.map((img, i) => (
                <Reveal key={img.id} variant={fadeUp} className="flex">
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    aria-label={`Open photo ${i + 1} of ${gallery.length}`}
                    className="group relative w-full aspect-square overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-brand-red"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      placeholder="blur"
                    />
                  </button>
                </Reveal>
              ))}
            </RevealGroup>
          </div>
          <Lightbox
            items={gallery}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onIndexChange={setLightboxIndex}
          />
        </section>
      )}

      {/* 6. Videos */}
      {cohort.videos?.length > 0 && (
        <section
          className="bg-white px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
          aria-labelledby="videos-heading"
        >
          <div className="container flex flex-col items-center gap-10">
            <SectionHeader
              eyebrow="Videos"
              title="Watch the highlights"
              headingId="videos-heading"
              pillBg="bg-tint-lime"
            />
            <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {cohort.videos.map((v) => (
                <Reveal key={v.id} variant={fadeUp}>
                  <VideoEmbed id={v.id} title={v.title} />
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* 7. Student projects */}
      {cohortProjects.length > 0 && (
        <section
          className="bg-tint-lime px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
          aria-labelledby="cohort-projects-heading"
        >
          <div className="container flex flex-col items-center gap-10">
            <SectionHeader
              eyebrow="Student Projects"
              title="What they built"
              headingId="cohort-projects-heading"
              pillBg="bg-gold"
            />
            <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {cohortProjects.map((p) => (
                <Reveal key={p.slug} variant={fadeUp} className="flex">
                  <ProjectCard
                    project={{
                      title: p.title,
                      thumbnail: p.thumbnail,
                      trackLabel: p.trackLabel,
                    }}
                    href="/student-projects"
                  />
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* 8. Testimonials */}
      {cohortTestimonials.length > 0 && (
        <section
          className="bg-tint-blue px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
          aria-labelledby="cohort-testimonials-heading"
        >
          <div className="container flex flex-col items-center gap-10">
            <SectionHeader
              eyebrow="Kind Words"
              title="From this cohort"
              headingId="cohort-testimonials-heading"
              pillBg="bg-white"
            />
            <Reveal variant={fadeUp} className="w-full flex justify-center">
              <TestimonialsCarousel items={cohortTestimonials} />
            </Reveal>
          </div>
        </section>
      )}

      {/* 9. Certificates */}
      <section
        className="bg-white px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
        aria-labelledby="cert-heading"
      >
        <div className="container flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col gap-4">
            <SectionHeader
              as="h2"
              eyebrow="Certificate"
              title="Recognising every learner"
              headingId="cert-heading"
              align="start"
              pillBg="bg-tint-butter"
            />
            <p className="text-base sm:text-lg text-ink">
              {cohort.certificateNote}
            </p>
            <Link
              href="/kitos"
              className="text-sm font-semibold text-teal-active hover:underline w-fit"
            >
              Learn about Certificates of Completion via KITOS →
            </Link>
          </div>
          <div className="flex-1 w-full">
            <div className="relative w-full aspect-[4/3] rounded-4xl overflow-hidden bg-tint-lime grid place-items-center">
              {cohort.certificateImage ? (
                <Image
                  src={cohort.certificateImage}
                  alt={`${cohort.edition} certificate`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-maroon/40">
                  <Award className="w-12 h-12" aria-hidden="true" />
                  <span className="text-sm">Certificate sample — TODO</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Outcomes */}
      {outcomes.length > 0 && (
        <section
          className="bg-tint-pale px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
          aria-labelledby="cohort-outcomes-heading"
        >
          <div className="container flex flex-col items-center gap-8">
            <SectionHeader
              eyebrow="Outcomes"
              title="What kids gain"
              headingId="cohort-outcomes-heading"
              pillBg="bg-gold"
            />
            <RevealGroup className="flex flex-wrap justify-center gap-3">
              {outcomes.map((o) => (
                <Reveal key={o} variant={fadeUp}>
                  <OutcomeChip>{o}</OutcomeChip>
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* 11. CTA */}
      <CtaBanner
        title={isEnded ? "Join the next cohort" : "Secure your child's spot"}
        subtitle={
          isEnded
            ? "This one's a wrap — the next bootcamp is where you come in."
            : "Registration is open for this cohort."
        }
        primaryLabel="Register Now!"
        secondaryLabel="All bootcamps"
        secondaryHref="/bootcamps"
      />
    </div>
  );
}
