"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function DynamicGraphSchema() {
  const pathname = usePathname();
  const canonicalUrl =
    pathname === "/" ? "https://www.driveronhire.com/" : `https://www.driveronhire.com${pathname}${pathname.endsWith("/") ? "" : "/"}`;

  const [metaDescription, setMetaDescription] = useState("");

  useEffect(() => {
    // Try to get meta description from the DOM
    const desc =
      document.querySelector('meta[name="description"]')?.getAttribute("content") ||
      document.querySelector('meta[property="og:description"]')?.getAttribute("content") ||
      "DriverOnHire provides professional and background-verified drivers for personal, corporate, and outstation travel. Enjoy flexible booking options, including hourly, daily, and long-term services, ensuring a safe and comfortable journey.";
    setMetaDescription(desc);
  }, [pathname]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Corporation",
              "name": "DriverOnHire",
              "url": canonicalUrl,
              "logo": "https://www.driveronhire.com/logo.svg",
              "description": metaDescription,
              "foundingDate": "2014",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "William Industry Estate, Office No. 19, 2nd Floor, SG Barve Marg, Above Sheetal Mithaiwala, Kurla West",
                  "addressLocality": "Mumbai",
                  "addressRegion": "Maharashtra",
                  "postalCode": "400070",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "101, 1st Floor, B-wing, Aqsa Palace, Gaothan Lane No.4, Next To Paneri Showroom, Near Andheri Rly. Stn., Andheri (w), Mumbai - 400 058",
                  "addressLocality": "Mumbai",
                  "addressRegion": "Maharashtra",
                  "postalCode": "400058",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "14, Solapur Rd, near Krome Mall, next to Vijay Sales, Bhaskar Colony, Swami Vivekanand Nagar, Kalubai Mandir, Hadapsar",
                  "addressLocality": "Pune",
                  "addressRegion": "Maharashtra",
                  "postalCode": "411013",
                  "addressCountry": "IN"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "02243439090",
                "contactType": "customer service",
                "contactOption": "TollFree",
                "areaServed": "IN",
                "availableLanguage": ["en", "hi", "ur", "mr"]
              },
              "sameAs": [
                "https://www.facebook.com/driveronhire.official",
                "https://x.com/driveronhire_",
                "https://www.instagram.com/driveronhire.official/",
                "https://www.youtube.com/@driveronhire.official",
                "https://www.linkedin.com/company/driveronhire"
              ]
            },
            {
              "@type": "LocalBusiness",
              "@id": canonicalUrl + "#localbusiness",
              "name": "DriverOnHire",
              "image": "https://www.driveronhire.com/logo.svg",
              "url": canonicalUrl,
              "description": metaDescription,
              "telephone": "02243439090",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "William Industry Estate, Office No. 19, 2nd Floor, SG Barve Marg, Above Sheetal Mithaiwala, Kurla West",
                  "addressLocality": "Mumbai",
                  "addressRegion": "Maharashtra",
                  "postalCode": "400070",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "101, 1st Floor, B-wing, Aqsa Palace, Gaothan Lane No.4, Next To Paneri Showroom, Near Andheri Rly. Stn., Andheri (w), Mumbai - 400 058",
                  "addressLocality": "Mumbai",
                  "addressRegion": "Maharashtra",
                  "postalCode": "400058",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "14, Solapur Rd, near Krome Mall, next to Vijay Sales, Bhaskar Colony, Swami Vivekanand Nagar, Kalubai Mandir, Hadapsar",
                  "addressLocality": "Pune",
                  "addressRegion": "Maharashtra",
                  "postalCode": "411013",
                  "addressCountry": "IN"
                }
              ],
              "geo": [
                {
                  "@type": "GeoCoordinates",
                  "latitude": 19.0696531,
                  "longitude": 72.8794431
                },
                {
                  "@type": "GeoCoordinates",
                  "latitude": 19.120788366209784,
                  "longitude": 72.84541473609676
                },
                {
                  "@type": "GeoCoordinates",
                  "latitude": 18.5061004,
                  "longitude": 73.9214006
                }
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "00:00",
                  "closes": "23:59"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/driveronhire.official",
                "https://x.com/Driver_On_Hire",
                "https://www.instagram.com/driveronhire.official/",
                "https://www.youtube.com/@driveronhire.official",
                "https://www.linkedin.com/company/driveronhire",
                "https://www.driveronhire.com/",
                "https://www.crunchbase.com/organization/driver-on-hire"
              ]
            },
            {
              "@type": "WebSite",
              "url": canonicalUrl,
              "name": "DriverOnHire",
              "inLanguage": "en"
            }
          ]
        }),
      }}
    />
  );
} 
