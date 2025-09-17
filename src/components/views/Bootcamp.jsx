import React from "react";
import Image from "next/image";
import Heading from "../../../public/assets/images/stemHeading.png";
import Bootcamp1 from "../../../public/assets/images/bootcamp1.svg";
import Bootcamp2 from "../../../public/assets/images/bootcamp2.svg";
import Bootcamp3 from "../../../public/assets/images/bootcamp3.svg";
import Bootcamp4 from "../../../public/assets/images/bootcamp4.svg";
import Bootcamp5 from "../../../public/assets/images/bootcamp5.svg";
import BootcampArr1 from "../../../public/assets/images/bootcamp-arr-1.svg";
import BootcampArr2 from "../../../public/assets/images/bootcamp-arr-2.svg";

const Bootcamp = () => {
  return (
    <section id="design-stem" className="bg-[#FFF7F1] px-4 sm:px-8 lg:px-[160px] py-12 sm:py-16 lg:py-[96px]">
      <article className="container flex flex-col items-center gap-6 sm:gap-8 relative">
        {/* HEADER */}
        <Image
          src={Heading}
          alt="Heading"
          width={496}
          height={170}
          className="lg:w-[496px] w-[334px] lg:h-[170px] h-[112px] object-cover"
        />

        {/* Decorative Arrow 1 - Points to title */}
        <div className="hidden lg:block absolute -top-[7%] lg:left-[12%] 2xl:left-[22%]">
          <Image src={BootcampArr1} alt="Decorative Arrow" width={193} height={74} className="w-[192px] h-[84px]" />
        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col lg:flex-row items-start justify-center -space-x-6 w-full">
          {/* LEFT SECTION - Bootcamp Overview */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="flex flex-col -space-y-6 justify-center items-start">
              {/* Green box */}
              <div className="relative overflow-hidden w-full sm:w-fit">
                <div className="absolute inset-0 bg-[#D6DE9B] rounded-tl-[60px] sm:rounded-tl-[80px] lg:rounded-tl-[118px] -skew-x-[5deg] rounded-br-[60px] sm:rounded-br-[80px] lg:rounded-br-[118px]"></div>
                <div className="relative z-10 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 flex justify-start items-center gap-2 sm:gap-3">
                  <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#694F42] leading-4 sm:leading-5 lg:leading-[26px] ">
                    Bootcamp Overview
                  </p>
                </div>
              </div>

              {/* Design Focus Paragraph */}
              <div className="flex flex-col p-6 sm:p-8 justify-center items-start gap-6 sm:gap-8 rounded-4xl bg-[#353226]">
                <p className="text-base sm:text-xl lg:text-2xl text-[#F1EAEB] lg:leading-[26px] leading-5">
                  <span className="font-bold">Design Sessions:</span> From sketching ideas to creating digital art, posters, logos, and app
                  designs! We'll explore animations, graphic design tools, character design, and colorful layouts that bring imagination to
                  life 💡✨
                </p>
              </div>

              {/* STEM Focus Paragraph */}
              <div className="flex flex-col p-6 sm:p-8 justify-center items-start gap-6 sm:gap-8 rounded-4xl bg-[#353226]">
                <p className="text-base sm:text-xl lg:text-2xl text-[#F1EAEB] lg:leading-[26px] leading-5">
                  <span className="font-bold">STEM Adventures:</span> Dive into science experiments, build mini robots, explore space, and
                  discover how everyday gadgets work! It's all about curiosity, problem-solving, and creative thinking.
                </p>
              </div>

              {/* Combined Benefit Paragraph */}
              <div className="flex flex-col p-6 sm:p-8 justify-center items-start gap-6 sm:gap-8 rounded-4xl bg-[#353226]">
                <p className="text-base sm:text-xl lg:text-2xl text-[#F1EAEB] lg:leading-[26px] leading-5">
                  <span className="font-bold">Together:</span> Design and STEM give you the tools to imagine, create, and innovate. You'll
                  build a strong foundation for the future! 🚀💡
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - Class Curriculum/Fees/Duration */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="flex flex-col -gap-4 items-start">
              {/* Green box */}
              <div className="relative overflow-hidden w-full sm:w-fit self-end">
                <div className="absolute inset-0 bg-[#214A25] rounded-tl-[60px] sm:rounded-tl-[80px] lg:rounded-tl-[118px] -skew-x-[5deg] rounded-br-[60px] sm:rounded-br-[80px] lg:rounded-br-[118px]"></div>
                <div className="relative z-10 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-2 sm:gap-3">
                  <p className="font-semibold text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#EEF3E9] leading-4 sm:leading-5 lg:leading-[26px] text-center">
                    Class Curriculum/Fees/Duration
                  </p>
                </div>
              </div>
              {/* introduction */}
              <div className="flex flex-col p-6 sm:p-8 justify-center items-start gap-6 sm:gap-8 rounded-4xl bg-white w-full">
                <div className="flex items-center gap-4">
                  <Image src={Bootcamp1} alt="intro" width={56} height={56} />
                  <p className="text-[#401D26] text-base sm:text-xl lg:text-2xl lg:leading-[26px] leading-5">
                    Week 1: <br /> Introduction & Foundations
                  </p>
                </div>
              </div>

              {/* Week 2:Exploring Creativity & Science */}
              <div className="flex flex-col p-6 sm:p-8 justify-center items-start gap-6 sm:gap-8 rounded-4xl bg-white w-full">
                <div className="flex items-center gap-4">
                  <Image src={Bootcamp2} alt="intro" width={56} height={56} />
                  <p className="text-[#401D26] text-base sm:text-xl lg:text-2xl lg:leading-[26px] leading-5">
                    Week 2: <br /> Exploring Creativity & Science
                  </p>
                </div>
              </div>

              {/* Week 3:Building & Designing Projects */}
              <div className="flex flex-col p-6 sm:p-8 justify-center items-start gap-6 sm:gap-8 rounded-4xl bg-white w-full">
                <div className="flex items-center gap-4">
                  <Image src={Bootcamp3} alt="intro" width={56} height={56} />
                  <p className="text-[#401D26] text-base sm:text-xl lg:text-2xl lg:leading-[26px] leading-5">
                    Week 3: <br /> Building & Designing Projects
                  </p>
                </div>
              </div>

              {/* Week 4:Coding & Interactivity */}
              <div className="flex flex-col p-6 sm:p-8 justify-center items-start gap-6 sm:gap-8 rounded-4xl bg-white w-full">
                <div className="flex items-center gap-4">
                  <Image src={Bootcamp4} alt="intro" width={56} height={56} />
                  <p className="text-[#401D26] text-base sm:text-xl lg:text-2xl lg:leading-[26px] leading-5">
                    Week 4: <br />
                    Coding & Interactivity
                  </p>
                </div>
              </div>

              {/* Week 5:Fun, Innovation & Showcase */}
              <div className="flex flex-col p-6 sm:p-8 justify-center items-start gap-6 sm:gap-8 rounded-4xl bg-white w-full">
                <div className="flex items-center gap-4">
                  <Image src={Bootcamp5} alt="intro" width={56} height={56} />
                  <p className="text-[#401D26] text-base sm:text-xl lg:text-2xl lg:leading-[26px] leading-5">
                    Week 4: <br />
                    Fun, Innovation & Showcase
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row p-6 sm:p-8 justify-start items-start gap-6 sm:gap-8 rounded-4xl bg-[#EEF3E9] w-full">
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
              </div>

              {/* Green box */}
              <div className="relative overflow-hidden w-fit self-end">
                <div className="absolute inset-0 bg-[#A7C383] rounded-tl-[60px] sm:rounded-tl-[80px] lg:rounded-tl-[118px] -skew-x-[5deg] rounded-br-[60px] sm:rounded-br-[80px] lg:rounded-br-[118px]"></div>
                <div className="relative z-10 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-2 sm:gap-3">
                  <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#EEF3E9] leading-4 sm:leading-5 lg:leading-[26px] text-center">
                    Coming Soon...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Arrow 2 - Points to content */}
        <div className="hidden lg:block absolute -bottom-[10%] md:right-[27%] 2xl:right-[34%]">
          <Image src={BootcampArr2} alt="Decorative Arrow" width={584} height={146} className="w-[584px] h-[146px]" />
        </div>
      </article>
    </section>
  );
};

export default Bootcamp;
