"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Cpu } from "lucide-react";
/*
 * KITOS (8C) — coming-soon product page. Hero (floating icon, coming-soon
 * pill) → what it is → vision → feature preview cards → how it connects to
 * bootcamps → notify capture (mailto, no fake backend) → CTA. Reuses
 * SectionHeader, FeaturePreviewCard, NotifyForm, Breadcrumb, DecorativeArrow.
 */
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import DecorativeArrow from "@/components/DecorativeArrow";
import FeaturePreviewCard from "@/components/FeaturePreviewCard";
import NotifyForm from "@/components/NotifyForm";
import SectionHeader from "@/components/SectionHeader";
import SkewPill from "@/components/SkewPill";
import { kitos } from "@/data/kitos";
import { fadeUp, float, Reveal, RevealGroup } from "@/lib/motion";
import HeroArr1 from "../../../public/assets/images/heroArr1.svg";
import HeroArr2 from "../../../public/assets/images/heroArr2.svg";

export default function KitosPage() {
  const reduced = useReducedMotion();

  return (
    <div>
      {/* 1. Hero */}
      <section className="bg-maroon px-4 sm:px-8 lg:px-[160px] pt-10 pb-16 lg:pb-24">
        <div className="container relative flex flex-col items-center gap-6 text-center">
          <DecorativeArrow
            src={HeroArr1}
            width={110}
            height={78}
            className="hidden lg:block absolute top-0 right-[7%] opacity-40"
          />
          <DecorativeArrow
            src={HeroArr2}
            width={80}
            height={110}
            className="hidden lg:block absolute top-6 left-[4%] opacity-40"
          />
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "KITOS" }]}
            className="[&_*]:text-cream/80 [&_a:hover]:text-gold"
          />

          {reduced ? (
            <span className="grid place-items-center w-20 h-20 rounded-3xl bg-white/10 text-gold">
              <Cpu className="w-10 h-10" aria-hidden="true" />
            </span>
          ) : (
            <motion.span
              variants={float}
              initial="hidden"
              animate="visible"
              className="grid place-items-center w-20 h-20 rounded-3xl bg-white/10 text-gold"
            >
              <Cpu className="w-10 h-10" aria-hidden="true" />
            </motion.span>
          )}

          <Reveal variant={fadeUp}>
            <SkewPill bg="bg-gold" text="text-brown">
              Coming soon
            </SkewPill>
          </Reveal>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cream leading-tight max-w-3xl">
            {kitos.name} — {kitos.fullName}
          </h1>
          <Reveal
            as="p"
            variant={fadeUp}
            custom={1}
            className="text-base sm:text-lg lg:text-xl text-cream/85 max-w-2xl"
          >
            {kitos.tagline}
          </Reveal>
          <Reveal
            variant={fadeUp}
            custom={2}
            className="w-full flex justify-center"
          >
            <NotifyForm subject="KITOS launch" buttonLabel="Notify me" />
          </Reveal>
        </div>
      </section>

      {/* 2. What it is */}
      <section
        className="bg-cream px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
        aria-labelledby="kitos-what"
      >
        <div className="container flex flex-col items-center gap-6 text-center">
          <SectionHeader
            eyebrow="What is KITOS?"
            title="A home base for every learner"
            headingId="kitos-what"
            pillBg="bg-tint-lime"
          />
          <p className="text-base sm:text-lg text-ink max-w-2xl">
            {kitos.whatItIs}
          </p>
        </div>
      </section>

      {/* 3. Vision */}
      <section
        className="bg-tint-blue px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
        aria-labelledby="kitos-vision"
      >
        <div className="container flex flex-col items-center gap-6 text-center">
          <SectionHeader
            eyebrow="The Vision"
            title="One learning ecosystem"
            headingId="kitos-vision"
            pillBg="bg-white"
          />
          <p className="text-base sm:text-lg text-ink max-w-2xl">
            {kitos.vision}
          </p>
        </div>
      </section>

      {/* 4. Feature preview cards */}
      {kitos.featureCards?.length > 0 && (
        <section
          className="bg-cream px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
          aria-labelledby="kitos-features"
        >
          <div className="container flex flex-col items-center gap-10">
            <SectionHeader
              eyebrow="Feature Preview"
              title="What's coming to KITOS"
              headingId="kitos-features"
              pillBg="bg-gold"
            />
            <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {kitos.featureCards.map((f) => (
                <Reveal key={f.title} variant={fadeUp} className="flex">
                  <FeaturePreviewCard feature={f} />
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* 5. How it connects to bootcamps */}
      <section
        className="bg-tint-lime px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
        aria-labelledby="kitos-connect"
      >
        <div className="container flex flex-col items-center gap-6 text-center max-w-3xl">
          <SectionHeader
            eyebrow="How it connects"
            title="Bootcamps spark it. KITOS sustains it."
            headingId="kitos-connect"
            pillBg="bg-tint-butter"
          />
          <p className="text-base sm:text-lg text-ink">{kitos.pathwayNote}</p>
          <p className="text-base sm:text-lg text-ink">
            Bootcamps award a{" "}
            <span className="font-semibold">Certificate of Participation</span>.
            KITOS will issue the{" "}
            <span className="font-semibold">Certificate of Completion</span> as
            learners progress.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 rounded-full bg-brand-red text-paper px-6 py-3 font-bold transition-all duration-150 hover:bg-ink active:scale-[0.98]"
            >
              Explore programs
            </Link>
            <Link
              href="/bootcamps"
              className="inline-flex items-center gap-2 rounded-full border-2 border-maroon text-maroon px-6 py-3 font-bold transition-all duration-150 hover:bg-maroon hover:text-cream active:scale-[0.98]"
            >
              See bootcamps
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Notify capture */}
      <section className="bg-maroon px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24">
        <div className="container flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight">
            Be first to know when KITOS launches
          </h2>
          <p className="text-base sm:text-lg text-cream/85 max-w-2xl">
            Leave your email and we'll let you know the moment it's ready.
          </p>
          <NotifyForm subject="KITOS launch" buttonLabel="Notify me" />
        </div>
      </section>
    </div>
  );
}
