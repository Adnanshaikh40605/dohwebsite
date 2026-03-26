import Link from "next/link";
import FaqComponent from "@/app/component/faqs";
import FAQSchema from "@/app/component/FAQSchema";
import ClientTestimonials from "@/app/component/ClientTestimonials";
import ServiceSchema from "@/app/component/ServiceSchema";
import BookingModalButton from "../component/BookingModalButton";

export default function NightDrivers() {
  const faqs = [
    {
      question: "Q1: Which cities do you serve for night-driver bookings?",
      answer:
        "Our night-driver service operates every evening (11 pm–6 am) across Mumbai, Pune, Thane, and Navi Mumbai for both local and outstation requests.",
    },
    {
      question: "Q2: How soon will my driver arrive after I book?",
      answer:
        "Once confirmed, you can expect your driver at your location within 45 minutes. If you've requested an outstation trip, our team will call you promptly to finalize details.",
    },
    {
      question: "Q3: What does the night allowance cover?",
      answer:
        "A fixed night allowance of ₹200 applies for all driving between 11 pm and 6 am. This covers additional insurance and driver compensation for late-hour work on top of your base package rate.",
    },
    {
      question: "Q4: Can I extend my booking mid-trip?",
      answer:
        "Yes—inform your driver or update your booking via our app. Overtime is billed at ₹100 per extra hour.",
    },
    {
      question: "Q5: Are multi-stop trips available?",
      answer:
        "Absolutely. You only need to pick your main pick and drop location, and during the journey you can ask the driver to stop as many times as needed.",
    },
    {
      question: "Q6: What if I need a custom duration?",
      answer:
        "Beyond our standard 2-, 4-, and 8-hour packages, you can choose custom hours to fit your schedule. Enter your required start and end times when booking.",
    },
    {
      question: "Q7: How can I pay for my night-driver booking?",
      answer:
        "You pay the driver directly via QR code, bank transfer, or cash as you prefer.",
    },
    {
      question: "Q8: What is your cancellation policy?",
      answer:
        "Cancel at least one hour before your scheduled pickup to avoid any fees. Cancellations within one hour incur a minimal charge covering the driver's guaranteed time.",
    },
    {
      question: "Q9: What information should I provide when booking?",
      answer:
        "Please include your pickup address, destination(s), vehicle type, trip duration, and any special instructions (e.g., luggage handling). The more details, the better we can serve you.",
    },
  ];

  return (
    <div className="outstation-drivers overflow-hidden-x">
      <ServiceSchema
        slug="night-drivers"
        title="Night Drivers"
        description="Hire professional night drivers in Mumbai, Pune, Thane, and Navi Mumbai. Safe, on-demand chauffeur service for late-night and after-hours travel."
        serviceType="On-demand Chauffeur / Night Driver"
        offersUrl="https://www.driveronhire.com/night-drivers/#pricing"
        lowPrice={400}
        highPrice={900}
        offerCount={6}
        priceRange="₹400 – ₹900"
        offerCatalog={[
          { "@type": "Offer", name: "Manual / Automatic – 2 hrs", price: 400, priceCurrency: "INR" },
          { "@type": "Offer", name: "Luxury – 2 hrs", price: 500, priceCurrency: "INR" },
          { "@type": "Offer", name: "Manual / Automatic – 4 hrs", price: 500, priceCurrency: "INR" },
          { "@type": "Offer", name: "Luxury – 4 hrs", price: 600, priceCurrency: "INR" },
          { "@type": "Offer", name: "Manual / Automatic – 8 hrs", price: 800, priceCurrency: "INR" },
          { "@type": "Offer", name: "Luxury – 8 hrs", price: 900, priceCurrency: "INR" },
        ]}
      />
      <FAQSchema faqs={faqs} pageTitle="Night Drivers" />

      <section className="service_section outstaion_drivers night_drivers service_inner_section margin-top-bottom">
        <div className="extra-layer"></div>
        <div className="extra-layer-1"></div>
        <div className="container">
          <div className="banner row p-0 m-0 align-items-md-center justify-content-md-start justify-content-center">
            <div className="col-md-6 banner-transparent">
              <h1 className="custom-heading fw-500">
                Book a Night <span className="bg-white">Driver</span> – Safe &
                Stress-Free After-Hours Travel
              </h1>
              <p
                className="mt-4"
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                Certified night drivers on standby every evening for your
                late-night rides and urgent transfers
              </p>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                Travel confidently after dark with our verified night
                drivers—ensuring every trip is safe, punctual, and comfortable.
                Whether you're heading home late or have an urgent transfer, let
                us handle the drive so you can relax.
              </p>
              <div className="row inner-desc mt-md-4">
                <div className="mt-4 mt-md-0 col-12 col-md-6 col-lg-6">
                  <BookingModalButton
                    buttonText="Book Night Driver Now"
                    className="btn btn-dark custom-w-md-100"
                    bookingType="local"
                  />
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
                alt="book-night-driver"
                className="img-fluid img-responsive"
                width={500}
                height={375}
                loading="lazy"
              />
            </div>
            <div className="col-md-6">
              <h2 className="mb-25 wow fadeInUp ds-h2" data-wow-delay=".2s">
                Your Safety, Our Priority –{" "}
                <span className="text-yellow">Nighttime Travel</span>
              </h2>
              <p>
                <b>Flexible Night-Driving Service for Every Occasion</b>
              </p>
              <p>
                Driving after day time brings its own set of challenges: glare
                from oncoming headlights, unfamiliar routes, and the constant
                battle against fatigue/ sleep. We know how stressful it can feel
                to rely on public transport or risk driving yourself when
                visibility is low, and your energy is waning. That's why Driver
                On Hire's police-verified night drivers stand ready each evening
                from 11 pm to 6 am in Mumbai, Pune, Thane, and Navi Mumbai—so
                you never have to face the road alone.
              </p>
              <p>
                Our expertly trained drivers combine punctuality with precision
                navigation, using real-time tracking (GPS) to keep you informed
                every step of the way. With transparent, all-in pricing for 2-,
                4-, or 8-hour packages (and custom hours on request), you'll
                know exactly what to expect—no surprises, ever. Reclaim your
                evenings—let us handle the night drive so you can focus on what
                matters.
              </p>
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
                Flexible
                <span className="text-warning">Night Driver Packages</span>
              </h2>
              <p className="mt-3">
                We understand that night-time travel plans can be unpredictable.
                That’s why we’ve designed simple, flexible packages for our
                night driver services—whether you need a quick one-way drop-off
                or a driver on standby for the entire evening. Our transparent
                pricing ensures you only pay for the service you need for your
                after-hours travel.
              </p>
              <p className="mt-3">
                Choose from our straightforward plans below and enjoy the peace
                of mind that comes with having a vetted night driver at your
                service—no hidden charges or complex terms. It’s the practical,
                budget-friendly solution for safe and reliable transportation,
                exactly when you need it.
              </p>

              <ul className="nav nav-tabs mt-4" id="nightTabs">
                <li className="nav-item">
                  <a
                    className="nav-link active fs-15"
                    id="two-hour-tab"
                    data-bs-toggle="tab"
                    href="#two-hour"
                  >
                    Local Charges (2 hours)
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fs-15"
                    id="four-hour-tab"
                    data-bs-toggle="tab"
                    href="#four-hour"
                  >
                    Local Charges (4 hours)
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fs-15"
                    id="eight-hour-tab"
                    data-bs-toggle="tab"
                    href="#eight-hour"
                  >
                    Local Charges (8 hours)
                  </a>
                </li>
              </ul>
              <div className="tab-content mt-3">
                {/* 2 Hours */}
                <div className="tab-pane fade show active" id="two-hour">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="fw-bold text-center text-dark border-bottom border-top py-2 my-3">
                        Manual/Automatic Car
                      </p>
                      <table className="table table-bordered">
                        <caption>Manual/Automatic Car Night Driver Rates (2 Hours)</caption>
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
                      <p className="fw-bold text-center text-dark border-bottom border-top py-2 my-3">
                        Luxury Car
                      </p>
                      <table className="table table-bordered">
                        <caption>Luxury Car Night Driver Rates (2 Hours)</caption>
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
                      <p className="fw-bold text-center text-dark border-bottom border-top py-2 my-3">
                        Manual/Automatic Car
                      </p>
                      <table className="table table-bordered">
                        <caption>Manual/Automatic Car Night Driver Rates (4 Hours)</caption>
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
                      <p className="fw-bold text-center text-dark border-bottom border-top py-2 my-3">
                        Luxury Car
                      </p>
                      <table className="table table-bordered">
                        <caption>Luxury Car Night Driver Rates (4 Hours)</caption>
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
                      <p className="fw-bold text-center text-dark border-bottom border-top py-2 my-3">
                        Manual/Automatic Car
                      </p>
                      <table className="table table-bordered">
                        <caption>Manual/Automatic Car Night Driver Rates (8 Hours)</caption>
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
                      <p className="fw-bold text-center text-dark border-bottom border-top py-2 my-3">
                        Luxury Car
                      </p>
                      <table className="table table-bordered">
                        <caption>Luxury Car Night Driver Rates (8 Hours)</caption>
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
                steps away from securing your temporary driver—whether for
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
                  Create an account or log in to access our Local(Temporary)
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
                <p>Choose the type of driver service you need: Local(Temporary)</p>
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
      <section id="night-driver-service" className="feature-extended-section pt-5">
        <div className="feature-extended-wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title text-left mb-60">
                  <h2 className="mb-25 wow fadeInUp ds-h2" data-wow-delay=".2s">
                    Why Hire a Night Driver from{" "}
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
                        alt="7 Days Availability"
                        width={65}
                        height={65}
                        loading="lazy"
                        className="img-responsive"
                      />
                    </div>
                    <div className="content">
                      <h3 className="ds-h3 text-yellow mt-3">
                        7 Days Availability
                      </h3>
                      <p>
                        Whether it's a midnight airport drop or an early-morning travel, our night drivers are on call every day across Mumbai, Pune, Thane, and Navi Mumbai. Just book, and we'll dispatch a driver to you.
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
                        alt="Professional Drivers"
                        width={65}
                        height={65}
                        loading="lazy"
                        className="img-responsive"
                      />
                    </div>
                    <div className="content">
                      <h3 className="ds-h3 text-yellow mt-3">
                        Professional Drivers
                      </h3>
                      <p>
                        Each driver is police-verified and brings extensive experience behind the wheel. Count on a courteous, skilled professional who knows your city's streets and respects your schedule, privacy.
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
                        alt="Transparent Pricing"
                        width={65}
                        height={65}
                        loading="lazy"
                        className="img-responsive"
                      />
                    </div>
                    <div className="content">
                      <h3 className="ds-h3 text-yellow mt-3">
                        Transparent Pricing
                      </h3>
                      <p>
                        Choose from straightforward, flat-fee packages—2, 4, or 8 hours—or customize your hours at the same clear rate. No surprises or hidden charges: you see the total cost before you confirm.

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
                        alt="Punctual Service"
                        width={65}
                        height={65}
                        loading="lazy"
                        className="img-responsive"
                      />
                    </div>
                    <div className="content">
                      <h3 className="ds-h3 text-yellow mt-3">
                        Punctual Service
                      </h3>
                      <p>
                        We prioritize your time. Once booked, your driver arrives at your location promptly, ready to take the wheel so you can focus on your tasks—no waiting, no delays.
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
                        alt="Seamless Convenience"
                        width={65}
                        height={65}
                        loading="lazy"
                        className="img-responsive"
                      />
                    </div>
                    <div className="content">
                      <h3 className="ds-h3 text-yellow mt-3">
                        Safety First
                      </h3>
                      <p>
                        Rely on drivers who understand the challenges of late-night travel. They follow safe driving practices, maintain focus on the road, and adapt to low-light conditions for peace of mind.
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
                        alt="Safety First"
                        width={65}
                        height={65}
                        loading="lazy"
                        className="img-responsive"
                      />
                    </div>
                    <div className="content">
                      <h3 className="ds-h3 text-yellow mt-3">Seamless Convenience</h3>
                      <p>
                        Use your vehicle with a trusted chauffeur at the wheel. Enjoy door-to-door service without the hassle of parking, navigation, or post-drive fatigue—sit back and ride.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hire Night Drivers For */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="booking-purpose-section">
                <h2>
                  Hire Night <span className="text-yellow">Drivers For…</span>
                </h2>
                <div className="booking-purpose text-center row">
                  <div className="col-12 col-md-3 mt-5">
                    <div
                      className="icon-div d-inline-block text-center h-100px"
                    >
                      <img
                        src="/long-distance-icon.svg"
                        alt="Overnight Airport Transfers"
                        className="h-100 img-responsive"
                        width={100}
                        height={100}
                        loading="lazy"
                      />
                    </div>
                    <p className="mt-5 mb-1 fw-bold">
                      Overnight Airport Transfers
                    </p>
                    <span className="d-block lightPara">
                      Smooth, on-time airport drop-offs during late hours
                    </span>
                  </div>
                  <div className="col-12 col-md-3 mt-5">
                    <div
                      className="icon-div d-inline-block text-center h-100px"
                    >
                      <img
                        src="/tourist-place-icon.svg"
                        alt="Late-Night Events"
                        className="h-100 img-responsive"
                        width={100}
                        height={100}
                        loading="lazy"
                      />
                    </div>
                    <p className="mt-5 mb-1 fw-bold">
                      Late-Night Event Drop-Offs
                    </p>
                    <span className="d-block lightPara">
                      Enjoy your evening safely with a professional driver
                    </span>
                  </div>
                  <div className="col-12 col-md-3 mt-5">
                    <div
                      className="icon-div d-inline-block text-center h-100px"
                    >
                      <img
                        src="/weekend-trip-icon.svg"
                        alt="Shift-End Commutes"
                        className="h-100 img-responsive"
                        width={100}
                        height={100}
                        loading="lazy"
                      />
                    </div>
                    <p className="mt-5 mb-1 fw-bold">Shift-End Commutes</p>
                    <span className="d-block lightPara">
                      Reliable drivers for late-shift employees and executives
                    </span>
                  </div>
                  <div className="col-12 col-md-3 mt-5">
                    <div
                      className="icon-div d-inline-block text-center h-100px"
                    >
                      <img
                        src="/local-sightseeing-icon.svg"
                        alt="Extended Overnight Trips"
                        className="h-100 img-responsive"
                        width={100}
                        height={100}
                        loading="lazy"
                      />
                    </div>
                    <p className="mt-5 mb-1 fw-bold">
                      Extended Overnight Trips
                    </p>
                    <span className="d-block lightPara">
                      Hassle-free long-duration night travel
                    </span>
                  </div>
                </div>
              </div>
              <div className="bookBtn text-center">
                <BookingModalButton
                  buttonText="Book a Night Driver"
                  className="btn btn-lg btn-dark mt-3"
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
                <li>Driver at Your Door in 45 Minutes for urgent late-night requests</li>
                <li>Zero Cancellation Fees when cancelled more than 1 hour before pickup</li>
                <li>Local Night-Route Experts who know every shortcut</li>
              </ul>
              <BookingModalButton
                buttonText="Book Night Driver Now"
                className="btn btn-dark me-2 mb-2"
                bookingType="local"
              />
              <Link
                href="tel:02243439090"
                className="btn btn-outline-dark mb-2"
              >
                Call 022 4343 9090 for Instant Help
              </Link>
            </div>
            <div className="col-md-5 text-center">
              <img
                src="/booking_section_image.webp"
                alt="Book Night Driver"
                className="img-fluid img-responsive"
                width={400}
                height={300}
                loading="lazy"
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
    title:
      "Book a Verified Night Driver for a Safe, Reliable Ride",
    description:
      "Hire verified night drivers for safe, reliable late-night travel. Avoid drowsy driving with skilled professionals for pick-ups, drops & long trips. Book now!",
    alternates: {
      canonical: "https://www.driveronhire.com/night-drivers/",
    },
  };
}
