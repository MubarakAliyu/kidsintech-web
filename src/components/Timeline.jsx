/*
 * Timeline — ordered, animated vertical timeline. Rendered as an <ol> so the
 * sequence is exposed to assistive tech. Each item reveals in order. Token +
 * motion based. Reused by the Innovation Challenge (and future roadmaps).
 *
 * Props: items = [{ phase, date, blurb }].
 */
import { fadeUp, Reveal, RevealGroup } from "@/lib/motion";

const fmtDate = (d) =>
  d
    ? new Date(d).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;

export default function Timeline({ items = [] }) {
  if (!items.length) return null;
  return (
    <RevealGroup
      as="ol"
      className="relative w-full max-w-2xl flex flex-col gap-6 list-none"
    >
      {/* vertical line */}
      <span
        className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-hairline"
        aria-hidden="true"
      />
      {items.map((item, i) => (
        <Reveal
          as="li"
          key={item.phase}
          variant={fadeUp}
          custom={i}
          className="relative flex gap-5 pl-0"
        >
          <span
            className="relative z-10 shrink-0 mt-1 grid place-items-center w-8 h-8 rounded-full bg-brand-red text-paper text-sm font-bold"
            aria-hidden="true"
          >
            {i + 1}
          </span>
          <div className="flex flex-col gap-1 pb-2">
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h3 className="text-lg font-bold text-maroon">{item.phase}</h3>
              {fmtDate(item.date) && (
                <span className="text-sm text-brand-red font-semibold">
                  {fmtDate(item.date)}
                </span>
              )}
            </div>
            {item.blurb && <p className="text-sm text-ink/80">{item.blurb}</p>}
          </div>
        </Reveal>
      ))}
    </RevealGroup>
  );
}
