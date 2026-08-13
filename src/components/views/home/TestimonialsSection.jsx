"use client";
/*
 * TestimonialsSection — parent/student/school quotes via the accessible
 * <TestimonialsCarousel> (autoplay + pause-on-hover/focus, keyboard, dots,
 * swipe; falls back to a static grid under reduced motion).
 */
import dynamic from "next/dynamic";
import SectionHeader from "@/components/SectionHeader";
import { testimonials } from "@/data/testimonials";
import { fadeUp, Reveal } from "@/lib/motion";

// Code-split the interactive carousel out of the initial bundle.
const TestimonialsCarousel = dynamic(
  () => import("@/components/TestimonialsCarousel"),
);

export default function TestimonialsSection() {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section
      className="bg-tint-blue px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="container flex flex-col items-center gap-10">
        <SectionHeader
          eyebrow="Kind Words"
          title="What families and schools say"
          headingId="testimonials-heading"
          pillBg="bg-white"
        />
        <Reveal variant={fadeUp} className="w-full flex justify-center">
          <TestimonialsCarousel items={testimonials} />
        </Reveal>
      </div>
    </section>
  );
}
