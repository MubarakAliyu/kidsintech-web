"use client";
/*
 * CtaBanner — reusable closing call-to-action band (token + motion based).
 * Primary → registration (site.js) by default; secondary → any route.
 * Not a new visual language: same brand-red primary + ghost secondary used
 * across the site. Reused by Programs/Bootcamps/etc.
 */
import Link from "next/link";
import { site } from "@/data/site";
import { fadeUp, Reveal } from "@/lib/motion";
import { track } from "@/lib/track";

export default function CtaBanner({
  title = "Ready to start building?",
  subtitle,
  primaryLabel = "Register Now!",
  primaryHref = site.registrationUrl,
  secondaryLabel,
  secondaryHref,
  tone = "maroon",
}) {
  const isDark = tone === "maroon";
  return (
    <section
      className={`${isDark ? "bg-maroon" : "bg-tint-blue"} px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24`}
    >
      <div className="container flex flex-col items-center gap-6 text-center">
        <Reveal
          as="h2"
          variant={fadeUp}
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${isDark ? "text-cream" : "text-maroon"}`}
        >
          {title}
        </Reveal>
        {subtitle && (
          <Reveal
            as="p"
            variant={fadeUp}
            custom={1}
            className={`text-base sm:text-lg lg:text-xl max-w-2xl ${isDark ? "text-cream/85" : "text-ink"}`}
          >
            {subtitle}
          </Reveal>
        )}
        <Reveal
          variant={fadeUp}
          custom={2}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href={primaryHref}
            target={primaryHref?.startsWith("http") ? "_blank" : undefined}
            rel={
              primaryHref?.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            onClick={() => track("register_click", { label: primaryLabel })}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red text-paper px-8 py-4 font-bold text-lg transition-all duration-150 hover:bg-ink active:scale-[0.98]"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className={`inline-flex items-center justify-center gap-2 rounded-full border-2 px-8 py-4 font-bold text-lg transition-all duration-150 active:scale-[0.98] ${
                isDark
                  ? "border-cream text-cream hover:bg-cream hover:text-maroon"
                  : "border-maroon text-maroon hover:bg-maroon hover:text-cream"
              }`}
            >
              {secondaryLabel}
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  );
}
