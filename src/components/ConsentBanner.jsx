"use client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
/*
 * ConsentBanner — minimal, on-brand, accessible cookie/consent notice. Only
 * appears when analytics is actually configured AND the visitor hasn't chosen
 * yet (choice stored in a cookie — static-export friendly, no localStorage).
 * Accept/Decline sets `kit_consent` and dispatches `kit-consent-change` so
 * <Analytics> can react without a reload. Keyboard + focus + aria supported;
 * honours prefers-reduced-motion via the shared motion utilities.
 */
import { useEffect, useState } from "react";
import { ANALYTICS_CONFIGURED } from "@/components/Analytics";

function setConsentCookie(value) {
  const oneYear = 60 * 60 * 24 * 365;
  // biome-ignore lint/suspicious/noDocumentCookie: a first-party cookie is the static-export-friendly way to persist the consent choice (no backend/localStorage dependency).
  document.cookie = `kit_consent=${value}; path=/; max-age=${oneYear}; SameSite=Lax`;
  window.dispatchEvent(new Event("kit-consent-change"));
}

export default function ConsentBanner() {
  const reduced = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!ANALYTICS_CONFIGURED) return; // nothing to consent to
    const decided = document.cookie
      .split("; ")
      .some((c) => c.startsWith("kit_consent="));
    if (!decided) setShow(true);
  }, []);

  const decide = (value) => {
    setConsentCookie(value);
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="region"
          aria-label="Cookie consent"
          initial={reduced ? false : { y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduced ? { opacity: 0 } : { y: 20, opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.25 }}
          className="fixed bottom-4 inset-x-4 sm:left-auto sm:right-6 sm:max-w-md z-[90] rounded-3xl bg-maroon text-cream shadow-xl border border-white/10 p-5 flex flex-col gap-3"
        >
          <p className="text-sm leading-relaxed">
            We use privacy-friendly analytics to understand how the site is used
            and improve it. Is that okay?
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => decide("granted")}
              className="rounded-full bg-brand-red text-paper px-5 py-2 text-sm font-bold transition-all duration-150 hover:brightness-95 active:scale-[0.98]"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => decide("denied")}
              className="rounded-full border border-white/30 text-cream px-5 py-2 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
