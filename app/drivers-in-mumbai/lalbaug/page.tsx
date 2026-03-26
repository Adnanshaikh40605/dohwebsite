import Link from "next/link";
import FaqComponent from "@/app/component/faqs";
import FAQSchema from "@/app/component/FAQSchema";

export default function Lalbaug() {
  const faqs = [
    {
      question:
        "Q.1: Can I hire a driver in Lalbaug for a short duration, like 2-3 hours?",
      answer:
        "Our hourly driver service is perfect for short trips or errands in and around Lalbaug.",
    },
    {
      question:
        "Q.2: How do I ensure my driver knows the best routes in Lalbaug?",
      answer:
        "All our drivers are experienced and familiar with Lalbaug's roads and traffic patterns. They also use GPS for accurate navigation.",
    },
    {
      question:
        "Q.3: What if I extend my booking beyond the initially planned hours?",
      answer:
        "You can easily extend your booking. Additional charges will apply based on the extra hours or kilometres travelled.",
    },
    {
      question:
        "Q.4: Are your drivers available for early-morning airport pickups from Lalbaug?",
      answer:
        "Yes, our night driver services operate 24/7, ensuring reliable airport transfers at any time.",
    },
    {
      question:
        "Q.5: Can I hire a driver in Lalbaug for recurring daily office commutes?",
      answer:
        "Absolutely! Our daily driver service allows you to hire the same driver regularly for your office commutes.",
    },
    {
      question: "Q.6: How do I cancel or modify my driver booking in Lalbaug?",
      answer:
        "You can cancel or modify your booking through our app or by contacting our support team. Charges may apply as per the cancellation policy.",
    },
  ];

  return (
    <div className="custom-section">
      <FAQSchema faqs={faqs} pageTitle="Lalbaug" />
      <section className="mumbai_section lalbaug location_inner_section margin-top-bottom">
        <div className="px-md-5 px-3 banner row p-0 m-0 align-items-md-center justify-content-md-start justify-content-center">
          <div className="col-md-6 banner-left">
            <h1 style={{ fontWeight: "500" }}>
              Hire Driver in Lalbaug – Skilled & Reliable Professionals
            </h1>
            <p
              className="mt-4"
              style={{ fontWeight: "500", color: "rgba(0,0,0,0.6)" }}
            >
              Simplify your travel in Lalbaug with professional, police-verified
              drivers. Perfect for errands, daily commutes, or long-distance
              trips.
            </p>
            <div className="row inner-desc mt-md-4">
              <div className="col-12 col-md-6 col-lg-5">
                <Link
                  href="/booking-mumbai/"
                  className="btn btn-warning custom-w-md-100"
                >
                  Hire Driver
                </Link>
              </div>
              <div className="mt-4 mt-md-0 col-12 col-md-6 col-lg-5">
                <Link
                  href="https://driveronhire.onelink.me/Uy5P/gejeikwj"
                  target="_blank"
                  className="btn btn-dark custom-w-md-100"
                >
                  Download the App
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service_section layout_padding">
        <div className="container trustBadges">
          <div className="row">
            <div className="badges col-lg-4 col-md-4 col-12 p-4">
              <div className="police-verified-driver p-3">
                <p>
                  <span>
                    5000+ <br />
                  </span>
                  Verified Drivers in Mumbai
                </p>
                <img
                  src="/Police-verified-drivers.svg"
                  alt="Police verified driver icon"
                />
              </div>
            </div>
            <div className="badges col-lg-4 col-md-4 col-12 p-4">
              <div className="happy-clients p-3">
                <p>
                  <span>
                    5 LAC+
                    <br />
                  </span>
                  Satisfied Customers
                </p>
                <img src="/Happy-clients.svg" alt="Happy client icon" />
              </div>
            </div>
            <div className="badges col-lg-4 col-md-4 col-12 p-4">
              <div className="permanent-drivers p-3">
                <p>
                  <span>
                    1 LAC+ <br />
                  </span>
                  Permanent Drivers Serving Clients
                </p>
                <img
                  src="/permanent-drivers.svg"
                  alt="Icon representing Permanent Drivers "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-div">
        <div className="container">
          <div className="daily-section1 text-center">
            <h2 className="mb-5 pageHeadStyle">
              Why Choose DriverOnHire in Lalbaug?
            </h2>
            <div className="daily-desc lightPara">
              <p>
                Lalbaug, known for its cultural significance and bustling
                streets, is a hub for families and businesses in Mumbai. The
                heavy traffic and limited parking in this area can challenge
                driving.
                <b>Driver on Hire</b> provides the ideal solution for Lalbaug
                residents and visitors. Whether heading to work, running
                errands, or planning an outstation trip, our experienced drivers
                ensure your travel is comfortable, safe, and stress-free.
              </p>
            </div>
          </div>
          <div className="daily-section4">
            <h2 className="mb-5 mt-5 pageHeadStyle text-center">
              Services Offered in Lalbaug
            </h2>
            <div className="mumbai-service-desc">
              <p className="lightPara pb-3 text-center">
                Need a car driver in Lalbaug for a few hours? From quick visits
                to nearby restaurants, our hourly drivers are ideal for
                short-term requirements. Say goodbye to parking woes and focus
                on what matters.
              </p>

              <div className="whatWeServe">
                <div className="card-container">
                  <div className="service-card">
                    <Link href="/hourly-drivers/">
                      <div className="card--display">
                        <img
                          src="/hourly-drivers.svg"
                          alt="Icon representing Hourly Drivers"
                        />
                        <h6 className="text-uppercase mt-4">Hourly Drivers</h6>
                      </div>
                      <div className="card--hover">
                        <h3 className="text-uppercase p-2 border-bottom border-secondary h6">
                          Hourly Drivers
                        </h3>
                        <p>
                          Need a driver for short errands or trips within
                          Lalbaug or nearby areas like Parel and Sewri? Our
                          hourly driver service is perfect for your needs.
                        </p>
                      </div>
                    </Link>
                    <div className="card--border"></div>
                  </div>
                </div>
                <div className="card-container">
                  <div className="service-card">
                    <Link href="/outstation-drivers/">
                      <div className="card--display">
                        <img
                          src="/outstation-drivers.svg"
                          alt="Icon representing Outstation Drivers"
                        />
                        <h6 className="text-uppercase mt-4">
                          Outstation Drivers
                        </h6>
                      </div>
                      <div className="card--hover">
                        <h3 className="text-uppercase p-2 border-bottom border-secondary h6">
                          Outstation Drivers
                        </h3>
                        <p>
                          Planning a getaway to popular destinations like
                          Lonavala, Pune, or Mahabaleshwar? Hire a driver for
                          one-way or round-trip travel and enjoy the journey.
                        </p>
                      </div>
                    </Link>
                    <div className="card--border"></div>
                  </div>
                </div>
                <div className="card-container">
                  <div className="service-card">
                    <Link href="/daily-drivers/">
                      <div className="card--display">
                        <img
                          src="/daily-drivers.svg"
                          alt="Icon representing Daily Drivers"
                        />
                        <h6 className="text-uppercase mt-4">Daily Drivers</h6>
                      </div>
                      <div className="card--hover">
                        <h3 className="text-uppercase p-2 border-bottom border-secondary h6">
                          Daily Drivers
                        </h3>
                        <p>
                          Simplify your daily routine with professional drivers
                          for office commutes, school pickups, or running
                          errands in Lalbaug.
                        </p>
                      </div>
                    </Link>
                    <div className="card--border"></div>
                  </div>
                </div>
                <div className="card-container">
                  <div className="service-card">
                    <Link href="/temporary-drivers/">
                      <div className="card--display">
                        <img
                          src="/temporary-drivers.svg"
                          alt="Icon representing Temporary Drivers"
                        />
                        <h6 className="text-uppercase mt-4">
                          Temporary Drivers
                        </h6>
                      </div>
                      <div className="card--hover">
                        <h3 className="text-uppercase p-2 border-bottom border-secondary h6">
                          Temporary Drivers
                        </h3>
                        <p>
                          Hosting an event in Lalbaug? Our temporary drivers
                          provide reliable transportation for your guests during
                          weddings, parties, or corporate gatherings.
                        </p>
                      </div>
                    </Link>
                    <div className="card--border"></div>
                  </div>
                </div>
                <div className="card-container">
                  <div className="service-card">
                    <Link href="/night-drivers/">
                      <div className="card--display">
                        <img
                          src="/night-drivers.svg"
                          alt="Icon representing Night Drivers"
                        />
                        <h6 className="text-uppercase mt-4">Night Drivers</h6>
                      </div>
                      <div className="card--hover">
                        <h3 className="text-uppercase p-2 border-bottom border-secondary h6">
                          Night Drivers
                        </h3>
                        <p>
                          Do you need a late-night airport drop or an
                          early-morning pickup? Our night driver services are
                          available 24/7 to meet your travel needs.
                        </p>
                      </div>
                    </Link>
                    <div className="card--border"></div>
                  </div>
                </div>
                <div className="card-container">
                  <div className="service-card">
                    <Link href="/permanent-drivers/">
                      <div className="card--display">
                        <img
                          src="/permanent-drivers.svg"
                          alt="Icon representing Permanent Drivers"
                        />
                        <h6 className="text-uppercase mt-4">
                          Permanent Drivers
                        </h6>
                      </div>
                      <div className="card--hover">
                        <h3 className="text-uppercase p-2 border-bottom border-secondary h6">
                          Permanent Drivers
                        </h3>
                        <p>
                          Looking for a dedicated driver? Hire a professional
                          for long-term or part-time service tailored to your
                          daily schedule.
                        </p>
                      </div>
                    </Link>
                    <div className="card--border"></div>
                  </div>
                </div>
              </div>
              <p className="text-center lightPara pt-5">
                With our diverse driver services in Mumbai, you can easily find
                the right driver for your needs. Book today and enjoy a smooth,
                reliable ride.
              </p>
            </div>
          </div>
          <div className="mumbai-section">
            <h2 className="mb-5 mt-5 pageHeadStyle text-center">
              Benefits of Hiring a Driver in Lalbaug
            </h2>
            <div className="mumbai-desc">
              <p className="lightPara text-center pb-3">
                Hiring a driver in Lalbaug with DriverOnHire offers convenience,
                safety, and stress-free travel. Here’s why you should choose us:
              </p>
              <div className="benefit-card-section container">
                <div
                  className="benefit-card"
                  style={{ "--benefit-card": 4 } as React.CSSProperties}
                >
                  <div className="child">
                    <h3 className="subHead">Stress-Free Navigation</h3>
                    <p>
                      Avoid the hassle of Lalbaug's traffic and parking
                      struggles. Sit back while our skilled drivers handle the
                      journey with ease.
                    </p>
                  </div>
                  <div className="child"></div>
                  <div className="child"></div>
                  <div className="child"></div>
                  <div className="child"></div>
                </div>
                <div
                  className="benefit-card"
                  style={{ "--benefit-card": 4 } as React.CSSProperties}
                >
                  <div className="child">
                    <h3 className="subHead">Police-Verified Professionals</h3>
                    <p>
                      All our drivers are police verified and undergo
                      professional training to provide a safe and reliable
                      travel experience.
                    </p>
                  </div>
                  <div className="child"></div>
                  <div className="child"></div>
                  <div className="child"></div>
                  <div className="child"></div>
                </div>
                <div
                  className="benefit-card"
                  style={{ "--benefit-card": 4 } as React.CSSProperties}
                >
                  <div className="child">
                    <h3 className="subHead">Affordable Pricing</h3>
                    <p>
                      Enjoy competitive pricing with no hidden charges. Our
                      services are designed to fit your budget while delivering
                      premium quality.
                    </p>
                  </div>
                  <div className="child"></div>
                  <div className="child"></div>
                  <div className="child"></div>
                  <div className="child"></div>
                </div>
                <div
                  className="benefit-card"
                  style={{ "--benefit-card": 4 } as React.CSSProperties}
                >
                  <div className="child">
                    <h3 className="subHead">Local Expertise</h3>
                    <p>
                      Our drivers know Lalbaug's streets, landmarks, and traffic
                      conditions, ensuring efficient and timely travel.
                    </p>
                  </div>
                  <div className="child"></div>
                  <div className="child"></div>
                  <div className="child"></div>
                  <div className="child"></div>
                </div>
                <div
                  className="benefit-card"
                  style={{ "--benefit-card": 4 } as React.CSSProperties}
                >
                  <div className="child">
                    <h3 className="subHead">24/7 Availability</h3>
                    <p>
                      Seeking a driver at any hour? Our services are available
                      24 hours per day to provide the transportation you require
                      at any given time.
                    </p>
                  </div>
                  <div className="child"></div>
                  <div className="child"></div>
                  <div className="child"></div>
                  <div className="child"></div>
                </div>
                <div
                  className="benefit-card"
                  style={{ "--benefit-card": 4 } as React.CSSProperties}
                >
                  <div className="child">
                    <h3 className="subHead">Comfort & Convenience</h3>
                    <p>
                      Relax and focus on your tasks while our drivers care about
                      driving navigation and parking for a hassle-free
                      experience.
                    </p>
                  </div>
                  <div className="child"></div>
                  <div className="child"></div>
                  <div className="child"></div>
                  <div className="child"></div>
                </div>
              </div>
              <p className="lightPara text-center pt-5">
                With DriverOnHire, enjoy a seamless, safe, and affordable travel
                experience every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="location_we_cater mumbai_section_loc layout_padding">
        <div className="container locWeCater">
          <h2 className="text-center headStyle mb-3">
            Areas We Serve in Lalbaug
          </h2>
          <p className="lightPara text-center pb-3">
            DriverOnHire provides reliable driver services across Lalbaug,
            including:
          </p>
          <div className="mt-5">
            <div className="row g-5">
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/booking-mumbai/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" />
                  Parel
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/booking-mumbai/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" />
                  Sewri
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/booking-mumbai/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" />
                  Dadar
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/booking-mumbai/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" />
                  Kalachowki
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/booking-mumbai/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" />
                  Lower Parel
                </Link>
              </div>
              <div className="col-12 text-center">
                <p>
                  <b>Note:</b> Whether you're in Lalbaug West or around
                  Siddhivinayak, our drivers are ready to assist. Book now for a
                  stress-free journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ourHappyClients">
        <div className="container">
          <h5 className="text-center headStyle mb-5">Our Happy Clients</h5>
          <div className="row flex-row-reverse g-5">
            <div className="col-12 col-md-6 col-lg-6 text-center">
              <img src="/reviews.svg" className="w-75" alt="review image" />
            </div>
            <div className="col-12 col-md-6 col-lg-6 secondDivReview">
              <div
                id="carouselExampleAutoplaying1"
                className="carousel slide m-3"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators bottomPlacing mb-0">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying1"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying1"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying1"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying1"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying1"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying1"
                    data-bs-slide-to="5"
                    aria-label="Slide 6"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying1"
                    data-bs-slide-to="6"
                    aria-label="Slide 7"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying1"
                    data-bs-slide-to="7"
                    aria-label="Slide 8"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="verified_customer_section">
                      <div className="image_review">
                        <div className="customer_image">
                          <img
                            src="https://lh3.googleusercontent.com/a-/AD_cMMQeOZvB76aAbE6Wn-1_JpXnGXSPOLb0BOer1cqgJXv0Dynd=w36-h36-p-rp-mo-br100"
                            alt="customer image"
                          />
                        </div>

                        <div className="customer_name_review_status">
                          <div className="customer_name">
                            Vishal Shrivastava
                          </div>
                          <div className="customer_review">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                          <div className="customer_status">
                            <div className="customer_status_content">
                              <i className="bi bi-patch-check-fill"></i>{" "}
                              Verified Customer
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="customer_comment">
                        "Excellent services. Pilot was very polite, well dressed
                        and smart. Handled vehicle very responsibly and was
                        thorough in Mumbai routes. Charges are reasonable too !"
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="verified_customer_section">
                      <div className="image_review">
                        <div className="customer_image">
                          <img
                            src="https://lh3.googleusercontent.com/a-/AD_cMMRdk5DmSQCpWSsfs9TL0YaZCVT3hcJu99Dz9L2ew0dZAxz3=w36-h36-p-rp-mo-br100"
                            alt="customer image"
                          />
                        </div>

                        <div className="customer_name_review_status">
                          <div className="customer_name">Kajal Ghose</div>
                          <div className="customer_review">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                          <div className="customer_status">
                            <div className="customer_status_content">
                              <i className="bi bi-patch-check-fill"></i>{" "}
                              Verified Customer
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="customer_comment">
                        "I got a great Driver in Parag Ganve. Extremely
                        competent, very polite and cooperative and helpful. I
                        would recommend him to others. The best driver I have
                        got from you in Navi Mumbai"
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="verified_customer_section">
                      <div className="image_review">
                        <div className="customer_image">
                          <img
                            src="https://lh3.googleusercontent.com/a-/AD_cMMSK7KALf960-zxo_9hgZOybYVYPicXp9nuBY3fPn5NSfcH_=w36-h36-p-rp-mo-br100"
                            alt="customer image"
                          />
                        </div>

                        <div className="customer_name_review_status">
                          <div className="customer_name">
                            Navin Bhattacharya
                          </div>
                          <div className="customer_review">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                          <div className="customer_status">
                            <div className="customer_status_content">
                              <i className="bi bi-patch-check-fill"></i>{" "}
                              Verified Customer
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="customer_comment">
                        "I use driver on hire for my father. Whenever he chooses
                        to visit someone or for his regular needs I get a driver
                        from here. All the drivers so far have been very polite
                        and have taken care of my father. There are no
                        complaints only compliments. Keep up the good work."
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="verified_customer_section">
                      <div className="image_review">
                        <div className="customer_image">
                          <img
                            src="https://lh3.googleusercontent.com/a-/AD_cMMQM4KbKzZrAYAGx3ViJSUs56zcHQq1-whP28z7zh4Vhairv=w36-h36-p-rp-mo-br100"
                            alt="customer image"
                          />
                        </div>

                        <div className="customer_name_review_status">
                          <div className="customer_name">Renuka nair</div>
                          <div className="customer_review">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                          <div className="customer_status">
                            <div className="customer_status_content">
                              <i className="bi bi-patch-check-fill"></i>{" "}
                              Verified Customer
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="customer_comment">
                        "Most of the drivers we hire are good, courteous, drives
                        well. Quite happy with the services."
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="verified_customer_section">
                      <div className="image_review">
                        <div className="customer_image">
                          <img
                            src="https://lh3.googleusercontent.com/a/AAcHTtcwjWd2hjbmEDz4RpAl1EMZbZWhQhlah-S1Q8WP9IKP=w36-h36-p-rp-mo-br100"
                            alt="customer image"
                          />
                        </div>

                        <div className="customer_name_review_status">
                          <div className="customer_name">Shilpa Kalsi</div>
                          <div className="customer_review">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                          <div className="customer_status">
                            <div className="customer_status_content">
                              <i className="bi bi-patch-check-fill"></i>{" "}
                              Verified Customer
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="customer_comment">
                        "The drivers are reliable and well behaved. They are
                        mostly with a good amount of experience. The charges are
                        reasonable. Happy with the service."
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="verified_customer_section">
                      <div className="image_review">
                        <div className="customer_image">
                          <img
                            src="https://lh3.googleusercontent.com/a-/AD_cMMTZa9JnZQpZkfwF37lW_X8snA5jVCnEGih-ZZ-uYUadX81w=w36-h36-p-rp-mo-br100"
                            alt="customer image"
                          />
                        </div>

                        <div className="customer_name_review_status">
                          <div className="customer_name">Edwin P Naidu</div>
                          <div className="customer_review">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                          <div className="customer_status">
                            <div className="customer_status_content">
                              <i className="bi bi-patch-check-fill"></i>{" "}
                              Verified Customer
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="customer_comment">
                        "Very good person comes on time very good nature neat
                        and clean driving is very good if i want to give stars
                        10 on 10 i will give want like this driver."
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="verified_customer_section">
                      <div className="image_review">
                        <div className="customer_image">
                          <img
                            src="https://lh3.googleusercontent.com/a-/AD_cMMR9hc9SWtbWkArQzxgqQcVNdPg8toMxTzQiDtSPubBicEE=w108-h108-p-rp-mo-ba2-br100"
                            alt="customer image"
                          />
                        </div>

                        <div className="customer_name_review_status">
                          <div className="customer_name">Shilpa Taimni</div>
                          <div className="customer_review">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                          <div className="customer_status">
                            <div className="customer_status_content">
                              <i className="bi bi-patch-check-fill"></i>{" "}
                              Verified Customer
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="customer_comment">
                        "I have been availing of Drivers on Hire services for
                        the past 7 years. It was EXCELLENT. Rehanuma is the
                        beacon that holds it all together. Fantastic Manager who
                        gives best service, even today."
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="verified_customer_section">
                      <div className="image_review">
                        <div className="customer_image">
                          <img
                            src="https://lh3.googleusercontent.com/a-/AD_cMMREuEjbtWg22f2_XeXCiWJ2r5MMZE6lVmAqPxrxXy8efM4=w108-h108-p-rp-mo-br100"
                            alt="customer image"
                          />
                        </div>

                        <div className="customer_name_review_status">
                          <div className="customer_name">Manasi Joshi Roy</div>
                          <div className="customer_review">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                          <div className="customer_status">
                            <div className="customer_status_content">
                              <i className="bi bi-patch-check-fill"></i>{" "}
                              Verified Customer
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="customer_comment">
                        "Have been using their services since a very long time.
                        And we are extremely satisfied with their service &
                        drivers."
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying1"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying1"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="howToBookDriver my-5">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12">
              <h2 className="mt-4 mb-3 headStyle text-center">
                How to Book a Driver in Lalbaug
              </h2>
              <p className="text-center pb-3 lightPara">
                Booking a driver with DriverOnHire is easy. Just follow these
                simple steps:
              </p>
            </div>
            <div className="col-md-6">
              <div className="fixed-col">
                <img
                  src="/Lalbaug.webp"
                  alt="Lalbaug"
                  style={{ overflow: "auto" }}
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            </div>
            <div className="col-md-6 mt-md-0 mt-3 scrollableDiv">
              <p>
                <b>How It Works:</b>
              </p>
              <ol className="book-a-driver-timeline">
                <li className="timeline-content">
                  <div className="timeline-badge">1</div>
                  <b>Download the DriverOnHire App or Visit Our Website</b>
                  <br />
                  Begin by registering on the app or website for easy access to
                  all our services.
                </li>
                <li className="timeline-content">
                  <div className="timeline-badge">2</div>
                  <b>Select Your Service Type</b>
                  <br />
                  Choose the type of service you need:
                  <ul>
                    <li>Local</li>
                    <li>Outstation</li>
                    <li>Outstation Drop</li>
                    <li>Permanent</li>
                  </ul>
                </li>
                <li className="timeline-content">
                  <div className="timeline-badge">3</div>
                  <b>Pick Your City</b>
                  <br />
                  Then Select Lalbaug as your location.
                </li>
                <li className="timeline-content">
                  <div className="timeline-badge">4</div>

                  <b>Enter Trip Details</b>
                  <ul>
                    <li>
                      Specify if it’s a <b>round trip</b> or <b>one-way trip</b>
                      .
                    </li>
                    <li>
                      Fill in your <b>pickup</b> and <b>destination</b>{" "}
                      locations.
                    </li>
                  </ul>
                </li>
                <li className="timeline-content">
                  <div className="timeline-badge">5</div>
                  <b>Share Your Car Details</b>
                  <br />
                  <div className="row inner">
                    <div className="col-md-4">
                      <ul>
                        <li>Manual</li>
                        <li>Hatchback</li>
                        <li>SUV</li>
                        <li>Sedan Luxary</li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>Automatic</li>
                        <li>Sedan</li>
                        <li>Luxary</li>
                        <li>SUV Luxary</li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="timeline-content">
                  <div className="timeline-badge">6</div>
                  <b>Set Date, Time, and Duration</b>
                  <br />
                  Select how many hours you’ll need the driver, and provide the
                  date and time for your ride.
                </li>
                <li className="timeline-content">
                  <div className="timeline-badge">7</div>
                  <b>Book Your Driver</b>
                  <br />
                  Review your booking details, confirm, and your driver will be
                  on the way!
                </li>
              </ol>
              <p>
                <b>Ready to Get Started?</b>
              </p>
              <Link href="/booking-mumbai/" className="btn btn-warning">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="faqs mb-5">
        <div className="container">
          <div className="row">
            <h2 className="mt-4 headStyle text-center">FAQs</h2>
            <FaqComponent faqs={faqs} />
          </div>
        </div>
      </section>

      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7043301909657!2d72.8429068743024!3d19.12062265057199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c92b5cb09667%3A0x683a078eb084312a!2sDriver%20on%20Hire%20-%20%231%20Driver%20Service%20In%20Mumbai!5e0!3m2!1sen!2sin!4v1706703753830!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Hire Driver in Lalbaug, Mumbai – Trusted & Professional",
    description:
      "Hire a driver in Lalbaug for daily commutes, errands, or outstation trips. Book skilled, police-verified drivers for safe, affordable, and hassle-free travel.",
    alternates: {
      canonical: "https://www.driveronhire.com/drivers-in-mumbai/lalbaug/",
    },
  };
}
