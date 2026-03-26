import React from "react";
import Link from "next/link";

const Sitemap = () => {
  return (
    <>
      <section className="sitemap_section margin-top-bottom">
        <div className="container pt-5">
          <h2 className="fw-bold fs-4 text-uppercase">Driveronhire Sitemap</h2>
          <div className="row g-5">
            <div className="col-12 col-md-6 col-lg-6">
              <h6 className="text-uppercase">Drivers Service</h6>
              <ul className="fw-lighter px-4">
                <li>
                  <Link className="custom-anchor" href="/daily-drivers/">
                    Daily Drivers
                  </Link>
                </li>
                <li>
                  <Link className="custom-anchor" href="/hourly-drivers/">
                    Hourly Drivers
                  </Link>
                </li>
                <li>
                  <Link className="custom-anchor" href="/night-drivers/">
                    Night Drivers
                  </Link>
                </li>
                <li>
                  <Link className="custom-anchor" href="/temporary-drivers/">
                    Temporary Drivers
                  </Link>
                </li>
                <li>
                  <Link className="custom-anchor" href="/outstation-drivers/">
                    Outstation Drivers
                  </Link>
                </li>
                <li>
                  <Link className="custom-anchor" href="/permanent-drivers/">
                    Permanent Drivers
                  </Link>
                </li>
                <li>
                  <Link className="custom-anchor" href="/permanent-pricing/">
                    Permanent Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <h6 className="text-uppercase">Cities we cater</h6>
              <ul className="fw-lighter px-4">
                <li>
                  <Link className="custom-anchor" href="/drivers-in-mumbai/">
                    Mumbai
                  </Link>
                </li>
                <li>
                  <Link className="custom-anchor" href="/drivers-in-navi-mumbai/">
                    Navi Mumbai
                  </Link>
                </li>
                <li>
                  <Link className="custom-anchor" href="/drivers-in-pune/">
                    Pune
                  </Link>
                </li>
                <li>
                  <Link className="custom-anchor" href="/drivers-in-thane/">
                    Thane
                  </Link>
                </li>
                <li>
                  <Link className="custom-anchor" href="/drivers-in-pune/katraj/">
                    Katraj
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <h6 className="text-uppercase">Our Company</h6>
              <ul className="fw-lighter px-4">
                <li>
                  <Link className="custom-anchor" href="/rates/">
                    Rates
                  </Link>
                </li>
                <li>
                  <Link className="custom-anchor" href="/blog/">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link className="custom-anchor" href="/contact/">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="custom-anchor" href="/about/">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sitemap;
