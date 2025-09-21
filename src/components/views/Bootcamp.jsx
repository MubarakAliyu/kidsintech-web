// src/components/Bootcamp.tsx
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Heading from "../../../public/assets/images/stemHeading.avif";
import Bootcamp1 from "../../../public/assets/images/bootcamp1.svg";
import Bootcamp2 from "../../../public/assets/images/bootcamp2.svg";
import Bootcamp3 from "../../../public/assets/images/bootcamp3.svg";
import Bootcamp4 from "../../../public/assets/images/bootcamp4.svg";
import Bootcamp5 from "../../../public/assets/images/bootcamp5.svg";
import BootcampArr1 from "../../../public/assets/images/bootcamp-arr-1.svg";
import BootcampArr2 from "../../../public/assets/images/bootcamp-arr-2.svg";

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
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const Bootcamp = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section id="design-stem" className="bg-[#FFF7F1] px-4 sm:px-8 lg:px-[160px] py-12 sm:py-16 lg:py-[96px]">
      <motion.article
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container flex flex-col items-center gap-6 sm:gap-8 relative"
      >
        {/* HEADER */}
        <motion.div variants={fadeUp}>
          <Image
            src={Heading}
            alt="Heading"
            width={496}
            height={170}
            className="lg:w-[496px] w-[334px] lg:h-[170px] h-[112px] object-cover"
          />
        </motion.div>

        {/* Decorative Arrow 1 */}
        <motion.div variants={fadeUp} className="hidden lg:block absolute -top-[7%] lg:left-[12%] 2xl:left-[22%]">
          <motion.div variants={float}>
            <motion.div variants={float}>
              <Image src={BootcampArr1} alt="Decorative Arrow" width={193} height={74} className="w-[192px] h-[84px]" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* MAIN CONTENT */}
        <motion.div variants={staggerContainer} className="flex flex-col lg:flex-row items-start justify-center -space-x-6 w-full">
          {/* LEFT SECTION - Bootcamp Overview */}
          <motion.div variants={staggerContainer} className="flex-1 w-full lg:w-auto">
            <div className="flex flex-col -space-y-6 justify-center items-start">
              {/* Green box */}
              <motion.div variants={fadeUp} className="relative overflow-hidden w-full sm:w-fit">
                <div className="absolute inset-0 bg-[#D6DE9B] rounded-tl-[60px] sm:rounded-tl-[80px] lg:rounded-tl-[118px] -skew-x-[5deg] rounded-br-[60px] sm:rounded-br-[80px] lg:rounded-br-[118px]"></div>
                <div className="relative z-10 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 flex justify-start items-center gap-2 sm:gap-3">
                  <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#694F42] leading-4 sm:leading-5 lg:leading-[26px] ">
                    Bootcamp Overview
                  </p>
                </div>
              </motion.div>

              {/* Design Focus Paragraph */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col p-6 sm:p-8 justify-center items-start gap-6 sm:gap-8 rounded-4xl bg-[#353226]"
              >
                <p className="text-base sm:text-xl lg:text-2xl text-[#F1EAEB] lg:leading-[26px] leading-5">
                  Our Designing and STEM Learning Bootcamp is all about creativity, exploration, and fun hands-on learning! In the Design
                  sessions, kids bring their ideas to life from sketching and digital art to creating posters, logos, app designs, and even
                  simple animations. They get to explore fun graphic design tools, design their own characters, and experiment with colorful
                  layouts that make their imagination shine on screen. 🎨✨
                </p>
              </motion.div>

              {/* STEM Focus Paragraph */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col p-6 sm:p-8 justify-center items-start gap-6 sm:gap-8 rounded-4xl bg-[#353226]"
              >
                <p className="text-base sm:text-xl lg:text-2xl text-[#F1EAEB] lg:leading-[26px] leading-5">
                  In the STEM adventures, learning goes beyond books it’s about doing, building, and discovering how the world works. Kids
                  dive into exciting science experiments, build mini robots, explore space and planets, and learn how everyday gadgets
                  function. These interactive activities spark curiosity, problem-solving, and creativity, showing that learning can be both
                  fun and impactful.
                </p>
              </motion.div>

              {/* Combined Benefit Paragraph */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col p-6 sm:p-8 justify-center items-start gap-6 sm:gap-8 rounded-4xl bg-[#353226]"
              >
                <p className="text-base sm:text-xl lg:text-2xl text-[#F1EAEB] lg:leading-[26px] leading-5">
                  Together, Design and STEM give kids the tools to imagine, create, and innovate building a strong foundation for the future
                  while having an unforgettable learning experience. 🚀💡
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SECTION - Class Curriculum/Fees/Duration */}
          <motion.div variants={staggerContainer} className="flex-1 w-full lg:w-auto">
            <div className="flex flex-col -gap-4 items-start">
              {/* Green box */}
              <motion.div variants={fadeUp} className="relative overflow-hidden w-full sm:w-fit self-end">
                <div className="absolute inset-0 bg-[#214A25] rounded-tl-[60px] sm:rounded-tl-[80px] lg:rounded-tl-[118px] -skew-x-[5deg] rounded-br-[60px] sm:rounded-br-[80px] lg:rounded-br-[118px]"></div>
                <div className="relative z-10 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-2 sm:gap-3">
                  <p className="font-semibold text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#EEF3E9] leading-4 sm:leading-5 lg:leading-[26px] text-center">
                    Class Curriculum/Fees/Duration
                  </p>
                </div>
              </motion.div>

              {/* Week items */}
              {[
                {
                  img: Bootcamp1,
                  text: "Week 1: Introduction & Foundations",
                },
                {
                  img: Bootcamp2,
                  text: "Week 2: Exploring Creativity & Science",
                },
                {
                  img: Bootcamp3,
                  text: "Week 3: Building & Designing Projects",
                },
                {
                  img: Bootcamp4,
                  text: "Week 4: Coding & Interactivity",
                },
                {
                  img: Bootcamp5,
                  text: "Week 5: Fun, Innovation & Showcase",
                },
              ].map((week, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex flex-col p-6 sm:p-8 justify-center items-start gap-6 sm:gap-8 rounded-4xl bg-white w-full"
                >
                  <div className="flex items-center gap-4">
                    <Image src={week.img} alt="intro" width={56} height={56} />
                    <p className="text-[#401D26] text-base sm:text-xl lg:text-2xl lg:leading-[26px] leading-5">{week.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Payment/Duration/Class Date */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col md:flex-row p-6 sm:p-8 justify-start items-start gap-6 sm:gap-8 rounded-4xl bg-[#EEF3E9] w-full"
              >
                <div className="flex flex-col items-start gap-2 md:gap-4">
                  <p className="text-[#2C2F28] font-light text-xl lg:text-2xl lg:leading-[26px] leading-5">Payment</p>
                  <p className="text-[#34A33F] font-bold text-xl lg:text-2xl lg:leading-[26px] leading-5">₦0.00</p>
                </div>

                <div className="border-t md:border-l border-black w-full md:w-px md:h-[64px]"></div>

                <div className="flex flex-col items-start gap-2 md:gap-4">
                  <p className="text-[#2C2F28] font-light text-xl lg:text-2xl lg:leading-[26px] leading-5">Duration</p>
                  <p className="text-[#34A33F] font-bold text-xl lg:text-2xl lg:leading-[26px] leading-5">-</p>
                </div>

                <div className="border-t md:border-l border-black w-full md:w-px md:h-[64px]"></div>

                <div className="flex flex-col items-start gap-2 md:gap-4">
                  <p className="text-[#2C2F28] font-light text-xl lg:text-2xl lg:leading-[26px] leading-5">Class Date</p>
                  <p className="text-[#34A33F] font-bold text-xl lg:text-2xl lg:leading-[26px] leading-5">-</p>
                </div>
              </motion.div>

              {/* Coming Soon */}
              <motion.div variants={fadeUp} className="relative overflow-hidden w-fit self-end">
                <div className="absolute inset-0 bg-[#A7C383] rounded-tl-[60px] sm:rounded-tl-[80px] lg:rounded-tl-[118px] -skew-x-[5deg] rounded-br-[60px] sm:rounded-br-[80px] lg:rounded-br-[118px]"></div>
                <div className="relative z-10 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-2 sm:gap-3">
                  <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#EEF3E9] leading-4 sm:leading-5 lg:leading-[26px] text-center">
                    Coming Soon...
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative Arrow 2 */}
        <motion.div variants={fadeUp} className="hidden lg:block absolute -bottom-[10%] md:right-[27%] 2xl:right-[34%]">
          <motion.div variants={float}>
            <Image src={BootcampArr2} alt="Decorative Arrow" width={584} height={146} className="w-[584px] h-[146px]" />
          </motion.div>
        </motion.div>
      </motion.article>
    </section>
  );
};

export default Bootcamp;
