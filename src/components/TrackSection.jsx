"use client";
import { Award, Clock, ListChecks, Users } from "lucide-react";
/*
 * TrackSection — one learning-track detail block (Programs page). Anchor id
 * = program.slug with scroll-margin-top so the sticky header never covers
 * the title when deep-linked (#slug). Zig-zag media/text layout that stacks
 * on mobile. Reuses OutcomeChip / ProjectCard and the shared motion utils.
 */
import Image from "next/image";
import DecorativeArrow from "@/components/DecorativeArrow";
import OutcomeChip from "@/components/OutcomeChip";
import ProjectCard from "@/components/ProjectCard";
import { fadeUp, Reveal, RevealGroup } from "@/lib/motion";
import Brain from "../../public/assets/images/brain.svg";
import Computer from "../../public/assets/images/computer.svg";
import Html from "../../public/assets/images/html.svg";
import OutcomeArr from "../../public/assets/images/outcome-arr-1.svg";
import Rocket from "../../public/assets/images/rocket.svg";

const ICONS = { brain: Brain, html: Html, computer: Computer, rocket: Rocket };
const TINT = {
  "tint-butter": "bg-tint-butter",
  "tint-lime": "bg-tint-lime",
  "tint-blue": "bg-tint-blue",
  "tint-peach": "bg-tint-peach",
};

export default function TrackSection({ program, index = 0, isLast = false }) {
  const Icon = ICONS[program.icon] || Brain;
  const tile = TINT[program.colorToken] || "bg-tint-lime";
  const mediaRight = index % 2 === 1; // zig-zag
  const sectionBg = index % 2 === 1 ? "bg-cream" : "bg-white";

  const meta = [
    { icon: Clock, label: "Duration", value: program.duration },
    { icon: Users, label: "Ages", value: program.ages },
    { icon: ListChecks, label: "Prerequisites", value: program.prerequisites },
  ];

  return (
    <section
      id={program.slug}
      className={`scroll-mt-28 lg:scroll-mt-32 ${sectionBg} px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24`}
      aria-labelledby={`${program.slug}-title`}
    >
      <div className="container relative flex flex-col gap-10">
        {/* Media + intro (zig-zag) */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Media tile */}
          <Reveal
            variant={fadeUp}
            className={`${mediaRight ? "lg:order-2" : ""} w-full`}
          >
            <div
              className={`group relative w-full aspect-[4/3] rounded-4xl overflow-hidden ${tile} grid place-items-center`}
            >
              {program.image ? (
                <Image
                  src={program.image}
                  alt={`${program.name} track`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="flex flex-col items-center gap-4 text-maroon/70">
                  <span className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white/70">
                    <Image
                      src={Icon}
                      alt=""
                      aria-hidden="true"
                      width={48}
                      height={48}
                    />
                  </span>
                  <span className="text-6xl font-bold text-maroon/20">
                    0{program.level}
                  </span>
                </div>
              )}
            </div>
          </Reveal>

          {/* Intro text */}
          <div
            className={`${mediaRight ? "lg:order-1" : ""} flex flex-col gap-4`}
          >
            <Reveal variant={fadeUp}>
              <span className="inline-block rounded-full bg-maroon/5 px-4 py-1.5 text-sm font-semibold text-brown">
                Level {program.level} · {program.stage}
              </span>
            </Reveal>
            <Reveal
              as="h2"
              variant={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl font-bold text-maroon leading-tight"
            >
              <span id={`${program.slug}-title`}>{program.name}</span>
            </Reveal>
            <Reveal
              as="p"
              variant={fadeUp}
              custom={2}
              className="text-lg text-brand-red font-semibold"
            >
              {program.focus}
            </Reveal>
            <Reveal
              as="p"
              variant={fadeUp}
              custom={3}
              className="text-base sm:text-lg text-ink leading-relaxed"
            >
              {program.overview}
            </Reveal>

            {/* Meta row */}
            <RevealGroup className="flex flex-wrap gap-3 pt-2">
              {meta.map((m) => (
                <Reveal
                  key={m.label}
                  variant={fadeUp}
                  className="flex items-center gap-2 rounded-2xl bg-white border border-hairline px-3 py-2"
                >
                  <m.icon
                    className="w-4 h-4 text-brand-red shrink-0"
                    aria-hidden="true"
                  />
                  <span className="flex flex-col leading-tight">
                    <span className="text-[11px] uppercase tracking-wide text-ink/50">
                      {m.label}
                    </span>
                    <span className="text-sm font-semibold text-maroon">
                      {m.value}
                    </span>
                  </span>
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </div>

        {/* Outcomes */}
        <div className="flex flex-col gap-4">
          <Reveal
            as="h3"
            variant={fadeUp}
            className="text-xl font-bold text-maroon"
          >
            What you'll learn
          </Reveal>
          <RevealGroup className="flex flex-wrap gap-3">
            {program.outcomes.map((o) => (
              <Reveal key={o} variant={fadeUp}>
                <OutcomeChip>{o}</OutcomeChip>
              </Reveal>
            ))}
          </RevealGroup>
        </div>

        {/* Specializations (Advanced Track) */}
        {program.specializations && (
          <div className="flex flex-col gap-4">
            <Reveal
              as="h3"
              variant={fadeUp}
              className="text-xl font-bold text-maroon"
            >
              Choose a specialization
            </Reveal>
            <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {program.specializations.map((s) => (
                <Reveal
                  key={s.name}
                  variant={fadeUp}
                  className="flex flex-col gap-2 rounded-4xl bg-white border border-hairline p-6 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg"
                >
                  <h4 className="text-lg font-bold text-maroon">{s.name}</h4>
                  <p className="text-sm text-ink/80">{s.blurb}</p>
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        )}

        {/* Example projects */}
        {program.projects?.length > 0 && (
          <div className="flex flex-col gap-4">
            <Reveal
              as="h3"
              variant={fadeUp}
              className="text-xl font-bold text-maroon"
            >
              Example projects
            </Reveal>
            <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {program.projects.map((p) => (
                <Reveal key={p.title} variant={fadeUp} className="flex">
                  <ProjectCard project={p} placeholderBg={tile} />
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        )}

        {/* Certification note */}
        <Reveal
          variant={fadeUp}
          className="flex items-start gap-3 rounded-4xl bg-tint-lime/50 border border-hairline p-5"
        >
          <Award
            className="w-6 h-6 text-green-success shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p className="text-sm sm:text-base text-maroon">
            <span className="font-semibold">Certification:</span>{" "}
            {program.certification}
          </p>
        </Reveal>

        {/* Decorative arrow into the next track */}
        {!isLast && (
          <DecorativeArrow
            src={OutcomeArr}
            width={120}
            height={50}
            className="hidden lg:block absolute -bottom-14 right-[10%] opacity-70"
          />
        )}
      </div>
    </section>
  );
}
