import Link from "next/link";
import FaqComponent from "@/app/component/faqs";
import FAQSchema from "@/app/component/FAQSchema";

export default function Pirangut() {
  const faqs = [
    {
      question: "Q1: How do I know my driver is trustworthy?",
      answer:
        "A: We completely understand this concern. That's why all our drivers go through police verification and rigorous background checks to ensure your safety.",
    },
    {
      question: "Q2: Can I book a driver at the last minute?",
      answer:
        "A: Absolutely! Our service runs 24/7. You can book a driver even at short notice, and we’ll find someone near you as quickly as possible.",
    },
    {
      question: "Q3: What if my plans change and I'm delayed?",
      answer:
        "A: Our drivers will wait for a reasonable time. If there are significant delays, additional charges may apply, but we always try to be flexible.",
    },
    {
      question: "Q4: Can your drivers handle luxury or automatic cars?",
      answer:
        "A: Yes, they can. Our drivers are trained and experienced in handling all types of cars, including luxury sedans, SUVs, and all automatic vehicles.",
    },
    {
      question: "Q5: How do I cancel a booking if I need to?",
      answer:
        "A: It's easy. You can cancel right from our app or website. Just be aware that cancellation charges might apply depending on the timing of your cancellation.",
    },
    {
      question: "Q6: Does it cost more to book a driver at night?",
      answer:
        "A: No, it doesn’t. We believe in fair and transparent pricing, so the rates are consistent, no matter the time of day or night.",
    },
  ];

  return (
    <div className="custom-section">
      <FAQSchema faqs={faqs} pageTitle="pirangut" />
      <section className="pune_section pirangut location_inner_section margin-top-bottom">
        <div className="px-md-5 px-3 banner row p-0 m-0 align-items-md-center justify-content-md-start justify-content-center">
          <div className="col-md-6 banner-left">
            <h1 style={{ fontWeight: "500" }}>
              Need a Driver in Pirangut? Let’s Make Your Travel Easier.
            </h1>
            <p
              className="mt-4"
              style={{ fontWeight: "500", color: "rgba(0,0,0,0.6)" }}
            >
              Are you dealing with the daily drive through the industrial zone,
              commuting to Hinjewadi, or planning a trip towards Lavasa? Let us
              take the wheel. You can book a professional driver for your work
              commute, business needs, or personal trips, and simply enjoy a
              relaxed journey.
            </p>
            <div className="row inner-desc mt-md-4">
              <div className="col-12 col-md-6 col-lg-5">
                <Link
                  href="/booking-pune/"
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
              Why Choose Driver on Hire in Pirangut?
            </h2>
            <div className="daily-desc lightPara">
              <p>
                We know that Pirangut is a major industrial hub on the outskirts
                of Pune. It’s an area defined by its manufacturing units,
                proximity to the Hinjewadi IT park, and its role as a gateway to
                beautiful destinations like Lavasa. This also means you're
                likely dealing with heavy vehicle traffic and a demanding daily
                commute.
              </p>
              <p>
                Whether you're a professional working in the MIDC, a business
                owner managing logistics, or a resident, your time is valuable.
                That's where we come in. Our local drivers understand the flow
                of Pirangut. They know the best times to travel and the right
                routes to take, turning a stressful drive into a productive or
                relaxing part of your day.
              </p>
            </div>
          </div>
          <div className="daily-section4">
            <h2 className="mb-5 mt-5 pageHeadStyle text-center">
              Services Offered in Pirangut
            </h2>
            <div className="mumbai-service-desc">
              <p className="lightPara pb-3 text-center">
                Life in Pirangut can be varied, and your driving needs can
                change from one day to the next. That’s why we’ve designed our
                services to be as flexible as you are.
              </p>

              <div className="whatWeServe">
                <div className="card-container">
                  <div className="service-card">
                    <Link href="/permanent-drivers/">
                      <div className="card--display">
                        <img
                          src="/permanent-drivers.svg"
                          alt="Icon representing Permanent Drivers"
                        />
                        <h6 className="text-uppercase mt-4">Permanent Drivers</h6>
                      </div>
                      <div className="card--hover">
                        <h3 className="text-uppercase p-2 border-bottom border-secondary h6">
                          Permanent Drivers
                        </h3>
                        <p>
                          For the ultimate peace of mind, why not hire a full-time driver? We’ll help you find a professional who becomes a trusted part of your daily routine.
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
                          If you commute daily to the IT park or another part of Pune, let's make it easier. We can provide a reliable driver for your everyday travel, so you can start and end your day on a better note.
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
                          Need a driver for a week or two? Perhaps for a special project, an event, or while your regular driver is on leave. We have skilled professionals ready to step in.
                        </p>
                      </div>
                    </Link>
                    <div className="card--border"></div>
                  </div>
                </div>
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
                          Have a few meetings lined up or need to run some errands locally? You can book a driver for just a few hours. It’s convenient and commitment-free.
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
                          Feel like escaping to Lavasa, Mulshi, or even Mumbai for the weekend? Let one of our experienced drivers handle the highway, so you can enjoy the view.
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
                          Working late shifts in the industrial area or have a late-night return journey planned? Your safety is key. Our night driver service is available 24/7 to get you home safely.
                        </p>
                      </div>
                    </Link>
                    <div className="card--border"></div>
                  </div>
                </div>
              </div>
              <p className="text-center lightPara pt-5">
                Whatever your reason for needing a driver in the Pirangut area, we’re here to help you find the perfect solution.
              </p>
            </div>
          </div>
          <div className="mumbai-section">
            <h2 className="mb-5 mt-5 pageHeadStyle text-center">
              Benefits of Hiring a Car Driver in Pirangut
            </h2>
            <div className="mumbai-desc">
              <p className="lightPara text-center pb-3">
                When you book a driver with us in Pirangut, you get more than just a person behind the wheel. You get a better travel experience. Here’s how:
              </p>
              <div className="benefit-card-section container">
                <div
                  className="benefit-card"
                  style={{ "--benefit-card": 4 } as React.CSSProperties}
                >
                  <div className="child">
                    <h3 className="subHead">Honest, Upfront Pricing</h3>
                    <p>
                      There are no surprises. We'll tell you the cost upfront when you book. It's that simple and transparent.
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
                    <h3 className="subHead">Navigate Industrial Traffic with Ease</h3>
                    <p>
                      The roads around the Pirangut MIDC can be challenging with heavy vehicles. Our drivers are experienced in this environment, ensuring your safety and a smooth ride.
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
                    <h3 className="subHead">Service Whenever You Need It</h3>
                    <p>
                      Your schedule isn’t always 9-to-5, and neither are we. Our services are available 24/7 to match your needs.
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
                    <h3 className="subHead">Save Your Valuable Time</h3>
                    <p>
                      Think about what you could do with the time you currently spend driving. You could prepare for your workday, take important calls, or just relax. Let us give you that time back.
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
                    <h3 className="subHead">You Can Trust Our Drivers</h3>
                    <p>
                      We want you to feel completely safe. That's why every single driver is police-verified and professionally trained before they drive for you.
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
                    <h3 className="subHead">Perfect for Hinjewadi Commuters</h3>
                    <p>
                      We know the route to Hinjewadi like the back of our hand. We’ll help you beat the traffic so you can be on time, every time.
                    </p>
                  </div>
                  <div className="child"></div>
                  <div className="child"></div>
                  <div className="child"></div>
                  <div className="child"></div>
                </div>
              </div>
              <p className="lightPara text-center pt-5">
                With DriverOnHire, enjoy a journey that is as smooth as it is
                safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="location_we_cater mumbai_section_loc layout_padding">
        <div className="container locWeCater">
          <h2 className="text-center headStyle mb-3">
            Areas We Serve in Pirangut
          </h2>
          <p className="lightPara text-center pb-3">
            DriverOnHire provides services across all key locations in and
            around Pirangut. No matter where you are, our drivers are ready
            to offer a smooth and timely ride.
          </p>
          <div className="mt-5">
            <div className="row g-5">
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/booking-pune/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" />
                  Hinjewadi
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/booking-pune/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" />
                  Lavale
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/booking-pune/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" />
                  Bhugaon
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/booking-pune/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" />
                  Mulshi
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/booking-pune/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" />
                  Ghotawade
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/booking-pune/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" />
                  Paud
                </Link>
              </div>
              <div className="col-12 text-center">
                <p>
                  <b>Note:</b> No matter where you are in Pirangut, our
                  drivers are ready to assist. Book now for a hassle-free
                  journey!.
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
                How to Book a Driver in Pirangut
              </h2>
              <p className="text-center pb-3 lightPara">
                Booking a driver with DriverOnHire is quick and straightforward.
                Follow these simple steps:
              </p>
            </div>
            <div className="col-md-6">
              <div className="fixed-col">
                <img
                  src="/Pirangut.webp"
                  alt="Pirangut"
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
                  Then Select Pirangut as your location.
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
    title: "Hire a Driver in Pirangut - For Industrial & Personal Travel",
    description:
      "Looking for a reliable driver in Pirangut? Our police-verified drivers are experts in navigating the industrial belt and local roads, 24/7. Book now for a stress-free ride.",
    alternates: {
      canonical: "https://www.driveronhire.com/drivers-in-pune/pirangut/",
    },
  };
}
