import React from "react";
import Link from "next/link";

const BlogFooter = () => {
  return (
    <>
      {/* <section className="trustpilot-widget-blog-page text-center pb-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
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
            </div>
          </div>
        </div>
      </section> */}
      <section className="container-fluid footer_section layout_padding-top pb-5">
        <div className="footer-padd">
          <div className="footer-main row g-4">
            <div className="col-md-6 col-lg-6">
              <img
                className="footer-logo"
                src="/footer-logo.svg"
                alt="Footer logo"
                style={{ width: "150px" }}
              />
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="social-icon d-flex justify-content-end gap-3">
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
                </Link>
              </div>
            </div>
            <p
              className="mb-0 text-center pt-4 pb-2"
              style={{ borderTop: "1px solid" }}
            >
              &copy; {new Date().getFullYear()} All Rights Reserved By |
              <Link className="ms-2" href="/">
                Obey Jobs Private Limited
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogFooter;
