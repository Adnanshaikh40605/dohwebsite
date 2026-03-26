import React, { useState } from "react";
import Link from "next/link";
import BookingModal from "./booking_modal";

const LandingFooter = () => {
  const [showLocalBooking, setShowLocalBooking] = useState(false);
  const handleShowLocalBooking = () => setShowLocalBooking(true);
  const handleCloseLocalBooking = () => setShowLocalBooking(false);
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="widget-wrapper">
            <div className="row justify-content-between">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer-widget">
                  <div className="logo mb-30">
                    <Link href="/">
                      <picture>
                        {/* Desktop logo */}
                        <source srcSet="/logo.svg" media="(min-width: 768px)" />
                        {/* Mobile logo */}
                        <img src="/footer-logo.svg" alt="Footer Logo" />
                      </picture>
                    </Link>
                  </div>
                  <Link
                    href="https://goo.gl/maps/VtS1nrC7xmBq2Mpm8"
                    aria-label="View our location on Google Maps"
                  >
                    <p className="desc mb-30 text-black">
                      101, 1st Floor, B-wing, Aqsa Palace, Gaothan Lane No.4, Next To Paneri Showroom, Near Andheri Rly. Stn., Andheri (w), Mumbai - 400 058
                    </p>
                  </Link>
                  <ul className="socials">
                    <li>
                      <Link
                        href="https://www.facebook.com/driveronhire.official"
                        target="_blank"
                        aria-label="Follow us on Facebook"
                      >
                        <i className="bi bi-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://x.com/driveronhire_"
                        target="_blank"
                        aria-label="Follow us on Twitter"
                      >
                        <i className="bi bi-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.instagram.com/driveronhire.official/"
                        target="_blank"
                        aria-label="Follow us on Instagram"
                      >
                        <i className="bi bi-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.linkedin.com/company/driveronhire"
                        target="_blank"
                        aria-label="Connect with us on LinkedIn"
                      >
                        <i className="bi bi-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.youtube.com/@driveronhire.official"
                        target="_blank"
                        aria-label="Subscribe to our Youtube Channel"
                      >
                        <i className="bi bi-youtube fs-4"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-6">
                <div className="footer-widget">
                  <h3 className="fs-6">DRIVER SERVICE</h3>
                  <ul className="links">
                    <li>
                      <Link href="/hourly-drivers">Hourly Drivers</Link>
                    </li>
                    <li>
                      <Link href="/outstation-drivers">Outstation Drivers</Link>
                    </li>
                    <li>
                      <Link href="/permanent-drivers">Permanent Drivers</Link>
                    </li>
                    <li>
                      <Link href="/daily-drivers">Daily Drivers</Link>
                    </li>
                    <li>
                      <Link href="/temporary-drivers">Temporary Drivers</Link>
                    </li>
                    <li>
                      <Link href="/night-drivers">Night Drivers</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h3 className="fs-6">LOCATION WE CATER</h3>
                  <ul className="links">
                    <li>
                      <Link href="/drivers-in-mumbai">Mumbai</Link>
                    </li>
                    <li>
                      <Link href="/drivers-in-pune">Pune</Link>
                    </li>
                    <li>
                      <Link href="/drivers-in-navi-mumbai">Navi Mumbai</Link>
                    </li>
                    <li>
                      <Link href="/drivers-in-thane">Thane</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h3 className="fs-6">QUICK LINKS</h3>
                  <ul className="links">
                    <li>
                      <button onClick={handleShowLocalBooking}>
                        Book Driver
                      </button>
                    </li>
                    <li>
                      <Link href="/outstation-booking">
                        Book Driver Outstation
                      </Link>
                    </li>
                    <li>
                      <Link href="/outstation-drop-booking">
                        Book Driver Outstation Drop
                      </Link>
                    </li>
                    <li>
                      <Link href="#contact">Book Permanent Driver</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* BookingModal triggered when LOCAL card is clicked */}
      <BookingModal show={showLocalBooking} onClose={handleCloseLocalBooking} />
    </>
  );
};

export default LandingFooter;
