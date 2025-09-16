import React from "react";
import Image from "next/image";
import TechCreativity from "../../../public/assets/images/outcome1.png";
import CriticalThinking from "../../../public/assets/images/outcome2.png";
import ConfidenceExpression from "../../../public/assets/images/outcome3.png";
import CollaborationFun from "../../../public/assets/images/outcome4.png";
import OutcomeArr1 from "../../../public/assets/images/outcome-arr-1.svg";
import OutcomeArr2 from "../../../public/assets/images/outcome-arr-2.svg";

const LearningOutcomeSection = () => {
  return (
    <section className="bg-[#F6F8DC] px-4 sm:px-8 lg:px-[160px] py-12 sm:py-16 lg:py-[96px]">
      <article className="container flex flex-col items-center gap-6 sm:gap-8 relative">
        {/* HEADER */}
        <h2 className="text-center text-4xl md:text-5xl lg:text-[68px] font-bold text-[#C8D295] text-shadow-[6px_3px_0px_#422110]">
          Learning <br /> <span className="text-[#D6DBC4]">Outcomes</span>
        </h2>

        {/* Decorative Arrow 1 - Points to title */}
        <div className="hidden lg:block absolute -top-[18%] right-[60%]">
          <Image src={OutcomeArr1} alt="Decorative Arrow" width={244} height={100} className="w-[244px] h-[100px] " />
        </div>

        {/* CONTENTS */}
        <div className="flex flex-col items-start  sm:-gap-4 w-full">
          <div className="relative overflow-hidden w-full sm:w-fit">
            <div className="absolute inset-0 bg-[#FFDAA3] rounded-tl-[60px] sm:rounded-tl-[80px] lg:rounded-tl-[118px] -skew-x-[5deg] rounded-br-[60px] sm:rounded-br-[80px] lg:rounded-br-[118px]"></div>
            <div className="relative z-10 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-2 sm:gap-3">
              <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#694F42] leading-4 sm:leading-5 lg:leading-[26px] text-center">
                What Do the Kids Learn or Gain?
              </p>
            </div>
          </div>

          <div className="flex p-4 sm:p-6 lg:p-8 flex-col justify-center items-start gap-4 sm:gap-6 lg:gap-8 rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-white w-full">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#401D26] leading-5 sm:leading-6 lg:leading-[26px]">
              At our <span className="font-bold">Kids in Tech Bootcamps</span>, learning goes beyond screens it's about creativity,
              problem-solving, and confidence. Each child leaves with both technical skills and life skills that shape them for the future.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-0 w-full  relative">
            <div className="flex justify-center items-center gap-2 sm:gap-3 lg:gap-4 rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-[#2D2124] px-4 sm:px-6 lg:px-7 py-4 sm:py-5 lg:py-6">
              <Image
                src={TechCreativity}
                alt="Tech Creativity"
                width={32}
                height={32}
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[32px] lg:h-[32px]"
              />
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-4 sm:leading-5 lg:leading-[26px]">
                Tech & Creativity Skills
              </p>
            </div>
            <div className="flex justify-center items-center gap-2 sm:gap-3 lg:gap-4 rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-[#2D2124] px-4 sm:px-6 lg:px-7 py-4 sm:py-5 lg:py-6">
              <Image
                src={CriticalThinking}
                alt="Critical Thinking"
                width={32}
                height={32}
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[32px] lg:h-[32px]"
              />
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-4 sm:leading-5 lg:leading-[26px]">
                Critical Thinking & Problem-Solving
              </p>
            </div>
            <div className="flex justify-center items-center gap-2 sm:gap-3 lg:gap-4 rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-[#2D2124] px-4 sm:px-6 lg:px-7 py-4 sm:py-5 lg:py-6">
              <Image
                src={ConfidenceExpression}
                alt="Confidence Expression"
                width={32}
                height={32}
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[32px] lg:h-[32px]"
              />
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-4 sm:leading-5 lg:leading-[26px]">
                Confidence & Expression
              </p>
            </div>
            <div className="flex justify-center items-center gap-2 sm:gap-3 lg:gap-4 rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-[#2D2124] px-4 sm:px-6 lg:px-7 py-4 sm:py-5 lg:py-6">
              <Image
                src={CollaborationFun}
                alt="Collaboration Fun"
                width={32}
                height={32}
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[32px] lg:h-[32px]"
              />
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-4 sm:leading-5 lg:leading-[26px]">
                Collaboration & Fun
              </p>
            </div>
          </div>
          {/* Decorative Arrow 2 - Points to title */}
          <div className="hidden lg:block absolute -bottom-[18%] -right-[6%]">
            <Image src={OutcomeArr2} alt="Decorative Arrow" width={114} height={70} className="w-[114px] h-[70px] " />
          </div>
        </div>
      </article>
    </section>
  );
};

export default LearningOutcomeSection;
