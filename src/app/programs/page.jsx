"use client";
import { ArrowRight, Award, GraduationCap } from "lucide-react";
/*
 * Programs — the full 4-track learning-path page (Batch 04).
 * Structure: intro hero → pathway overview (reused Home LearningPathway,
 * showCta off) → per-track detail sections (#slug anchors) → progression +
 * certificate explainer → closing CTA. Data-driven from src/data/programs.js.
 */
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import DecorativeArrow from "@/components/DecorativeArrow";
import SectionHeader from "@/components/SectionHeader";
import SkewPill from "@/components/SkewPill";
import TrackSection from "@/components/TrackSection";
import LearningPathway from "@/components/views/home/LearningPathway";
import { programs } from "@/data/programs";
import { site } from "@/data/site";
import { fadeUp, Reveal, RevealGroup } from "@/lib/motion";
import HeroArr1 from "../../../public/assets/images/heroArr1.svg";
import HeroArr2 from "../../../public/assets/images/heroArr2.svg";

export default function ProgramsPage() {
  return (
    <div>
      {/* 1. Intro hero */}
      <section className="bg-cream px-4 sm:px-8 lg:px-[160px] pt-10 pb-16 lg:pb-24">
        <div className="container relative flex flex-col items-center gap-6 text-center">
          <DecorativeArrow
            src={HeroArr1}
            width={120}
            height={84}
            className="hidden lg:block absolute top-0 right-[6%] opacity-70"
          />
          <DecorativeArrow
            src={HeroArr2}
            width={90}
            height={120}
            className="hidden lg:block absolute top-6 left-[4%] opacity-70"
          />

          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Programs" }]}
            className="self-center"
          />

          <Reveal variant={fadeUp}>
            <SkewPill bg="bg-gold" text="text-brown">
              Our Learning Path
            </SkewPill>
          </Reveal>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-maroon leading-tight max-w-3xl">
            Four levels. One journey from curious to creator.
          </h1>
          <Reveal
            as="p"
            variant={fadeUp}
            custom={1}
            className="text-base sm:text-lg lg:text-xl text-ink max-w-2xl"
          >
            Kids ages {site.ages} progress step by step — from visual coding in
            Scratch, to building for the web, to robotics, and finally an
            Advanced Track in AI, game and mobile app development.
          </Reveal>

          <Reveal
            variant={fadeUp}
            custom={2}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href={site.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red text-paper px-8 py-4 font-bold text-lg transition-all duration-150 hover:bg-ink active:scale-[0.98]"
            >
              Join the next bootcamp
            </Link>
            <Link
              href="/bootcamps"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-maroon text-maroon px-8 py-4 font-bold text-lg transition-all duration-150 hover:bg-maroon hover:text-cream active:scale-[0.98]"
            >
              See bootcamps
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 2. Pathway overview (reused Home component; CTA hidden here) */}
      <LearningPathway
        showCta={false}
        eyebrow="The Pathway"
        title="How the four levels connect"
        subtitle="Tap any level to jump to its details below."
      />

      {/* 3. Per-track detail sections (anchors = slug) */}
      {programs.map((p, i) => (
        <TrackSection
          key={p.slug}
          program={p}
          index={i}
          isLast={i === programs.length - 1}
        />
      ))}

      {/* 4. Progression + certificate model */}
      <section
        className="bg-tint-lime px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
        aria-labelledby="progression-heading"
      >
        <div className="container flex flex-col items-center gap-10">
          <SectionHeader
            eyebrow="How it works"
            title="Progress level by level — and earn your certificate"
            headingId="progression-heading"
            pillBg="bg-gold"
          />
          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <Reveal
              variant={fadeUp}
              className="flex flex-col gap-3 rounded-4xl bg-white border border-hairline p-6"
            >
              <ArrowRight
                className="w-8 h-8 text-brand-red"
                aria-hidden="true"
              />
              <h3 className="text-lg font-bold text-maroon">
                Move up as you grow
              </h3>
              <p className="text-sm text-ink/80">
                Each level builds on the last. Beginners start at Scratch;
                confident coders can move faster toward the Advanced Track.
              </p>
            </Reveal>
            <Reveal
              variant={fadeUp}
              className="flex flex-col gap-3 rounded-4xl bg-white border border-hairline p-6"
            >
              <Award
                className="w-8 h-8 text-green-success"
                aria-hidden="true"
              />
              <h3 className="text-lg font-bold text-maroon">
                Certificate of Participation
              </h3>
              <p className="text-sm text-ink/80">
                Every learner who takes part receives a Certificate of
                Participation to celebrate their work.
              </p>
            </Reveal>
            <Reveal
              variant={fadeUp}
              className="flex flex-col gap-3 rounded-4xl bg-white border border-hairline p-6"
            >
              <GraduationCap
                className="w-8 h-8 text-teal-active"
                aria-hidden="true"
              />
              <h3 className="text-lg font-bold text-maroon">
                Completion via KITOS
              </h3>
              <p className="text-sm text-ink/80">
                A Certificate of Completion is coming through KITOS, our
                upcoming learning platform.
              </p>
              <Link
                href="/kitos"
                className="text-sm font-semibold text-teal-active hover:underline"
              >
                Learn about KITOS →
              </Link>
            </Reveal>
          </RevealGroup>
        </div>
      </section>

      {/* 5. Closing CTA */}
      <CtaBanner
        title="Find your level and start building"
        subtitle="Beginner or advanced, there's a track for every young maker aged 8–18."
        primaryLabel="Register Now!"
        secondaryLabel="See bootcamps"
        secondaryHref="/bootcamps"
      />
    </div>
  );
}
