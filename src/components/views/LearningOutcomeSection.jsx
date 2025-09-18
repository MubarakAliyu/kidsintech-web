// src/components/LearningOutcomeSection.tsx
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Heading from "../../../public/assets/images/learningHeading.png";
import TechCreativity from "../../../public/assets/images/outcome1.png";
import CriticalThinking from "../../../public/assets/images/outcome2.png";
import ConfidenceExpression from "../../../public/assets/images/outcome3.png";
import CollaborationFun from "../../../public/assets/images/outcome4.png";
import OutcomeArr1 from "../../../public/assets/images/outcome-arr-1.svg";
import OutcomeArr2 from "../../../public/assets/images/outcome-arr-2.svg";

const float = {
  hidden: { y: 0 },
  visible: {
    y: [0, -4, 0], // up, then back down
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
  visible: { transition: { staggerChildren: 0.2 } },
};

const LearningOutcomeSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="bg-[#F6F8DC] px-4 sm:px-8 lg:px-[160px] py-12 sm:py-16 lg:py-[96px]">
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
            height={119}
            className="lg:w-[496px] w-[352px] lg:h-[119px] h-auto lg:object-cover object-contain"
          />
        </motion.div>

        {/* Decorative Arrow 1 */}
        <motion.div variants={fadeUp} className="hidden lg:block absolute -top-[18%] right-[58%]">
          <motion.div variants={float}>
            <motion.div variants={float}>
              <Image src={OutcomeArr1} alt="Decorative Arrow" width={244} height={100} className="w-[244px] h-[100px]" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CONTENTS */}
        <motion.div variants={staggerContainer} className="flex flex-col items-start sm:-gap-4 w-full">
          {/* Yellow heading box */}
          <motion.div variants={fadeUp} className="relative overflow-hidden w-full sm:w-fit">
            <div className="absolute inset-0 bg-[#FFDAA3] rounded-tl-[60px] sm:rounded-tl-[80px] lg:rounded-tl-[118px] -skew-x-[5deg] rounded-br-[60px] sm:rounded-br-[80px] lg:rounded-br-[118px]"></div>
            <div className="relative z-10 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-2 sm:gap-3">
              <p className="font-semibold text-base md:text-lg lg:text-xl xl:text-2xl text-[#694F42] leading-4 sm:leading-5 lg:leading-[26px] text-center">
                What Do the Kids Learn or Gain?
              </p>
            </div>
          </motion.div>

          {/* White intro paragraph box */}
          <motion.div
            variants={fadeUp}
            className="flex p-4 sm:p-6 lg:p-8 flex-col justify-center items-start gap-4 sm:gap-6 lg:gap-8 rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-white w-full"
          >
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-[#401D26] leading-5 sm:leading-6 lg:leading-[26px]">
              At our <span className="font-bold">Kids in Tech Bootcamps</span>, learning goes beyond screens it's about creativity,
              problem-solving, and confidence. Each child leaves with both technical skills and life skills that shape them for the future.
            </p>
          </motion.div>

          {/* 4 Grid Items */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-0 w-full relative">
            {[
              { img: TechCreativity, text: "Tech & Creativity Skills" },
              {
                img: CriticalThinking,
                text: "Critical Thinking & Problem-Solving",
              },
              { img: ConfidenceExpression, text: "Confidence & Expression" },
              { img: CollaborationFun, text: "Collaboration & Fun" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex justify-start items-center gap-2 sm:gap-3 lg:gap-4 rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-[#2D2124] px-4 sm:px-6 lg:px-7 py-4 sm:py-5 lg:py-6"
              >
                <Image src={item.img} alt={item.text} width={32} height={32} className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[32px] lg:h-[32px]" />
                <p className="text-base md:text-lg lg:text-xl text-white leading-4 sm:leading-5 lg:leading-[26px]">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative Arrow 2 */}
          <motion.div variants={fadeUp} className="hidden lg:block absolute -bottom-[18%] -right-[6%]">
            <motion.div variants={float}>
              <Image src={OutcomeArr2} alt="Decorative Arrow" width={114} height={70} className="w-[114px] h-[70px]" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.article>
    </section>
  );
};

export default LearningOutcomeSection;
