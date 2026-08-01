/*
 * GalleryTile — one gallery item (image or video) as a keyboard-activatable
 * button. Image zooms within its frame on hover; caption + category fade up;
 * video tiles show a play badge. Aspect-ratio box → no CLS. Token + motion
 * based. Opens the reused Lightbox (image) or a VideoEmbed modal (video).
 */

import { Play } from "lucide-react";
import Image from "next/image";

export default function GalleryTile({ item, onClick }) {
  const isVideo = item.kind === "video";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={
        isVideo
          ? `Play video: ${item.caption || item.alt}`
          : `Open photo: ${item.caption || item.alt}`
      }
      className="group relative block w-full aspect-square overflow-hidden rounded-2xl bg-tint-blue focus-visible:outline-2 focus-visible:outline-brand-red"
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        placeholder={item.src?.blurDataURL ? "blur" : undefined}
      />

      {/* Caption + category overlay (fades up on hover/focus) */}
      <span className="absolute inset-0 flex flex-col justify-end p-3 bg-gradient-to-t from-maroon/80 via-maroon/10 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200">
        <span className="translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
          {item.category && (
            <span className="inline-block rounded-full bg-gold px-2 py-0.5 text-[11px] font-semibold text-brown mb-1">
              {item.category}
            </span>
          )}
          {item.caption && (
            <span className="block text-cream text-sm font-medium leading-tight">
              {item.caption}
            </span>
          )}
        </span>
      </span>

      {/* Video play badge */}
      {isVideo && (
        <span
          className="absolute inset-0 grid place-items-center"
          aria-hidden="true"
        >
          <span className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-red/90 text-paper shadow-lg transition-transform duration-200 group-hover:scale-110">
            <Play className="w-6 h-6 translate-x-0.5" />
          </span>
        </span>
      )}
    </button>
  );
}
