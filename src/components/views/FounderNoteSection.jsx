import React from "react";
import Image from "next/image";
import FounderNote from "../../../public/assets/images/founder-note.png";
import Founder from "../../../public/assets/images/founder.png";
import FounderArr1 from "../../../public/assets/images/founder-arr-1.svg";
import FounderArr2 from "../../../public/assets/images/founder-arr-2.svg";

const FounderNoteSection = () => {
  return (
    <section className="bg-[#D5EAF4] px-8 lg:px-[160px] py-[96px] ">
      <article className="container flex flex-col items-center gap-2 relative">
        {/* HEADER */}
        <div className="flex flex-col gap-6 relative">
          <h2 className="text-center text-4xl sm:text-5xl lg:text-[68px] font-bold text-[#95BAD2] text-shadow-[3px_5px_0px_#422110]">
            Founder's Note
          </h2>
        </div>

        {/* Decorative Arrow 1 - Points to title */}
        <div className="hidden lg:block absolute -top-[7%] right-[4%]">
          <Image src={FounderArr1} alt="Decorative Arrow" width={244} height={100} className="w-[244px] h-[100px] " />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row items-start justify-end gap-6">
          {/* TEXT */}
          <div className="order-2 lg:order-1 flex-1 flex flex-col justify-end items-start ">
            <div className="flex flex-col -gap-8">
              <div className="flex flex-col p-6 sm:p-8 justify-center items-start sm:gap-8 rounded-4xl bg-white">
                <p className="text-sm sm:text-xl lg:text-2xl text-[#401D26] lg:leading-[26px] leading-5">
                  "Every child carries a spark of creativity our mission at Kids in Tech is to nurture that spark into skills, confidence,
                  and curiosity. Through design, coding, and STEM, we want kids not just to use technology, but to create with it."
                </p>
              </div>
              <div className="flex flex-col p-6 sm:p-8 justify-center items-start gap-6 sm:gap-8 rounded-4xl bg-white">
                <p className="text-sm sm:text-xl lg:text-2xl text-[#401D26] lg:leading-[26px] leading-5">
                  "This bootcamp is more than classes; it's a safe space for children to explore, imagine, and build the future with their
                  own hands."
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 md:-mt-10 -mt-3 relative">
              {/* Decorative Arrow 2 - Frames founder's profile */}
              <div className=" hidden lg:block absolute -left-[22%] top-[40%] z-10">
                <Image src={FounderArr2} alt="Decorative Arrow" width={290} height={221} className="w-[290px] h-[221px]" />
              </div>
              <figure className=" flex flex-col justify-end items-start gap-2.5 overflow-hidden group">
                <Image
                  src={Founder}
                  alt="founder"
                  className="w-[118px] h-[146px] sm:w-[154px] sm:h-[190px] object-cover relative z-20 transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </figure>
              <div className="flex flex-col gap-1 items-start">
                <p className="text-base sm:text-xl lg:text-2xl text-[#401D26] font-normal">Aliyu</p>
                <p className="text-base sm:text-xl lg:text-2xl text-[#401D26] font-normal">Mubarak</p>
                <p className="text-base sm:text-xl lg:text-2xl text-[#401D26] font-bold">Founder @ Kids In Tech</p>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <figure className="order-1 lg:order-2 flex-1 flex flex-col justify-end items-start gap-2.5 rounded-3xl md:w-[600] overflow-hidden cursor-pointer group">
            <Image
              src={FounderNote}
              alt="Founder Note"
              width={500}
              height={500}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </figure>
        </div>
      </article>
    </section>
  );
};

export default FounderNoteSection;
