"use client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
/*
 * Lightbox — accessible modal image viewer (reused by cohort galleries and
 * the Gallery page). role="dialog" aria-modal, focus trap, Esc to close,
 * ←/→ to navigate, restores focus to the trigger on close. Backdrop fade +
 * panel scale (disabled under reduced motion).
 *
 * Controlled: pass `index` (number ≥ 0 to open, null to close), `items`
 * ([{src, alt}]), and `onClose` / `onIndexChange`.
 */
import { useCallback, useEffect, useRef } from "react";

export default function Lightbox({
  items = [],
  index,
  onClose,
  onIndexChange,
}) {
  const reduced = useReducedMotion();
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const restoreRef = useRef(null);
  const open = index !== null && index !== undefined && index >= 0;
  const n = items.length;

  const go = useCallback(
    (i) => onIndexChange?.(((i % n) + n) % n),
    [n, onIndexChange],
  );

  // Save/restore focus around open.
  useEffect(() => {
    if (open) {
      restoreRef.current = document.activeElement;
      // focus the close button after mount
      const t = setTimeout(() => closeRef.current?.focus(), 0);
      return () => clearTimeout(t);
    }
    if (restoreRef.current instanceof HTMLElement) restoreRef.current.focus();
  }, [open]);

  // Lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose?.();
      } else if (e.key === "ArrowRight") {
        go(index + 1);
      } else if (e.key === "ArrowLeft") {
        go(index - 1);
      } else if (e.key === "Tab") {
        // Focus trap
        const focusables =
          dialogRef.current?.querySelectorAll("button, a[href]");
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [go, index, onClose],
  );

  if (!open) return null;
  const item = items[index];

  return (
    <AnimatePresence>
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Image ${index + 1} of ${n}`}
        onKeyDown={onKeyDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduced ? 0 : 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
        onClick={onClose}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="absolute top-4 right-4 w-11 h-11 grid place-items-center rounded-full text-white hover:bg-white/20 transition"
        >
          <X className="w-7 h-7" aria-hidden="true" />
        </button>

        {n > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                go(index - 1);
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center rounded-full text-white hover:bg-white/20 transition"
            >
              <ChevronLeft className="w-8 h-8" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                go(index + 1);
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center rounded-full text-white hover:bg-white/20 transition"
            >
              <ChevronRight className="w-8 h-8" aria-hidden="true" />
            </button>
          </>
        )}

        <motion.figure
          key={index}
          initial={{ scale: reduced ? 1 : 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: reduced ? 0 : 0.2 }}
          className="max-w-4xl max-h-[85vh] mx-auto flex flex-col items-center gap-3"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={item.src}
            alt={item.alt || `Image ${index + 1}`}
            className="w-auto h-auto max-h-[80vh] rounded-lg object-contain"
          />
          <figcaption className="text-white/80 text-sm text-center">
            {item.alt ? `${item.alt} — ` : ""}
            {index + 1} / {n}
          </figcaption>
        </motion.figure>
      </motion.div>
    </AnimatePresence>
  );
}
