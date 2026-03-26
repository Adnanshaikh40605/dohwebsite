"use client";
import Link from "next/link";
import { useState } from "react";
import ClientTestimonials from "@/app/component/ClientTestimonials";
import ContactFormModal from "../component/ContactFormModal";

export default function PermanentDriversClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="outstation-drivers">
        <section className="service_section outstaion_drivers temporary_drivers service_inner_section margin-top-bottom">
          <div className="extra-layer"></div>
          <div className="extra-layer-1"></div>
          <div className="container">
            <div className="banner row p-0 m-0 align-items-md-center justify-content-md-start justify-content-center">
              <div className="col-md-6 banner-transparent">
                <h1 className="custom-heading fw-500">
                Hire Permanent Driver In Mumbai, Pune, Thane & Navi Mumbai
                </h1>
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    marginTop: "16px"
                  }}
                >
                  Get a permanent driver in Mumbai, Pune & Thane who knows your route, cares about your schedule, and handles every ride with safety and skill—so you can relax, work, or spend time with family without the stress of driving.
                </p>
                <div className="row inner-desc mt-md-4">
                  <div className="mt-4 mt-md-0 col-12">
                    <button onClick={handleOpenModal} className="bookNow d-inline-block btn btn-dark btn-style">Hire Permanent Driver</button>
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
                  alt="book-Permanent-driver"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
                <h2 className="mb-25 wow fadeInUp ds-h2" data-wow-delay=".2s">
                  Permanent Driver – Your Daily{" "}
                  <span className="text-yellow">Travel Companion</span>
                </h2>
                <p>
                  Feel like you're running on empty? Endless traffic jams,
                  last-minute deadlines and stressful rides steal precious moments
                  from your family, work and downtime. Relying on erratic
                  ride-hailing or managing your car only adds more
                  headaches—burdens you shouldn't bear.
                </p>
                <p>
                  With Driver On Hire's Permanent Driver Service, those hassles
                  disappear. Our professional, background-checked chauffeurs
                  master Mumbai, Pune and Thane's quickest routes, so you get
                  where you need to be—on time, every time. Imagine reclaiming
                  your commute: catch up on emails, relax with a podcast or
                  breathe easy, knowing your trusted driver has you covered.
                </p>
                <p>
                  It's reliable, consistent and designed around your life—so you
                  can focus on what matters most. You require drivers for personal
                  commutes, corporate transportation, or any other occasion, we
                  have you covered.
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
                  Our Permanent Driver{" "}
                  <span className="text-warning">Packages</span>
                </h2>
                <p className="mt-3">
                  Tired of surprise charges and one-size-fits-all contracts that
                  don't match your routine? Extra fees, last-minute changes and no
                  driver backup leave you stressed before starting your day.
                </p>
                <p className="mt-3">
                  Driver On Hire's monthly and yearly membership plans put you
                  back in control. Choose from multiple options with clear,
                  up-front rates and unlimited driver swaps at no extra cost in
                  Mumbai, Pune, Thane and Navi Mumbai. Need a different chauffeur?
                  We'll arrange it instantly. Our carefully screened, punctual
                  drivers handle the traffic so you don't have to—giving you
                  reliable rides, steady pricing and the freedom to focus on
                  what's important.
                </p>

                <div className="row">
                  <div className="col-md-12">
                    <p className="fw-bold text-center text-dark border-bottom border-top py-2 my-3">
                      Permanent Driver Charges
                    </p>
                    <table className="table table-bordered border-top-0 border-right-0 border-left-0">
                      <caption>Permanent Driver Membership Rates</caption>
                      <thead className="border-0">
                        <tr className="border-0">
                          <th className="border-0">Hours</th>
                          <th className="border-0">Rates</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            6 months membership with unlimited replacement
                            guarantee.
                          </td>
                          <td>Rs. 6000/- + GST</td>
                        </tr>
                        <tr>
                          <td>
                            1 year membership with unlimited replacement
                            guarantee.
                          </td>
                          <td>Rs. 8000/- + GST</td>
                        </tr>
                      </tbody>
                    </table>
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
                    Tired of endless calls to your friends and family to get a
                    driver from someone's contacts and messy forms to book a
                    driver? Here we've modernized the process simple and quick so
                    you can hire a permanent driver in minutes, not days. Follow
                    these easy steps to get started:
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
                    <b>Sign Up or Log In</b>
                  </p>
                  <p>
                    Go to our website or open the app. Create an account or log in
                    to access the dashboard.
                  </p>
                  <span>1</span>
                </li>
                <li className="timeline-box wow fadeInRight">
                  <i className="icon-chat"></i>
                  <p className="timeline-title">STEP 2</p>
                  <p className="timeline-details mb-0">
                    <b>Select Permanent Driver Service</b>
                  </p>
                  <p>
                    Select the "Permanent Driver" option from the other services
                    listed there.
                  </p>
                  <span>2</span>
                </li>
                <li className="timeline-box wow fadeInLeft">
                  <i className="icon-tools"></i>
                  <p className="timeline-title">STEP 3</p>
                  <p className="timeline-details mb-0">
                    <b>Fill Out Your Details</b>
                  </p>
                  <p>
                    Enter your name, phone number, and a message about your
                    requirements. Like your budget, preferred driver experience or
                    anything specific. Submit the form to initiate the process.
                  </p>
                  <span>3</span>
                </li>
                <li className="timeline-box wow fadeInRight">
                  <i className="icon-trophy"></i>
                  <p className="timeline-title">STEP 4</p>
                  <p className="timeline-details mb-0">
                    <b>Receive Confirmation</b>
                  </p>
                  <p>
                    Once your inquiry is submitted, you'll receive a confirmation
                    that we've received your details.
                  </p>
                  <span>4</span>
                </li>
                <li className="timeline-box wow fadeInRight">
                  <i className="icon-trophy"></i>
                  <p className="timeline-title">STEP 5</p>
                  <p className="timeline-details mb-0">
                    <b>Our Team Reaches Out</b>
                  </p>
                  <p>
                    Our team will contact you via your preferred contact method to
                    discuss your requirements in more detail. We will ensure that
                    your requirements, specific driver skills, schedule
                    flexibility, and everything else are noted.
                  </p>
                  <span>5</span>
                </li>
                <li className="timeline-box wow fadeInRight">
                  <i className="icon-trophy"></i>
                  <p className="timeline-title">STEP 6</p>
                  <p className="timeline-details mb-0">
                    <b>Driver Interviews & Selection</b>
                  </p>
                  <p>
                    We'll handpick a few drivers, all experienced and thoroughly
                    verified as per your requirements, and arrange interviews with
                    them. You can meet the driver, discuss your needs, ask
                    questions, and choose the one that best fits your preferences.
                    <br />
                  </p>
                  <span>6</span>
                </li>
                <li className="timeline-box wow fadeInLeft">
                  <i className="icon-tools"></i>
                  <p className="timeline-title">STEP 7</p>
                  <p className="timeline-details mb-0">
                    <b>Finalize and Start the Service</b>
                  </p>
                  <p>
                    Once you've picked your driver, they'll start immediately, as
                    discussed during the interview. Now, sit back and relax! Your
                    go-to driver will handle every ride, so you can enjoy
                    stress-free commutes without lifting a finger.
                  </p>
                  <span>7</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="permanent-driver-service" className="feature-extended-section pt-5">
          <div className="feature-extended-wrapper">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="section-title text-left mb-60">
                    <h2 className="mb-25 wow fadeInUp ds-h2" data-wow-delay=".2s">
                      Why Choose Our Permanent{" "}
                      <span className="text-yellow">Driver Service?</span>
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay=".4s">
                      At Driver On Hire, we believe in providing a driver service
                      that meets your needs and exceeds your expectations. Whether
                      looking for a driver for your daily commute, corporate
                      transportation, or family travel, our permanent driver
                      services offer you reliability, professionalism, and
                      flexibility.
                    </p>
                    <p className="wow fadeInUp" data-wow-delay=".4s">
                      We understand that your time is valuable, so our drivers are
                      experienced to ensure you travel comfortably, on time, and
                      without hassle. Our professional drivers are not just
                      chauffeurs but become integral to your routine, ensuring a
                      seamless experience every time you step into your car.
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
                          Reliable 24/7 Customer Support
                        </h3>
                        <p>
                          We assign a driver on a monthly basis as per your preferences—no more hunting for last-minute rides. Your dedicated chauffeur learns your routine and traffic patterns, ensuring you arrive on time, every time, backed by 24/7 dedicated customer support.
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
                          Personalized Driver Matching
                        </h3>
                        <p>
                          You deserve more than a one-size-fits-all approach. We
                          handpick a driver whose style, communication, and
                          professionalism fit you perfectly—creating a partnership
                          built on trust and comfort.
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
                          Predictable, Fixed Pricing
                        </h3>
                        <p>
                          Choose a monthly or yearly plan and lock in your rate. With no hidden fees or surge charges, budgeting becomes effortless—you know exactly what you'll pay, monthly/ yearly, not on every ride.
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
                          Attentive to Your Preferences
                        </h3>
                        <p>
                          Over weeks and months, your driver learns the small
                          details that matter: your favorite radio station, ideal
                          cabin temperature, and preferred pick-up spot. Each trip
                          becomes smoother and more tailored to you.
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
                          Vetted Professionals & Safety First
                        </h3>
                        <p>
                          Every permanent chauffeur completes a strict background
                          check, experienced, and ongoing performance reviews. Our
                          well-updated safety protocols mean you ride with
                          complete peace of mind.
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
                          Stress-Free Daily Commute
                        </h3>
                        <p>
                          Skip parking queues and stop-and-go traffic. Use your
                          ride time to tackle emails, prepare for meetings, or
                          simply relax—your driver handles the road so you can
                          make the most of your day.
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
                    Hire Permanent{" "}
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
                      <p className="mt-5 mb-1 fw-bold">Everyday Commutes</p>
                      <span className="d-block lightPara">
                        Reliable drivers for daily travel.
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
                      <p className="mt-5 mb-1 fw-bold">Corporate Transport</p>
                      <span className="d-block lightPara">
                        Professional drivers for business trips.
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
                      <p className="mt-5 mb-1 fw-bold">Family Transport</p>
                      <span className="d-block lightPara">
                        Safe drivers for school runs and errands.
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
                      <p className="mt-5 mb-1 fw-bold">Special Events</p>
                      <span className="d-block lightPara">
                        Arrive in style for weddings and functions.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bookBtn text-center mt-3">
                  <button onClick={handleOpenModal} className="bookNow d-inline-block btn btn-dark btn-style">Book a Inquiry</button>
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
                  Ready to Simplify Your{" "}
                  <span className="text-yellow">Daily Commutes?</span>
                </h2>
                <p className="mb-3">
                  Don't let traffic, parking, or unreliable rides steal another
                  minute of your day. With a Driver On Hire permanent chauffeur,
                  you'll enjoy:
                </p>
                <ol>
                  <li> Stress-free travel tailored to your schedule.</li>
                  <li>Trusted drivers vetted for safety and professionalism.</li>
                  <li>Transparent pricing with zero hidden fees.</li>
                </ol>
                <button onClick={handleOpenModal} className="bookNow d-inline-block btn btn-dark btn-style">Book Now</button>
              </div>

              {/* Right Image */}
              <div className="col-md-5 text-center">
                <img
                  src="/booking_section_image.webp" // Replace with actual image path
                  alt="Book Permanent Driver"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <ContactFormModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        preSelectedService="Permanent Drivers" 
      />
    </>
  );
}
