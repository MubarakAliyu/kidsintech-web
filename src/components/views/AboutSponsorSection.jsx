"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { CloudDownload } from "lucide-react";
import { motion } from "framer-motion";
import Rocket from "../../../public/assets/images/rocket.svg";
import SponsorHeading from "../../../public/assets/images/sponsorHeading.avif";
import SponsorImg1 from "../../../public/assets/images/sponsor1.avif";
import SponsorImg2 from "../../../public/assets/images/sponsor2.avif";
import SponsorImg3 from "../../../public/assets/images/sponsor3.avif";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const AboutSponsorSection = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const result = "";
      // const result = await emailjs.sendForm("service_ooxtxb7", "template_232zuxf", form.current, "d1SnKC4exhq_cV7SM");

      console.log(result.text);
      toast.success("Message sent successfully! 🎉");
      setFormData({ fullName: "", email: "", phone: "", sponsorshipType: "", contactMethod: "", message: "" }); // Reset form
    } catch (error) {
      console.log(error.text);
      toast.error("Failed to send message. Try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <section className="bg-[#F4E4D5] py-16 px-8 lg:px-[160px]">
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="container flex flex-col items-center lg:gap-14 gap-4"
      >
        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.figure variants={fadeUp} className="lg:block hidden w-full max-w-sm rounded-2xl overflow-hidden">
            <Image src={SponsorImg1} alt="Sponsor Image 1" className="w-full h-full object-cover" placeholder="blur" />
          </motion.figure>

          <div className="flex flex-col items-center justify-center gap-6">
            <motion.figure variants={fadeUp} className="lg:block hidden w-full max-w-sm rounded-2xl overflow-hidden">
              <Image src={SponsorImg2} alt="Sponsor Image 2" className="w-full h-full object-cover" placeholder="blur" />
            </motion.figure>

            <motion.div variants={fadeUp}>
              <Image
                src={SponsorHeading}
                alt="Sponsor Heading"
                width={496}
                height={136}
                className="lg:w-[496px] w-[248px] h-auto object-cover"
                placeholder="blur"
              />
            </motion.div>
          </div>

          <motion.figure variants={fadeUp} className="lg:block hidden w-full max-w-sm rounded-2xl overflow-hidden">
            <Image src={SponsorImg3} alt="Sponsor Image 3" className="w-full h-full object-cover" placeholder="blur" />
          </motion.figure>
        </div>

        {/* CONTENTS */}
        <motion.div variants={fadeUp} className="w-full flex flex-col items-start -space-y-4">
          {/* Title */}
          <div className="relative overflow-hidden w-full sm:w-fit">
            <div className="absolute inset-0 bg-[#FFDAA3] rounded-tl-[60px] sm:rounded-tl-[80px] lg:rounded-tl-[118px] -skew-x-[5deg] rounded-br-[60px] sm:rounded-br-[80px] lg:rounded-br-[118px]"></div>
            <div className="relative z-10 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
              <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#694F42] text-center">
                How to support the cause?
              </p>
            </div>
          </div>

          {/* Text box */}
          <div className="flex p-6 lg:p-8 flex-col justify-center items-start gap-6 rounded-3xl bg-white w-full">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#401D26]">
              Interested in partnering with us? Let’s shape the future of technology together. Your support can provide tools, training, and
              opportunities for children to dream big and achieve more.
            </p>
          </div>

          {/* Pitch Deck Button */}
          <motion.a
            href="/pitch-deck-[kids-in-tech].pdf"
            download={true}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-fit flex justify-center items-center gap-3 rounded-3xl bg-[#A4431C] p-6 transition-all duration-300 ease-in-out hover:bg-[#2D2124] cursor-pointer"
          >
            <CloudDownload className="text-white w-6 h-6" />
            <p className="text-xl lg:text-[28px] text-white font-bold">Download Our Pitch Deck!</p>
          </motion.a>
        </motion.div>

        {/* FORM */}
        <motion.div variants={fadeUp} className="w-full">
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Full Name */}
            <div>
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
                className="w-full p-6 border-2 border-[#401D26] rounded-3xl focus:ring-2 focus:ring-[#401D26] outline-none transition-all duration-200"
                required
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  className="w-full p-6 border-2 border-[#401D26] rounded-3xl focus:ring-2 focus:ring-[#401D26] outline-none transition-all duration-200"
                  required
                />
              </div>

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
                  className="w-full p-6 border-2 border-[#401D26] rounded-3xl focus:ring-2 focus:ring-[#401D26] outline-none transition-all duration-200"
                />
              </div>
            </div>

            {/* Sponsorship Type & Contact Method */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="sponsorshipType" className="block text-base lg:text-xl font-medium text-[#2D2124] mb-2">
                  Sponsorship Type / Interest <span className="text-red-500">*</span>
                </label>
                <select
                  id="sponsorshipType"
                  name="sponsorshipType"
                  value={formData.sponsorshipType}
                  onChange={handleInputChange}
                  className="w-full p-6 border-2 border-[#401D26] rounded-3xl focus:ring-2 focus:ring-[#401D26] bg-[#F4E4D5] outline-none transition-all duration-200"
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

              <div>
                <label htmlFor="contactMethod" className="block text-base lg:text-xl font-medium text-[#2D2124] mb-2">
                  Preferred Contact Method
                </label>
                <select
                  id="contactMethod"
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleInputChange}
                  className="w-full p-6 border-2 border-[#401D26] rounded-3xl focus:ring-2 focus:ring-[#401D26] bg-[#F4E4D5] outline-none transition-all duration-200"
                >
                  <option value="">Select Option</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone Call</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="meeting">In-Person Meeting</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
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
                className="w-full p-6 border-2 border-[#401D26] rounded-3xl focus:ring-2 focus:ring-[#401D26] outline-none transition-all duration-200"
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="w-full bg-[#60A41C] hover:bg-[#2D2124] text-white font-bold p-6 rounded-3xl flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer"
            >
              <Image src={Rocket} alt="Rocket" width={20} height={20} className="w-5 h-5" />
              Become a Sponsor
            </motion.button>
          </form>
        </motion.div>
      </motion.article>
    </section>
  );
};

export default AboutSponsorSection;
