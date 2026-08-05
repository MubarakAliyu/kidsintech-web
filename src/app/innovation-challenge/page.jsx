"use client";
/*
 * Innovation Challenge (8A) — hero (status-driven CTA) → overview → tracks →
 * timeline → prizes → judges & sponsors → rules accordion → registration CTA.
 * Renders only sections that have data. Reuses SectionHeader, Timeline,
 * Accordion, LogoGrid, PrizeCard, NotifyForm, CtaBanner, Breadcrumb.
 */
import Link from "next/link";
import Accordion from "@/components/Accordion";
import Breadcrumb from "@/components/Breadcrumb";
import DecorativeArrow from "@/components/DecorativeArrow";
import LogoGrid from "@/components/LogoGrid";
import NotifyForm from "@/components/NotifyForm";
import PrizeCard from "@/components/PrizeCard";
import SectionHeader from "@/components/SectionHeader";
import SkewPill from "@/components/SkewPill";
import Timeline from "@/components/Timeline";
import { challenge } from "@/data/challenge";
import { site } from "@/data/site";
import { fadeUp, Reveal, RevealGroup } from "@/lib/motion";
import HeroArr1 from "../../../public/assets/images/heroArr1.svg";
import HeroArr2 from "../../../public/assets/images/heroArr2.svg";

const STATUS_LABEL = {
  "coming-soon": "Coming soon",
  open: "Now open",
  closed: "Closed",
};
const sponsorMailto = `mailto:${site.email}?subject=${encodeURIComponent("Sponsorship Enquiry — Innovation Challenge")}`;

