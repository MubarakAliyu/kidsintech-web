"use client";
import { Calendar, MapPin, Tag, Users } from "lucide-react";
import dynamic from "next/dynamic";
/*
 * FeaturedBootcamp — the current open/upcoming cohort, driven entirely by
 * data/bootcamps.js (status: open|upcoming|ended). This is the single
 * source that ends the old "now open vs Coming Soon ₦0.00" contradiction:
 *   - open/upcoming with a start date → live countdown
 *   - start date null                → "Dates to be announced"
 *   - ended (or date passed)         → graceful waitlist state
 */
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { openBootcamp, upcomingBootcamp } from "@/data/bootcamps";
import { fadeUp, Reveal, RevealGroup } from "@/lib/motion";

// Code-split the live countdown out of the initial bundle.
const Countdown = dynamic(() => import("@/components/Countdown"));

import { site } from "@/data/site";

const fmtDate = (d) =>
  d
    ? new Date(d).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Dates to be announced";

export default function FeaturedBootcamp() {
  const cohort = openBootcamp || upcomingBootcamp;
  if (!cohort) return null;

  const isEnded = cohort.status === "ended";
  const price =
    cohort.price?.label ||
    (cohort.price?.amount === 0 ? "Free" : `₦${cohort.price?.amount ?? ""}`);

  const facts = [
    { icon: Calendar, label: "Starts", value: fmtDate(cohort.startDate) },
    { icon: Users, label: "Ages", value: site.ages },
    { icon: Tag, label: "Fee", value: price },
    { icon: MapPin, label: "Venue", value: cohort.venue || "[Venue — TODO]" },
  ];

  return (
    <section
      className="bg-tint-peach px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
      aria-labelledby="featured-bootcamp-heading"
    >
      <div className="container flex flex-col items-center gap-10">
        <SectionHeader
          eyebrow={isEnded ? "Bootcamp" : "Now Enrolling"}
          title={cohort.title}
          subtitle={cohort.summary}
          headingId="featured-bootcamp-heading"
          pillBg="bg-gold"
        />

        <Reveal
          variant={fadeUp}
          className="w-full rounded-4xl bg-white border border-hairline p-6 sm:p-10 flex flex-col gap-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
        >
          {/* Countdown or ended state */}
          <div className="flex flex-col items-center gap-3">
            {isEnded ? (
              <div className="inline-flex items-center rounded-full bg-maroon/10 px-5 py-3">
                <span className="font-semibold text-maroon">
                  This cohort has ended — join the waitlist for the next one.
                </span>
              </div>
            ) : cohort.startDate ? (
              <Countdown
                date={cohort.startDate}
                endedLabel="This cohort has ended — join the waitlist"
              />
            ) : (
              <div className="inline-flex items-center rounded-full bg-maroon/10 px-5 py-3">
                <span className="font-semibold text-maroon">
                  Dates to be announced — register your interest now
                </span>
              </div>
            )}
          </div>

          {/* Facts */}
          <RevealGroup className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {facts.map((f) => (
              <Reveal
                key={f.label}
                variant={fadeUp}
                className="flex items-center gap-3 rounded-2xl bg-tint-peach/50 px-4 py-4"
              >
                <f.icon
                  className="w-6 h-6 text-brand-red shrink-0"
                  aria-hidden="true"
                />
                <span className="flex flex-col">
                  <span className="text-xs text-ink/60">{f.label}</span>
                  <span className="font-semibold text-maroon">{f.value}</span>
                </span>
              </Reveal>
            ))}
          </RevealGroup>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={site.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-red text-paper px-8 py-4 font-bold text-lg transition-all duration-150 hover:bg-ink active:scale-[0.98]"
            >
              {isEnded ? "Join the waitlist" : "Register Now!"}
            </Link>
            <Link
              href="/bootcamps"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-maroon text-maroon px-8 py-4 font-bold text-lg transition-all duration-150 hover:bg-maroon hover:text-cream active:scale-[0.98]"
            >
              All bootcamps
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
