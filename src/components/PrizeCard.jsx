/*
 * PrizeCard — a single prize (place + title + blurb). Visual, not
 * over-claimed (content is placeholder until confirmed). Token + motion based.
 */
import { Award, Medal, Trophy } from "lucide-react";

const ICONS = [Trophy, Medal, Award];

export default function PrizeCard({ prize, index = 0 }) {
  const Icon = ICONS[index] || Award;
  return (
    <div className="flex flex-col items-center text-center gap-3 rounded-4xl bg-white border border-hairline p-6 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg">
      <span className="grid place-items-center w-14 h-14 rounded-2xl bg-gold text-brown">
        <Icon className="w-7 h-7" aria-hidden="true" />
      </span>
      <span className="text-sm font-semibold uppercase tracking-wide text-brand-red">
        {prize.place}
      </span>
      <h3 className="text-lg font-bold text-maroon">{prize.title}</h3>
      {prize.blurb && <p className="text-sm text-ink/75">{prize.blurb}</p>}
    </div>
  );
}
