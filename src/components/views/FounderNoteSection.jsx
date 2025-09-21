"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Heading from "../../../public/assets/images/founderHeading.avif";
import FounderNote from "../../../public/assets/images/founder-note.avif";
import Founder from "../../../public/assets/images/founder.avif";
import FounderArr1 from "../../../public/assets/images/founder-arr-1.svg";
import FounderArr2 from "../../../public/assets/images/founder-arr-2.svg";

const float = {
  hidden: { y: 0 },
  visible: {
    y: [0, -10, 0], // up, then back down
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};

const FounderNoteSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="bg-[#D5EAF4] px-8 lg:px-[160px] py-[96px]">
      <motion.article
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container flex flex-col items-center gap-2 relative"
      >
        {/* HEADER */}
        <motion.div variants={fadeUp}>
          <Image src={Heading} alt="Heading" width={508} height={70} className="lg:w-[508px] w-[352px] lg:h-[70px] h-auto object-contain" />
        </motion.div>

        {/* Decorative Arrow 1 */}
        <motion.div variants={fadeUp} className="hidden lg:block absolute -top-[7%] right-[4%]">
          <motion.div variants={float}>
            <Image src={FounderArr1} alt="Decorative Arrow" width={244} height={100} className="w-[244px] h-[100px]" />
          </motion.div>
        </motion.div>

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row items-start justify-end gap-6">
          {/* TEXT */}
          <motion.div variants={staggerContainer} className="order-2 lg:order-1 flex-1 flex flex-col justify-end items-start">
            <div className="flex flex-col -gap-8">
              <motion.div variants={fadeUp} className="flex flex-col p-6 sm:p-8 justify-center items-start sm:gap-8 rounded-4xl bg-white">
                <p className="text-base sm:text-xl lg:text-2xl text-[#401D26]">
                  "Every child carries a spark of creativity our mission at Kids in Tech is to nurture that spark into skills, confidence,
                  and curiosity. Through design, coding, and STEM, we want kids not just to use technology, but to create with it."
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex flex-col p-6 sm:p-8 justify-center items-start gap-6 sm:gap-8 rounded-4xl bg-white"
              >
                <p className="text-base sm:text-xl lg:text-2xl text-[#401D26]">
                  "This bootcamp is more than classes; it's a safe space for children to explore, imagine, and build the future with their
                  own hands."
                </p>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="flex items-center gap-4 md:-mt-10 -mt-3 relative">
              {/* Decorative Arrow 2 */}
              <motion.div variants={fadeUp} className="hidden lg:block absolute -left-[22%] top-[40%] z-10">
                <motion.div variants={float}>
                  <Image src={FounderArr2} alt="Decorative Arrow" width={290} height={221} className="w-[290px] h-[221px]" />
                </motion.div>
              </motion.div>

              {/* Founder Image */}
              <figure className="flex flex-col justify-end items-start gap-2.5 overflow-hidden group">
                <Image
                  src={Founder}
                  alt="founder"
                  className="w-[118px] h-[146px] sm:w-[154px] sm:h-[190px] object-cover relative z-20 transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </figure>

              {/* Founder Info */}
              <div className="flex flex-col items-start">
                <p className="text-lg sm:text-xl lg:text-2xl text-[#401D26] font-normal leading-6">Aliyu</p>
                <p className="text-lg sm:text-xl lg:text-2xl text-[#401D26] font-normal leading-6">Mubarak</p>
                <p className="text-lg sm:text-xl lg:text-2xl text-[#401D26] font-bold leading-6">Founder @ Kids In Tech</p>
              </div>
            </motion.div>
          </motion.div>

          {/* IMAGE */}
          <motion.figure
            variants={fadeUp}
            className="order-1 lg:order-2 flex-1 flex flex-col justify-end items-start gap-2.5 rounded-3xl md:w-[600] overflow-hidden cursor-pointer group"
          >
            <Image
              src={FounderNote}
              alt="Founder Note"
              width={500}
              height={500}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </motion.figure>
        </div>
      </motion.article>
    </section>
  );
};

export default FounderNoteSection;
