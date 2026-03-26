import React from "react";
import Link from "next/link";
import "../style/landing.page.css";
import DriverServicesEffects from "../component/DriverServicesEffects";
import ContactForm from "../component/contactForm";
import BookingModalButton from "../component/BookingModalButton";

const DriverServices = () => {
  return (
    <>
      <DriverServicesEffects />
      <section
        id="landing-home"
        className="landing-hero-section"
        style={{ background: "#fdfdfd" }}
      >
        <div className="container">
          <div
            className="row align-items-center position-relative"
            // style={{ height: "80vh" }}
          >
            <div className="col-lg-6">
              <div className="hero-content">
                <h1
                  className="wow fadeInUp ds-h1"
                  // style={{ textEmphasisStyle: "dot" }}
                  data-wow-delay=".4s"
                >
                  Find the{" "}
                  <span className="text-yellow-accent">Perfect Driver</span> for
                  Every Need
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  From hourly to long-distance trips, our reliable,
                  police-verified drivers ensure safe and professional service
                  tailored to your requirements.
                </p>
                <BookingModalButton
                  className="main-btn border-btn btn-hover wow fadeInUp"
                  buttonText="Book a Driver Now"
                  dataWowDelay=".6s"
                />
                {/* <Link href="#features" className="scroll-bottom">
                  <i className="bi bi-arrow-down"></i>
                </Link> */}
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="hero-img" data-wow-delay=".5s">
                {/* <img className="w-100" src="/landing-mobile1.webp" alt="" /> */}
                {/* <video autoPlay loop muted playsInline className="w-100">
                  <source src="/App-tutorial.mp4" type="video/mp4" />
                </video> */}
                <video
                  className="w-100 landing-video"
                  width="500"
                  height="500"
                  preload="none"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/App-tutorial.mp4" type="video/mp4" />
                  <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="feature-section py-5 mt-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-6">
              <div className="single-feature">
                <div className="icon">
                  <img
                    src="/Police-verified-drivers.svg"
                    className="w-50"
                    alt="Police Verified Drivers"
                  />
                </div>
                <div className="content">
                  <h3 className="ds-h3">20000+</h3>
                  <p>POLICE VERIFIED DRIVERS</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="single-feature">
                <div className="icon">
                  <img src="/city-icon1.svg" className="w-50" alt="City Icon" />
                </div>
                <div className="content">
                  <h3 className="ds-h3">4</h3>
                  <p>MAJOR CITIES SERVING</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="single-feature">
                <div className="icon">
                  <img src="/Happy-clients.svg" className="w-50" alt="Happy clients" />
                </div>
                <div className="content">
                  <h3 className="ds-h3">5 LAC+</h3>
                  <p>HAPPY CUSTOMERS</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="single-feature">
                <div className="icon">
                  <img src="/response-time.svg" className="w-50" alt="Response Time" />
                </div>
                <div className="content">
                  <h3 className="ds-h3">RESPONSE TIME</h3>
                  <p>UNDER 45 MINUTES</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="driver-services-overview" className="feature-extended-section">
        <div className="feature-extended-wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-5 col-xl-6 col-lg-8 col-md-9">
                <div className="section-title text-center mb-60">
                  <h2 className="mb-25 wow fadeInUp ds-h2" data-wow-delay=".2s">
                    Explore Our Range of Driver Services
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    Our driver services are designed to cater to all your travel
                    needs. Whether it's a quick errand or a long-distance
                    journey, we've got you covered with professional, reliable
                    drivers.
                  </p>
                </div>
              </div>
            </div>

            <div className="row g-2">
              <div className="col-lg-4 col-md-6 my-2">
                <Link href="/temporary-drivers">
                  <div className="single-feature-extended">
                    <div className="icon">
                      <i className="bi bi-car-front"></i>
                    </div>
                    <div className="content mb-1">
                      <h3 className="ds-h3">Temporary Drivers</h3>
                      <p>
                        Hire professional drivers for short-term needs with
                        flexible scheduling. Ideal for occasional or last-minute
                        travel plans.
                      </p>
                    </div>
                    <span className=" text-warning">Book Now...</span>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 my-2">
                <Link href="/permanent-drivers">
                  <div className="single-feature-extended">
                    <div className="icon">
                      <i className="bi bi-person"></i>
                    </div>
                    <div className="content">
                      <h3 className="ds-h3">Permanent Drivers</h3>
                      <p>
                        Reliable full-time drivers to handle your daily commutes
                        and routines. Enjoy a consistent and dependable driving
                        experience.
                      </p>
                    </div>
                    <span className=" text-warning">Book Now...</span>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 my-2">
                <Link href="/hourly-drivers">
                  <div className="single-feature-extended">
                    <div className="icon">
                      <i className="bi bi-hourglass"></i>
                    </div>
                    <div className="content">
                      <h3 className="ds-h3">Hourly Drivers</h3>
                      <p>
                        Book experienced drivers for short trips or quick
                        errands. Flexible by the hour to fit your busy schedule
                        seamlessly.
                      </p>
                    </div>
                    <span className=" text-warning">Book Now...</span>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 my-2">
                <Link href="/daily-drivers">
                  <div className="single-feature-extended">
                    <div className="icon">
                      <i className="bi bi-calendar2-week"></i>
                    </div>
                    <div className="content">
                      <h3 className="ds-h3">Daily Drivers</h3>
                      <p>
                        Hire a professional driver to manage all your travel
                        needs for the entire day. Perfect for events, meetings,
                        or busy days.
                      </p>
                    </div>
                    <span className=" text-warning">Book Now...</span>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 my-2">
                <Link href="/night-drivers">
                  <div className="single-feature-extended">
                    <div className="icon">
                      <i className="bi bi-moon"></i>
                    </div>
                    <div className="content">
                      <h3 className="ds-h3">Night Drivers</h3>
                      <p>
                        Dependable drivers for safe and comfortable late-night
                        travel. Ideal for night shifts, events, or long evening
                        commutes.
                      </p>
                    </div>
                    <span className=" text-warning">Book Now...</span>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 my-2">
                <Link href="/outstation-drivers">
                  <div className="single-feature-extended">
                    <div className="icon">
                      <i className="bi bi-pin-map"></i>
                    </div>
                    <div className="content">
                      <h3 className="ds-h3">Outstation Drivers</h3>
                      <p>
                        Experienced drivers for long-distance road trips or
                        vacations. Travel stress-free with experts who know the
                        best routes.
                      </p>
                    </div>
                    <span className=" text-warning">Book Now...</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about-section pt-md-0 pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="about-img">
                <img
                  src="/excellence-in-driver-services.webp"
                  alt="Excellence In Driver Services"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-content">
                <div className="section-title mb-30">
                  <h2 className="mb-25 wow fadeInUp ds-h2" data-wow-delay=".2s">
                    Experience Excellence in Driver Services
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    Driver on Hire combines professionalism and convenience to
                    meet all your travel needs. From short city commutes to
                    long-distance trips, we deliver 24/7 reliable service across
                    Mumbai, Pune, Thane, and Navi Mumbai. Our police-verified,
                    experienced drivers ensure your safety and satisfaction
                    every step of the way.
                  </p>
                </div>
                <BookingModalButton
                  className="main-btn border-btn btn-hover wow fadeInUp"
                  buttonText="Book a Driver Now"
                  dataWowDelay=".6s"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="about" className="about-section pt-150">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="about-content">
                <div className="section-title mb-30">
                  <h2 className="mb-25 wow fadeInUp ds-h2" data-wow-delay=".2s">
                    How to Hire a Driver with Us
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    Our Driver Service App is a user-friendly platform that
                    connects you with professional, police-verified drivers.
                    With just a few clicks, you can easily book, schedule, and
                    customize your rides. We focus on providing you with a
                    seamless experience at your doorstep, available 24/7.
                  </p>
                </div>
                <ul>
                  <li>Quick Access</li>
                  <li>Easily to Manage</li>
                  <li>24/7 Support</li>
                </ul>
                <Link
                  href="javascript:void(0)"
                  className="main-btn btn-hover border-btn wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 order-first order-lg-last">
              <div className="about-img-2">
                <img
                  src="assets/img/about/about-2.webp"
                  alt=""
                  className="w-100"
                />
                <img
                  src="assets/img/about/about-right-shape.svg"
                  alt=""
                  className="shape shape-1"
                />
                <img
                  src="assets/img/about/right-dots.svg"
                  alt=""
                  className="shape shape-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section id="contact" className="contact-section pt-5">
        <div className="container">
          <div className="contact-wrapper img-bg">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-7">
                <div className="section-title mb-15">
                  <h2 className="text-black mb-25 ds-h2">
                    Get in Touch - DriverOnHire
                  </h2>
                  <p className="text-black">
                    Have a question or need assistance? We're here to help!
                    Whether you're looking for more information about our
                    services, need support, or just want to share your thoughts,
                    don't hesitate to reach out. Fill out the form below, and
                    our dedicated team will get back to you promptly. At
                    DriverOnHire, your satisfaction is our priority, and we look
                    forward to hearing from you!
                  </p>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-5"
                style={{
                  border: "1px solid",
                  borderRadius: "14px",
                  padding: "20px",
                }}
              >
                <p className="text-dark mb-3">
                  Are you a driver ?{" "}
                  <Link
                    className="text-decoration-underline ms-1 mb-2 text-dark fw-bold"
                    href="/drivers-job"
                  >
                    Enquire Here!
                  </Link>
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DriverServices;

export function generateMetadata() {
  return {
    title: "Driver Service | Hire Reliable Drivers for Every Need",
    description:
      "Find professional driver services for hourly, daily, and outstation needs. Book police-verified drivers in Mumbai, Pune, Thane, and Navi Mumbai.",
    alternates: {
      canonical: "https://www.driveronhire.com/driver-services/",
    },
  };
}
