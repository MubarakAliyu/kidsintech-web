"use client";
import { Mail, MapPin, Phone } from "lucide-react";
/*
 * Contact (9B) — hero → contact form (EmailJS + mailto fallback) + contact
 * details → lazy map → socials → FAQ (reused Accordion). Details/socials come
 * from data/site.js; FAQ from data/faqs.js.
 */
import Image from "next/image";
import Accordion from "@/components/Accordion";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import DecorativeArrow from "@/components/DecorativeArrow";
import MapEmbed from "@/components/MapEmbed";
import SectionHeader from "@/components/SectionHeader";
import SkewPill from "@/components/SkewPill";
import { faqs } from "@/data/faqs";
import { site, socials } from "@/data/site";
import { fadeUp, Reveal } from "@/lib/motion";
import Facebook from "../../../public/assets/images/facebook.svg";
import HeroArr1 from "../../../public/assets/images/heroArr1.svg";
import Instagram from "../../../public/assets/images/instagram.svg";
import Whatsapp from "../../../public/assets/images/whatsapp.svg";
import X from "../../../public/assets/images/X.svg";

const SOCIAL_ICONS = {
  whatsapp: Whatsapp,
  facebook: Facebook,
  instagram: Instagram,
  X,
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-cream px-4 sm:px-8 lg:px-[160px] pt-10 pb-12 lg:pb-16">
        <div className="container relative flex flex-col items-center gap-6 text-center">
          <DecorativeArrow
            src={HeroArr1}
            width={110}
            height={78}
            className="hidden lg:block absolute top-0 right-[7%] opacity-70"
          />
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
          />
          <Reveal variant={fadeUp}>
            <SkewPill bg="bg-gold" text="text-brown">
              Contact
            </SkewPill>
          </Reveal>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-maroon leading-tight max-w-3xl">
            Get in touch
          </h1>
          <Reveal
            as="p"
            variant={fadeUp}
            custom={1}
            className="text-base sm:text-lg lg:text-xl text-ink max-w-2xl"
          >
            Questions about programs, bootcamps or partnerships? We'd love to
            hear from you.
          </Reveal>
        </div>
      </section>

      {/* Form + details */}
      <section
        className="bg-cream px-4 sm:px-8 lg:px-[160px] pb-16 lg:pb-24"
        aria-labelledby="contact-form-heading"
      >
        <div className="container grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10">
          {/* Form */}
          <div className="flex flex-col gap-6 rounded-4xl bg-white border border-hairline p-6 sm:p-8">
            <SectionHeader
              as="h2"
              align="start"
              eyebrow="Send a message"
              title="Drop us a line"
              headingId="contact-form-heading"
              pillBg="bg-tint-lime"
            />
            <ContactForm />
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 rounded-4xl bg-tint-blue p-6 sm:p-8">
              <h2 className="text-xl font-bold text-maroon">
                Reach us directly
              </h2>
              <ul className="flex flex-col gap-4">
                {site.phones.map((p) => (
                  <li key={p.tel}>
                    <a
                      href={`tel:${p.tel}`}
                      className="inline-flex items-center gap-3 text-maroon hover:text-teal-active transition-colors"
                    >
                      <Phone
                        className="w-5 h-5 text-brand-red shrink-0"
                        aria-hidden="true"
                      />{" "}
                      {p.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-3 text-maroon hover:text-teal-active transition-colors break-all"
                  >
                    <Mail
                      className="w-5 h-5 text-brand-red shrink-0"
                      aria-hidden="true"
                    />{" "}
                    {site.email}
                  </a>
                </li>
                <li className="inline-flex items-center gap-3 text-maroon">
                  <MapPin
                    className="w-5 h-5 text-brand-red shrink-0"
                    aria-hidden="true"
                  />{" "}
                  {site.address.text}
                </li>
              </ul>

              {/* Socials */}
              <div className="flex items-center gap-3 pt-2">
                {socials.map((s) => {
                  const Icon = SOCIAL_ICONS[s.icon];
                  if (!Icon) return null;
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="w-10 h-10 grid place-items-center rounded-full bg-white border border-hairline hover:-translate-y-0.5 transition-transform"
                    >
                      <Image src={Icon} alt={s.name} width={20} height={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Map */}
            <MapEmbed src={site.mapUrl} label={site.address.text} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section
          className="bg-tint-lime px-4 sm:px-8 lg:px-[160px] py-16 lg:py-24"
          aria-labelledby="contact-faq-heading"
        >
          <div className="container flex flex-col items-center gap-8 max-w-3xl">
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently asked questions"
              headingId="contact-faq-heading"
              pillBg="bg-white"
            />
            <Accordion items={faqs} idPrefix="faq" />
          </div>
        </section>
      )}
    </div>
  );
}
