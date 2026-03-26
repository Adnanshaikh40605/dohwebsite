import Link from "next/link";
export default function Thane() {
  return (
    <>
      {/* <section className="pune_section margin-top-bottom">
        <div className="banner d-flex align-items-center">
          <div className="banner-left">
            <h1>
              #1 Driver Service in Thane - Your Trusted Choice for Comfortable
              Rides
            </h1>
            <div className="row inner-desc">
              <div className="mt-5 col-12 col-md-5 col-lg-5 d-none d-md-block d-lg-block d-sm-none">
                <Link
                  href="/booking-mumbai/"
                  className="btn btn-lg btn-warning w-100"
                >
                  Book a driver now
                </Link>
              </div>
            </div>
          </div>
          <div className="banner-right d-flex">
            <div className="family">
              <img
                src="https://images.unsplash.com/photo-1665347785618-c565df3be8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRoYW5lJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Thane city image"
                className="mx-100 h-auto"
              />
              <img
                src="https://images.unsplash.com/photo-1686163219920-a71ee4c3dcb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRoYW5lJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Thane city image"
                className="mx-100 h-auto"
              />
              <div className="banner-right-inner">
                <h2>5 LAC+</h2>
                <span>Happy Clients</span>
                <img
                  src="/Happy-clients.svg"
                  alt="heart-icon"
                  className="mx-100 h-auto"
                />
              </div>
              <img
                src="https://images.unsplash.com/photo-1658359700878-95ef1d1a7c98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHx0aGFuZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Thane city image"
                className="mx-100 h-auto"
              />
              <img
                src="https://images.unsplash.com/photo-1560246531-531efa469057?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHx0aGFuZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Thane city image"
                className="mx-100 h-auto"
              />
            </div>
            <div className="sale">
              <img
                src="https://images.unsplash.com/photo-1593636470713-d7561867e4e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHRoYW5lfGVufDB8fDB8fHww"
                alt="Thane city image"
                className="mx-100 h-auto"
              />
              <img
                src="https://images.unsplash.com/photo-1644466239076-22bf6036b871?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHRoYW5lfGVufDB8fDB8fHww"
                alt="Thane city image"
                className="mx-100 h-auto"
              />
              <div className="banner-right-inner">
                <h2>5K+</h2>
                <span>Police Verifed Drivers</span>
                <img
                  src="/Police-verified-drivers.svg"
                  alt="unit-icon"
                  className="mx-100 h-auto"
                />
              </div>
              <img
                src="https://images.unsplash.com/photo-1685857862448-f107383e6208?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHRoYW5lfGVufDB8fDB8fHww"
                alt="Thane city image"
                className="mx-100 h-auto"
              />
              <img
                src="https://images.unsplash.com/photo-1564397660393-8e944a5bea82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGhhbmUlMjBkaXN0cmljdHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Thane city image"
                className="mx-100 h-auto"
              />
            </div>
          </div>
          <div className="d-block d-md-none d-lg-none d-sm-block mt-5 w-100">
            <Link
              href="/booking-mumbai/"
              className="btn btn-lg btn-warning w-100"
            >
              Book a driver now
            </Link>
          </div>
        </div>
      </section> */}
      <section className="container city_intro">
        <h2 className="city_intro__title">Thane</h2>
        <h1 className="city_intro__subtitle">
          #1 Driver Service in Thane - Your Trusted Choice for Comfortable Rides
        </h1>
        <img
          className="intro__illustration"
          src="/thane1.svg"
          alt="Thane illustration"
        />
        <div className="city-btn gap-2 mt-2">
          <Link href="/booking-mumbai/" className="btn btn-warning">
            Reserve Your Driver Today
          </Link>
          <Link
            href="https://driveronhire.onelink.me/Uy5P/gejeikwj"
            target="_blank"
            className="btn btn-dark"
          >
            Download App
          </Link>
        </div>
      </section>
      <section className="service_section layout_padding">
        <div className="container trustBadges">
          <div className="row">
            <div className="badges col-lg-4 col-md-4 col-12 p-4">
              <div className="police-verified-driver p-3">
                <p>
                  <span>
                    20000+ <br />
                  </span>
                  POLICE VERIFIED DRIVERS
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
                  HAPPY CLIENTS
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
                  PERMANENT DRIVERS
                </p>
                <img
                  src="/permanent-drivers.svg"
                  alt="Icon representing Permanent Drivers"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content-div">
        <div className="containerr">
          <div className="container daily-section1 text-center">
            <h2 className="mb-5 pageHeadStyle">Hire Drivers in Thane</h2>
            <div className="daily-desc lightPara">
              <p>
                Tired of tackling Thane's busy streets on your own? It's time to
                let go of the stress. We're thrilled to introduce our Driver On
                Hire services in Thane. It is a game-changer for your
                transportation needs. So, whether it's your daily commute, a
                special event, or a long-haul trip.
              </p>
              <p>
                Get access to highly skilled drivers in Thane, offering a
                service like no other. The icing on the cake is that you're
                choosing safety and mental peace of mind. Your safety is our
                priority, which is why we put our drivers through robust testing
                and training.
              </p>
              <p>
                Therefore, you get to explore the city's rich cultural heritage
                to cultural events hassle-free. Our Driver On Hire service in
                Thane is flexible and cost effective. Depending on your needs,
                you can reserve a driver for a few hours or a full day. We offer
                affordable rates and strive to make your experience as
                convenient as possible.
              </p>
              <p>
                Don't stress over navigating Thane's busy streets yourself. Hire
                one of our skilled drivers, and travel in comfort and style.
                Contact us today to book our service and meet your daily
                transportation needs.
              </p>
            </div>
          </div>
          <div className="daily-section4">
            <h3 className="container mb-5 mt-5 pageHeadStyle text-center">
              Types of Driver Services in Thane
            </h3>
            <div className="mumbai-service-desc">
              <p className="container lightPara pb-3 text-center">
                Book a driver in thane to cater to your specific needs. Whether
                you need it for your daily commute or a special occasion. Our
                skilled car driver is ready to provide exceptional service. For
                your travel comfort and security during the trip. Check out the
                types of Driver Services available in Thane below.
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
                        <h6 className="text-uppercase p-2 border-bottom border-secondary">
                          Hourly Drivers
                        </h6>
                        <p>
                          For the flexibility you need, hire a driver on an
                          hourly basis for quick trips. Whether you have a
                          series of meetings to attend or urgently need to reach
                          your home. Our hourly driver service is your ideal
                          choice.
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
                        <h6 className="text-uppercase p-2 border-bottom border-secondary">
                          Outstation Drivers
                        </h6>
                        <p>
                          Planning an extended journey? Hire experienced
                          outstation drivers in Thane who are well-versed in
                          inter-city travel. They'll ensure a smooth and
                          hassle-free experience. Letting you have a safe and
                          convenient ride.
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
                        <h6 className="text-uppercase p-2 border-bottom border-secondary">
                          Daily Drivers
                        </h6>
                        <p>
                          Daily drivers for hire, whether for regular or
                          occasional services. They can accommodate your unique
                          requirements and preferences, whether you need to go
                          to work, appointments, or leisure activities.
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
                        <h6 className="text-uppercase p-2 border-bottom border-secondary">
                          Temporary Drivers
                        </h6>
                        <p>
                          Whenever you require a car driver for a short period.
                          We offer the flexibility and convenience you need.
                          Without the hassle of hiring a full-time driver,
                          whether it's for a few hours or a few days.
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
                        <h6 className="text-uppercase p-2 border-bottom border-secondary">
                          Night Drivers
                        </h6>
                        <p>
                          It can be difficult to travel at night due to various
                          reasons, in such cases it is better to not take risks
                          and hire a night driver for a safe commute. Our night
                          drivers provide safe and comfortable transportation
                          during the dark hours for late-night or midnight
                          travels.
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
                        <h6 className="text-uppercase p-2 border-bottom border-secondary">
                          Permanent Drivers
                        </h6>
                        <p>
                          If you need a dedicated driver for your daily
                          commutes. Consider hiring a permanent driver in Thane
                          for your convenience. They can also assist with
                          picking up and dropping off services when required.
                        </p>
                      </div>
                    </Link>
                    <div className="card--border"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mumbai-section">
            <h3 className="mb-5 mt-5 pageHeadStyle text-center">
              Benefits of Hiring Drivers in Thane
            </h3>
            <div className="thane-desc">
              <p className="lightPara text-center pb-3">
                Driver On Hire offers reliable driver service with numerous
                advantages. It can enhance your daily life and travel
                experiences. Whether you need an hourly, daily, permanent, or
                outstation driver for the Thane location. We provide a wide
                range of driver services in thane to meet your specific
                requirements. Book a driver in Thane today to enjoy a convenient
                and stress-free commuting experience. Here are some key benefits
                below:
              </p>
              <div className="benefit-card-section container">
                <div
                  className="benefit-card"
                  style={{ "--benefit-card": 4 } as React.CSSProperties}
                >
                  <div className="child">
                    <h3 className="subHead">Time-Saving</h3>
                    <p>
                      Hiring a driver allows you to relax during your commute.
                      Setting you free from the stress of navigating traffic,
                      finding parking, or dealing with road-related anxieties.
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
                    <h3 className="subHead">Safe commute</h3>
                    <p>
                      Professional drivers are well-trained, enhancing road
                      safety and minimizing the risk of accidents or mishaps
                      during your journeys.
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
                      Thane drivers are familiar with the city's roads,
                      shortcuts, and traffic patterns. So that you reach your
                      destination on time and efficiently.
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
                    <h3 className="subHead">Flexible Availability</h3>
                    <p>
                      Driver services in Thane provide flexible booking options
                      to accommodate your schedule. Whether you need a driver
                      for a few hours or the entire day.
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
                    <h3 className="subHead">Cost-Efficiency</h3>
                    <p>
                      Compared to the costs of owning and operating a personal
                      vehicle. Which includes parking, fuel, and maintenance,
                      hiring a driver can be more affordable.
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
                    <h3 className="subHead">Personalized Service</h3>
                    <p>
                      Driver services in Thane can be tailored to your specific
                      needs. Whether you require a daily driver, outstation
                      driver, or temporary assistance.
                    </p>
                  </div>
                  <div className="child"></div>
                  <div className="child"></div>
                  <div className="child"></div>
                  <div className="child"></div>
                </div>
              </div>
              <p className="lightPara text-center pt-5">
                Ready to experience a hassle-free ride with Driver On Hire?
                Contact us today to book your skilled driver and enjoy the
                convenience and safety that comes with our service. Don't miss
                out, get in touch now!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="location_we_cater pune_section_loc layout_padding">
        <div className="container locWeCater">
          <h4 className="text-center headStyle mb-3">Location We Cater</h4>
          <div className="mt-5">
            <div className="row g-5">
              <div className="col-3">
                <Link href="/booking-mumbai" className="custom-anchor">
                  <img src="/location-icon.svg" alt="" /> Thane
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="ourHappyClients layout_padding">
        <div className="container">
          <h5 className="text-center headStyle mb-5">Our Happy Clients</h5>
          <div className="row flex-row-reverse g-5">
            <div className="col-12 col-md-6 col-lg-6 text-center">
              <img src="/reviews.svg" className="w-75" alt="reviews" />
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
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d964651.238503252!2d71.92280449999998!3d19.187823900000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9d9498d8693%3A0xbf6aca4656f7f671!2sDriver%20On%20Hire!5e0!3m2!1sen!2sin!4v1706704690292!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}

export function generateMetadata() {
  return {
    title: "Hire Drivers in Thane | Best Driver Service | Driver On Hire",
    description:
      "Hire skilled drivers in Thane with our best driver service. Experience reliable and comfortable journeys with Driver On Hire.",
    alternates: {
      canonical: "https://www.driveronhire.com/drivers-in-thane/",
    },
  };
}
