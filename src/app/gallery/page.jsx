"use client";
import React, { useState, useEffect } from "react";
import FounderNoteSection from "@/components/views/FounderNoteSection";
import Heading from "../../../public/assets/images/galleryHeading.avif";
import GalleryPic1 from "../../../public/assets/images/gallerypic1.avif";
import GalleryPic2 from "../../../public/assets/images/gallerypic2.avif";
import GalleryPic3 from "../../../public/assets/images/gallerypic3.avif";
import GalleryPic4 from "../../../public/assets/images/gallerypic4.avif";
import GalleryPic5 from "../../../public/assets/images/gallerypic5.avif";
import GalleryPic6 from "../../../public/assets/images/gallerypic6.avif";
import GalleryPic7 from "../../../public/assets/images/gallerypic7.avif";
import GalleryPic8 from "../../../public/assets/images/gallerypic8.avif";
import GalleryPic9 from "../../../public/assets/images/gallerypic9.avif";
import GalleryPic10 from "../../../public/assets/images/gallerypic10.avif";
import GalleryPic11 from "../../../public/assets/images/galleryimg1.avif";
import GalleryPic12 from "../../../public/assets/images/galleryimg2.avif";
import GalleryPic13 from "../../../public/assets/images/galleryimg3.avif";
import GalleryPic14 from "../../../public/assets/images/gallerypic14.avif";
import GalleryPic15 from "../../../public/assets/images/gallerypic15.avif";
import GalleryPic16 from "../../../public/assets/images/gallerypic16.avif";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  GalleryPic1,
  GalleryPic2,
  GalleryPic3,
  GalleryPic4,
  GalleryPic5,
  GalleryPic6,
  GalleryPic7,
  GalleryPic8,
  GalleryPic9,
  GalleryPic10,
  GalleryPic11,
  GalleryPic12,
  GalleryPic13,
  GalleryPic14,
  GalleryPic15,
  GalleryPic16,
];

// Animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const GalleryPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  return (
    <div>
      <section className="bg-[#FFF7F1] px-4 sm:px-8 lg:px-[160px] py-12 sm:py-16 lg:py-[96px]">
        <article className="container flex flex-col items-center gap-6 sm:gap-8 relative">
          {/* Header */}
          <div className="flex flex-col items-center lg:-space-y-4">
            {/* Heading Image */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
              <Image src={Heading} alt="heading" width={913} height={202} className="w-[325px] lg:w-[913px] h-[80px] lg:h-[202px]" />
            </motion.div>

            {/* Paragraph */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={5}
              className="bg-white py-1.5 px-2.5 lg:px-8 lg:py-4 gap-2.5 flex items-center rounded-3xl lg:rounded-full"
            >
              <p className="text-base sm:text-lg lg:text-xl text-center font-normal text-[#2D2124]">
                Discover the creativity, fun, and learning from our Kids in Tech Bootcamps. Each photo and video captures moments of
                curiosity, teamwork, and growth — little glimpses of the future our kids are building today.
              </p>
            </motion.div>
          </div>

          {/* Gallery */}
          <div className="columns-2 sm:columns-3 lg:columns-3 gap-4 sm:gap-6 w-full">
            {galleryImages.map((img, i) => (
              <motion.figure
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="mb-4 sm:mb-6 rounded-2xl overflow-hidden cursor-pointer group break-inside-avoid"
                onClick={() => openModal(i)}
              >
                <Image
                  src={img}
                  alt={`Gallery image ${i + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  placeholder="blur"
                />
              </motion.figure>
            ))}
          </div>
        </article>
      </section>

      {/* Founder note */}
      <FounderNoteSection />

      {/* Modal Preview */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95"
            onClick={closeModal}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/20 transition cursor-pointer"
            >
              <X size={32} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/20 transition cursor-pointer"
            >
              <ChevronLeft size={40} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/20 transition cursor-pointer"
            >
              <ChevronRight size={40} />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl max-h-[85vh] mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                className="w-auto h-auto max-h-[85vh] rounded-lg object-contain"
              />
              <p className="text-white text-center mt-3 text-sm">
                {currentIndex + 1} / {galleryImages.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
