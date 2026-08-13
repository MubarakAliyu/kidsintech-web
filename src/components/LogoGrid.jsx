/*
 * LogoGrid — grid of logo/name tiles (sponsors, judges, partners). Logos go
 * grayscale→colour on hover; a name chip renders when no logo is supplied.
 * Optional subtitle (e.g. a judge's role). Token + motion based.
 *
 * Props: items = [{ name, logo?, url?, subtitle? }], columns (tailwind grid).
 */
import Image from "next/image";
import Link from "next/link";
import { fadeUp, Reveal, RevealGroup } from "@/lib/motion";

function Tile({ item }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-2 rounded-2xl bg-white border border-hairline px-4 py-6 min-h-[120px] text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      {item.logo ? (
        <Image
          src={item.logo}
          alt={item.name}
          width={120}
          height={56}
          className="max-h-14 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      ) : (
        <span className="font-semibold text-maroon/70">{item.name}</span>
      )}
      {item.subtitle && (
        <span className="text-xs text-ink/60">{item.subtitle}</span>
      )}
    </div>
  );
}

export default function LogoGrid({
  items = [],
  columns = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
}) {
  if (!items.length) return null;
  return (
    <RevealGroup className={`grid ${columns} gap-4 w-full`}>
      {items.map((item, i) => (
        <Reveal key={item.name} variant={fadeUp} custom={i} className="flex">
          {item.url ? (
            <Link
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Tile item={item} />
            </Link>
          ) : (
            <div className="w-full">
              <Tile item={item} />
            </div>
          )}
        </Reveal>
      ))}
    </RevealGroup>
  );
}
