/*
 * ProjectCard — reusable student/example project card (Programs, Bootcamps,
 * Student Projects). Thumbnail lives in an aspect-ratio box (no CLS) and
 * zooms within its frame on hover; card lifts. Renders an on-brand
 * placeholder tile when no thumbnail is supplied yet.
 *
 * Props:
 *   project = { title, thumbnail?, trackLabel? }
 *   href     — optional wrapping link (card is static if omitted)
 *   placeholderBg — token bg utility for the placeholder tile
 */

import { Code2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function CardInner({ project, placeholderBg = "bg-tint-lime", interactive }) {
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
      </div>
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
    </>
  );
}

export default function ProjectCard({ project, href, placeholderBg }) {
  const base =
    "group flex flex-col rounded-4xl overflow-hidden bg-white border border-hairline transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg";

  if (href) {
    return (
      <Link
        href={href}
        className={`${base} focus-visible:outline-2 focus-visible:outline-brand-red`}
      >
        <CardInner
          project={project}
          placeholderBg={placeholderBg}
          interactive
        />
      </Link>
    );
  }
  return (
    <div className={base}>
      <CardInner project={project} placeholderBg={placeholderBg} interactive />
    </div>
  );
}
