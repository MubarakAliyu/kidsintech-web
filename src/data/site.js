/*
 * site.js — single source of truth for org-wide facts.
 * Import from here instead of hard-coding contact details / links so a
 * change (e.g. a new phone number) updates everywhere at once.
 *
 * NOTE (fixes applied this batch): email is the correct `.school`
 * address (footer previously used a wrong `.com`); ages are 8–18.
 */
export const site = {
  name: "Kids in Tech",
  legalName: "Kids in Tech — a STEM program by StarNova Labs",
  tagline:
    "Where creativity meets technology, and young minds discover the power of coding, design, and STEM.",
  parentOrg: "StarNova Labs",

  // Audience
  ages: "8–18", // fixed from 8–16
  agesMin: 8,
  agesMax: 18,

  // Web
  url: "https://kidsintech.school",
  handle: "@kidsintechkb",

  // Contact
  email: "hello@kidsintech.school", // was hello@kidsintech.com in the footer
  phones: [
    { label: "+234 706 783 4186", tel: "+2347067834186" },
    { label: "0906 098 5201", tel: "+2349060985201" },
  ],
  address: {
    country: "Nigeria",
    // TODO: add full street address + city when available.
    text: "Nigeria",
  },
  // TODO: replace with the real Google Maps embed/share URL for the venue.
  mapUrl: "",

  // Primary conversion action (kept as the working Google Form short-term;
  // native + Paystack flow arrives in a later batch).
  registrationUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfrCMpHwJW8fi0lHHphHELkkkxyA2tL-rlTK798tdh85blzmw/viewform",

  whatsappGroupUrl:
    "https://chat.whatsapp.com/LrBRk3G4qSaFBcmNSFILEC?mode=ems_copy_t",
};

/*
 * Socials — order controls footer/header rendering. `icon` is the key of
 * the SVG asset in public/assets/images (matches existing filenames).
 */
export const socials = [
  { name: "WhatsApp", href: site.whatsappGroupUrl, icon: "whatsapp" },
  {
    name: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61578715182203",
    icon: "facebook",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kidsintechkb/",
    icon: "instagram",
  },
  { name: "X (Twitter)", href: "https://x.com/kidsintechkb", icon: "X" },
];

export default site;
