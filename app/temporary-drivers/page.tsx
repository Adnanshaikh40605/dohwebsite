import Link from "next/link";
import FaqComponent from "@/app/component/faqs";
import FAQSchema from "@/app/component/FAQSchema";
import ClientTestimonials from "@/app/component/ClientTestimonials";
import BookingModalButton from "../component/BookingModalButton";
import ServiceSchema from "@/app/component/ServiceSchema";

export default function TemporaryDrivers() {
  const faqs = [
    {
      question:
        "Q.1: Can I hire local drivers in Pune and Mumbai for short-term needs?",
      answer:
        "Absolutely! Our drivers on hire service in both Pune and Mumbai is designed for flexibility—whether you need someone for just two hours, half a day, or a full day. You can book drivers online or via our app, choose your preferred city, and get a temporary driver ready to assist with local errands, special events, school drops, shopping, wedding arrivals and more.",
    },
    {
      question: "Q.2: What if I need a driver for hire near me at odd hours?",
      answer:
        "We offer 24/7 driver services across various cities and localities. Our system is designed to connect you with a driver from your nearby location, ensuring prompt service whether it's for a late-night airport transfer or an early-morning errand.",
    },
    {
      question:
        "Q.3: Is the temporary driver service available for outstation or long-distance trips?",
      answer:
        "Yes! Our temporary driver (local) packages will be limited to city commutes you won’t get location outside the city you selected. Choose outstation driver or outstation drop option while booking to book drivers on hire for outstation getaways, weekend trips, or even one-way intercity drives. Simply specify your travel details, and we’ll match you with a driver experienced in handling longer routes safely and efficiently.",
    },
    {
      question:
        "Q.4: How soon can I get a driver on demand after I complete the booking?",
      answer:
        "In many cases, you can get a driver within 45 minutes in your door steps, while for an outstation driver once you complete booking - customer services will contact you to match the driver. Availability may vary based on peak hours or busy weekends, but our platform is designed to quickly match your request with the nearest qualified driver. We’ll keep you updated in real time so you know exactly when to expect them.",
    },
    {
      question:
        "Q.5: What types of vehicles are supported by your drivers on hire?",
      answer:
        "We provide drivers capable of handling all sorts of vehicles—from manual hatchbacks to luxury sedans and SUVs. When you schedule your booking, just indicate your car’s make and model, and we’ll ensure you’re matched with a driver who’s comfortable and experienced with that vehicle type.",
    },
    {
      question:
        "Q.6: Can I book drivers online if I only need them for a few hours?",
      answer:
        "Absolutely. We specialize in temporary driver services that allow you to pick from 2-hour, 4-hour, or 8-hour blocks or custom time, depending on your needs. If you only require a driver for a short trip or a couple of errands, simply choose the time that fits best. Our online driver booking makes it easy to customize the time and date.",
    },
    {
      question: "Q.7: Can I hire online drivers instantly for emergencies?",
      answer:
        "Yes! We can provide you drivers within 45 minutes to an hour in your pickup location. Specify your requirements (car type, duration) and choose from available drivers in real time. It’s perfect for last-minute trips or unexpected schedule changes.",
    },
    {
      question:
        "Q.8: What’s the difference between temporary drivers and part-time drivers?",
      answer:
        "Temporary drivers are hired for short, specific periods (e.g., a single day or a weekend), while part-time drivers might work fixed hours more regularly (e.g., 4 hours daily). Both options are available—just pick what suits your schedule best.",
    },
    {
      question: "Q.9: How does the hourly driver hiring process work?",
      answer:
        "Select the “Hourly Hire” option on our website or app. Enter your location, vehicle type, and how many hours you need. Review driver profiles and hourly rates. Confirm the booking—your driver arrives ready to help. It’s that simple!",
    },
    {
      question: "Q.10: How do I hire a driver for a day for a special event?",
      answer:
        "Use our “Event Drivers” filter when you book drivers online. Specify your event type (wedding, corporate function, etc.), date, and car details. We’ll assign a professional driver who’s experienced with event logistics—ensuring you and your guests travel comfortably and on time.",
    },
  ];

  return (
    <div className="outstation-drivers">
      <ServiceSchema
        slug="temporary-drivers"
        title="Temporary Drivers"
        description="Hire professional temporary drivers in Mumbai, Pune, Thane, and Navi Mumbai. Flexible, on-demand chauffeur service for short-term needs."
        serviceType="On-demand Chauffeur / Temporary Driver"
        offersUrl="https://www.driveronhire.com/temporary-drivers/#pricing"
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
      <FAQSchema faqs={faqs} pageTitle="temporary Drivers" />

      <section className="service_section outstaion_drivers temporary_drivers service_inner_section margin-top-bottom">
        <div className="extra-layer"></div>
        <div className="extra-layer-1"></div>
        <div className="container">
          <div className="banner row p-0 m-0 align-items-md-center justify-content-md-start justify-content-center">
            <div className="col-md-6 banner-transparent">
              <h1 className="custom-heading fw-500">
                Book a Temporary Driver – Anytime You Need One
              </h1>
              <p
                className="mt-4"
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                Professional drivers for short-term rides, events, and errands
              </p>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                Travel worry-free with our vetted, on-call drivers. Whether it’s
                a quick errand or a weekend adventure, count on us for a smooth,
                timely journey.
              </p>
              <div className="row inner-desc mt-md-4">
                <div className="mt-4 mt-md-0 col-12 col-md-6 col-lg-6">
                  <BookingModalButton
                    buttonText="Book Temporary Driver"
                    className="btn btn-dark mt-3 custom-w-md-100"
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
                alt="book-temporary-driver"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h2 className="mb-25 wow fadeInUp ds-h2" data-wow-delay=".2s">
                Flexible Driving Solutions for{" "}
                <span className="text-yellow">Every Need</span>
              </h2>
              <p>
                Life demands flexibility—whether managing packed schedules,
                last-minute errands, or special events. When your routine
                shifts, your ride shouldn’t add stress. Our on-demand driver
                service delivers agility and reliability for urban life’s
                unpredictable demands.
              </p>
              <p>
                Access professional, police-verified drivers by the hour, day,
                or week. Need a temporary chauffeur for school runs, airport
                pickups, or navigating Mumbai’s streets while you work? We’ve
                got you covered. With 24/7 availability and transparent rates,
                we prioritize punctuality and safety, so you stay in control.
              </p>
              <p>
                Serving Mumbai, Thane, Navi Mumbai, and Pune, our trained
                drivers adapt to your car and schedule seamlessly—whether
                covering a driver’s absence, multi-stop workdays, or spontaneous
                trips.
              </p>
              <p>
                Reclaim your time and let us handle the drive. Your schedule
                changes; we keep pace.
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
                Flexible Temporary Driver{" "}
                <span className="text-warning">Packages</span>
              </h2>
              <p className="mt-3">
                We understand that every day brings different travel needs.
                That’s why we’ve designed simple, flexible packages—2 hours, 4
                hours, or 8 hours or custom as per your requirements —so you can
                pick the one or decide custom hours that fits your schedule
                best. Whether you’re running short errands in town or attending
                back-to-back events, our transparent pricing ensures you only
                pay for the time you actually need.
              </p>
              <p className="mt-3">
                Choose from our straightforward plans below and enjoy the
                convenience of having a vetted driver at your service—no hidden
                charges or complex terms. It’s the practical, budget-friendly
                solution for reliable transportation whenever you require it.
              </p>

              <ul className="nav nav-tabs mt-4" id="outstationTabs">
                <li className="nav-item">
                  <a
                    className="nav-link active fs-15 fw-600"
                    id="2-hour-local"
                    data-bs-toggle="tab"
                    href="#2-hour-local-tab"
                  >
                    Local Charges for 2 hours (Service will be available for 24
                    hrs)
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fs-15 fw-600"
                    id="4-hour-local"
                    data-bs-toggle="tab"
                    href="#4-hour-local-tab"
                  >
                    Local Charges for 4 hours (Service will be available for 24
                    hrs)
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fs-15 fw-600"
                    id="8-hour-local"
                    data-bs-toggle="tab"
                    href="#8-hour-local-tab"
                  >
                    Local Charges for 8 hours (Service will be available for 24
                    hrs)
                  </a>
                </li>
              </ul>

              {/* Tabs Content */}
              <div className="tab-content mt-3">
                {/* 2 hour local */}
                <div
                  className="tab-pane fade show active"
                  id="2-hour-local-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <p className="fw-bold text-center text-dark border-bottom border-top py-2 my-3">
                        Manual/Automatic Car
                      </p>
                      <table className="table table-bordered border-top-0 border-right-0 border-left-0">
                        <caption>Manual/Automatic Car Rates for 2 Hours</caption>
                        <thead className="border-0">
                          <tr className="border-0">
                            <th className="border-0">Hours</th>
                            <th className="border-0">Rates</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2 Hour</td>
                            <td>Rs 400/-</td>
                          </tr>
                          <tr>
                            <td>Per hour overtime</td>
                            <td>Rs 100/-</td>
                          </tr>
                          <tr>
                            <td>After 11 pm for night allowance up-to 6 AM.</td>
                            <td>Rs 200/-</td>
                          </tr>
                          <tr>
                            <td>Drop location change charges.</td>
                            <td>Rs 100/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="col-md-6">
                      <p className="fw-bold text-center text-dark border-bottom border-top py-2 my-3">
                        Luxury Car
                      </p>
                      <table className="table table-bordered border-top-0 border-right-0 border-left-0">
                        <caption>Luxury Car Rates for 2 Hours</caption>
                        <thead className="border-0">
                          <tr className="border-0">
                            <th className="border-0">Hours</th>
                            <th className="border-0">Rates</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2 Hour</td>
                            <td>Rs 500/-</td>
                          </tr>
                          <tr>
                            <td>Per hour overtime</td>
                            <td>Rs 100/-</td>
                          </tr>
                          <tr>
                            <td>After 11 pm for night allowance up-to 6 AM.</td>
                            <td>Rs 200/-</td>
                          </tr>
                          <tr>
                            <td>Drop location change charges.</td>
                            <td>Rs 100/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* 4 hour local */}
                <div className="tab-pane fade" id="4-hour-local-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="fw-bold text-center text-dark border-bottom border-top py-2 my-3">
                        Manual/Automatic Car
                      </p>
                      <table className="table table-bordered border-top-0 border-right-0 border-left-0">
                        <caption>Manual/Automatic Car Rates for 4 Hours</caption>
                        <thead className="border-0">
                          <tr className="border-0">
                            <th className="border-0">Hours</th>
                            <th className="border-0">Rates</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>4 Hours</td>
                            <td>Rs 600/-</td>
                          </tr>
                          <tr>
                            <td>Per hour overtime</td>
                            <td>Rs 100/-</td>
                          </tr>
                          <tr>
                            <td>After 11pm travellng conveyance up-to 6 AM</td>
                            <td>Rs 200/-</td>
                          </tr>
                          <tr>
                            <td>Drop location change charges.</td>
                            <td>Rs 100/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="col-md-6">
                      <p className="fw-bold text-center text-dark border-bottom border-top py-2 my-3">
                        Luxury Car
                      </p>
                      <table className="table table-bordered border-top-0 border-right-0 border-left-0">
                        <caption>Luxury Car Rates for 4 Hours</caption>
                        <thead className="border-0">
                          <tr className="border-0">
                            <th className="border-0">Hours</th>
                            <th className="border-0">Rates</th>
                          </tr>
                        </thead>
                        <tbody className="t-body-yellow">
                          <tr>
                            <td>4 Hours</td>
                            <td>Rs 700/-</td>
                          </tr>
                          <tr>
                            <td>Per hour overtime</td>
                            <td>Rs 100/-</td>
                          </tr>
                          <tr>
                            <td>After 11pm travellng conveyance up-to 6 AM</td>
                            <td>Rs 200/-</td>
                          </tr>
                          <tr>
                            <td>Drop location change charges.</td>
                            <td>Rs 100/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* 8 hour local */}
                <div className="tab-pane fade" id="8-hour-local-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="fw-bold text-center text-dark border-bottom border-top py-2 my-3">
                        Manual/Automatic Car
                      </p>
                      <table className="table table-bordered border-top-0 border-right-0 border-left-0">
                        <caption>Manual/Automatic Car Rates for 8 Hours</caption>
                        <thead className="border-0">
                          <tr className="border-0">
                            <th className="border-0">Hours</th>
                            <th className="border-0">Rates</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>8 Hours</td>
                            <td>Rs 950/-</td>
                          </tr>
                          <tr>
                            <td>Per hour overtime</td>
                            <td>Rs 100/-</td>
                          </tr>
                          <tr>
                            <td>After 11 pm for night allowance up-to 6 AM</td>
                            <td>Rs 200/-</td>
                          </tr>
                          <tr>
                            <td>Drop location change charges</td>
                            <td>Rs 100/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="col-md-6">
                      <p className="fw-bold text-center text-dark border-bottom border-top py-2 my-3">
                        Luxury Car
                      </p>
                      <table className="table table-bordered border-top-0 border-right-0 border-left-0">
                        <caption>Luxury Car Rates for 8 Hours</caption>
                        <thead className="border-0">
                          <tr className="border-0">
                            <th className="border-0">Hours</th>
                            <th className="border-0">Rates</th>
                          </tr>
                        </thead>
                        <tbody className="t-body-yellow">
                          <tr>
                            <td>8 Hours</td>
                            <td>Rs 1050/-</td>
                          </tr>
                          <tr>
                            <td>Per hour overtime</td>
                            <td>Rs 100/-</td>
                          </tr>
                          <tr>
                            <td>After 11pm travellng conveyance up-to 6 AM</td>
                            <td>Rs 200/-</td>
                          </tr>
                          <tr>
                            <td>Drop location change charges.</td>
                            <td>Rs 100/-</td>
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
                  Booking Steps:{" "}
                  <span className="text-yellow">Get Your Driver on Demand</span>
                </h2>
                <p>
                  Booking a driver on demand has never been simpler. With our
                  intuitive app or easy-to-use online form, you’re just a few
                  steps away from securing your temporary driver—whether for
                  errands, events, or a smooth ride across town.
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
                  Create an account or log in to access our temporary(Local)
                  driver services.
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
                  <li>Local(Temporary)</li>
                </ol>
                <span>2</span>
              </li>
              <li className="timeline-box wow fadeInLeft">
                <i className="icon-tools"></i>
                <p className="timeline-title">STEP 3</p>
                <p className="timeline-details mb-0">
                  <b>Pick Your City</b>
                </p>
                <p>Then Select Mumbai or Pune your location</p>
                <span>3</span>
              </li>
              <li className="timeline-box wow fadeInRight">
                <i className="icon-trophy"></i>
                <p className="timeline-title">STEP 4</p>
                <p className="timeline-details mb-0">
                  <b>Provide Trip Details</b>
                </p>
                <p>Fill in your pickup and destination locations.</p>
                <p>
                  Specify if it’s a round trip or one-way trip.
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
                  Select how many hours you’ll need the driver, and provide the
                  date and time for your ride.
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
                  Review your booking details and confirm to secure your driver.
                  Our system instantly matches you with a verified on your way!
                </p>
                <span>7</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="temporary-driver-service" className="feature-extended-section pt-5">
        <div className="feature-extended-wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title text-left mb-60">
                  <h2 className="mb-25 wow fadeInUp ds-h2" data-wow-delay=".2s">
                    Why Choose Our Temporary{" "}
                    <span className="text-yellow">Driver Service?</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    Below are six key benefits that highlight why people turn to
                    us for short-term driver hires—whether you need a driver for
                    a quick errand, a special event, or a busy weekend.
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
                        Whenever life calls, at any hour of the day or night,
                        our drivers are poised and ready to roll. Quick,
                        seamless bookings ensure you’re never left stranded, be
                        it for urgent meetings or spontaneous, last-minute
                        plans.
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
                        Know precisely what you'll pay, every single time, with
                        our clear, upfront and detailed estimates. No hidden
                        costs or unexpected surprises, just honest,
                        straightforward pricing that allows you to budget your
                        travel with total confidence and ease.
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
                        Travel worry-free, knowing our drivers are rigorously
                        vetted, expertly trained, and fully insured for every
                        trip. Expect a consistently smooth, reliable journey,
                        handled by professionals on any route you require.
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
                        Your schedule guides our tailored service. Early
                        mornings or late nights, we adjust our driving to
                        perfectly match your day. Enjoy top-quality, dependable
                        service, precisely timed to align with your needs.
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
                        Punctuality is not just a goal, but our firm promise. We
                        rely on intelligent, efficient routes and real-time,
                        up-to-the-minute updates to ensure you arrive precisely
                        when you need to be, guaranteeing you’re always right on
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
                        Completely skip the daily stress of parking and the
                        inconveniences of waiting for public transit. We bring a
                        comfortable, reliable ride directly to your doorstep,
                        and drop you off exactly where you want, for truly
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

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="booking-purpose-section">
                <h2>
                  Hire Temporary{" "}
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
                <BookingModalButton
                  buttonText="Book Temporary Driver"
                  className="bookNow d-inline-block btn btn-dark btn-style mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientTestimonials />

      <section className="booking-section pt-5">
        <div className="container">
          <div
            className="row align-items-center border mx-2 m-md-0"
            style={{ borderRadius: "20px" }}
          >
            {/* Left Text Content */}
            <div className="col-md-7">
              <h2 className="pt-4">
                Ready to Book Your{" "}
                <span className="text-yellow">Temporary Driver?</span>
              </h2>
              <p className="mb-3">
                Your time is precious—skip the hassle and hit the road in
                minutes! Book a trusted driver online in 90 seconds and enjoy:
              </p>
              <p>
                A driver at your door in 45 minutes for urgent requests, zero
                cancellation fees if plans change (cancel 1+ hour ahead), and
                local experts who dodge traffic like pros.
              </p>
              <BookingModalButton
                buttonText="Book Now"
                className="btn btn-dark"
              />
            </div>

            {/* Right Image */}
            <div className="col-md-5 text-center">
              <img
                src="/booking_section_image.webp" // Replace with actual image path
                alt="Book Temporary Driver"
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
    title: "Book Temporary Driver in Mumbai/Pune | 45-Min Arrival",
    description:
      "Need a driver for errands, events, or urgent rides? Book verified temporary drivers in 90 sec. 24/7 service, transparent rates, & arrival in 45 mins!",
    alternates: {
      canonical: "https://www.driveronhire.com/temporary-drivers/",
    },
  };
}
