"use client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
/*
 * Gallery — UPDATED IN PLACE (Batch 07): same heading/intro and the existing
 * founder-note + Register CTA are preserved; we ADD category filtering
 * (reused <FilterBar>), an animated reflow, and image viewing via the reused
 * <Lightbox>. All 16 existing images still render. Video items (none yet)
 * open a <VideoEmbed> modal.
 */
import { useEffect, useMemo, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import FilterBar from "@/components/FilterBar";
import GalleryTile from "@/components/GalleryTile";
import FounderNoteSection from "@/components/views/FounderNoteSection";
import { galleryFilters, galleryItems } from "@/data/gallery";
import { fadeUp, Reveal } from "@/lib/motion";
import Heading from "../../../public/assets/images/galleryHeading.avif";

const Lightbox = dynamic(() => import("@/components/Lightbox"));
const VideoEmbed = dynamic(() => import("@/components/VideoEmbed"));

export default function GalleryPage() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [videoItem, setVideoItem] = useState(null);

  const filtered = useMemo(
    () =>
      active === "all"
        ? galleryItems
        : galleryItems.filter((i) => i.category === active),
    [active],
  );
  // Lightbox navigates across the current filtered IMAGE set only.
  const filteredImages = useMemo(
    () => filtered.filter((i) => i.kind !== "video"),
    [filtered],
  );
  const lightboxItems = filteredImages.map((i) => ({
    src: i.src,
    alt: i.caption || i.alt,
  }));

  const onFilterChange = (key) => {
    setActive(key);
    setLightboxIndex(null); // avoid stale index across filter changes
  };

  // Close the video modal on Escape.
  useEffect(() => {
    if (!videoItem) return;
    const onKey = (e) => e.key === "Escape" && setVideoItem(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [videoItem]);

  const openItem = (item) => {
    if (item.kind === "video") {
      setVideoItem(item);
    } else {
      const idx = filteredImages.findIndex((i) => i.id === item.id);
      setLightboxIndex(idx >= 0 ? idx : 0);
    }
  };

  return (
    <div>
      <section className="bg-cream px-4 sm:px-8 lg:px-[160px] py-12 sm:py-16 lg:py-[96px]">
        <article className="container flex flex-col items-center gap-6 sm:gap-8 relative">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
            className="self-center"
          />

          {/* Accessible page h1 (heading below is an image) — no visual change. */}
          <h1 className="sr-only">
            Kids in Tech gallery — photos and videos from our bootcamps
          </h1>

          {/* Existing heading + intro (preserved) */}
          <div className="flex flex-col items-center lg:-space-y-4">
            <Reveal variant={fadeUp}>
              <Image
                src={Heading}
                alt="Our Gallery"
                width={913}
                height={202}
                className="w-[325px] lg:w-[913px] h-[80px] lg:h-[202px]"
              />
            </Reveal>
            <Reveal
              as="div"
              variant={fadeUp}
              custom={1}
              className="bg-white py-1.5 px-2.5 lg:px-8 lg:py-4 gap-2.5 flex items-center rounded-3xl lg:rounded-full"
            >
              <p className="text-base sm:text-lg lg:text-xl text-center font-normal text-[#2D2124]">
                Discover the creativity, fun, and learning from our Kids in Tech
                Bootcamps. Each photo and video captures moments of curiosity,
                teamwork, and growth — little glimpses of the future our kids
                are building today.
              </p>
            </Reveal>
          </div>

          {/* Category filter (reused FilterBar) */}
          <FilterBar
            filters={galleryFilters}
            active={active}
            onChange={onFilterChange}
            label="Filter gallery by category"
          />

          {/* Result count for assistive tech */}
          <p className="sr-only" aria-live="polite">
            Showing {filtered.length} {filtered.length === 1 ? "item" : "items"}
            {active !== "all" ? ` in ${active}` : ""}.
          </p>

          {/* Grid with animated reflow */}
          <motion.div
            layout={!reduced}
            className="columns-2 sm:columns-3 lg:columns-4 gap-4 sm:gap-6 w-full [&>*]:mb-4 sm:[&>*]:mb-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout={!reduced}
                  initial={reduced ? false : { opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: reduced ? 0 : 0.25, ease: "easeOut" }}
                  className="break-inside-avoid"
                >
                  <GalleryTile item={item} onClick={() => openItem(item)} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-ink/60">
              No items in this category yet — check back soon!
            </p>
          )}
        </article>
      </section>

      {/* Existing founder note + Register CTA (unchanged) */}
      <FounderNoteSection />

      {/* Reused Lightbox for images */}
      <Lightbox
        items={lightboxItems}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />

      {/* Video modal (reused VideoEmbed). Backdrop is a real button so it's
          click + keyboard closable; Esc handled by the effect above. */}
      {videoItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={videoItem.caption || "Video"}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <button
            type="button"
            aria-label="Close video"
            onClick={() => setVideoItem(null)}
            className="absolute inset-0 bg-black/80"
          />
          <div className="relative w-full max-w-3xl">
            <VideoEmbed
              id={videoItem.videoId}
              title={videoItem.caption || "Kids in Tech video"}
            />
          </div>
        </div>
      )}
    </div>
  );
}
