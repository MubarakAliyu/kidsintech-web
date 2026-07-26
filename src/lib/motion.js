"use client";
import { motion, useReducedMotion } from "framer-motion";
/*
 * Shared motion utilities — Batch 01 foundation.
 * -------------------------------------------------------------------
 * Standardised on `framer-motion` (the import already used by 9 of the
 * 10 existing animated components — HeroSection, Bootcamp, gallery, etc.
 * Only Header.jsx uses `motion/react`). Do NOT introduce a second
 * import style; import motion helpers from here or from "framer-motion".
 *
 * Everything here honours `prefers-reduced-motion`, which was previously
 * respected nowhere. When a user prefers reduced motion, reveal/float
 * variants collapse to a static, fully-visible state.
 */
import { useInView } from "react-intersection-observer";

/* ---- Base variants (mirror the values already used across views) ---- */

// Fade + rise. Accepts an optional custom index for staggering (i * 0.2).
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

// Simple opacity fade (new in this batch).
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

// Gentle infinite bob for the signature decorative arrows.
export const float = {
  hidden: { y: 0 },
  visible: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

// Stagger wrapper for groups of children.
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

/* ---- Reduced-motion-safe copies ----
 * When reduced motion is requested we want the element visible with no
 * transform/opacity animation and no infinite loops. */
const staticVisible = { opacity: 1, y: 0, transition: { duration: 0 } };

/**
 * useMotionSafe() — returns helpers that respect prefers-reduced-motion.
 * `variants(v)` swaps any variant for a static "already visible" one when
 * reduced motion is on; `reduced` is the raw boolean if you need it.
 */
export function useMotionSafe() {
  const reduced = useReducedMotion();
  const variants = (v) =>
    reduced ? { hidden: staticVisible, visible: staticVisible } : v;
  return { reduced, variants };
}

/**
 * <Reveal> — scroll-triggered reveal for a single element.
 * Built on react-intersection-observer (the repo's existing approach) and
 * framer-motion. Fires once. Honours reduced motion automatically.
 *
 * Props:
 *   as        — element/component to render (default "div")
 *   variant   — a variants object (default fadeUp)
 *   custom    — stagger index passed to the variant function
 *   threshold — IO threshold (default 0.15)
 *   amount    — alias kept for readability; same as threshold
 *   ...rest   — className, style, children, etc.
 */
export function Reveal({
  as = "div",
  variant = fadeUp,
  custom,
  threshold = 0.15,
  className,
  children,
  ...rest
}) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold });
  const MotionTag = motion[as] || motion.div;

  const resolved = reduced
    ? { hidden: staticVisible, visible: staticVisible }
    : variant;

  return (
    <MotionTag
      ref={ref}
      custom={custom}
      variants={resolved}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/**
 * <RevealGroup> — a stagger container whose children reveal in sequence.
 * Wrap direct children in <Reveal> (or any motion element using the
 * `hidden`/`visible` variant names) to inherit the stagger.
 */
export function RevealGroup({
  as = "div",
  threshold = 0.15,
  stagger = 0.2,
  className,
  children,
  ...rest
}) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold });
  const MotionTag = motion[as] || motion.div;

  const container = reduced
    ? { hidden: {}, visible: {} }
    : { hidden: {}, visible: { transition: { staggerChildren: stagger } } };

  return (
    <MotionTag
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export { motion, useReducedMotion };
