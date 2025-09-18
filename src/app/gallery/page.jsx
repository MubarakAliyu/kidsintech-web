"use client";
import FounderNoteSection from "@/components/views/FounderNoteSection";
import Heading from "../../../public/assets/images/galleryHeading.png";
import GalleryPic1 from "../../../public/assets/images/gallerypic1.png";
import GalleryPic2 from "../../../public/assets/images/gallerypic2.png";
import GalleryPic3 from "../../../public/assets/images/gallerypic3.png";
import GalleryPic4 from "../../../public/assets/images/gallerypic4.png";
import GalleryPic5 from "../../../public/assets/images/gallerypic5.png";
import GalleryPic6 from "../../../public/assets/images/gallerypic6.png";
import GalleryPic7 from "../../../public/assets/images/gallerypic7.png";
import GalleryPic8 from "../../../public/assets/images/gallerypic8.png";
import GalleryPic9 from "../../../public/assets/images/gallerypic9.png";
import GalleryPic10 from "../../../public/assets/images/gallerypic10.png";
import GalleryPic11 from "../../../public/assets/images/galleryimg1.png";
import GalleryPic12 from "../../../public/assets/images/galleryimg2.png";
import GalleryPic13 from "../../../public/assets/images/galleryimg3.png";
import GalleryPic14 from "../../../public/assets/images/gallerypic14.png";
import GalleryPic15 from "../../../public/assets/images/gallerypic15.png";
import GalleryPic16 from "../../../public/assets/images/gallerypic16.png";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// Fade-up animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const GalleryPage = () => {
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

  return (
    <div>
      <section className="bg-[#FFF7F1] px-4 sm:px-8 lg:px-[160px] py-12 sm:py-16 lg:py-[96px]">
        <article className="container flex flex-col items-center gap-6 sm:gap-8 relative">
          {/* Header */}
          <div className="flex flex-col items-center lg:-space-y-4">
            {/* Heading Image */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0} // first
            >
              <Image src={Heading} alt="heading" width={913} height={202} className="w-[325px] lg:w-[913px] h-[80px] lg:h-[202px]" />
            </motion.div>

            {/* Paragraph */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={5} // second
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

      {/* Founder note section after gallery */}
      <FounderNoteSection />
    </div>
  );
};

export default GalleryPage;
