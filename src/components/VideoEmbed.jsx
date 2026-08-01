"use client";
import { Play } from "lucide-react";
/*
 * VideoEmbed — click-to-load YouTube facade. Shows a lightweight on-brand
 * poster + play button (no external request); the youtube-nocookie iframe
 * loads only when the user clicks (saves weight, privacy-friendly). 16:9
 * responsive wrapper, titled, with a "watch on YouTube" external fallback.
 */
import { useState } from "react";

export default function VideoEmbed({ id, title = "Kids in Tech video" }) {
  const [loaded, setLoaded] = useState(false);
  if (!id) return null;

  return (
    <figure className="flex flex-col gap-2">
      <div className="relative w-full aspect-video overflow-hidden rounded-4xl bg-maroon">
        {loaded ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            loading="lazy"
            allow="accelerated-motion; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            aria-label={`Play video: ${title}`}
            className="group absolute inset-0 grid place-items-center focus-visible:outline-2 focus-visible:outline-gold"
          >
            <span
              className="absolute inset-0 bg-gradient-to-br from-maroon to-panel-charcoal opacity-90"
              aria-hidden="true"
            />
            <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-brand-red text-paper shadow-lg transition-transform duration-150 group-hover:scale-105 group-active:scale-95">
              <Play className="w-7 h-7 translate-x-0.5" aria-hidden="true" />
            </span>
            <span className="relative mt-4 px-4 text-cream/90 text-sm sm:text-base font-semibold text-center">
              {title}
            </span>
          </button>
        )}
      </div>
      <figcaption className="flex items-center justify-between gap-2 text-sm">
        <span className="text-ink/80">{title}</span>
        <a
          href={`https://www.youtube.com/watch?v=${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-active hover:underline shrink-0"
        >
          Watch on YouTube ↗
        </a>
      </figcaption>
    </figure>
  );
}
