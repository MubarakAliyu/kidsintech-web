/*
 * Breadcrumb — token-styled breadcrumb trail. Server-safe (no client JS).
 * Props: items = [{ label, href }]. The last item is treated as the
 * current page (no link, aria-current). Pair with BreadcrumbList JSON-LD
 * in the route's layout.js.
 */
import Link from "next/link";

export default function Breadcrumb({ items = [], className = "" }) {
  if (!items.length) return null;
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1 text-sm text-ink/70">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li
              key={item.href || item.label}
              className="flex items-center gap-1"
            >
              {isLast || !item.href ? (
                <span className="font-semibold text-maroon" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-teal-active transition-colors"
                >
                  {item.label}
                </Link>
              )}
              {!isLast && (
                <span aria-hidden="true" className="text-ink/40">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
