"use client";
/*
 * StatusBadge — bootcamp status pill. Reads from the data `status` field
 * (single source of truth). Conveys state with an ICON + TEXT label, never
 * colour alone (a11y). "open"/"upcoming" get a gentle pulse dot that is
 * disabled under prefers-reduced-motion.
 */
import { useReducedMotion } from "framer-motion";
import { CheckCircle2, CircleDot, Clock } from "lucide-react";

const CONFIG = {
  ended: {
    label: "Ended",
    Icon: CheckCircle2,
    cls: "bg-maroon/10 text-maroon",
    pulse: false,
  },
  open: {
    label: "Now enrolling",
    Icon: CircleDot,
    cls: "bg-green-success/15 text-green-success",
    pulse: true,
  },
  upcoming: {
    label: "Upcoming",
    Icon: Clock,
    cls: "bg-gold text-brown",
    pulse: true,
  },
};

export default function StatusBadge({ status, className = "" }) {
  const reduced = useReducedMotion();
  const cfg = CONFIG[status] || CONFIG.ended;
  const { Icon } = cfg;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold ${cfg.cls} ${className}`}
    >
      <span className="relative flex items-center">
        <Icon className="w-4 h-4" aria-hidden="true" />
        {cfg.pulse && !reduced && (
          <span className="absolute -right-1 -top-1 flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
          </span>
        )}
      </span>
      {cfg.label}
    </span>
  );
}
