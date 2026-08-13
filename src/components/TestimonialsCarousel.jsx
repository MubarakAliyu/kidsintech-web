"use client";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
/*
 * TestimonialsCarousel — accessible quote carousel.
 * - Autoplay ~5s, pauses on hover AND keyboard focus.
 * - Prev/next buttons (labelled), dot indicators, ArrowLeft/Right keys,
 *   touch swipe.
 * - Reduced motion (or ≤1 item): renders a static grid, no autoplay.
 * - aria-roledescription="carousel"; slides are labelled x of n.
 */
import { useCallback, useEffect, useRef, useState } from "react";

function Card({ t }) {
  return (
    <figure className="flex flex-col gap-4 h-full rounded-4xl bg-white border border-hairline p-6 sm:p-8">
      <Quote className="w-8 h-8 text-brand-red" aria-hidden="true" />
      <blockquote className="text-base sm:text-lg lg:text-xl text-maroon leading-relaxed flex-1">
        {t.quote}
      </blockquote>
      <figcaption className="flex flex-col">
        <span className="font-bold text-maroon">{t.author}</span>
        <span className="text-sm text-ink/70">{t.role}</span>
      </figcaption>
    </figure>
  );
}

export default function TestimonialsCarousel({ items = [] }) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);
  const n = items.length;

  const go = useCallback((i) => setIndex(((i % n) + n) % n), [n]);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    if (reduced || paused || n <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % n), 5000);
    return () => clearInterval(id);
  }, [reduced, paused, n]);

  if (n === 0) return null;

  // Reduced motion / very short lists → static, no autoplay.
  if (reduced || n <= 1) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {items.map((t) => (
          <Card key={t.id} t={t} />
        ))}
      </div>
    );
  }

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Testimonials"
      className="w-full max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
      }}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (dx > 40) prev();
        else if (dx < -40) next();
        touchX.current = null;
      }}
    >
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((t, i) => (
            // biome-ignore lint/a11y/useSemanticElements: role="group" + aria-roledescription="slide" is the standard ARIA carousel slide pattern; no native element expresses it.
            <div
              key={t.id}
              className="min-w-full px-1"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${n}`}
              aria-hidden={i !== index}
            >
              <Card t={t} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="w-11 h-11 grid place-items-center rounded-full border border-hairline text-maroon hover:bg-tint-peach/50 transition active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2">
          {items.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition-all ${i === index ? "w-6 bg-brand-red" : "w-2.5 bg-maroon/25 hover:bg-maroon/40"}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="w-11 h-11 grid place-items-center rounded-full border border-hairline text-maroon hover:bg-tint-peach/50 transition active:scale-95"
        >
          <ChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
