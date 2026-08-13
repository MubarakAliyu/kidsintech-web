"use client";
import Image from "next/image";
/*
 * PartnerSchoolsStrip — responsive grid of partner schools. Uses a static
 * grid (no marquee) so it's reduced-motion-safe by default and CLS-free.
 * Logos grayscale→colour on hover when supplied; otherwise a name chip.
 */
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { schools } from "@/data/schools";
import { fadeUp, Reveal, RevealGroup } from "@/lib/motion";

export default function PartnerSchoolsStrip() {
  if (!schools || schools.length === 0) return null;

  return (
    <section
      className="bg-tint-lime px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
      aria-labelledby="schools-heading"
    >
      <div className="container flex flex-col items-center gap-10">
        <SectionHeader
          eyebrow="Partner Schools"
          title="Trusted by schools across the community"
          subtitle="We work hand-in-hand with schools to bring coding, design and STEM to more young learners."
          headingId="schools-heading"
          pillBg="bg-gold"
        />

        <RevealGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
          {schools.map((s, i) => (
            <Reveal
              key={s.id}
              variant={fadeUp}
              custom={i}
              className="group flex items-center justify-center rounded-2xl bg-white border border-hairline px-4 py-6 min-h-[96px] transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              {s.logo ? (
                <Image
                  src={s.logo}
                  alt={s.name}
                  width={120}
                  height={48}
                  className="max-h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              ) : (
                <span className="text-center text-sm font-semibold text-maroon/70">
                  {s.name}
                </span>
              )}
            </Reveal>
          ))}
        </RevealGroup>

        <Reveal variant={fadeUp}>
          <Link
            href="/partner-schools"
            className="inline-flex items-center gap-2 rounded-full border-2 border-maroon text-maroon px-6 py-4 font-bold text-lg transition-all duration-150 hover:bg-maroon hover:text-cream active:scale-[0.98]"
          >
            Become a partner school
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
