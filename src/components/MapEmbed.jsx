"use client";
import { MapPin } from "lucide-react";
/*
 * MapEmbed — click-to-load Google Map. Shows a lightweight placeholder with a
 * "Load map" button; the titled iframe loads only on click (saves weight, no
 * third-party request until the user asks). Falls back to an "Open in Maps"
 * link when no embed URL is configured.
 *
 * Props: src (Google Maps embed URL), label (place name), directionsUrl.
 */
import { useState } from "react";

export default function MapEmbed({
  src,
  label = "Our location",
  directionsUrl,
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-4xl bg-tint-blue border border-hairline">
      {src && loaded ? (
        <iframe
          src={src}
          title={`Map — ${label}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center">
          <div className="flex flex-col items-center gap-3 text-center px-4">
            <MapPin className="w-10 h-10 text-brand-red" aria-hidden="true" />
            <span className="font-semibold text-maroon">{label}</span>
            {src ? (
              <button
                type="button"
                onClick={() => setLoaded(true)}
                className="rounded-full bg-brand-red text-paper px-5 py-2.5 font-semibold transition-all duration-150 hover:bg-ink active:scale-[0.98]"
              >
                Load map
              </button>
            ) : directionsUrl ? (
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand-red text-paper px-5 py-2.5 font-semibold transition-all duration-150 hover:bg-ink"
              >
                Open in Maps
              </a>
            ) : (
              <span className="text-sm text-ink/60">Map location — TODO</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
