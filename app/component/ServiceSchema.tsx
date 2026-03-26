"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

interface Offer {
  "@type": string;
  name: string;
  price: number;
  priceCurrency: string;
}

interface ServiceSchemaProps {
  slug: string;
  title: string;
  description: string;
  image?: string;
  serviceType: string;
  offersUrl: string;
  lowPrice: number;
  highPrice: number;
  offerCount: number;
  priceRange: string;
  offerCatalog: Offer[];
}

export default function ServiceSchema({
  slug,
  title,
  description,
  image = "https://www.driveronhire.com/banner-daily-driver.webp",
  serviceType,
  offersUrl,
  lowPrice,
  highPrice,
  offerCount,
  priceRange,
  offerCatalog,
}: ServiceSchemaProps) {
  const [schemaData, setSchemaData] = useState<any>(null);

  useEffect(() => {
    // Extract meta title and description from the page
    const getMetaContent = (name: string) => {
      const meta = document.querySelector(`meta[name="${name}"]`) || 
                   document.querySelector(`meta[property="${name}"]`);
      return meta ? meta.getAttribute('content') : null;
    };

    // Function to find banner images on the page
    const findBannerImage = () => {
      // Strictly use the banner-daily-driver.webp for all service pages
      return "https://www.driveronhire.com/banner-daily-driver.webp";
    };

    // Get title from page title tag or meta title, fallback to prop
    const pageTitle = document.title || 
                      getMetaContent('og:title') || 
                      getMetaContent('title') || 
                      title;

    // Get description from meta or fallback to prop
    const metaDescription = getMetaContent('description') || 
                           getMetaContent('og:description') || 
                           description;

    // Get image from banner or meta or fallback to prop
    const metaImage = findBannerImage();

    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `https://www.driveronhire.com/${slug}/#service`,
      name: pageTitle,
      description: metaDescription,
      url: `https://www.driveronhire.com/${slug}/`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://www.driveronhire.com/${slug}/`,
      },
      image: metaImage,
      serviceType,
      category: "Chauffeur Service",
      areaServed: [
        {
          "@type": "Place",
          name: "Mumbai",
          address: { "@type": "PostalAddress", addressRegion: "MH", addressCountry: "IN" },
        },
        {
          "@type": "Place",
          name: "Pune",
          address: { "@type": "PostalAddress", addressRegion: "MH", addressCountry: "IN" },
        },
        "Thane",
        "Navi Mumbai",
      ],
      offers: {
        "@type": "AggregateOffer",
        url: offersUrl,
        priceCurrency: "INR",
        lowPrice,
        highPrice,
        offerCount,
        priceSpecification: {
          "@type": "PriceSpecification",
          price: priceRange,
        },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${pageTitle} Packages`,
        itemListElement: offerCatalog,
      },
      provider: {
        "@type": "Organization",
        "@id": "https://www.driveronhire.com/#organization",
        name: "Driver On Hire",
        url: "https://www.driveronhire.com/",
        logo: "https://www.driveronhire.com/logo.svg",
        sameAs: [
          "https://www.facebook.com/driveronhire.official",
          "https://www.instagram.com/driveronhire.official/",
          "https://www.linkedin.com/company/driveronhire",
          "https://www.youtube.com/@driveronhire.official",
          "https://x.com/driveronhire",
          "https://www.crunchbase.com/organization/driver-on-hire",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "02243439090",
          contactType: "Customer service",
        },
      },
    };

    setSchemaData(schema);
  }, [slug, title, description, image, serviceType, offersUrl, lowPrice, highPrice, offerCount, priceRange, offerCatalog]);

  if (!schemaData) {
    return null;
  }

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
} 