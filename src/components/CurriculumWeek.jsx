/*
 * CurriculumWeek — a week-by-week curriculum card matching the existing
 * bootcamp week-card style (icon + title + optional blurb). Icon key maps
 * to an SVG in public/assets/images (html/css/js or bootcamp1–5).
 */
import Image from "next/image";
import Bootcamp1 from "../../public/assets/images/bootcamp1.svg";
import Bootcamp2 from "../../public/assets/images/bootcamp2.svg";
import Bootcamp3 from "../../public/assets/images/bootcamp3.svg";
import Bootcamp4 from "../../public/assets/images/bootcamp4.svg";
import Bootcamp5 from "../../public/assets/images/bootcamp5.svg";
import Css from "../../public/assets/images/css.svg";
import Html from "../../public/assets/images/html.svg";
import Js from "../../public/assets/images/js.svg";

const ICONS = {
  html: Html,
  css: Css,
  js: Js,
  bootcamp1: Bootcamp1,
  bootcamp2: Bootcamp2,
  bootcamp3: Bootcamp3,
  bootcamp4: Bootcamp4,
  bootcamp5: Bootcamp5,
};

export default function CurriculumWeek({ week }) {
  const Icon = ICONS[week.icon];
  return (
    <div className="flex items-start gap-4 rounded-4xl bg-white border border-hairline p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md w-full">
      {Icon ? (
        <Image
          src={Icon}
          alt=""
          aria-hidden="true"
          width={48}
          height={48}
          className="shrink-0"
        />
      ) : (
        <span className="shrink-0 grid place-items-center w-12 h-12 rounded-2xl bg-tint-butter text-brown font-bold">
          {week.week}
        </span>
      )}
      <div className="flex flex-col gap-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-red">
          Week {week.week}
        </span>
        <h3 className="text-base sm:text-lg font-bold text-maroon">
          {week.title}
        </h3>
        {week.blurb && <p className="text-sm text-ink/75">{week.blurb}</p>}
      </div>
    </div>
  );
}
