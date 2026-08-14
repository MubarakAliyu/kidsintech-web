/*
 * track.js — tiny analytics event wrapper. Safe to call anywhere: it no-ops
 * on the server, when no provider is loaded, or when keys are absent. Fans a
 * single event out to GA4 (gtag), Meta Pixel (fbq) and Microsoft Clarity when
 * present. Never throws.
 *
 *   import { track } from "@/lib/track";
 *   track("register_click", { location: "home_cta" });
 */
export function track(event, params = {}) {
  if (typeof window === "undefined") return;
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", event, params);
    }
    if (typeof window.fbq === "function") {
      window.fbq("trackCustom", event, params);
    }
    if (typeof window.clarity === "function") {
      window.clarity("event", event);
    }
  } catch {
    // analytics must never break the app
  }
}

export default track;
