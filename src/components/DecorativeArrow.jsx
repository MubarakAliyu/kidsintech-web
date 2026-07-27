"use client";
import { motion, useReducedMotion } from "framer-motion";
/*
 * DecorativeArrow — the signature hand-drawn arrow motif between sections.
 * Always decorative (aria-hidden). Optional gentle infinite float that is
 * automatically disabled under prefers-reduced-motion.
 */
import Image from "next/image";
import { float } from "@/lib/motion";

export default function DecorativeArrow({
  src,
  width,
  height,
  className = "",
  floating = true,
}) {
  const reduced = useReducedMotion();

  const img = (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      width={width}
      height={height}
      className="pointer-events-none select-none"
    />
  );

  if (!floating || reduced) {
    return (
      <div className={className} aria-hidden="true">
        {img}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      aria-hidden="true"
      variants={float}
      initial="hidden"
      animate="visible"
    >
      {img}
    </motion.div>
  );
}
