"use client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ExternalLink, ImageIcon, X } from "lucide-react";
import Image from "next/image";
/*
 * ProjectModal — accessible dialog that shows a single project's media by
 * TYPE + details. role="dialog" aria-modal, focus trap, Esc, restore focus.
 * REUSES <VideoEmbed> (Batch 05) for video. It deliberately does NOT drop a
 * raw <iframe> for live websites (X-Frame-Options: DENY would break
 * silently): it shows a screenshot + "Open project ↗" and only embeds when a
 * project is explicitly `media.embeddable`.
 */
import { useCallback, useEffect, useRef } from "react";
import VideoEmbed from "@/components/VideoEmbed";

function MediaArea({ project }) {
  const { media, title, thumbnail } = project;
  const kind = media?.kind;

  // Video → reuse the Batch 05 facade.
  if (kind === "video") {
    return media.src ? (
      <VideoEmbed id={media.src} title={title} />
    ) : (
      <Placeholder
        icon={ImageIcon}
        label="Video coming soon — TODO"
        ratio="aspect-video"
      />
    );
  }

  // Scratch → embed player when an id exists; else link/placeholder.
  if (kind === "scratchEmbed") {
    return media.src ? (
      <div className="w-full aspect-video overflow-hidden rounded-4xl bg-maroon">
        <iframe
          className="w-full h-full"
          src={`https://scratch.mit.edu/projects/${media.src}/embed`}
          title={`${title} — Scratch project`}
          loading="lazy"
          allowFullScreen
        />
      </div>
    ) : (
      <Placeholder
        icon={ImageIcon}
        label="Scratch project coming soon — TODO"
        ratio="aspect-video"
      />
    );
  }

  // Live website → screenshot + external link (guarded iframe only if flagged).
  if (kind === "liveUrl") {
    if (media.src && media.embeddable) {
      return (
        <div className="w-full aspect-video overflow-hidden rounded-4xl bg-white border border-hairline">
          <iframe
            className="w-full h-full"
            src={media.src}
            title={`${title} — live preview`}
            loading="lazy"
          />
        </div>
      );
    }
    return (
      <div className="flex flex-col gap-3">
        <div className="relative w-full aspect-video overflow-hidden rounded-4xl bg-tint-lime grid place-items-center">
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt={`${title} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
          ) : (
            <span className="text-maroon/40 text-sm">Screenshot — TODO</span>
          )}
        </div>
        {media.src ? (
          <a
            href={media.src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red text-paper px-6 py-3 font-bold transition-all duration-150 hover:bg-ink active:scale-[0.98]"
          >
            Open project <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        ) : (
          <span className="text-sm text-ink/60 text-center">
            Live link coming soon — TODO
          </span>
        )}
      </div>
    );
  }

  // Image (single).
  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-4xl bg-tint-blue grid place-items-center">
      {media?.src || thumbnail ? (
        <Image
          src={media?.src || thumbnail}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover"
        />
      ) : (
        <Placeholder icon={ImageIcon} label="Image coming soon — TODO" bare />
      )}
    </div>
  );
}

function Placeholder({ icon: Icon, label, ratio = "", bare = false }) {
  const inner = (
    <div className="flex flex-col items-center gap-2 text-maroon/40">
      <Icon className="w-10 h-10" aria-hidden="true" />
      <span className="text-sm">{label}</span>
    </div>
  );
  if (bare) return inner;
  return (
    <div
      className={`w-full ${ratio} grid place-items-center rounded-4xl bg-tint-blue`}
    >
      {inner}
    </div>
  );
}

export default function ProjectModal({ project, onClose }) {
  const reduced = useReducedMotion();
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const restoreRef = useRef(null);
  const open = !!project;

  useEffect(() => {
    if (open) {
      restoreRef.current = document.activeElement;
      const t = setTimeout(() => closeRef.current?.focus(), 0);
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        clearTimeout(t);
        document.body.style.overflow = prev;
      };
    }
    if (restoreRef.current instanceof HTMLElement) restoreRef.current.focus();
  }, [open]);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose?.();
      else if (e.key === "Tab") {
        const f = dialogRef.current?.querySelectorAll(
          "button, a[href], iframe",
        );
        if (!f || f.length === 0) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [onClose],
  );

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} details`}
        onKeyDown={onKeyDown}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduced ? 0 : 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
      >
        <motion.div
          initial={{ scale: reduced ? 1 : 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: reduced ? 1 : 0.98, opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-4xl bg-cream p-5 sm:p-8 flex flex-col gap-5"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute top-4 right-4 w-10 h-10 grid place-items-center rounded-full text-maroon hover:bg-maroon/10 transition"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>

          <MediaArea project={project} />

          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-maroon pr-10">
              {project.title}
            </h2>
            <p className="text-sm text-ink/70">
              by {project.studentFirstName || "Anonymous"}
              {project.cohort ? ` · Cohort ${project.cohort}` : ""}
            </p>
            <p className="text-base text-ink">{project.description}</p>
            {project.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-tint-butter px-3 py-1 text-xs font-semibold text-brown"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
