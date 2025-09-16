import Footer from "@/components/Footer";
import Bootcamp from "@/components/views/Bootcamp";
import CodingClassSection from "@/components/views/CodingClassSection";
import FounderNoteSection from "@/components/views/FounderNoteSection";
import LearningOutcomeSection from "@/components/views/LearningOutcomeSection";
import React from "react";

const RootPage = () => {
  return (
    <div>
      <CodingClassSection />
      <Bootcamp />
      <LearningOutcomeSection />
      <FounderNoteSection />
    </div>
  );
};

export default RootPage;
