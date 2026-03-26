"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "./loader";
import BookingModal from "./booking_modal";
import FeaturedMedia from "./FeaturedMedia";

const Footer = () => {
  const [loaderActive, setLoaderActive] = useState(false);
  const [showLocalBooking, setShowLocalBooking] = useState(false);
  const handleShowLocalBooking = () => setShowLocalBooking(true);
  const handleCloseLocalBooking = () => setShowLocalBooking(false);

  return (
    <>
      {loaderActive && <Loader />}
      {/* Start Featured In Section */}
      <section className="featured-in-section">
        <div className="container">
          <h2 className="text-center headStyle mb-3" style={{ fontSize: '1.5rem' }}>Featured In</h2>
          <FeaturedMedia />
        </div>
      </section>
      {/* End Featured In Section */}
      <section id="download" className="app_section layout_padding3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <h2 className="ml-4">
                  <span className="position-absolute" style={{ left: "13px" }}>
                    D
                  </span>
                  ownload Our App
                </h2>
                <div className="text-box">
                  <h3>Details</h3>
                  <p>
                    Our Driver Service App is a user-friendly platform that
                    connects you with professional, police-verified drivers.
                    With just a few clicks, you can easily book, schedule, and
                    customize your rides. We focus on providing you with a
                    seamless experience at your doorstep, available 24/7.
                  </p>
                </div>
                <div className="text-box">
                  <h3>How it works</h3>
                  <p>
                    Our Driver Service App transforms the way you access
                    transportation. Whether you need an immediate ride or want
                    to plan ahead, our app connects you with experienced drivers
                    who have over 5 years of driving experience. Enjoy safe,
                    reliable, and comfortable journeys tailored to your needs.
                  </p>
                </div>
                <div className="row mb-lg-0 mb-4">
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.obeyjobs.customer.driver.app.driver_customer_app"
                    id="track-downloadsec-gplay-btn"
                    className="col-6"
                  >
                    <Image
                      src="/playstore-min.svg"
                      loading="lazy"
                      width={70}
                      height={70}
                      style={{ width: "100%", height: "auto" }}
                      alt="Playstore icon"
                    />
                  </Link>
                  <Link
                    href="https://apps.apple.com/in/app/doh-customer/id6496355425"
                    id="track-downloadsec-ios-btn"
                    className="col-6"
                  >
                    <Image
                      src="/appstore-min.svg"
                      loading="lazy"
                      width={70}
                      height={70}
                      style={{ width: "100%", height: "auto" }}
                      alt="Appstore icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <section id="mobile_download_section">
                {/* <div className="btn-box d-flex d-md-none d-lg-none d-sm-flex flex-nowrap">
                  <Link href="https://play.google.com/store/apps/details?id=com.obeyjobs.customer.driver.app.driver_customer_app">
                    <img
                      src="/playstore-min.svg"
                      className="w-100"
                      alt="Playstore icon"
                    />
                  </Link>
                  <Link href="https://apps.apple.com/in/app/doh-customer/id6496355425">
                    <img
                      src="/appstore-min.svg"
                      className="w-100"
                      alt="Appstore icon"
                    />
                  </Link>
                </div> */}
                <div className="img-box">
                  <Image
                    src="/mobile1.webp"
                    loading="lazy"
                    width={300}
                    height={200}
                    style={{ width: "100%", height: "auto" }}
                    alt="Mobile app"
                  />
                </div>
              </section>
            </div>
            {/* <div className="col-12 mb-md-0 mt-4 mb-4 text-center">
              <div
                className="trustpilot-widget"
                data-locale="en-US"
                data-template-id="56278e9abfbbba0bdcd568bc"
                data-businessunit-id="6746c60ebfd7b10d26662932"
                data-style-height="52px"
                data-style-width="100%"
              >
                <a
                  href="https://www.trustpilot.com/review/driveronhire.com"
                  target="_blank"
                  rel="noopener"
                >
                  Trustpilot
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="info_section layout_padding-top layout_padding2-bottom">
        <div className="footer-padd">
          <div className="footer-main row g-4">
            <div className="col-md-3 col-lg-3">
              <Image
                className="footer-logo"
                src="/footer-logo.svg"
                loading="lazy"
                width={150}
                height={70}
                style={{ width: "50%", height: "auto" }}
                alt="Footer logo"
              />
              <div className="social-icon d-flex gap-3 mt-5">
                <Link
                  href="https://www.facebook.com/driveronhire.official"
                  target="_blank"
                  aria-label="Follow us on Facebook"
                >
                  <i className="bi bi-facebook fs-4"></i>
                </Link>
                <Link
                  href="https://www.instagram.com/driveronhire.official/"
                  target="_blank"
                  aria-label="Follow us on Instagram"
                >
                  <i className="bi bi-instagram fs-4"></i>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/driveronhire"
                  target="_blank"
                  aria-label="Connect with us on LinkedIn"
                >
                  <i className="bi bi-linkedin fs-4"></i>
                </Link>
                <Link
                  href="https://www.youtube.com/@driveronhire.official"
                  target="_blank"
                  aria-label="Subscribe to our Youtube Channel"
                >
                  <i className="bi bi-youtube fs-4"></i>
                </Link>
                <Link
                  href="https://x.com/driveronhire_"
                  target="_blank"
                  aria-label="Follow us on Twitter"
                >
                  <i className="bi bi-twitter-x fs-4"></i>
                  <span className="visually-hidden">Follow us on Twitter</span>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-lg-3">
              <h3 className="mb-4">OUR SERVICES</h3>
              <div className="d-flex">
                <ul className="list-unstyled">
                  <li>
                    <Link href="/hourly-drivers/">Hourly Drivers</Link>
                  </li>
                  <li>
                    <Link href="/outstation-drivers/">Outstation Drivers</Link>
                  </li>
                  <li>
                    <Link href="/permanent-drivers/">Permanent Drivers</Link>
                  </li>
                  <li>
                    <Link href="/daily-drivers/">Daily Drivers</Link>
                  </li>
                  <li>
                    <Link href="/temporary-drivers/">Temporary Drivers</Link>
                  </li>
                  <li>
                    <Link href="/night-drivers/">Night Drivers</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-2 d-flex flex-wrap gap-3 mb-2">
                <Link href="/about/">About Us</Link>
                <Link href="/faq/">FAQ</Link>
                <Link href="/rates/">Rates</Link>
                <button onClick={handleShowLocalBooking}>Book Now</button>
                <Link href="/blog/">Blog</Link>
                <Link href="/contact/">Contact Us</Link>
              </div>
            </div>
            <div className="col-md-3 col-lg-3">
              <h3 className="mb-4">CITIES AVAILABLE</h3>
              <div className="d-flex">
                <ul className="list-unstyled">
                  <li>
                    <Link href="/drivers-in-mumbai/">Drivers in Mumbai</Link>
                  </li>
                  <li>
                    <Link href="/drivers-in-navi-mumbai/">
                      Drivers in Navi Mumbai
                    </Link>
                  </li>
                  <li>
                    <Link href="/drivers-in-thane/">Drivers in Thane</Link>
                  </li>
                  <li>
                    <Link href="/drivers-in-pune/">Drivers in Pune</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-lg-3">
              <h3 className="mb-4">CONTACT US</h3>
              <Link
                href="https://goo.gl/maps/VtS1nrC7xmBq2Mpm8"
                aria-label="View our location on Google Maps"
              >
                <div className="d-flex gap-2 foot-Contact">
                  <i className="bi bi-pin-map-fill"></i>
                  <p>
                    101, 1st Floor, B-wing, Aqsa Palace, Gaothan Lane No.4, Next To Paneri Showroom, Near Andheri Rly. Stn., Andheri (w), Mumbai - 400 058
                  </p>
                </div>
              </Link>
              <Link
                href="tel:02243439090"
                aria-label="Call us at 022 4343 9090"
              >
                <div className="d-flex gap-2">
                  <i className="bi bi-telephone-fill"></i>
                  <p>022 4343 9090</p>
                </div>
              </Link>
              <Link
                href="mailto:info@driveronhire.com"
                aria-label="Email us at info@driveronhire.com"
              >
                <div className="d-flex gap-2">
                  <i className="bi bi-envelope-fill"></i>
                  <p>info@driveronhire.com</p>
                </div>
              </Link>
              <Link
                href="mailto:support@driveronhire.com"
                aria-label="Email us at support@driveronhire.com"
              >
                <div className="d-flex gap-2">
                  <i className="bi bi-envelope-fill"></i>
                  <p>support@driveronhire.com</p>
                </div>
              </Link>
              <div className="btn-box mt-2 d-flex flex-nowrap gap-3">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.obeyjobs.customer.driver.app.driver_customer_app"
                  aria-label="Download our app on Play Store"
                  id="track-footer-gplay-btn"
                >
                  <Image
                    src="/playstore-min.svg"
                    loading="lazy"
                    width={150}
                    height={80}
                    style={{ width: "100%", height: "auto" }}
                    alt="Playstore icon"
                  />
                </Link>
                <Link
                  href="https://apps.apple.com/in/app/doh-customer/id6496355425"
                  aria-label="Download our app on App Store"
                  id="track-footer-ios-btn"
                >
                  <Image
                    src="/appstore-min.svg"
                    loading="lazy"
                    width={150}
                    height={80}
                    style={{ width: "100%", height: "auto" }}
                    alt="Appstore icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid footer_section">
        <p className="d-flex justify-content-between mb-0 p-3">
          &copy; {new Date().getFullYear()} All Rights Reserved By
          <Link className="ms-3" href="/">
            Obey Jobs Private Limited
          </Link>
          <Link href="/privacy-policy/" target="blank">
            Terms &amp; Conditions | Privacy Policy
          </Link>
        </p>
      </section>

      {/* BookingModal triggered when LOCAL card is clicked */}
      <BookingModal show={showLocalBooking} onClose={handleCloseLocalBooking} />
    </>
  );
};

export default Footer;
