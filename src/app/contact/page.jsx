"use client";
import StubPage from "@/components/StubPage";
import { site } from "@/data/site";

export default function ContactPage() {
  return (
    <StubPage
      title="Contact Us"
      blurb={`Questions about programs, bootcamps or partnerships? Email ${site.email} or call ${site.phones[0].label}. A full contact page and form are on the way.`}
      batch="Batch 09"
    />
  );
}
