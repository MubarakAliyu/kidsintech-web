import React from "react";

const StructuredData = ({ type = "organization" }) => {
  const baseUrl = "https://kidsintech.school";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Kids in Tech",
    description:
      "Kids in Tech is a community-driven initiative dedicated to inspiring and equipping children with essential tech and creative skills. Through fun, interactive, and hands-on learning, we help kids explore coding, design, and STEM.",
    url: baseUrl,
    logo: `${baseUrl}/assets/images/logo.svg`,
    image: `${baseUrl}/assets/images/heroImg1.png`,
    foundingDate: "2023",
    founder: {
      "@type": "Person",
      name: "Aliyu Mubarak",
      jobTitle: "Founder",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "Nigeria",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+2347067834186",
      contactType: "customer service",
      availableLanguage: "English",
    },
    sameAs: ["https://wa.me/2347067834186"],
    offers: [
      {
        "@type": "Course",
        name: "Coding Bootcamp for Kids",
        description: "Interactive coding programs teaching HTML, CSS, and JavaScript through hands-on projects",
        provider: {
          "@type": "EducationalOrganization",
          name: "Kids in Tech",
        },
        courseMode: "Blended",
        educationalLevel: "Beginner",
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "student",
          audienceType: "children",
        },
      },
      {
        "@type": "Course",
        name: "Design & Creativity Sessions",
        description: "Digital art, character design, and app mockups for creative expression",
        provider: {
          "@type": "EducationalOrganization",
          name: "Kids in Tech",
        },
        courseMode: "Blended",
        educationalLevel: "Beginner",
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "student",
          audienceType: "children",
        },
      },
      {
        "@type": "Course",
        name: "STEM Adventures",
        description: "Building robots, conducting experiments, and exploring science in everyday life",
        provider: {
          "@type": "EducationalOrganization",
          name: "Kids in Tech",
        },
        courseMode: "Blended",
        educationalLevel: "Beginner",
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "student",
          audienceType: "children",
        },
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kids in Tech Programs",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Web Development for Kids",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Design & Creativity",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "STEM Activities",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kids in Tech",
    url: baseUrl,
    description:
      "Kids in Tech is a community-driven initiative dedicated to inspiring and equipping children with essential tech and creative skills.",
    publisher: {
      "@type": "Organization",
      name: "Kids in Tech",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: `${baseUrl}/about-us`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Gallery",
        item: `${baseUrl}/gallery`,
      },
    ],
  };

  const getSchema = () => {
    switch (type) {
      case "organization":
        return organizationSchema;
      case "website":
        return websiteSchema;
      case "breadcrumb":
        return breadcrumbSchema;
      default:
        return organizationSchema;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSchema(), null, 2),
      }}
    />
  );
};

export default StructuredData;
