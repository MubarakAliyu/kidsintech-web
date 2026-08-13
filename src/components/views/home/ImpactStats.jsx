"use client";
/*
 * ImpactStats — headline traction numbers with count-up on scroll.
 * Dark maroon band (brand-consistent with the footer). Numbers use the
 * hydration-safe <StatCounter>; reduced motion shows finals instantly.
 */
import { Clock, GraduationCap, School, Users } from "lucide-react";
import SkewPill from "@/components/SkewPill";
import StatCounter from "@/components/StatCounter";
import { stats } from "@/data/stats";
import { fadeUp, Reveal, RevealGroup } from "@/lib/motion";

const ICONS = {
  cohorts: GraduationCap,
  students: Users,
  schools: School,
  hours: Clock,
};

export default function ImpactStats() {
  return (
    <section
      className="bg-maroon px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
      aria-labelledby="impact-heading"
    >
      <div className="container flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <Reveal variant={fadeUp}>
            <SkewPill bg="bg-gold" text="text-brown">
              Our Impact
            </SkewPill>
          </Reveal>
          <Reveal
            as="h2"
            variant={fadeUp}
            custom={1}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight"
          >
            <span id="impact-heading">
              Real kids. Real skills. Real momentum.
            </span>
          </Reveal>
        </div>

        <RevealGroup className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {stats.map((s) => {
            const Icon = ICONS[s.id] || Users;
            return (
              <Reveal
                key={s.id}
                variant={fadeUp}
                className="group flex flex-col items-center text-center gap-3 rounded-4xl bg-white/5 border border-white/10 px-4 py-8 transition-all duration-200 hover:-translate-y-1.5 hover:bg-white/10"
              >
                <Icon
                  className="w-9 h-9 text-gold transition-transform duration-200 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
                <span className="text-4xl lg:text-5xl font-bold text-gold tabular-nums">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </span>
                <span className="text-sm sm:text-base text-cream/80 leading-snug">
                  {s.label}
                </span>
              </Reveal>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
