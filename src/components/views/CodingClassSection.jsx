"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CodingLogo from "../../../public/assets/images/codingLogo.svg";
import HTML from "../../../public/assets/images/html.svg";
import CSS from "../../../public/assets/images/css.svg";
import JS from "../../../public/assets/images/js.svg";
import Gallery from "../../../public/assets/images/gallery.svg";
import GalleryImg1 from "../../../public/assets/images/galleryimg1.avif";
import GalleryImg2 from "../../../public/assets/images/galleryimg2.avif";
import GalleryImg3 from "../../../public/assets/images/galleryimg3.avif";
import CodingArr1 from "../../../public/assets/images/codingArr1.svg";
import CodingArr3 from "../../../public/assets/images/codingArr3.svg";
import Link from "next/link";

// Scroll fade-up
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

// Floating arrows
const float = {
  hidden: { y: 0 },
  visible: {
    y: [0, -12, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const CodingClassSection = () => {
  return (
    <section id="coding-bootcamp" className="bg-[#FDF2CB] px-4 sm:px-8 lg:px-[160px] py-12 sm:py-16 lg:py-[96px]">
      <article className="container flex flex-col items-center gap-6 sm:gap-8 relative">
        {/* HEADER */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Image
            src={CodingLogo}
            alt="coding"
            width={408}
            height={136}
            className="object-cover lg:w-[408px] lg:h-[137px] w-[296px] h-[99px]"
          />
        </motion.div>

        {/* Decorative Arrow 1 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden lg:block absolute -top-[6%] lg:left-[2%] 2xl:left-[4%]"
        >
          <motion.div variants={float} initial="hidden" animate="visible">
            <Image src={CodingArr1} alt="Decorative Arrow" width={402} height={168} className="w-[402px] h-[168px]" />
          </motion.div>
        </motion.div>

        {/* MAIN CONTENT */}
        <motion.div
          className="flex flex-col lg:flex-row items-start justify-center -space-x-6 w-full"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* LEFT SECTION */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="flex flex-col -space-y-6 justify-center items-start">
              {/* Bootcamp Overview box */}
              <motion.div variants={fadeUp}>
                <div className="relative overflow-hidden w-full sm:w-fit">
                  <div className="absolute inset-0 bg-[#FFDAA3] rounded-tl-[60px] sm:rounded-tl-[80px] lg:rounded-tl-[118px] -skew-x-[5deg] rounded-br-[60px] sm:rounded-br-[80px] lg:rounded-br-[118px]" />
                  <div className="relative z-10 py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
                    <p className="font-semibold text-base md:text-lg lg:text-xl xl:text-2xl text-[#694F42]">Bootcamp Overview</p>
                  </div>
                </div>
              </motion.div>

              {/* Bootcamp text blocks */}
              {[1, 2, 3].map((_, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 1}
                  className="flex flex-col p-6 sm:p-8 justify-center items-start gap-6 sm:gap-8 rounded-4xl bg-[#401D26]"
                >
                  <p className="text-base sm:text-xl lg:text-2xl text-[#F1EAEB]">
                    {i === 0 &&
                      "Our Coding Bootcamp is a fun, hands-on program designed to introduce kids (ages 8–16) to the world of computers, coding, and creativity. Over a series of interactive classes, children go from “What is a computer?” to “Look at the website I built!” all while having fun, making friends, and building confidence."}
                    {i === 1 &&
                      "Introduce kids to the foundational tools of web development HTML for structure, CSS for design, and JavaScript for interactivity through hands-on learning and fun projects."}
                    {i === 2 &&
                      "Don’t worry, we start with fun basic drag-and-drop coding before moving to real code HTML/CSS/JavaScript. By the end, you’ll be a coding wizard!"}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SECTION */}
          <motion.div
            className="flex-1 w-full lg:w-auto flex flex-col -space-y-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Curriculum heading */}
            <div className="relative overflow-hidden w-full sm:w-fit self-end">
              <div className="absolute inset-0 bg-[#214A25] rounded-tl-[60px] sm:rounded-tl-[80px] lg:rounded-tl-[118px] -skew-x-[5deg] rounded-br-[60px]" />
              <div className="relative z-10 py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
                <p className="font-semibold text-base md:text-lg lg:text-xl xl:text-2xl text-[#EEF3E9]">Class Curriculum/Fees/Duration</p>
              </div>
            </div>

            {/* Weeks */}
            {[
              { icon: HTML, text: "Week 1: The Building Blocks (HTML)" },
              { icon: CSS, text: "Week 2: Making it Beautiful (CSS)" },
              { icon: JS, text: "Week 3: Make it Work (JavaScript Basics)" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 4}
                className="flex flex-col p-6 sm:p-8 rounded-4xl bg-white"
              >
                <div className="flex items-center gap-4">
                  <Image src={item.icon} alt={item.text} width={56} height={56} />
                  <p className="text-[#401D26] text-base sm:text-xl lg:text-2xl">{item.text}</p>
                </div>
              </motion.div>
            ))}

            {/* Payment / Duration / Class Date */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col md:flex-row p-6 sm:p-8 justify-start items-start gap-6 sm:gap-6 rounded-4xl bg-[#EEF3E9]"
            >
              {/* payment, duration, class date */}
              <div>
                <p className="text-[#2C2F28] font-light text-2xl mb-1">Payment</p>
                <p className="text-[#34A33F] font-bold text-xl lg:text-2xl">₦25,000</p>
              </div>
              <div className="border-t md:border-l border-black w-full md:w-px md:h-[64px]" />
              <div>
                <p className="text-[#2C2F28] font-light text-2xl mb-1">Duration</p>
                <p className="text-[#34A33F] font-bold text-xl lg:text-2xl">3 Weeks</p>
              </div>
              <div className="border-t md:border-l border-black w-full md:w-px md:h-[64px]" />
              <div>
                <p className="text-[#2C2F28] font-light text-2xl mb-1">Class Date</p>
                <p className="text-[#214A25] font-bold text-xl lg:text-2xl">AUG 6th - 24th 2025</p>
              </div>
            </motion.div>

            {/* Coming soon box */}
            <motion.div variants={fadeUp} className="self-end">
              <div className="relative overflow-hidden w-fit self-end">
                <div className="absolute inset-0 bg-[#B4A19A] rounded-tl-[60px] sm:rounded-tl-[80px] lg:rounded-tl-[118px] -skew-x-[5deg] rounded-br-[60px]" />
                <div className="relative z-10 py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
                  <p className="font-semibold text-base md:text-lg lg:text-xl xl:text-2xl text-[#F3E9E9]">Coming Soon...</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* GALLERY */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full lg:mt-10"
        >
          <figure className="rounded-2xl overflow-hidden cursor-pointer group transform rotate-5 lg:-rotate-3 transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-0">
            <Image src={GalleryImg1} alt="Gallery image 1" className="w-full h-full object-cover" placeholder="blur" />
          </figure>
          <figure className="rounded-2xl overflow-hidden cursor-pointer group transform lg:-translate-y-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-0 hover:translate-y-0">
            <Image src={GalleryImg2} alt="Gallery image 2" className="w-full h-full object-cover" placeholder="blur" />
          </figure>
          <figure className="rounded-2xl overflow-hidden cursor-pointer group transform -rotate-5 lg:rotate-3 transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-0">
            <Image src={GalleryImg3} alt="Gallery image 3" className="w-full h-full object-cover" placeholder="blur" />
          </figure>
        </motion.div>

        {/* Gallery Button */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Link
            href="/gallery"
            className="flex p-6 justify-center items-center gap-2 rounded-full bg-[#34A33F] text-[#EAF1EA] font-bold text-xl lg:text-[28px]"
          >
            <Image src={Gallery} alt="gallery" width={22} height={21} />
            View Our Gallery
          </Link>
        </motion.div>

        {/* Decorative Arrow 2 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden lg:block absolute -bottom-[7%] lg:-left-[8%] 2xl:left-[5%]"
        >
          <motion.div variants={float} initial="hidden" animate="visible">
            <Image src={CodingArr3} alt="Decorative Arrow" width={236} height={312} className="w-[336px] h-[312px]" />
          </motion.div>
        </motion.div>
      </article>
    </section>
  );
};

export default CodingClassSection;
