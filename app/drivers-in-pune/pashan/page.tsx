import Link from "next/link";
import FaqComponent from "@/app/component/faqs";
import FAQSchema from "@/app/component/FAQSchema";

export default function Pashan() {
  const faqs = [
    {
      question: "Q.1: How can I hire a driver near me in Pashan quickly?",
      answer:
        "Use our app or website to book a driver within minutes. We can provide drivers in as little as 60 minutes depending on availability",
    },
    {
      question:
        "Q.2: Can I hire a driver in Pashan for a trip with multiple stops?",
      answer:
        "Our chauffeurs are equippe­d to handle journeys with various stops. Just specify your route­ while reserving for a smooth ride­.",
    },
    {
      question: "Q.3: Are your drivers available for late-night or early-morning trips in Pashan?",
      answer:
        "Yes, we offer 24/7 service, including late-night or early-morning rides, for your convenience.",
    },
    {
      question:
        "Q.4: What if I need a driver for regular daily commutes in Pashan?",
      answer:
        "You can book our daily drivers or request the same driver regularly, subject to their availability.",
    },
    {
      question: "Q.5: How do I reschedule or cancel a driver booking in Pashan?",
      answer:
        "You can quickly reschedule or cancel your booking via our app or website. Cancellation charges may apply depending on the timing.",
    },
    {
      question:
        "Q.6: Can I hire an outstation driver from Pashan for a multi-day trip?",
      answer: `You can hire our experienced outstation drivers for single-day or multi-day trips. Just mention the details while booking.`,
    },
  ];
  return (
    <div className="custom-section">
      <FAQSchema faqs={faqs} pageTitle="Pashan" />
      <section className="pune_section pashan location_inner_section margin-top-bottom">
        <div className="px-md-5 px-3 banner row p-0 m-0 align-items-md-center justify-content-md-start justify-content-center">
          <div className="col-md-6 banner-left">
            <h1 style={{ fontWeight: "500" }}>
            Hire Drivers in Pashan – Professional & Trusted
            </h1>
            <p
              className="mt-4"
              style={{ fontWeight: "500", color: "rgba(0,0,0,0.6)" }}
            >
              Whether navigating Pashan-Sus Road, visiting Chandani Chowk, or commuting to Baner, hire a driver in Pashan for smooth, reliable, and stress-free travel.
            </p>
            <div className="row inner-desc mt-md-4">
              <div className="col-12 col-md-6 col-lg-5">
                <Link href="/booking-pune/" className="btn btn-warning custom-w-md-100">
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
                  Verified Drivers in Pune
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
            Why Choose DriverOnHire in Pashan?
            </h2>
            <div className="daily-desc lightPara">
              <p>
              Pashan is a peaceful neighborhood in Pune known for its green surroundings and easy connectivity to Baner and Bavdhan. Whether you're heading to work, running errands, or planning an outstation trip, DriverOnHire offers convenient solutions. Our experienced, police-verified drivers know the best routes and ensure your travel is safe, comfortable, and stress-free.
              </p>
            </div>
          </div>
          <div className="daily-section4">
            <h2 className="mb-5 mt-5 pageHeadStyle text-center">
            Services We Offer in Pashan
            </h2>
            <div className="mumbai-service-desc">
              <p className="lightPara pb-3 text-center">
                Need a car driver in Pashan for a few hours? From quick visits to
                Market's' to dining at nearby restaurants, our hourly
                drivers are ideal for short-term requirements. Say goodbye to
                parking woes and focus on what matters.
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
                        Hire hourly drivers in Pashan for quick errands, short trips, or shopping runs. Our flexible services fit your busy schedule perfectly.
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
                        Looking forward to a wee­kend escape to Mahabale­shwar or Lonavala? Please sit back and chill while our expert drive­rs for long-distance journeys do all the driving.
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
                        Simplify your daily commutes with our reliable drivers. Ideal for school drop-offs, office rides, or regular errands in and around Pashan.
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
                        Need a driver for an event or family function in Pashan? Our temporary drivers ensure safe and convenient travel for short-term needs.
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
                        Whether it's a late dinner or an early-morning airport drop, our night drivers provide safe, dependable service 24/7.
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
                        Looking for a long-term driving solution? Our permanent drivers offer dependable and professional service for your daily travel needs.
                        </p>
                      </div>
                    </Link>
                    <div className="card--border"></div>
                  </div>
                </div>
              </div>
              <p className="text-center lightPara pt-5">
                With our diverse driver services in Pune, you can easily find
                the right driver for your needs. Book today and enjoy a smooth,
                reliable ride.
              </p>
            </div>
          </div>
          <div className="mumbai-section">
            <h2 className="mb-5 mt-5 pageHeadStyle text-center">
              Benefits of Hiring a Car Driver in Pashan
            </h2>
            <div className="mumbai-desc">
              <p className="lightPara text-center pb-3">
                Hiring a driver in Pashan with DriverOnHire offers convenience,
                safety, and stress-free travel. Here’s why you should choose us:
              </p>
              <div className="benefit-card-section container">
                <div
                  className="benefit-card"
                  style={{ "--benefit-card": 4 } as React.CSSProperties}
                >
                  <div className="child">
                    <h3 className="subHead">Save Time</h3>
                    <p>
                    Stop wasting your valuable time in traffic and looking for parking. Our adept drivers know Pashan's faste­st lanes, promising a quick, easy trip to your destination.
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
                    <h3 className="subHead">Police-Verified Drivers</h3>
                    <p>
                    Your safety is our priority. All our drivers undergo thorough police verification and professional training to provide a secure and reliable experience.
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
                    <h3 className="subHead">
                    Affordable Pricing
                    </h3>
                    <p>
                    We promise­ precise costs, absolutely no secre­t fees. We guarante­e budget-friendly ride­s for all - whether it's a quick journey or e­veryday commute. There­'s no trade-off on quality, though.
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
                    <h3 className="subHead">
                    Flexible Services
                    </h3>
                    <p>
                    Hire a driver for as little as an hour or for long-term needs. Our services are designed to fit your travel plans, whether they're short or extended.
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
                    <h3 className="subHead">Local Road Knowledge</h3>
                    <p>
                    Our drivers are­ well-acquainted with eve­ry route and popular place in Pashan. They make­ certain your journey is easy, swift, and without ne­edless hold-ups.
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
                    <h3 className="subHead">Relax and Enjoy</h3>
                    <p>
                    Let go of the stress of traffic and focus on your journey. Our professional drivers care for everything, ensuring a comfortable and worry-free ride.
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
          <h2 className="text-center headStyle mb-3">Areas We Serve in Pashan</h2>
          <p className="lightPara text-center pb-3">
            DriverOnHire proudly serves all significant areas in Pashan,
            including:
          </p>
          <div className="mt-5">
            <div className="row g-5">
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/booking-pune/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" />
                  Pashan-Sus Road
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/booking-pune/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" />
                  Bavdhan
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/booking-pune/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" />
                  Baner
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/booking-pune/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" />
                  Chandani Chowk
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/booking-pune/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" />
                  NDA Road
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/booking-pune/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" />
                  Sutarwadi
                </Link>
              </div>
              <div className="col-12 text-center">
                <p>
                  <b>Note:</b> Wherever you are in Pashan, we've got you covered! Book now for stress-free travel.
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
                How to Book a Driver in Pashan
              </h2>
              <p className="text-center pb-3 lightPara">
                Booking a driver with DriverOnHire is easy. Just follow these
                simple steps:
              </p>
            </div>
            <div className="col-md-6">
              <div className="fixed-col">
                <img
                  src="/Pashan.webp"
                  alt="Pashan"
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
                  Then Select Pashan as your location.
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
              <Link href="/booking-pune/" className="btn btn-warning">
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121056.90741232551!2d73.77272138943766!3d18.527620671342085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c12d037d430f%3A0x57124b5778ba452!2sDriver%20On%20Hire%20-%20Professional%20Driver%20Service%20in%20Pune!5e0!3m2!1sen!2sin!4v1706704590656!5m2!1sen!2sin"
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
    title: "Hire Drivers in Pashan – Safe, Verified, Reliable",
    description:
      "Hire a car driver in Pashan today! Enjoy hassle-free travel with police-verified drivers for daily commutes, outstation trips, or hourly services.",
    alternates: {
      canonical: "https://www.driveronhire.com/drivers-in-pune/pashan/",
    },
  };
}
