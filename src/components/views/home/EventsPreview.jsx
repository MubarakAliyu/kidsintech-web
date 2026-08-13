"use client";
import { Sparkles } from "lucide-react";
/*
 * EventsPreview — Innovation Challenge teaser (data/challenge.js).
 * Decorative arrow lead-in, status pill, single CTA to the challenge page.
 */
import Link from "next/link";
import DecorativeArrow from "@/components/DecorativeArrow";
import SkewPill from "@/components/SkewPill";
import { challenge } from "@/data/challenge";
import { fadeUp, Reveal } from "@/lib/motion";
import HeroArr2 from "../../../../public/assets/images/heroArr2.svg";

const STATUS_LABEL = {
  upcoming: "Upcoming",
  open: "Open now",
  ended: "Past event",
};

export default function EventsPreview() {
  return (
    <section
      className="bg-tint-butter px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
      aria-labelledby="events-heading"
    >
      <div className="container relative flex flex-col items-center gap-8 text-center">
        <DecorativeArrow
          src={HeroArr2}
          width={90}
          height={110}
          className="hidden lg:block absolute -top-6 left-[6%] opacity-70"
        />

        <Reveal variant={fadeUp}>
          <SkewPill bg="bg-gold" text="text-brown">
            <span className="inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" aria-hidden="true" />{" "}
              {STATUS_LABEL[challenge.status] || "Event"}
            </span>
          </SkewPill>
        </Reveal>

        <Reveal
          as="h2"
          variant={fadeUp}
          custom={1}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon leading-tight max-w-3xl"
        >
          <span id="events-heading">{challenge.title}</span>
        </Reveal>

        <Reveal
          as="p"
          variant={fadeUp}
          custom={2}
          className="text-base sm:text-lg lg:text-xl text-ink max-w-2xl"
        >
          {challenge.tagline}
        </Reveal>

        <Reveal variant={fadeUp} custom={3}>
          <Link
            href={challenge.href}
            className="inline-flex items-center gap-2 rounded-full bg-brand-red text-paper px-6 py-4 font-bold text-lg transition-all duration-150 hover:bg-ink active:scale-[0.98]"
          >
            {challenge.ctaLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
