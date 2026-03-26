import React from "react";
import FaqComponent from "../component/faqs";
import FAQSchema from "../component/FAQSchema";

export const metadata = {
  title: "Frequently Asked Questions | Driver on Hire",
  description:
    "Find answers to common questions about Driver on Hire services. Learn about booking professional drivers, pricing, safety measures, and trip details.",
  alternates: {
    canonical: "https://www.driveronhire.com/faq/",
  },
};

const faqCategories = [
  {
    category: "General & Services",
    faqs: [
      {
        question: "What is a Driver on Hire service?",
        answer: "It is a professional service where you hire an expert to drive your own personal vehicle, allowing you to travel comfortably without the stress of being behind the wheel."
      },
      {
        question: "Why should I hire a driver instead of driving myself?",
        answer: "Hiring a driver helps you avoid fatigue, reduces stress, and allows you to actually enjoy the journey, especially on unfamiliar routes."
      },
      {
        question: "What types of driver services do you offer?",
        answer: "We provide a wide range of options to fit your needs, including: Daily and Hourly Drivers for short-term needs, Temporary and Permanent Drivers for ongoing requirements, Outstation and Night Drivers for long-distance or late-night travel."
      },
      {
        question: "In which cities is the service available?",
        answer: "Our drivers are available at your doorstep in the following locations: Mumbai, Navi Mumbai, Thane, Pune."
      },
      {
        question: "When should I consider hiring a driver?",
        answer: "Most people book a driver for long road trips, airport transfers, family functions, medical visits, or late-night travel when they just want a stress-free ride."
      },
      {
        question: "Can I hire a driver for elderly family members?",
        answer: "Yes, many families hire drivers specifically for elderly parents to ensure their travel is safe, comfortable, and completely stress-free."
      },
      {
         question: "Can I hire a driver for a wedding or family function?",
         answer: "Yes, drivers are commonly hired for weddings and special occasions where hassle-free travel is a priority."
      }
    ]
  },
  {
    category: "Booking & Pricing",
    faqs: [
      {
        question: "How do I book a driver?",
        answer: "Simply share your travel details such as date, time, location, and trip type, and our booking assistance will handle the rest. You can also book easily through our app on Google Play and the App Store."
      },
      {
        question: "When can I book a driver?",
        answer: "Our service is available 24/7, allowing you to book, schedule, and customize your rides at any time."
      },
      {
        question: "How is the driver charge calculated?",
        answer: "Charges usually depend on the trip duration, total distance, or the specific type of travel; all pricing is shared clearly before confirmation."
      },
      {
        question: "Is there a minimum booking duration?",
        answer: "Minimum booking times may vary depending on the trip type and availability; these details are shared at the time of your booking."
      },
      {
        question: "Can I hire a driver for one day only?",
        answer: "Yes, you can hire a driver for a single day, multiple days, or even longer durations based on your specific requirements."
      },
      {
        question: "What if my travel plan changes after booking?",
        answer: "If your plans shift, just inform the support team in advance, and changes will be handled based on current driver availability."
      },
      {
        question: "What happens if a driver cancels at the last minute?",
        answer: "In the rare case of a cancellation, a replacement driver is quickly arranged so your travel plans stay on track."
      },
    ]
  },
  {
    category: "Drivers & Safety",
    faqs: [
      {
        question: "Is it safe to hire a driver online?",
        answer: "Yes, as long as the service verifies drivers properly; we work with trained and experienced drivers to ensure your safety and reliability."
      },
      {
        question: "Are the drivers safe and reliable?",
        answer: "Yes, our platform connects you with professional, police-verified drivers to ensure a secure experience. Every driver in our network has over 5 years of driving experience."
      },
      {
        question: "Are drivers comfortable driving different car models?",
        answer: "Yes, our drivers are experienced in handling various car types, including hatchbacks, sedans, and SUVs."
      },
      {
        question: "Do drivers help with luggage?",
        answer: "Yes, drivers usually assist with basic luggage handling to make your journey even smoother."
      },
      {
        question: "Who do I contact if I need help during my trip?",
        answer: "Support contact details are shared the moment you book, so assistance is available whenever you need it."
      }
    ]
  },
  {
    category: "Trip Specifics",
    faqs: [
      {
        question: "Can I hire a driver for outstation travel?",
        answer: "Absolutely—outstation trips are one of the most common reasons people hire drivers, especially to avoid the fatigue of long or tiring journeys."
      },
      {
        question: "Are the drivers experienced with highways and long routes?",
        answer: "Yes, drivers are well-versed with city roads, major highways, and popular travel routes to ensure your trip is smooth from start to finish."
      },
      {
        question: "Can I book a driver for night travel or early morning trips?",
        answer: "Yes, drivers are available for night journeys and early-morning airport or railway station drops, subject to availability."
      },
      {
        question: "Do I need to provide food or accommodation for the driver?",
        answer: "For long or outstation trips, food and stay arrangements are generally discussed in advance to avoid any confusion."
      },
      {
        question: "Will I get the same driver for multi-day trips?",
        answer: "In most cases, yes; for multi-day bookings, the same driver typically stays throughout the trip unless you are informed otherwise."
      }
    ]
  }
];

// Flatten for Schema
const allFaqs = faqCategories.flatMap(cat => cat.faqs);

export default function FAQPage() {
  return (
    <>
      <FAQSchema faqs={allFaqs} pageTitle="Driver on Hire" />
      
      {/* Sleek Minimal Header */}
      <section className="position-relative py-5 bg-white border-bottom">
        <div className="container text-center py-4">
            <span 
                className="d-inline-block py-1 px-3 rounded-pill mb-3" 
                style={{ backgroundColor: 'rgba(255, 206, 40, 0.15)', color: '#b38f00', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.5px' }}
            >
                FAQs
            </span>
            <h1 className="fw-bold text-dark mb-3" style={{ fontSize: '2.5rem', letterSpacing: '-0.5px' }}>
                How can we help you?
            </h1>
            <p className="text-secondary mx-auto mb-0" style={{ maxWidth: '500px', fontSize: '1.05rem', fontWeight: 400 }}>
              Find answers to your questions about bookings, drivers and safety.
            </p>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="py-5 bg-light" style={{ minHeight: '60vh' }}>
        <div className="container">
            <FaqComponent categories={faqCategories} />
        </div>
      </section>

      {/* Minimal CTA */}
      <section className="py-5" style={{ background: "#fbf8f2" }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="bg-white p-5 rounded-4 shadow-sm border border-light">
                <h3 className="fw-bold text-dark mb-2" style={{ fontSize: '1.75rem' }}>Still have questions?</h3>
                <p className="text-secondary mb-4">
                  If you cannot find the answer to your question in our FAQ, you can always contact us.
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <a
                    href="tel:02243439090"
                    className="btn btn-warning px-4 py-2 rounded-3 text-dark fw-bold"
                    style={{ fontSize: '1rem' }}
                  >
                     <i className="bi bi-telephone-fill me-2"></i>
                     Call 022-43439090
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
