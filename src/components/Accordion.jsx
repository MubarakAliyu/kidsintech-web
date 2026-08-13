"use client";
import { ChevronDown } from "lucide-react";
/*
 * Accordion — accessible disclosure list (rules/FAQ). Each item is a
 * <button aria-expanded> controlling a region; grid-rows trick animates
 * open/close without CLS. Reused by Innovation Challenge (rules) and later
 * the FAQ/Contact batches.
 *
 * Props: items = [{ q, a }], idPrefix (for unique ids).
 */
import { useState } from "react";

export default function Accordion({ items = [], idPrefix = "acc" }) {
  const [open, setOpen] = useState(() => new Set());
  if (!items.length) return null;

  const toggle = (i) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <div className="w-full flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open.has(i);
        const btnId = `${idPrefix}-btn-${i}`;
        const regionId = `${idPrefix}-region-${i}`;
        return (
          <div
            key={item.q}
            className="rounded-3xl bg-white border border-hairline overflow-hidden"
          >
            <h3 className="m-0">
              <button
                type="button"
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={regionId}
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 text-base sm:text-lg font-semibold text-maroon hover:bg-tint-peach/30 transition-colors"
              >
                {item.q}
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-brand-red transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <section
              id={regionId}
              aria-labelledby={btnId}
              className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="px-5 sm:px-6 pb-5 text-sm sm:text-base text-ink/80">
                  {item.a}
                </p>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
}
