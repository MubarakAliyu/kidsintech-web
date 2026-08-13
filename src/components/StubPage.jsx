"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { fadeUp, float, Reveal, RevealGroup } from "@/lib/motion";
import HeroArr1 from "../../public/assets/images/heroArr1.svg";

/*
 * StubPage — placeholder for routes that later batches will build out.
 * Uses the shared <Reveal> utilities + @theme tokens + the signature
 * decorative-arrow motif so stubs already feel on-brand. Not a redesign
 * target — these get replaced.
 */
export default function StubPage({ title, blurb, batch }) {
  return (
    <section className="bg-cream px-4 sm:px-8 lg:px-[160px] py-24 min-h-[60vh]">
      <article className="container flex flex-col items-center gap-8 text-center relative">
        {/* Decorative arrow (float) */}
        <motion.div
          variants={float}
          initial="hidden"
          animate="visible"
          className="hidden lg:block absolute -top-4 right-[8%]"
          aria-hidden="true"
        >
          <Image src={HeroArr1} alt="" width={120} height={84} />
        </motion.div>

        <RevealGroup className="flex flex-col items-center gap-6">
          <Reveal
            as="h1"
            variant={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-maroon"
          >
            {title}
          </Reveal>

          <Reveal
            as="div"
            variant={fadeUp}
            custom={1}
            className="bg-white py-2 px-6 lg:px-8 lg:py-4 rounded-3xl lg:rounded-full max-w-2xl"
          >
            <p className="text-base sm:text-lg lg:text-xl text-ink">
              {blurb ||
                "This page is coming soon — we're building it as part of the Kids in Tech website expansion."}
            </p>
          </Reveal>

          <Reveal
            as="div"
            variant={fadeUp}
            custom={2}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href={site.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-red text-paper px-6 py-4 font-bold text-lg hover:bg-ink transition-all duration-300 hover:scale-105"
            >
              Register Now!
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-hairline text-ink px-6 py-4 font-semibold text-lg hover:text-teal-active transition-colors"
            >
              Back to Home
            </Link>
          </Reveal>

          {batch && (
            <Reveal
              as="p"
              variant={fadeUp}
              custom={3}
              className="text-sm text-ink/60"
            >
              {/* Internal note; harmless in prod. */}
              Full page arrives in {batch}.
            </Reveal>
          )}
        </RevealGroup>
      </article>
    </section>
  );
}
