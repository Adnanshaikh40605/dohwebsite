import Script from "next/script";

interface FAQSchemaProps {
  faqs: { question: string; answer: string }[];
  pageTitle: string;
}

export default function FAQSchema({ faqs, pageTitle }: FAQSchemaProps) {
  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "name": `Frequently Asked Questions - ${pageTitle}`,
          "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer,
            },
          })),
        }),
      }}
    />
  );
}
