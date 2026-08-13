"use client";
/*
 * SectionHeader — consistent eyebrow (SkewPill) + heading + optional
 * subtext for every new Home section. Header reveals first (its own
 * <Reveal>), so section content can reveal after it. Token + motion based.
 */
import { fadeUp, Reveal } from "@/lib/motion";
import SkewPill from "./SkewPill";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  pillBg = "bg-gold",
  pillText = "text-brown",
  headingId,
  as = "h2",
  className = "",
  titleClassName = "text-maroon",
  subtitleClassName = "text-ink",
}) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <Reveal variant={fadeUp}>
          <SkewPill bg={pillBg} text={pillText}>
            {eyebrow}
          </SkewPill>
        </Reveal>
      )}
      <Reveal
        as={as === "h1" ? "h1" : "h2"}
        variant={fadeUp}
        custom={1}
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl ${titleClassName}`}
      >
        <span id={headingId}>{title}</span>
      </Reveal>
      {subtitle && (
        <Reveal
          as="p"
          variant={fadeUp}
          custom={2}
          className={`text-base sm:text-lg lg:text-xl max-w-2xl ${subtitleClassName}`}
        >
          {subtitle}
        </Reveal>
      )}
    </div>
  );
}
