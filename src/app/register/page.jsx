"use client";
/*
 * /register — future native registration path (SCAFFOLD, NOT LIVE).
 *
 * Default (flag off): points to the working Google Form (single source:
 * site.registrationUrl). This keeps registration functional today.
 *
 * When NEXT_PUBLIC_ENABLE_NATIVE_REGISTER === "true": renders a native form +
 * a Paystack-inline PLACEHOLDER. Going live requires:
 *   1. NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY in .env.local (never commit),
 *   2. adding the Paystack SDK (e.g. `@paystack/inline-js`) and wiring the
 *      handler where marked TODO below,
 *   3. a real submission target (serverless/Formspree/EmailJS) since this is
 *      a static export.
 * Until then this path is not linked in nav and is noindex (see layout.js).
 */
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeader from "@/components/SectionHeader";
import { site } from "@/data/site";
import { fadeUp, Reveal } from "@/lib/motion";
import { track } from "@/lib/track";

const NATIVE_ENABLED =
  process.env.NEXT_PUBLIC_ENABLE_NATIVE_REGISTER === "true";
const PAYSTACK_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

export default function RegisterPage() {
  return (
    <section className="bg-cream px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24 min-h-[60vh]">
      <div className="container max-w-2xl mx-auto flex flex-col items-center gap-8 text-center">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Register" }]}
        />
        <SectionHeader
          eyebrow="Registration"
          title="Register for a bootcamp"
          pillBg="bg-gold"
        />

        {!NATIVE_ENABLED ? (
          <Reveal variant={fadeUp} className="flex flex-col items-center gap-4">
            <p className="text-base sm:text-lg text-ink max-w-xl">
              Registration is quick — complete our short form and we'll be in
              touch about the next cohort.
            </p>
            <Link
              href={site.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                track("register_click", { location: "register_page" })
              }
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red text-paper px-8 py-4 font-bold text-lg transition-all duration-150 hover:bg-ink active:scale-[0.98]"
            >
              Open the registration form
            </Link>
          </Reveal>
        ) : (
          <Reveal
            variant={fadeUp}
            className="w-full flex flex-col gap-4 rounded-4xl bg-white border border-hairline p-6 sm:p-8 text-left"
          >
            {/* TODO (native flow): real fields + validation, then a submission
                target (this is a static export — use a serverless endpoint,
                Formspree, or EmailJS). */}
            <p className="text-sm text-ink/70">
              Native registration is enabled. Payment runs through Paystack
              inline
              {PAYSTACK_KEY
                ? ""
                : " (set NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY to activate)"}
              .
            </p>
            <button
              type="button"
              disabled={!PAYSTACK_KEY}
              // TODO: initialise Paystack inline with PAYSTACK_KEY here.
              onClick={() => track("register_pay_click", {})}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red text-paper px-8 py-4 font-bold text-lg transition-all duration-150 hover:bg-ink active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Pay & register (Paystack)
            </button>
          </Reveal>
        )}
      </div>
    </section>
  );
}
