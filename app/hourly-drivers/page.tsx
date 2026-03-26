import Link from "next/link";
import FaqComponent from "@/app/component/faqs";
import FAQSchema from "@/app/component/FAQSchema";
import ClientTestimonials from "@/app/component/ClientTestimonials";
import ServiceSchema from "@/app/component/ServiceSchema";
import BookingModalButton from "../component/BookingModalButton";

export default function HourlyDrivers() {
  const faqs = [
    {
      question:
        "Q.1: Are fuel, tolls, and parking included in the hourly rate?",
      answer:
        "No. The hourly fee covers the driver's time only. Fuel, toll booths, and parking tickets stay with the car owner. This way, you pay only for the exact road costs you use.",
    },
    {
      question: "Q.2: Do I pay extra after 11 pm?",
      answer:
        "Yes. One flat night fee of ₹200 applies if any part of your ride falls between 11 pm and 6 am. The night fee is added once per booking, not per hour.",
    },
    {
      question: "Q.3: What is your cancellation rule?",
      answer:
        "Cancel more than 60 minutes before the start time—free. Cancellation fee under 60 minutes gets a ₹200 convenience fee applies to cover the driver's travel. Need help? Or have questions? You can contact our support team via call or WhatsApp chat 24/7.",
    },
    {
      question:
        "Q.4: What happens if my trip is shorter or longer than my booked hours?",
      answer:
        "If your trip finishes earlier than the hours you paid for, we cannot offer a refund or credit for the unused time. Our hourly packages are set for the chosen block (2, 4, or 8 hours). While pricing is simple, if you want a 3-hour booking, select the 4-hour package. It costs ₹500, while 2-hour booking costs ₹400 plus ₹100 for an extra hour. This way, you get 1 hour extra in case it is needed, and if your trip exceeds the booked time, overtime charges will apply per hour, which we will communicate to you.",
    },
    {
      question:
        'Q.5: What does "police-checked" and "verified drivers" mean for your safety?',
      answer:
        '"Police-checked" means that our drivers undergo a thorough background check with the local police authorities to ensure their record is clear. "Verified drivers" also implies a multi-step vetting process, including experience checks, sometimes driving skill assessments, and documentation checks to ensure they are professional and reliable enough to serve you.',
    },
    {
      question: "Q.6: Can I make multiple stops or change destinations?",
      answer:
        'Yes! Stops are included in your booked hours. The ₹100 "drop change" fee applies only if you change the final destination after the trip starts. Regular stops (shops, meetings) are free.',
    },
    {
      question: "Q.7: What if my trip runs shorter than booked?",
      answer:
        "You pay for the booked time block (2/4/8 hours). We don't refund additional hour time left, but you can use leftover hours for extra stops! Book only what you need.",
    },
    {
      question: "Q.8: What if I need a driver very late at night?",
      answer:
        "Our service runs 24/7. A nearby driver can reach you even at 2 am, whether for 2 hours, 4 hours, a whole night, or a full day.",
    },
    {
      question: "Q.9: Can drivers handle automatic SUVs or luxury sedans?",
      answer:
        "We have drivers who can handle all types of cars. You only have to select your vehicle type—whether it's SUVs or luxury vehicles—and we will match the right driver.",
    },
    {
      question: "Q.10: Can I extend my booking if plans change?",
      answer:
        "Yes, you can extend your booking. Each extra hour will cost ₹100 more. Inform the driver, and that's it—all the final costs will be updated to your app.",
    },
  ];

  return (
    <div className="outstation-drivers">
      <ServiceSchema
        slug="hourly-drivers"
        title="Hourly Drivers"
        description="Hire professional hourly drivers in Mumbai, Pune, Thane, and Navi Mumbai. Flexible, on-demand chauffeur service for your short-term needs."
        serviceType="On-demand Chauffeur / Hourly Driver"
        offersUrl="https://www.driveronhire.com/hourly-drivers/#pricing"
        lowPrice={400}
        highPrice={800}
        offerCount={4}
        priceRange="₹400 – ₹800"
        offerCatalog={[
          { "@type": "Offer", name: "Manual / Automatic – 2 hrs", price: 400, priceCurrency: "INR" },
          { "@type": "Offer", name: "Luxury – 2 hrs", price: 500, priceCurrency: "INR" },
          { "@type": "Offer", name: "Manual / Automatic – 4 hrs", price: 500, priceCurrency: "INR" },
          { "@type": "Offer", name: "Luxury – 4 hrs", price: 800, priceCurrency: "INR" },
        ]}
      />
      <FAQSchema faqs={faqs} pageTitle="Hourly Drivers" />

      <section className="service_section outstaion_drivers hourly_drivers service_inner_section margin-top-bottom">
        <div className="extra-layer"></div>
        <div className="extra-layer-1"></div>
        <div className="container">
          <div className="banner row p-0 m-0 align-items-md-center justify-content-md-start justify-content-center">
            <div className="col-md-6 banner-transparent">
              <h1 className="custom-heading fw-500">
                Book an Hourly <span className="bg-white">Driver</span> – Pay
                Only for the Time You Need
              </h1>
              <p
                className="mt-4"
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                Skip traffic stress. Let our trained driver take the wheel while
                you sit back and relax.
              </p>
              <div className="row inner-desc mt-md-4">
                <div className="mt-4 mt-md-0 col-12 col-md-6 col-lg-6">
                  <BookingModalButton
                    buttonText="Book Hourly Driver"
                    className="btn btn-dark custom-w-md-100"
                  />
                </div>
                <div className="mt-4 mt-md-0 col-12 col-md-6 col-lg-6">
                  <Link
                      href="tel:02243439090"
                      className="btn btn-outline-dark mb-2"
                      aria-label="Call 022 4343 9090 for Instant Help"
                    >
                      Call 022 4343 9090
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="book-outstation-driver py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-md-0 order-1 mt-md-0 mt-4">
              <img
                src="/book-outstation-driver.webp"
                alt="Booking an hourly driver in Mumbai and Pune"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h2 className="mb-25 wow fadeInUp ds-h2" data-wow-delay=".2s">
                Your Time, Your Ride,{" "}
                <span className="text-yellow">Our Expert Drivers</span>
              </h2>
              <p>
                Need a driver for a few hours? Our verified drivers are
                available on an hourly basis! So whether you need a personal
                driver for shopping, a short city tour, a business meeting, a
                social gathering, or planning to visit someone on short notice.
                Our hourly basis skilled drivers service is a must-try!
              </p>
              <p>
                Hire Drivers on an Hourly Basis for short-term trips or special
                events. Driver On Hire offers a flexible hiring option that is
                convenient and affordable. We have a pool of experienced and
                reliable drivers who ensure safety during your commute.
              </p>
              <p>
                With our drivers on an hourly basis, you don't have to worry
                about parking, navigating through traffic, or a route-hunting
                saga. Our drivers are well-versed in local traffic patterns.
                They can efficiently navigate the city, saving you time and
                stress. So, for your next short-term trip or special event,
                enjoy a hassle-free and comfortable ride with Driver on Hire.{" "}
              </p>
              <p>Reclaim your time. We drive, you decide the route.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Tables */}
      <section className="outstation-packages mb-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>
                Flexible <span className="text-warning">Hourly Packages</span>
              </h2>
              <p className="mt-3">
                Every day brings different travel needs. So we offer simple
                blocks—2 hrs, 4 hrs, 8 hrs, or custom—to match your exact plan.
                Short grocery dash? Back-to-back client visits? Pay only for the
                hours you genuinely need.
              </p>
              <p className="mt-3">
                Pick a plan below and enjoy a reliable transportation service—no
                hidden fees, no fine print. Practical, budget-friendly, and
                always ready when you are.
              </p>

              <ul className="nav nav-tabs mt-4" id="nightTabs">
                <li className="nav-item">
                  <a
                    className="nav-link active fs-15"
                    id="two-hour-tab"
                    data-bs-toggle="tab"
                    href="#two-hour"
                  >
                    <h3 className="h6">Local Charges (2 hours)</h3>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fs-15"
                    id="four-hour-tab"
                    data-bs-toggle="tab"
                    href="#four-hour"
                  >
                    <h3 className="h6">Local Charges (4 hours)</h3>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fs-15"
                    id="eight-hour-tab"
                    data-bs-toggle="tab"
                    href="#eight-hour"
                  >
                    <h3 className="h6">Local Charges (8 hours)</h3>
                  </a>
                </li>
              </ul>
              <div className="tab-content mt-3">
                {/* 2 Hours */}
                <div className="tab-pane fade show active" id="two-hour">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="fw-bold h6 text-center text-dark border-bottom border-top py-2 my-3">
                        Manual/Automatic Car
                      </h4>
                      <table className="table table-bordered">
                        <caption>Manual/Automatic Car Rates for 2 Hours</caption>
                        <tbody>
                          <tr>
                            <td>2 Hours</td>
                            <td>Rs. 400/-</td>
                          </tr>
                          <tr>
                            <td>Per hour overtime</td>
                            <td>Rs. 100/-</td>
                          </tr>
                          <tr>
                            <td>Night allowance (11pm–6am)</td>
                            <td>Rs. 200/-</td>
                          </tr>
                          <tr>
                            <td>Drop location change charges</td>
                            <td>Rs. 100/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-md-6">
                      <h4 className="fw-bold h6 text-center text-dark border-bottom border-top py-2 my-3">
                        Luxury Car
                      </h4>
                      <table className="table table-bordered">
                        <caption>Luxury Car Rates for 2 Hours</caption>
                        <tbody>
                          <tr>
                            <td>2 Hours</td>
                            <td>Rs. 500/-</td>
                          </tr>
                          <tr>
                            <td>Per hour overtime</td>
                            <td>Rs. 100/-</td>
                          </tr>
                          <tr>
                            <td>Night allowance (11pm–6am)</td>
                            <td>Rs. 200/-</td>
                          </tr>
                          <tr>
                            <td>Drop location change charges</td>
                            <td>Rs. 100/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* 4 Hours */}
                <div className="tab-pane fade" id="four-hour">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="fw-bold h6 text-center text-dark border-bottom border-top py-2 my-3">
                        Manual/Automatic Car
                      </h4>
                      <table className="table table-bordered">
                        <caption>Manual/Automatic Car Rates for 4 Hours</caption>
                        <tbody>
                          <tr>
                            <td>4 Hours</td>
                            <td>Rs. 600/-</td>
                          </tr>
                          <tr>
                            <td>Per hour overtime</td>
                            <td>Rs. 100/-</td>
                          </tr>
                          <tr>
                            <td>Night allowance (11pm–6am)</td>
                            <td>Rs. 200/-</td>
                          </tr>
                          <tr>
                            <td>Drop location change charges</td>
                            <td>Rs. 100/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-md-6">
                      <h4 className="fw-bold h6 text-center text-dark border-bottom border-top py-2 my-3">
                        Luxury Car
                      </h4>
                      <table className="table table-bordered">
                        <caption>Luxury Car Rates for 4 Hours</caption>
                        <tbody>
                          <tr>
                            <td>4 Hours</td>
                            <td>Rs. 700/-</td>
                          </tr>
                          <tr>
                            <td>Per hour overtime</td>
                            <td>Rs. 100/-</td>
                          </tr>
                          <tr>
                            <td>Night allowance (11pm–6am)</td>
                            <td>Rs. 200/-</td>
                          </tr>
                          <tr>
                            <td>Drop location change charges</td>
                            <td>Rs. 100/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* 8 Hours */}
                <div className="tab-pane fade" id="eight-hour">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="fw-bold h6 text-center text-dark border-bottom border-top py-2 my-3">
                        Manual/Automatic Car
                      </h4>
                      <table className="table table-bordered">
                        <caption>Manual/Automatic Car Rates for 8 Hours</caption>
                        <tbody>
                          <tr>
                            <td>8 Hours</td>
                            <td>Rs. 950/-</td>
                          </tr>
                          <tr>
                            <td>Per hour overtime</td>
                            <td>Rs. 100/-</td>
                          </tr>
                          <tr>
                            <td>Night allowance (11pm–6am)</td>
                            <td>Rs. 200/-</td>
                          </tr>
                          <tr>
                            <td>Drop location change charges</td>
                            <td>Rs. 100/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-md-6">
                      <h4 className="fw-bold h6 text-center text-dark border-bottom border-top py-2 my-3">
                        Luxury Car
                      </h4>
                      <table className="table table-bordered">
                        <caption>Luxury Car Rates for 8 Hours</caption>
                        <tbody>
                          <tr>
                            <td>8 Hours</td>
                            <td>Rs. 1050/-</td>
                          </tr>
                          <tr>
                            <td>Per hour overtime</td>
                            <td>Rs. 100/-</td>
                          </tr>
                          <tr>
                            <td>Night allowance (11pm–6am)</td>
                            <td>Rs. 200/-</td>
                          </tr>
                          <tr>
                            <td>Drop location change charges</td>
                            <td>Rs. 100/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="steps steps-area pt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>
                Booking Steps:{" "}
                <span className="text-yellow">Get Your Driver on Demand</span>
              </h2>
              <p>
                Booking a driver on demand has never been simpler. With our
                intuitive app or easy-to-use online form, you're just a few
                steps away from securing your hourly driver, whether for
                errands, events, or a smooth ride across town.
              </p>
            </div>
          </div>
          <div className="col-12">
            <ul className="timeline">
              <li className="timeline-box wow fadeInLeft">
                <i className="icon-layers"></i>
                <p className="timeline-title">STEP 1</p>
                <p>
                  <b>Download the App or Visit Our Website</b>
                </p>
                <p>
                  Create an account or log in to access our Local(Hourly)
                  services.
                </p>
                <span>1</span>
              </li>
              <li className="timeline-box wow fadeInRight">
                <i className="icon-chat"></i>
                <p className="timeline-title">STEP 2</p>
                <p>
                  <b>Select Your Service Type</b>
                </p>
                <p>
                  Choose the type of driver service you need: Local(Hourly)
                </p>
                <span>2</span>
              </li>
              <li className="timeline-box wow fadeInLeft">
                <i className="icon-tools"></i>
                <p className="timeline-title">STEP 3</p>
                <p>
                  <b>Pick Your City</b>
                </p>
                <p>
                  Select Mumbai (covers Thane & Navi Mumbai) or Pune as your
                  location.
                </p>
                <span>3</span>
              </li>
              <li className="timeline-box wow fadeInRight">
                <i className="icon-trophy"></i>
                <p className="timeline-title">STEP 4</p>
                <p>
                  <b>Provide Trip Details</b>
                </p>
                <p>
                  Specify if it's a round trip or a one-way trip. Fill in pickup
                  and destination.
                </p>
                <span>4</span>
              </li>
              <li className="timeline-box wow fadeInLeft">
                <i className="icon-tools"></i>
                <p className="timeline-title">STEP 5</p>
                <p>
                  <b>Enter Your Car Details</b>
                </p>
                <p>
                  Indicate your vehicle type: Manual, Automatic, Hatchback,
                  Sedan, SUV, Luxury.
                </p>
                <span>5</span>
              </li>
              <li className="timeline-box wow fadeInRight">
                <i className="icon-trophy"></i>
                <p className="timeline-title">STEP 6</p>
                <p>
                  <b>Set Hours, Date, and Time</b>
                </p>
                <p>
                  Choose how many hours you'll need, and provide the date &
                  time.
                </p>
                <span>6</span>
              </li>
              <li className="timeline-box wow fadeInLeft">
                <i className="icon-tools"></i>
                <p className="timeline-title">STEP 7</p>
                <p>
                  <b>Book & Confirm</b>
                </p>
                <p>
                  Review your booking and confirm. We'll instantly match you
                  with a verified driver.
                </p>
                <span>7</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="hourly-driver-service" className="feature-extended-section pt-5">
        <div className="feature-extended-wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title text-left mb-60">
                  <h2 className="mb-25 wow fadeInUp ds-h2" data-wow-delay=".2s">
                    Why Hire a Hourly Driver from{" "}
                    <span className="text-yellow">Driver On Hire?</span>
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="row mt-4 no-gutters m-md-0 m-1"
              style={{
                backgroundColor: "rgba(255, 193, 7, 0.2)",
                borderRadius: "20px",
                padding: "5px",
              }}
            >
              <div className="col-lg-4 col-md-6 p-2">
                <div className="service-box">
                  <div className="single-feature-extended">
                    <div>
                      <img
                        src="/24-7-availability.svg"
                        alt="24/7 driver availability in Mumbai and Pune"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="content">
                      <h3 className="ds-h3 text-yellow mt-3">
                        24/7 Days Availability
                      </h3>
                      <p>
                        Whenever life calls, at any hour of the day or night,
                        our drivers are poised and ready to roll. Quick,
                        seamless bookings ensure you're never left stranded for
                        urgent meetings or spontaneous, last-minute plans.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 p-2">
                <div className="service-box">
                  <div className="single-feature-extended">
                    <div>
                      <img
                        src="/transparent-pricing.svg"
                        alt="Transparent pricing for hourly driver services"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="content">
                      <h3 className="ds-h3 text-yellow mt-3">
                        Transparent Pricing
                      </h3>
                      <p>
                        Know precisely what you'll pay, every single time, with
                        our clear, upfront and detailed estimates. No hidden
                        costs or surprises, just honest, straightforward pricing
                        that allows you to budget your travel with total
                        confidence and ease.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 p-2">
                <div className="service-box">
                  <div className="single-feature-extended">
                    <div>
                      <img
                        src="/verified-drivers.svg"
                        alt="Verified and police-checked drivers for your safety"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="content">
                      <h3 className="ds-h3 text-yellow mt-3">
                        Verified Drivers
                      </h3>
                      <p>
                        Travel worry-free, knowing our drivers are rigorously
                        vetted, police verified, and experienced for your trip.
                        Expect a consistently smooth, reliable journey, handled
                        by professionals on any required route.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 p-2">
                <div className="service-box">
                  <div className="single-feature-extended">
                    <div>
                      <img
                        src="/on-time-service.svg"
                        alt="Punctual and on-time hourly driver service"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="content">
                      <h3 className="ds-h3 text-yellow mt-3">
                        Flexible Scheduling
                      </h3>
                      <p>
                        Your schedule guides our tailored service. Early
                        mornings or late nights, we adjust our driving to match
                        your day perfectly. Enjoy top-quality, dependable
                        service precisely timed to align with your needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 p-2">
                <div className="service-box">
                  <div className="single-feature-extended">
                    <div>
                      <img
                        src="/timing-icon.webp"
                        alt="Seamless and convenient hourly driver timing"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="content">
                      <h3 className="ds-h3 text-yellow mt-3">
                        On-Time Service
                      </h3>
                      <p>
                        Punctuality is not just a goal, but our firm promise. We
                        rely on intelligent, efficient routes and real-time,
                        up-to-the-minute updates to ensure you arrive precisely
                        when you need to be, guaranteeing you're always right on
                        schedule, without fail.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 p-2">
                <div className="service-box">
                  <div className="single-feature-extended">
                    <div>
                      <img
                        src="/door-to-door-convenience.svg"
                        alt="Door-to-door convenience and safety for your ride"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="content">
                      <h3 className="ds-h3 text-yellow mt-3">
                        Door-to-Door Convenience
                      </h3>
                      <p>
                        Completely skip the daily stress of parking and the
                        inconveniences of waiting for public transit. Be
                        comfortable, you get a ride to your doorstep, and we
                        drop you off exactly where you want, for truly
                        stress-free and exceptionally convenient travel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hire Hourly Drivers For */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="booking-purpose-section">
                <h2>
                  Hire Hourly <span className="text-yellow">Drivers For…</span>
                </h2>
                <div className="booking-purpose text-center row">
                  <div className="col-12 col-md-3 mt-5">
                    <div
                      className="icon-div d-inline-block text-center h-100px"
                    >
                      <img
                        src="/long-distance-icon.svg"
                        alt="Hourly driver for overnight airport transfers"
                        className="h-100"
                      />
                    </div>
                    <p className="mt-5 mb-1 fw-bold">Quick City Errands</p>
                    <span className="d-block lightPara">
                      Hire Hourly Drivers for quick city errands
                    </span>
                  </div>
                  <div className="col-12 col-md-3 mt-5">
                    <div
                      className="icon-div d-inline-block text-center h-100px"
                    >
                      <img
                        src="/tourist-place-icon.svg"
                        alt="Hourly driver for late-night events"
                        className="h-100"
                      />
                    </div>
                    <p className="mt-5 mb-1 fw-bold">
                      Business Meetings & Site Visits
                    </p>
                    <span className="d-block lightPara">
                      Hire Hourly Drivers for business meetings & site visits
                    </span>
                  </div>
                  <div className="col-12 col-md-3 mt-5">
                    <div
                      className="icon-div d-inline-block text-center h-100px"
                    >
                      <img
                        src="/weekend-trip-icon.svg"
                        alt="Hourly driver for shift-end commutes and weekends"
                        className="h-100"
                      />
                    </div>
                    <p className="mt-5 mb-1 fw-bold">
                      Social Gatherings & Weddings
                    </p>
                    <span className="d-block lightPara">
                      Hire Hourly Drivers for social gatherings & weddings
                    </span>
                  </div>
                  <div className="col-12 col-md-3 mt-5">
                    <div
                      className="icon-div d-inline-block text-center h-100px"
                    >
                      <img
                        src="/local-sightseeing-icon.svg"
                        alt="Hourly driver for local sightseeing and extended trips"
                        className="h-100"
                      />
                    </div>
                    <p className="mt-5 mb-1 fw-bold">Local Sightseeing Tours</p>
                    <span className="d-block lightPara">
                      Hire Hourly Drivers for local sightseeing tours
                    </span>
                  </div>
                </div>
              </div>
              <div className="bookBtn text-center">
                <BookingModalButton
                  buttonText="Book a Hourly Driver"
                  className="bookNow d-inline-block btn btn-lg btn-dark btn-style mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* happy customers */}
      <section className="client-testimonials py-5">
        <div className="container">
          <ClientTestimonials />
        </div>
      </section>

      {/* CTA */}
      <section className="booking-section pt-5">
        <div className="container">
          <div
            className="row align-items-center border mx-2 m-md-0 rounded-20"
          >
            <div className="col-md-7">
              <h2 className="pt-4">
                Ready to <span className="text-yellow">Ride After Dark?</span>
              </h2>
              <p className="mb-3">
                <b>Book in 90 Seconds & Get:</b>
              </p>
              <ul>
                <li>
                  Driver at Your Door in 45 Minutes for urgent late-night
                  requests
                </li>
                <li>
                  Zero Cancellation Fees when cancelled more than 1 hour before
                  pickup
                </li>
                <li>Local Night-Route Experts who know every shortcut</li>
              </ul>
              <BookingModalButton
                buttonText="Book Hourly Driver Now"
                className="btn btn-dark me-2 mb-2"
                bookingType="local"
              />
              <Link
                href="tel:02243439090"
                className="btn btn-outline-dark mb-2"
                aria-label="Call 022 4343 9090 for Instant Help"
              >
                Call 022 4343 9090 for Instant Help
              </Link>
            </div>
            <div className="col-md-5 text-center">
              <img
                src="/booking_section_image.webp"
                alt="Book a professional hourly driver for your ride"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faqs">
        <div className="container">
          <div className="row">
            <h2 className="mt-5 headStyle text-center">FAQs</h2>
            <FaqComponent faqs={faqs} />
          </div>
        </div>
      </section>
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Hire Hourly Driver in Mumbai & Pune | Pay-Per-Hour Chauffeur",
    description:
      "Book a trusted, police-checked driver for 2, 4 or 8 hours. Fixed rates, 24/7 help, driver at your door in 45 min. No hidden fees—pay only for the time you use.",
    alternates: {
      canonical: "https://www.driveronhire.com/hourly-drivers/",
    },
  };
}
