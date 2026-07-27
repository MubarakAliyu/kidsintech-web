"use client";
import Image from "next/image";
/*
 * LearningPathway — the 4-level path (Scratch → Web → Robotics → Advanced)
 * as a connected, animated progression. Steps stagger in; each lifts and
 * reveals a short blurb on hover; decorative arrows connect the steps
 * (horizontal on desktop, rotated down on mobile). Each step links to
 * /programs#<slug>.
 */
import Link from "next/link";
import DecorativeArrow from "@/components/DecorativeArrow";
import SectionHeader from "@/components/SectionHeader";
import { programs } from "@/data/programs";
import { fadeUp, Reveal, RevealGroup } from "@/lib/motion";
import Brain from "../../../../public/assets/images/brain.svg";
import PathArrow from "../../../../public/assets/images/codingArr2.svg";
import Computer from "../../../../public/assets/images/computer.svg";
import Html from "../../../../public/assets/images/html.svg";
import Rocket from "../../../../public/assets/images/rocket.svg";

const ICONS = { brain: Brain, html: Html, computer: Computer, rocket: Rocket };
const PILL_BG = {
  "tint-butter": "bg-tint-butter",
  "tint-lime": "bg-tint-lime",
  "tint-blue": "bg-tint-blue",
  "tint-peach": "bg-tint-peach",
};

function Step({ program }) {
  const Icon = ICONS[program.icon] || Brain;
  const pillBg = PILL_BG[program.colorToken] || "bg-gold";
  return (
    <Link
      href={`/programs#${program.slug}`}
      className="group relative flex-1 flex flex-col items-center text-center gap-3 rounded-4xl bg-white border border-hairline p-6 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg hover:border-brand-red/30 focus-visible:outline-2 focus-visible:outline-brand-red"
    >
      <span
        className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${pillBg}`}
      >
        <Image src={Icon} alt="" aria-hidden="true" width={28} height={28} />
      </span>
      <span className="inline-block rounded-full bg-maroon/5 px-3 py-1 text-xs font-semibold text-brown">
        Level {program.level} · {program.stage}
      </span>
      <h3 className="text-lg lg:text-xl font-bold text-maroon">
        {program.name}
      </h3>
      <p className="text-sm text-ink/80">{program.focus}</p>
      {/* Blurb revealed on hover/focus (grid-rows trick avoids CLS) */}
      <span className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr] transition-all duration-300">
        <span className="overflow-hidden">
          <span className="block pt-1 text-sm text-ink/70">
            {program.overview}
          </span>
        </span>
      </span>
    </Link>
  );
}

export default function LearningPathway() {
  return (
    <section
      className="bg-cream px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
      aria-labelledby="pathway-heading"
    >
      <div className="container flex flex-col items-center gap-12">
        <SectionHeader
          eyebrow="Learning Pathway"
          title="A clear journey from first block to real builds"
          subtitle="Four levels take curious kids from visual coding all the way to AI, games and mobile apps — each step building on the last."
          headingId="pathway-heading"
          pillBg="bg-tint-lime"
        />

        {/* Desktop: row with arrow connectors. Mobile: vertical stack. */}
        <RevealGroup className="flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-2 w-full">
          {programs.map((p, i) => (
            <div
              key={p.slug}
              className="flex flex-col lg:flex-row items-center gap-6 lg:gap-2 lg:flex-1"
            >
              <Reveal
                variant={fadeUp}
                custom={i}
                className="w-full lg:flex-1 flex"
              >
                <Step program={p} />
              </Reveal>
              {i < programs.length - 1 && (
                <DecorativeArrow
                  src={PathArrow}
                  width={48}
                  height={24}
                  className="shrink-0 rotate-90 lg:rotate-0 opacity-70"
                />
              )}
            </div>
          ))}
        </RevealGroup>

        <Reveal variant={fadeUp}>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 rounded-full bg-brand-red text-paper px-6 py-4 font-bold text-lg transition-all duration-150 hover:bg-ink active:scale-[0.98]"
          >
            Explore all programs
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