export default function InnovationChallengePage() {
  const isOpen = challenge.status === "open";

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
          <DecorativeArrow
            src={HeroArr2}
            width={80}
            height={110}
            className="hidden lg:block absolute top-6 left-[4%] opacity-70"
          />
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Innovation Challenge" },
            ]}
          />
          <Reveal variant={fadeUp}>
            <SkewPill bg="bg-gold" text="text-brown">
              {STATUS_LABEL[challenge.status] || "Event"}
            </SkewPill>
          </Reveal>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-maroon leading-tight max-w-3xl">
            {challenge.title}
          </h1>
          <Reveal
            as="p"
            variant={fadeUp}
            custom={1}
            className="text-base sm:text-lg lg:text-xl text-ink max-w-2xl"
          >
            {challenge.tagline}
          </Reveal>
          <Reveal
            variant={fadeUp}
            custom={2}
            className="w-full flex justify-center"
          >
            {isOpen ? (
              <Link
                href={challenge.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red text-paper px-8 py-4 font-bold text-lg transition-all duration-150 hover:bg-ink active:scale-[0.98]"
              >
                Register your project
              </Link>
            ) : (
              <NotifyForm
                subject="Innovation Challenge"
                buttonLabel="Notify me"
              />
            )}
          </Reveal>
        </div>
      </section>

      {/* 2. Overview */}
      {challenge.overview && (
        <section
          className="bg-white px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
          aria-labelledby="challenge-overview"
        >
          <div className="container flex flex-col items-center gap-6 text-center">
            <SectionHeader
              eyebrow="The Challenge"
              title="Build something that matters"
              headingId="challenge-overview"
              pillBg="bg-tint-lime"
            />
            <p className="text-base sm:text-lg text-ink max-w-2xl">
              {challenge.overview}
            </p>
          </div>
        </section>
      )}

      {/* 3. Tracks */}
      {challenge.tracks?.length > 0 && (
        <section
          className="bg-tint-lime px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
          aria-labelledby="challenge-tracks"
        >
          <div className="container flex flex-col items-center gap-10">
            <SectionHeader
              eyebrow="Tracks"
              title="Choose your challenge track"
              headingId="challenge-tracks"
              pillBg="bg-gold"
            />
            <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {challenge.tracks.map((t) => (
                <Reveal key={t.name} variant={fadeUp} className="flex">
                  <Link
                    href={`/programs#${t.programSlug}`}
                    className="group flex flex-col gap-2 rounded-4xl bg-white border border-hairline p-6 w-full transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg"
                  >
                    <h3 className="text-lg font-bold text-maroon">{t.name}</h3>
                    <p className="text-sm text-ink/75">{t.blurb}</p>
                    <span className="mt-1 text-sm font-semibold text-brand-red group-hover:underline">
                      Explore the track →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* 4. Timeline */}
      {challenge.timeline?.length > 0 && (
        <section
          className="bg-cream px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
          aria-labelledby="challenge-timeline"
        >
          <div className="container flex flex-col items-center gap-10">
            <SectionHeader
              eyebrow="Timeline"
              title="How the Challenge unfolds"
              headingId="challenge-timeline"
              pillBg="bg-tint-blue"
            />
            <Timeline items={challenge.timeline} />
          </div>
        </section>
      )}

      {/* 5. Prizes */}
      {challenge.prizes?.length > 0 && (
        <section
          className="bg-tint-peach px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
          aria-labelledby="challenge-prizes"
        >
          <div className="container flex flex-col items-center gap-10">
            <SectionHeader
              eyebrow="Prizes"
              title="Recognising the best builds"
              headingId="challenge-prizes"
              pillBg="bg-gold"
            />
            <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {challenge.prizes.map((p, i) => (
                <Reveal
                  key={p.place}
                  variant={fadeUp}
                  custom={i}
                  className="flex"
                >
                  <PrizeCard prize={p} index={i} />
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* 6. Judges & Sponsors */}
      {(challenge.judges?.length > 0 || challenge.sponsors?.length > 0) && (
        <section
          className="bg-white px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
          aria-labelledby="challenge-people"
        >
          <div className="container flex flex-col items-center gap-12">
            <SectionHeader
              eyebrow="Judges & Sponsors"
              title="The people behind the Challenge"
              headingId="challenge-people"
              pillBg="bg-tint-lime"
            />
            {challenge.judges?.length > 0 && (
              <div className="w-full flex flex-col items-center gap-4">
                <h3 className="text-xl font-bold text-maroon">Judges</h3>
                <LogoGrid
                  items={challenge.judges.map((j) => ({
                    name: j.name,
                    logo: j.photo,
                    subtitle: j.role,
                  }))}
                />
              </div>
            )}
            {challenge.sponsors?.length > 0 && (
              <div className="w-full flex flex-col items-center gap-4">
                <h3 className="text-xl font-bold text-maroon">Sponsors</h3>
                <LogoGrid
                  items={challenge.sponsors}
                  columns="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                />
                <Reveal variant={fadeUp}>
                  <a
                    href={sponsorMailto}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-maroon text-maroon px-6 py-3 font-bold transition-all duration-150 hover:bg-maroon hover:text-cream active:scale-[0.98]"
                  >
                    Become a sponsor
                  </a>
                </Reveal>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 7. Rules & eligibility */}
      {challenge.rules?.length > 0 && (
        <section
          className="bg-tint-blue px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
          aria-labelledby="challenge-rules"
        >
          <div className="container flex flex-col items-center gap-8 max-w-3xl">
            <SectionHeader
              eyebrow="Rules & Eligibility"
              title="The details"
              subtitle={challenge.eligibility}
              headingId="challenge-rules"
              pillBg="bg-white"
            />
            <Accordion items={challenge.rules} idPrefix="rules" />
          </div>
        </section>
      )}

      {/* 8. Registration CTA */}
      <section className="bg-maroon px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24">
        <div className="container flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight">
            Ready to take on the Challenge?
          </h2>
          <p className="text-base sm:text-lg text-cream/85 max-w-2xl">
            {isOpen
              ? "Registration is open — pick a track and start building."
              : "Registration isn't open yet — leave your email and we'll tell you the moment it is."}
          </p>
          {isOpen ? (
            <Link
              href={challenge.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red text-paper px-8 py-4 font-bold text-lg transition-all duration-150 hover:brightness-95 active:scale-[0.98]"
            >
              Register your project
            </Link>
          ) : (
            <NotifyForm
              subject="Innovation Challenge"
              buttonLabel="Notify me"
            />
          )}
        </div>
      </section>
    </div>
  );
}
