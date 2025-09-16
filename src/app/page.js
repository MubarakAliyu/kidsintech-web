import Footer from "@/components/Footer";
import AboutSection from "@/components/views/AboutSection";
import Bootcamp from "@/components/views/Bootcamp";
import CodingClassSection from "@/components/views/CodingClassSection";
import FounderNoteSection from "@/components/views/FounderNoteSection";
import LearningOutcomeSection from "@/components/views/LearningOutcomeSection";
import React from "react";

const RootPage = () => {
  return (
    <div>
      <AboutSection />
      <CodingClassSection />
      <Bootcamp />
      <LearningOutcomeSection />
      <FounderNoteSection />
    </div>
  );
};

export default RootPage;
