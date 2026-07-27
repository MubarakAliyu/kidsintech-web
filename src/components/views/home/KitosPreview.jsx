"use client";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap } from "lucide-react";
/*
 * KitosPreview — teaser for the upcoming KITOS learning platform.
 * Dark maroon band with a coming-soon pill, feature chips, and a subtle
 * floating icon (reduced-motion aware via DecorativeArrow-style guard).
 */
import Link from "next/link";
import SkewPill from "@/components/SkewPill";
import { kitos } from "@/data/kitos";
import { fadeUp, float, Reveal, RevealGroup } from "@/lib/motion";

export default function KitosPreview() {
  const reduced = useReducedMotion();

  return (
    <section
      className="bg-maroon px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
      aria-labelledby="kitos-heading"
    >
      <div className="container flex flex-col items-center gap-8 text-center">
        {reduced ? (
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-gold">
            <GraduationCap className="w-8 h-8" aria-hidden="true" />
          </span>
        ) : (
          <motion.span
            variants={float}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-gold"
          >
            <GraduationCap className="w-8 h-8" aria-hidden="true" />
          </motion.span>
        )}

        <Reveal variant={fadeUp}>
          <SkewPill bg="bg-gold" text="text-brown">
            Coming Soon
          </SkewPill>
        </Reveal>

        <Reveal
          as="h2"
          variant={fadeUp}
          custom={1}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight"
        >
          <span id="kitos-heading">
            {kitos.name} — learning that keeps going
          </span>
        </Reveal>

        <Reveal
          as="p"
          variant={fadeUp}
          custom={2}
          className="text-base sm:text-lg lg:text-xl text-cream/85 max-w-2xl"
        >
          {kitos.promise}
        </Reveal>

        <RevealGroup className="flex flex-wrap items-center justify-center gap-3">
          {kitos.features.map((f) => (
            <Reveal
              key={f}
              variant={fadeUp}
              className="rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm text-cream"
            >
              {f}
            </Reveal>
          ))}
        </RevealGroup>

        <Reveal variant={fadeUp} custom={3}>
          <Link
            href={kitos.href}
            className="inline-flex items-center gap-2 rounded-full bg-gold text-maroon px-6 py-4 font-bold text-lg transition-all duration-150 hover:brightness-95 active:scale-[0.98]"
          >
            Learn more about {kitos.name}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
