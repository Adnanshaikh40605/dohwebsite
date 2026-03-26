import Link from "next/link";
import ClientTestimonials from "@/app/component/ClientTestimonials";
import BookingModalButton from "../component/BookingModalButton";
import ServiceSchema from "@/app/component/ServiceSchema";
import PermanentDriversClient from "./PermanentDriversClient";

export default function PermanentDrivers() {
  return (
    <>
      <ServiceSchema
        slug="permanent-drivers"
        title="Permanent Drivers"
        description="Hire a permanent driver in Mumbai, Pune, Thane, and Navi Mumbai. Reliable daily chauffeurs for your routine travel and commutes."
        serviceType="On-demand Chauffeur / Permanent Driver"
        offersUrl="https://www.driveronhire.com/permanent-drivers/#pricing"
        lowPrice={6000}
        highPrice={8000}
        offerCount={2}
        priceRange="₹6000 – ₹8000"
        offerCatalog={[
          { "@type": "Offer", name: "6 months membership", price: 6000, priceCurrency: "INR" },
          { "@type": "Offer", name: "1 year membership", price: 8000, priceCurrency: "INR" },
        ]}
      />
      <PermanentDriversClient />
    </>
  );
}

export function generateMetadata() {
  return {
    title: "Hire a Permanent Driver in Mumbai, Pune & Thane",
    description:
      "Permanent Drivers in Mumbai, Pune & Thane. Transparent monthly plans, background-checked chauffeurs & unlimited replacements. Hire now!",
    alternates: {
      canonical: "https://www.driveronhire.com/permanent-drivers/",
    },
  };
}
