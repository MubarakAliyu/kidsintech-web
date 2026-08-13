/*
 * CohortCard — one bootcamp cohort on the /bootcamps index. Status badge +
 * dates + thumbnail (first photo of that cohort, else a placeholder tile).
 * The current open/upcoming cohort is emphasised with an accent ring +
 * ribbon — driven purely by `status`. Hover lifts card + zooms thumb.
 */

import { GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getGalleryByCohort } from "@/data/gallery";
import StatusBadge from "./StatusBadge";

const fmtRange = (start, end) => {
  if (!start) return "Dates to be announced";
  const opts = { day: "numeric", month: "short", year: "numeric" };
  const s = new Date(start).toLocaleDateString("en-GB", opts);
  if (!end) return s;
  const e = new Date(end).toLocaleDateString("en-GB", opts);
  return `${s} – ${e}`;
};

export default function CohortCard({ cohort }) {
  const emphasized = cohort.status === "open" || cohort.status === "upcoming";
  const thumb = getGalleryByCohort(cohort.galleryCohort)[0];

  return (
    <Link
      href={`/bootcamps/${cohort.slug}`}
      className={`group relative flex flex-col rounded-4xl overflow-hidden bg-white transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-brand-red ${
        emphasized ? "border-2 border-brand-red" : "border border-hairline"
      }`}
    >
      {emphasized && (
        <span className="absolute z-10 top-4 left-4 rounded-full bg-brand-red text-paper px-3 py-1 text-xs font-bold shadow">
          Register now
        </span>
      )}

      <div className="relative w-full aspect-[16/10] overflow-hidden bg-tint-blue">
        {thumb ? (
          <Image
            src={thumb.src}
            alt={`${cohort.edition} photo`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-maroon/40">
            <GraduationCap className="w-12 h-12" aria-hidden="true" />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-semibold text-brown">
            {cohort.edition}
          </span>
          <StatusBadge status={cohort.status} />
        </div>
        <h3 className="text-xl font-bold text-maroon">{cohort.title}</h3>
        <p className="text-sm text-ink/70">
          {fmtRange(cohort.startDate, cohort.endDate)}
        </p>
        <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-brand-red group-hover:underline">
          View details →
        </span>
      </div>
    </Link>
  );
}
