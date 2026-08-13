import { faqs } from "@/data/faqs";

const baseUrl = "https://kidsintech.school";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Kids in Tech — questions about programs, bootcamps, partnerships or registration for children and teens ages 8–18. Email hello@kidsintech.school.",
  keywords: [
    "contact kids in tech",
    "kids coding enquiry",
    "STEM program contact Nigeria",
    "coding bootcamp contact",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Kids in Tech",
    description:
      "Reach the Kids in Tech team about programs, bootcamps and partnerships.",
    url: `${baseUrl}/contact`,
    images: [
      {
        url: "/assets/images/gallerypic2.avif",
        width: 1200,
        height: 630,
        alt: "Contact Kids in Tech",
      },
    ],
  },
  twitter: {
    title: "Contact | Kids in Tech",
    description: "Get in touch with Kids in Tech.",
    images: ["/assets/images/gallerypic2.avif"],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Kids in Tech",
  url: `${baseUrl}/contact`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: `${baseUrl}/contact`,
    },
  ],
};

export default function ContactLayout({ children }) {
  return (
    <>
      {[contactSchema, faqSchema, breadcrumbSchema].map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD from local data.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {children}
    </>
  );
}
