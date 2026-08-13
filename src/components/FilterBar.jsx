/*
 * FilterBar — generic, reusable filter button group (used by Student
 * Projects and Gallery). Real <button>s with aria-pressed, keyboard
 * operable, visible focus, and a per-filter count. Token + transform based;
 * no page-specific logic — pass `filters`, `active`, `onChange`.
 *
 * Props:
 *   filters  = [{ key, label, count? }]
 *   active   = current key
 *   onChange = (key) => void
 *   label    = accessible group label (default "Filter")
 */
export default function FilterBar({
  filters = [],
  active,
  onChange,
  label = "Filter",
  className = "",
}) {
  if (!filters.length) return null;
  return (
    // biome-ignore lint/a11y/useSemanticElements: role="group" + aria-label is the correct pattern for a labelled toggle-button group (a <fieldset> would require a <legend> and change layout).
    <div
      role="group"
      aria-label={label}
      className={`flex flex-wrap items-center justify-center gap-2 sm:gap-3 ${className}`}
    >
      {filters.map((f) => {
        const isActive = f.key === active;
        return (
          <button
            key={f.key}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(f.key)}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm sm:text-base font-semibold transition-all duration-150 focus-visible:outline-2 focus-visible:outline-brand-red hover:scale-[1.03] ${
              isActive
                ? "bg-brand-red text-paper"
                : "bg-white border border-hairline text-maroon hover:bg-tint-peach/50"
            }`}
          >
            {f.label}
            {typeof f.count === "number" && (
              <span
                className={`inline-flex items-center justify-center min-w-5 h-5 px-1 rounded-full text-xs ${
                  isActive
                    ? "bg-white/25 text-paper"
                    : "bg-maroon/5 text-ink/70"
                }`}
              >
                {f.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
