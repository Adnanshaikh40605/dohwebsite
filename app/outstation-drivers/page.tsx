import Link from "next/link";
import FaqComponent from "@/app/component/faqs";
import FAQSchema from "@/app/component/FAQSchema";
import ClientTestimonials from "@/app/component/ClientTestimonials";
import ServiceSchema from "@/app/component/ServiceSchema";

export default function OutstationDrivers() {
  const faqs = [
    {
      question:
        "Q.1: What are the driver charges per day for outstation trips?",
      answer:
        "Our pricing is completely transparent. The driver charges per day for outstation trips depend on factors like trip distance, vehicle type, and duration. You'll receive an upfront estimate with no hidden fees, so you can plan your budget confidently.",
    },
    {
      question: "Q.2: What are the driver on hire rates in Mumbai?",
      answer:
        "Our rates in Mumbai are designed to be competitive and fair. We provide clear, detailed pricing for both local and outstation journeys, ensuring you know exactly what you're paying for—without any surprises.",
    },
    {
      question: "Q.3: How are your drivers verified?",
      answer:
        "Every driver goes through a rigorous screening process including background checks, police verification, and professional training. This ensures that you’re paired with experienced and reliable drivers who prioritize your safety and comfort.",
    },
    {
      question: "Q.4: How can I hire a driver for outstation near me?",
      answer:
        "Simply use our online booking platform or mobile app. Enter your location—whether you're in Mumbai, Thane, Navi Mumbai, or Pune—and your trip details. Our system will match you with a nearby, professional driver for a seamless travel experience.",
    },
    {
      question:
        "Q.5: What factors affect the cost of hiring an outstation driver?",
      answer:
        "The total cost is influenced by several factors including trip distance, duration, vehicle type, and any special service requirements. Our platform provides a detailed fare breakdown upfront so you can see exactly what you're paying for.",
    },
    {
      question:
        "Q.6: What should I do if my driver is delayed or there’s an emergency?",
      answer:
        "Our drivers are committed to timeliness and use optimized routes to keep you on schedule. In case of delays or emergencies, our driver will communicate with you immediately, and our 24/7 support team is always ready to assist. Go to the website or app",
    },
  ];

  return (
    <div className="outstation-drivers">
      <ServiceSchema
        slug="outstation-drivers"
        title="Outstation Drivers"
        description="Hire professional outstation drivers for one-way, round-trip, and long-distance journeys from Mumbai, Pune, Thane, and Navi Mumbai. Safe, reliable, and comfortable travel."
        serviceType="On-demand Chauffeur / Outstation Driver"
        offersUrl="https://www.driveronhire.com/outstation-drivers/#pricing"
        lowPrice={1000}
        highPrice={2000}
        offerCount={2}
        priceRange="₹1000 – ₹2000"
        offerCatalog={[
          { "@type": "Offer", name: "Same Day Return (Manual/Automatic)", price: 1000, priceCurrency: "INR" },
          { "@type": "Offer", name: "Stay (Manual/Automatic)", price: 2000, priceCurrency: "INR" },
        ]}
      />
      <FAQSchema faqs={faqs} pageTitle="Outstation Drivers" />

      <section className="service_section outstaion_drivers service_inner_section margin-top-bottom">
        <div className="extra-layer"></div>
        <div className="extra-layer-1"></div>
        <div className="container">
          <div className="banner row p-0 m-0 align-items-md-center justify-content-md-start justify-content-center">
            <div className="col-md-6 banner-transparent">
              <h1 className="custom-heading fw-500">
                OUTSTATION <span className="bg-white">DRIVERS</span>
              </h1>
              <p
                className="mt-4"
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                Professional drivers for one-way, round-trip, and long-distance
                journeys
              </p>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                Travel confidently with our verified outstation drivers—ensuring
                every trip is safe, punctual, and comfortable. Whether you're
                planning a quick weekend escape or a longer journey, let us
                handle the drive so you can enjoy the ride.
              </p>
              <div className="row inner-desc mt-md-4">
                <div className="mt-4 mt-md-0 col-12 col-md-6 col-lg-6">
                  <Link
                    href="/outstation-booking"
                    className="btn btn-dark custom-w-md-100"
                  >
                    Book Outstation Driver
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
                alt="book-outstation-driver"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h2 className="mb-25 wow fadeInUp ds-h2" data-wow-delay=".2s">
                Book Driver for <span className="text-yellow">Outstation</span>
              </h2>
              <p>
                Travelling out of town is exciting, but it sometimes comes with
                challenges. That's where Driver On Hire comes to play a major
                role. When choosing a driver on rent for outstation, we know the
                value professionalism and dependability.
              </p>
              <p>
                Whether you're setting out for a quick weekend getaway or a
                longer business journey, our carefully selected driver on rent
                is here to ensure you travel safely and comfortably on even the
                most unfamiliar roads. Let us take care of the driving so you
                can focus on enjoying your trip.
              </p>
              <p>
                With flexible scheduling and transparent rates, arranging a
                driver hire for outstation becomes effortless. Whether in
                Mumbai, Thane, Navi Mumbai, or Pune, our police-verified drivers
                ensure a comfortable ride in your car so you can focus on what
                matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="outstation-packages mb-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>
                Our Outstation Driver{" "}
                <span className="text-warning">Packages</span>
              </h2>
              <p className="mt-3">
                <strong>One-Way Trips :</strong> Planning a quick out-of-town
                journey? At Driver On Hire, we provide a seamless one-way
                solution—no need to handle the wheel yourself. Each driver is
                thoroughly vetted for safety and comfort, letting you focus on
                business or leisure: book now and travel stress-free to your
                destination.
              </p>
              <p className="mt-3">
                <strong>Round Trips :</strong> Want to book a round-trip
                reservation for a far-off location? You’ve found us at the right
                moment! Use our credible driver-on-hire service for your
                outstation getaways. Our professional round-trip drivers will
                make your trip comfortable and enjoyable, whether alone or with
                friends and family.
              </p>

              <ul className="nav nav-tabs mt-4" id="outstationTabs">
                <li className="nav-item" style={{ width: "50%" }}>
                  <a
                    className="nav-link active fs-15 text-center"
                    id="same-day-tab"
                    data-bs-toggle="tab"
                    href="#same-day"
                  >
                    Outstation Charges (Same day return)
                  </a>
                </li>
                <li className="nav-item" style={{ width: "50%" }}>
                  <a
                    className="nav-link fs-15 text-center"
                    id="stay-tab"
                    data-bs-toggle="tab"
                    href="#stay"
                  >
                    Outstation Charges (Stay)
                  </a>
                </li>
              </ul>

              {/* Tabs Content */}
              <div className="tab-content mt-3">
                {/* Same Day Return Tab */}
                <div className="tab-pane fade show active" id="same-day">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="fw-bold text-center text-dark border-bottom border-top py-2 my-3">
                        Manual/Automatic Car
                      </p>
                      <table className="table table-bordered border-top-0 border-right-0 border-left-0">
                        <caption>Manual/Automatic Car Rates for Same Day Return</caption>
                        <thead className="border-0">
                          <tr className="border-0">
                            <th className="border-0">Hours</th>
                            <th className="border-0">Rates</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>12 hour</td>
                            <td>Rs 1200/-</td>
                          </tr>
                          <tr>
                            <td>Per hour overtime</td>
                            <td>Rs 100/-</td>
                          </tr>
                          <tr>
                            <td>For DA Daily allowance</td>
                            <td>Rs 300/-</td>
                          </tr>
                          <tr>
                            <td>After 11pm travelling conveyance up-to 6 AM</td>
                            <td>Rs 200/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="col-md-6">
                      <p className="fw-bold text-center text-dark border-bottom border-top py-2 my-3">
                        Luxury Car
                      </p>
                      <table className="table table-bordered border-top-0 border-right-0 border-left-0">
                        <caption>Luxury Car Rates for Same Day Return</caption>
                        <thead className="border-0">
                          <tr className="border-0">
                            <th className="border-0">Hours</th>
                            <th className="border-0">Rates</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>12 hour</td>
                            <td>Rs 1300/-</td>
                          </tr>
                          <tr>
                            <td>Per hour overtime</td>
                            <td>Rs 100/-</td>
                          </tr>
                          <tr>
                            <td>For DA Daily allowance</td>
                            <td>Rs 300/-</td>
                          </tr>
                          <tr>
                            <td>After 11pm travelling conveyance up-to 6 AM</td>
                            <td>Rs 200/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Stay Tab */}
                <div className="tab-pane fade" id="stay">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="fw-bold text-center text-dark border-bottom border-top py-2 my-3">
                        Manual/Automatic Car
                      </p>
                      <table className="table table-bordered border-top-0 border-right-0 border-left-0">
                        <caption>Manual/Automatic Car Rates for Stay</caption>
                        <thead className="border-0">
                          <tr className="border-0">
                            <th className="border-0">Hours</th>
                            <th className="border-0">Rates</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Per day</td>
                            <td>Rs 1200/-</td>
                          </tr>
                          <tr>
                            <td>For DA Daily allowance</td>
                            <td>Rs 300/-</td>
                          </tr>
                          <tr>
                            <td>After 11pm travellng conveyance up-to 6 AM</td>
                            <td>Rs 200/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="col-md-6">
                      <p className="fw-bold text-center text-dark border-bottom border-top py-2 my-3">
                        Luxury Car
                      </p>
                      <table className="table table-bordered border-top-0 border-right-0 border-left-0">
                        <caption>Luxury Car Rates for Stay</caption>
                        <thead className="border-0">
                          <tr className="border-0">
                            <th className="border-0">Hours</th>
                            <th className="border-0">Rates</th>
                          </tr>
                        </thead>
                        <tbody className="t-body-yellow">
                          <tr>
                            <td>Per day</td>
                            <td>Rs 1300/-</td>
                          </tr>
                          <tr>
                            <td>For DA Daily allowance</td>
                            <td>Rs 300/-</td>
                          </tr>
                          <tr>
                            <td>After 11pm travellng conveyance up-to 6 AM</td>
                            <td>Rs 200/-</td>
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

      <section className="steps steps-area pt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div>
                <h2>
                  Our Booking <span className="text-yellow">Process</span>
                </h2>
                <p>
                  Booking a driver on demand has never been simpler. With our
                  driver booking app or online driver hire form, it takes just a
                  few steps to get your driver—whether for a local ride, an
                  outstation journey, or a quick airport drop.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            {/* Title Section */}
            <ul className="timeline">
              <li className="timeline-box wow fadeInLeft">
                <i className="icon-layers"></i>
                <p className="timeline-title">STEP 1</p>
                <p className="timeline-details mb-0">
                  <b>Download the App or Visit Our Website</b>
                </p>
                <p>
                  Create an account or log in to explore all available services.
                </p>
                <span>1</span>
              </li>
              <li className="timeline-box wow fadeInRight">
                <i className="icon-chat"></i>
                <p className="timeline-title">STEP 2</p>
                <p className="timeline-details mb-0">
                  <b>Select Your Service Type</b>
                </p>
                <p>Choose the type of service you need:</p>
                <ol>
                  <li>Outstation</li>
                  <li>Outstation drop</li>
                </ol>
                <span>2</span>
              </li>
              <li className="timeline-box wow fadeInLeft">
                <i className="icon-tools"></i>
                <p className="timeline-title">STEP 3</p>
                <p className="timeline-details mb-0">
                  <b>Choose Your City</b>
                </p>
                <p>
                  Pick your location so we can match you with a nearby
                  professional driver.
                </p>
                <span>3</span>
              </li>
              <li className="timeline-box wow fadeInRight">
                <i className="icon-trophy"></i>
                <p className="timeline-title">STEP 4</p>
                <p className="timeline-details mb-0">
                  <b>Provide Trip Details</b>
                </p>
                <p>
                  Specify whether it’s a one-way or round trip.
                  <br />
                </p>
                <span>4</span>
              </li>
              <li className="timeline-box wow fadeInLeft">
                <i className="icon-tools"></i>
                <p className="timeline-title">STEP 5</p>
                <p className="timeline-details mb-0">
                  <b>Enter Your Car Details</b>
                </p>
                <p>Indicate your vehicle type</p>
                <div className="row">
                  <ul className="col-6 pl-5">
                    <li>Manual</li>
                    <li>Hatchback</li>
                    <li>SUV</li>
                    <li>Sedan Luxury</li>
                  </ul>
                  <ul className="col-6 pl-5">
                    <li>Automatic</li>
                    <li>Sedan</li>
                    <li>Luxary</li>
                    <li>SUV Luxury</li>
                  </ul>
                </div>
                <span>5</span>
              </li>
              <li className="timeline-box wow fadeInRight">
                <i className="icon-trophy"></i>
                <p className="timeline-title">STEP 6</p>
                <p className="timeline-details mb-0">
                  <b>Set Hours, Date, and Time</b>
                </p>
                <p>
                  Choose how long you’ll need the driver, then pick your
                  preferred date and time slot.
                  <br />
                </p>
                <span>6</span>
              </li>
              <li className="timeline-box wow fadeInLeft">
                <i className="icon-tools"></i>
                <p className="timeline-title">STEP 7</p>
                <p className="timeline-details mb-0">
                  <b>Book & Confirm</b>
                </p>
                <p>
                  Review all booking details, then tap "Confirm" to get your
                  driver. Our system instantly connects you with a verified
                  professional, ensuring a safe and timely ride.
                </p>
                <span>7</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="outstation-driver-service" className="feature-extended-section pt-5">
        <div className="feature-extended-wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title text-left mb-60">
                  <h2 className="mb-25 wow fadeInUp ds-h2" data-wow-delay=".2s">
                    Why Choose Our Outstation{" "}
                    <span className="text-yellow">Driver Service?</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    Below are six key benefits that showcase why travellers
                    trust us for a driver on demand—whether they need a driver
                    for an outstation trip, want to rent a driver for daily
                    commutes, or prefer a professional driver for hire option.
                  </p>
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
                        alt="24/7 Availability"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="content mb-1">
                      <h3 className="ds-h3 text-yellow mt-3">
                        24/7 Availability
                      </h3>
                      <p>
                        Wherever and whenever you plan to travel, our
                        driver-on-demand service stands ready around the clock.
                        We make hiring a driver at short notice easy, ensuring
                        you never miss an important trip or last-minute plan.
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
                      />
                    </div>
                    <div className="content">
                      <h3 className="ds-h3 text-yellow mt-3">
                        Transparent Pricing
                      </h3>
                      <p>
                        We believe in clear, upfront pricing for every journey.
                        Our detailed estimates ensure you'll always know exactly
                        what you're paying—with no hidden fees or surprises—to
                        help you plan your trip confidently.
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
                        alt="Verified Drivers"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="content">
                      <h3 className="ds-h3 text-yellow mt-3">
                        Verified Drivers
                      </h3>
                      <p>
                        Your security is our top priority. Before a driver joins
                        our team, we meticulously verify their background and
                        driving history. Each professional is experienced,
                        ensuring a safe, smooth ride for every outstation trip.
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
                        src="/flexible-scheduling.svg"
                        alt="Flexible Scheduling"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="content">
                      <h3 className="ds-h3 text-yellow mt-3">
                        Flexible Scheduling
                      </h3>
                      <p>
                        We adapt to your timetable so you can travel exactly
                        when it suits you best. Whether you need an early
                        morning pickup or a late-night drop-off, our
                        professional drivers for hire coordinate around your
                        schedule without compromising on quality or safety.
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
                        alt="On-Time Service"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="content">
                      <h3 className="ds-h3 text-yellow mt-3">
                        On-Time Service
                      </h3>
                      <p>
                        We value punctuality on every trip. Our drivers use
                        optimized routes and clear communication to ensure you
                        arrive on time consistently—whether catching a flight or
                        attending a meeting. Enjoy worry-free travel.
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
                        alt="Door-to-Door Convenience"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="content">
                      <h3 className="ds-h3 text-yellow mt-3">
                        Door-to-Door Convenience
                      </h3>
                      <p>
                        Booking a driver on demand means you can skip the hunt
                        for parking or wait for public transportation. We handle
                        pickups right at your doorstep and drop you off at the
                        exact destination, giving you the freedom to focus on
                        your trip.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="booking-purpose-section">
                <h2>
                  Hire Outstation{" "}
                  <span className="text-yellow">Drivers for...</span>
                </h2>
                <div className="booking-purpose text-center row">
                  <div className="col-12 col-md-3 mt-5">
                    <div
                      className="icon-div d-inline-block text-center"
                      style={{ height: "100px" }}
                    >
                      <img
                        src="/long-distance-icon.svg"
                        alt="long distance"
                        className="h-100"
                      />
                    </div>
                    <p className="mt-5 mb-1 fw-bold">Long Distance</p>
                    <span className="d-block lightPara">
                      Hire Driver for Long Distance travel
                    </span>
                  </div>
                  <div className="col-12 col-md-3 mt-5">
                    <div
                      className="icon-div d-inline-block text-center"
                      style={{ height: "100px" }}
                    >
                      <img
                        src="/tourist-place-icon.svg"
                        alt="tourist place"
                        className="h-100"
                      />
                    </div>
                    <p className="mt-5 mb-1 fw-bold">Tourist Places</p>
                    <span className="d-block lightPara">
                      Provide Drivers to visit tourists places
                    </span>
                  </div>
                  <div className="col-12 col-md-3 mt-5">
                    <div
                      className="icon-div d-inline-block text-center"
                      style={{ height: "100px" }}
                    >
                      <img
                        src="/weekend-trip-icon.svg"
                        alt="weekend trip"
                        className="h-100"
                      />
                    </div>
                    <p className="mt-5 mb-1 fw-bold">Weekend Trips</p>
                    <span className="d-block lightPara">
                      Reliable Drivers for Weekend trips
                    </span>
                  </div>
                  <div className="col-12 col-md-3 mt-5">
                    <div
                      className="icon-div d-inline-block text-center"
                      style={{ height: "100px" }}
                    >
                      <img
                        src="/local-sightseeing-icon.svg"
                        alt="local sightseeing"
                        className="h-100"
                      />
                    </div>
                    <p className="mt-5 mb-1 fw-bold">Local Sightseeing</p>
                    <span className="d-block lightPara">
                      Drivers for local sightseeing
                    </span>
                  </div>
                </div>
              </div>
              <div className="bookBtn text-center">
                <Link
                  href="/outstation-booking/"
                  className="bookNow d-inline-block btn btn-lg btn-dark btn-style mt-4"
                >
                  Book a Driver
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientTestimonials />

      <section className="booking-section pt-5">
        <div className="container">
          <div
            className="row align-items-center border mx-2 m-md-0 rounded-20"
          >
            {/* Left Text Content */}
            <div className="col-md-7">
              <h2 className="pt-4">
                Ready to Book Your{" "}
                <span className="text-yellow">Outstation Driver?</span>
              </h2>
              <p className="mb-3">
                Ready to hire a driver for outstation? Our driver-on-demand
                service is available 24/7, ensuring a smooth, worry-free
                journey. Rent a driver for your outstation trip today and travel
                comfortably—no hidden fees, no last-minute surprises.
              </p>
              <Link href="/outstation-booking/" className="btn btn-dark">
                Book driver now
              </Link>
            </div>

            {/* Right Image */}
            <div className="col-md-5 text-center">
              <img
                src="/booking_section_image.webp" // Replace with actual image path
                alt="Book Outstation Driver"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

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
    title: "Hire Driver for Outstation | Police Verified, & Professional",
    description:
      "Hire driver for outstation easily with Driver On Hire. Police Verified, safe, and professional drivers for one-way or round trips across India",
    alternates: {
      canonical: "https://www.driveronhire.com/outstation-drivers/",
    },
  };
}
