"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CloudDownload } from "lucide-react";
import Rocket from "../../../public/assets/images/rocket.svg";
import SponsorHeading from "../../../public/assets/images/sponsorHeading.png";
import SponsorImg1 from "../../../public/assets/images/sponsor1.png";
import SponsorImg2 from "../../../public/assets/images/sponsor2.png";
import SponsorImg3 from "../../../public/assets/images/sponsor3.png";

const AboutSponsorSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    sponsorshipType: "",
    contactMethod: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-[#F4E4D5] py-16 px-8 lg:px-[160px]">
      <article className="container flex flex-col items-center lg:gap-14 gap-4">
        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <figure className="lg:block hidden w-full max-w-sm rounded-2xl overflow-hidden cursor-pointer group transform transition-transform duration-300 ease-in-out hover:scale-105">
            <Image
              src={SponsorImg1}
              alt="Sponsor Image 1"
              width={500}
              height={500}
              className="w-full h-full object-cover"
              placeholder="blur"
            />
          </figure>

          <div className="flex flex-col items-center justify-center ">
            <figure className="lg:block hidden w-full max-w-sm rounded-2xl overflow-hidden cursor-pointer group transform transition-transform duration-300 ease-in-out hover:scale-105">
              <Image
                src={SponsorImg2}
                alt="Sponsor Image 2"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                placeholder="blur"
              />
            </figure>
            <Image
              src={SponsorHeading}
              alt="Sponsor Heading"
              width={496}
              height={136}
              className="lg:w-[496px] w-[248px] h-auto object-cover"
              placeholder="blur"
            />
          </div>

          <figure className="lg:block hidden w-full max-w-sm rounded-2xl overflow-hidden cursor-pointer group transform transition-transform duration-300 ease-in-out hover:scale-105">
            <Image
              src={SponsorImg3}
              alt="Sponsor Image 3"
              width={500}
              height={500}
              className="w-full h-full object-cover"
              placeholder="blur"
            />
          </figure>
        </div>

        {/* CONTENTS */}
        <div className="">
          <div className="relative overflow-hidden w-full sm:w-fit">
            <div className="absolute inset-0 bg-[#FFDAA3] rounded-tl-[60px] sm:rounded-tl-[80px] lg:rounded-tl-[118px] -skew-x-[5deg] rounded-br-[60px] sm:rounded-br-[80px] lg:rounded-br-[118px]"></div>
            <div className="relative z-10 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-2 sm:gap-3">
              <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#694F42] leading-4 sm:leading-5 lg:leading-[26px] text-center">
                How to support the cause?
              </p>
            </div>
          </div>

          <div className="flex p-4 sm:p-6 lg:p-8 flex-col justify-center items-start gap-4 sm:gap-6 lg:gap-8 rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-white w-full">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#401D26] leading-5 sm:leading-6 lg:leading-[26px]">
              Interested in partnering with us? Let’s shape the future of technology together. Your support can provide tools, training, and
              opportunities for children to dream big and achieve more.
            </p>
          </div>

          <div className="w-fit flex justify-center items-center gap-2 sm:gap-3 lg:gap-4 rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-[#A4431C] p-6 transition-all duration-300 ease-in-out hover:bg-[#2D2124] cursor-pointer">
            <CloudDownload className="text-white w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            <p className="text-xl lg:text-[28] text-white font-bold leading-4 sm:leading-5 lg:leading-[26px]">Download Our Pitch Deck!</p>
          </div>
        </div>

        {/* FORM */}
        <div className="w-full">
          <form onSubmit={handleSubmit} className="flex flex-col lg:gap-6 gap-4">
            {/* Full Name / Organization Name */}
            <div className="">
              <label htmlFor="fullName" className="block text-base lg:text-xl font-medium text-[#2D2124] mb-2">
                Full Name / Organization Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="eg. ABC Company Limited"
                className="w-full p-6 border-2 focus:border-2 border-[#401D26] rounded-3xl focus:ring-2 focus:ring-[#401D26] focus:border-transparent outline-none transition-all duration-200"
                required
              />
            </div>

            {/* Email and Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-base lg:text-xl font-medium text-[#2D2124] mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@mail.com"
                  className="w-full p-6 border-2 border-[#401D26] rounded-3xl focus:ring-2 focus:ring-[#401D26] focus:border-transparent outline-none transition-all duration-200"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-base lg:text-xl font-medium text-[#2D2124] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+234 |"
                  className="w-full p-6 border-2 focus:border-2 border-[#401D26] rounded-3xl focus:ring-2 focus:ring-[#401D26] focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
            </div>

            {/* Sponsorship Type and Contact Method Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sponsorship Type / Interest */}
              <div>
                <label htmlFor="sponsorshipType" className="block text-base lg:text-xl font-medium text-[#2D2124] mb-2">
                  Sponsorship Type / Interest <span className="text-red-500">*</span>
                </label>
                <select
                  id="sponsorshipType"
                  name="sponsorshipType"
                  value={formData.sponsorshipType}
                  onChange={handleInputChange}
                  className="w-full p-6 border-2 focus:border-2 border-[#401D26] rounded-3xl focus:ring-2 focus:ring-[#401D26] focus:border-transparent outline-none transition-all duration-200 appearance-none bg-[#F4E4D5]"
                  required
                >
                  <option value="">Select Option</option>
                  <option value="financial">Financial Support</option>
                  <option value="equipment">Equipment Donation</option>
                  <option value="mentorship">Mentorship</option>
                  <option value="partnership">Partnership</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label htmlFor="contactMethod" className="block text-base lg:text-xl font-medium text-[#2D2124] mb-2">
                  Preferred Contact Method
                </label>
                <select
                  id="contactMethod"
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleInputChange}
                  className="w-full p-6 border-2 focus:border-2 border-[#401D26] rounded-3xl focus:ring-2 focus:ring-[#401D26] focus:border-transparent outline-none transition-all duration-200 appearance-none bg-[#F4E4D5]"
                >
                  <option value="">Select Option</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone Call</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="meeting">In-Person Meeting</option>
                </select>
              </div>
            </div>

            {/* Message / Additional Details */}
            <div className="">
              <label htmlFor="message" className="block text-base lg:text-xl font-medium text-[#2D2124] mb-2">
                Message / Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="to describe their interest, goals, or support ideas."
                rows={4}
                className="w-full p-6 border-2 focus:border-2 border-[#401D26] rounded-3xl focus:ring-2 focus:ring-[#401D26] focus:border-transparent outline-none transition-all duration-200 resize-vertical"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#60A41C] hover:bg-[#2D2124] text-white font-bold p-6 rounded-3xl flex items-center justify-center gap-3 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              <Image src={Rocket} alt="Rocket" width={20} height={20} className="w-5 h-5" />
              Become a Sponsor
            </button>
          </form>
        </div>
      </article>
    </section>
  );
};

export default AboutSponsorSection;
