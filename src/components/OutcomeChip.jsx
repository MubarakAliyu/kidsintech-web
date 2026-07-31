/*
 * OutcomeChip — a labelled "what you'll learn" chip with a check icon.
 * Hover: subtle shade shift + scale(1.03). Token + transform based.
 */
import { Check } from "lucide-react";

export default function OutcomeChip({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white border border-hairline px-4 py-2 text-sm sm:text-base text-maroon transition-transform duration-150 hover:scale-[1.03] hover:bg-tint-lime/60">
      <Check
        className="w-4 h-4 text-green-success shrink-0"
        aria-hidden="true"
      />
      {children}
    </span>
  );
}
