"use client";
import { useReducedMotion } from "framer-motion";
/*
 * Countdown — live days/hours/minutes/seconds to a target date.
 * Hydration-safe: renders a stable placeholder until mounted (server and
 * first client render match), then ticks on the client only. Gracefully
 * handles:
 *   - no date (null)   → renders nothing (parent shows a "dates TBA" state)
 *   - date in the past → calls onEnded state via `ended` render prop pattern
 * Exposes readable text to assistive tech via an sr-only summary.
 */
import { useEffect, useState } from "react";

function diff(target) {
  const ms = target - Date.now();
  if (ms <= 0) return null;
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms % 86400000) / 3600000),
    minutes: Math.floor((ms % 3600000) / 60000),
    seconds: Math.floor((ms % 60000) / 1000),
  };
}

const pad = (n) => String(n).padStart(2, "0");

export default function Countdown({
  date,
  endedLabel = "This cohort has ended",
}) {
  const reduced = useReducedMotion();
  const target = date ? new Date(date).getTime() : null;
  const [mounted, setMounted] = useState(false);
  const [left, setLeft] = useState(() => (target ? diff(target) : null));

  useEffect(() => {
    if (!target) return;
    setMounted(true);
    setLeft(diff(target));
    // Ticking every second is fine; reduced-motion users still get a live
    // value (it's information, not decoration) but without any flip anim.
    const id = setInterval(() => setLeft(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!target) return null;

  // Ended state
  if (mounted && left === null) {
    return (
      <div className="inline-flex items-center rounded-full bg-maroon/10 px-5 py-3">
        <span className="font-semibold text-maroon">{endedLabel}</span>
      </div>
    );
  }

  // Pre-mount placeholder (stable markup for export/hydration).
  const parts = left ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const units = [
    { k: "days", label: "Days", v: parts.days },
    { k: "hours", label: "Hours", v: parts.hours },
    { k: "minutes", label: "Minutes", v: parts.minutes },
    { k: "seconds", label: "Seconds", v: parts.seconds },
  ];

  return (
    <div>
      <span className="sr-only">
        {parts.days} days, {parts.hours} hours, {parts.minutes} minutes and{" "}
        {parts.seconds} seconds until the bootcamp starts.
      </span>
      <div className="flex items-stretch gap-2 sm:gap-3" aria-hidden="true">
        {units.map((u) => (
          <div
            key={u.k}
            className="flex flex-col items-center min-w-[64px] sm:min-w-[76px] rounded-2xl bg-white/90 border border-hairline px-3 py-3 shadow-sm"
          >
            <span
              className={`text-2xl sm:text-3xl font-bold text-maroon tabular-nums ${reduced ? "" : "transition-all"}`}
            >
              {pad(u.v)}
            </span>
            <span className="text-xs sm:text-sm text-ink/70">{u.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
