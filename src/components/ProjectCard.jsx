/*
 * ProjectCard — reusable student/example project card (Programs, Bootcamps,
 * Student Projects). Thumbnail lives in an aspect-ratio box (no CLS) and
 * zooms within its frame on hover; card lifts. Renders an on-brand
 * placeholder tile when no thumbnail is supplied yet.
 *
 * Props:
 *   project = { title, thumbnail?, trackLabel? }
 *   href      — wrap in a Link (static card if omitted)
 *   onClick   — makes the whole card a <button> (used to open a modal)
 *   overlay   — show a hover overlay (title + track pill fade up on the image)
 *   placeholderBg — token bg utility for the placeholder tile
 */
import { Code2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function CardInner({
  project,
  placeholderBg = "bg-tint-lime",
  interactive,
  overlay,
}) {
  return (
    <>
      <div
        className={`relative w-full aspect-[4/3] overflow-hidden ${placeholderBg}`}
      >
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={`object-cover ${interactive ? "transition-transform duration-300 group-hover:scale-105" : ""}`}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-maroon/40">
            <Code2 className="w-10 h-10" aria-hidden="true" />
          </div>
        )}

        {/* Hover overlay: track pill + title slide/fade up over the image */}
        {overlay && (
          <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-maroon/80 via-maroon/10 to-transparent opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200">
            <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
              {project.trackLabel && (
                <span className="inline-block rounded-full bg-gold px-2.5 py-0.5 text-xs font-semibold text-brown mb-1">
                  {project.trackLabel}
                </span>
              )}
              <p className="text-cream font-bold leading-tight">
                {project.title}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Caption below the image (hidden when using the image overlay style) */}
      {!overlay && (
        <div className="flex flex-col gap-2 p-5">
          {project.trackLabel && (
            <span className="inline-block w-fit rounded-full bg-tint-butter px-3 py-1 text-xs font-semibold text-brown">
              {project.trackLabel}
            </span>
          )}
          <h3 className="text-base sm:text-lg font-bold text-maroon">
            {project.title}
          </h3>
        </div>
      )}
    </>
  );
}

export default function ProjectCard({
  project,
  href,
  onClick,
  overlay = false,
  placeholderBg,
}) {
  const base =
    "group flex flex-col rounded-4xl overflow-hidden bg-white border border-hairline transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-brand-red";

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${base} text-left w-full`}
        aria-label={`View ${project.title}`}
      >
        <CardInner
          project={project}
          placeholderBg={placeholderBg}
          interactive
          overlay={overlay}
        />
      </button>
    );
  }
  if (href) {
    return (
      <Link href={href} className={base}>
        <CardInner
          project={project}
          placeholderBg={placeholderBg}
          interactive
          overlay={overlay}
        />
      </Link>
    );
  }
  return (
    <div className={base}>
      <CardInner
        project={project}
        placeholderBg={placeholderBg}
        interactive
        overlay={overlay}
      />
    </div>
  );
}
