"use client";
import Script from "next/script";
/*
 * Analytics — loads GA4, Microsoft Clarity and Meta Pixel via next/script
 * (afterInteractive). Fully gated: renders NOTHING unless
 *   (a) NODE_ENV === "production",
 *   (b) the relevant NEXT_PUBLIC_* key is set, AND
 *   (c) the visitor has granted consent (cookie set by <ConsentBanner>).
 * So it safely no-ops in dev and when keys/consent are absent. No secrets in
 * code — all ids come from env.
 */
import { useEffect, useState } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export const ANALYTICS_CONFIGURED = Boolean(GA_ID || CLARITY_ID || PIXEL_ID);

function hasConsent() {
  if (typeof document === "undefined") return false;
  return document.cookie.split("; ").some((c) => c === "kit_consent=granted");
}

export default function Analytics() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const read = () => setConsent(hasConsent());
    read();
    window.addEventListener("kit-consent-change", read);
    return () => window.removeEventListener("kit-consent-change", read);
  }, []);

  if (process.env.NODE_ENV !== "production" || !consent) return null;

  return (
    <>
      {GA_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script
            id="ga4-init"
            strategy="afterInteractive"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: standard GA4 bootstrap.
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
            }}
          />
        </>
      )}

      {CLARITY_ID && (
        <Script
          id="clarity-init"
          strategy="afterInteractive"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: standard Clarity bootstrap.
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`,
          }}
        />
      )}

      {PIXEL_ID && (
        <Script
          id="meta-pixel-init"
          strategy="afterInteractive"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: standard Meta Pixel bootstrap.
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');`,
          }}
        />
      )}
    </>
  );
}
