"use client";
import { useReducedMotion } from "framer-motion";
/*
 * StatCounter — count-up number that animates 0 → value once when scrolled
 * into view. Hydration-safe: the final value is what renders in markup (so
 * SSR/export and screen readers see the real number); the animation only
 * runs after mount, in view, and when motion is allowed. Reduced motion or
 * a null value → static final text, no animation.
 */
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function StatCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1400,
  className = "",
}) {
  const reduced = useReducedMotion();
  const target = typeof value === "number" ? value : null;
  const [display, setDisplay] = useState(target ?? 0);
  const started = useRef(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  useEffect(() => {
    if (target === null || reduced || started.current || !inView) return;
    started.current = true;

    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - (1 - t) ** 3;
      setDisplay(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    setDisplay(0);
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, target, duration]);

  // If value isn't a number (TODO placeholder), show a dash.
  const shown =
    target === null ? "—" : `${prefix}${display.toLocaleString()}${suffix}`;

  return (
    <span ref={ref} className={className}>
      {shown}
    </span>
  );
}
