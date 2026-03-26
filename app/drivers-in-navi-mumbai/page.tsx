import Link from "next/link";
export default function NaviMumbai() {
  return (
    <>
      {/* <section className="navi_mumbai_section margin-top-bottom">
        <div className="banner d-flex align-items-center">
          <div className="banner-left">
            <h1>
              Experience Comfortable Rides with the #1 Driver Service in Navi
              Mumbai
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
                src="https://images.unsplash.com/photo-1583665190278-9eea4e170802?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF2aSUyMG11bWJhaXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Navi mumbai image"
                className="mx-100 h-auto"
              />
              <img
                src="https://images.unsplash.com/photo-1679247294460-651a35bd7874?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG5hdmklMjBtdW1iYWl8ZW58MHx8MHx8fDA%3D"
                alt="Navi mumbai image"
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
                src="https://images.unsplash.com/photo-1670951927139-e6040bd85240?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fG5hdmklMjBtdW1iYWl8ZW58MHx8MHx8fDA%3D"
                alt="Navi mumbai image"
                className="mx-100 h-auto"
              />
              <img
                src="https://images.unsplash.com/photo-1558854598-1a38d5245cc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF2aSUyMG11bWJhaXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Navi mumbai image"
                className="mx-100 h-auto"
              />
            </div>
            <div className="sale">
              <img
                src="https://images.unsplash.com/photo-1657208913389-2795e58ba777?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fG5hdmklMjBtdW1iYWl8ZW58MHx8MHx8fDA%3D"
                alt="Navi mumbai image"
                className="mx-100 h-auto"
              />
              <img
                src="https://images.unsplash.com/photo-1658041946767-2c4e77d5ad11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fG5hdmklMjBtdW1iYWl8ZW58MHx8MHx8fDA%3D"
                alt="Navi mumbai image"
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
                src="https://images.unsplash.com/photo-1640613500315-3a5fdf4efcfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fG5hdmklMjBtdW1iYWl8ZW58MHx8MHx8fDA%3D"
                alt="Navi mumbai image"
                className="mx-100 h-auto"
              />
              <img
                src="https://images.unsplash.com/photo-1584782559059-89669ef4e1cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fG11bWJhaXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Navi mumbai image"
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
        <h2 className="city_intro__title">Navi Mumbai</h2>
        <h1 className="city_intro__subtitle">
          Experience Comfortable Rides with the #1 Driver Service in Navi Mumbai
        </h1>
        <img className="intro__illustration" src="/navi-mumbai-city1.svg" alt="Navi mumbai illustration" />
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
            <h2 className="mb-5 pageHeadStyle">Hire Drivers in Navi Mumbai</h2>
            <div className="daily-desc lightPara">
              <p>
                Navi Mumbai is known for its well-planned infrastructure and
                greener surroundings. Moreover, it is a growing hub for
                businesses, education, and residential areas. It is a bustling
                city with a growing demand for professional drivers. With Driver
                On Hire, you can navigate the busy streets. If you need a driver
                for your daily journey or your business. We have you covered!
              </p>
              <p>
                Our drivers in Navi Mumbai are well-trained, skilled, and have a
                thorough knowledge of the local roads. Ensuring a safe and
                smooth journey till you reach your destination. We acknowledge
                the value of professionalism and punctuality. Therefore, our
                drivers are committed to giving comfortable and stress-free
                driving experience.
              </p>
              <p>
                Hiring a driver in Navi Mumbai through our services is an easy
                and convenient process. Simply browse through Driver On Hire to
                get a qualified driver who meets your specific requirements.
                Whether you need a driver on a temporary or permanent basis. We
                provide personalized options to meet your needs. With our
                professional drivers by your side, you can explore the city
                without hassle. Don't let the urban chaos hold you back. Hire
                our drivers today and enjoy the ride with convenience and peace
                of mind.
              </p>
            </div>
          </div>
          <div className="daily-section4">
            <h3 className="container mb-5 mt-5 pageHeadStyle text-center">
              Types of Driver Services in Navi Mumbai
            </h3>
            <div className="mumbai-service-desc">
              <p className="container lightPara pb-3 text-center">
                Navi Mumbai offers a variety of driver services to meet your
                needs, from everyday commutes to professional chauffeurs for
                special events. Our customized solutions ensure convenience and
                satisfaction.
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
                          Need a car driver for a few hours? You can easily book
                          a driver in Navi Mumbai on an hourly basis. Our hourly
                          drivers are experienced and reliable, ensuring that
                          you reach your destination safely and on time. Whether
                          it's a quick trip to the grocery store or a meeting
                          across town, our drivers will be there to assist you.
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
                          Hire an experienced outstation driver for a
                          comfortable and hassle-free long-distance trip from
                          Navi Mumbai. They are familiar with intercity routes
                          and can ensure efficient travel for weekend getaways
                          or business trips.
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
                          Daily drivers offer flexibility and convenience for
                          specific days, providing a professional driver without
                          the need for a permanent hire. They can be booked for
                          meetings or scheduled appointments.
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
                          Temporary drivers provide flexibility for short-term
                          needs, such as vacations or projects, without
                          long-term commitment. They ensure smooth and efficient
                          transportation during the required timeframe.
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
                          Night drivers in Navi Mumbai are a reliable and
                          efficient transportation option for late hours or
                          night shifts. They are perfect for after-party pickup
                          held at late night or airport meet-ups.
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
                          Permanent drivers in Mumbai offer a reliable,
                          experienced, and well-trained solution for daily
                          commutes. They handle various vehicles and are
                          familiar with traffic patterns, saving time and effort
                          for a stress-free ride.
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
              Benefits of Hiring Drivers in Navi Mumbai
            </h3>
            <div className="mumbai-desc">
              <p className="lightPara text-center pb-3">
                Hiring driver service in Navi Mumbai through Driver On Hire has
                a range of benefits. It can significantly enhance your daily
                life and business operations. Check out a few benefits below.
              </p>
              <div className="benefit-card-section container">
                <div
                  className="benefit-card"
                  style={{ "--benefit-card": 4 } as React.CSSProperties}
                >
                  <div className="child">
                    <h3 className="subHead">24/7 Availability</h3>
                    <p>
                      Navi Mumbai never sleeps, and neither does our driver
                      service. No matter the time or weather conditions, you
                      always have a reliable driver on standby.
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
                    <h3 className="subHead">Tailored Services</h3>
                    <p>
                      Driver services in Navi Mumbai can be tailored to your
                      specific needs. Whether you require a driver for daily
                      commuting, weekend adventures, or special occasions, you
                      have a personal chauffeur at your service.
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
                    <h3 className="subHead">Rideshare Savings</h3>
                    <p>
                      Consider sharing your hired driver with friends or
                      colleagues for a cost-effective group transportation
                      solution. It's an excellent way to split expenses and make
                      commuting more social.
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
                    <h3 className="subHead">No More Parking Nightmares</h3>
                    <p>
                      Bid farewell to the frustrations of parking. Your driver
                      drops you off and picks you up right at the doorstep,
                      sparing you the hassles of parking in a crowded city.
                    </p>
                  </div>
                  <div className="child"></div>
                  <div className="child"></div>
                  <div className="child"></div>
                  <div className="child"></div>
                </div>
              </div>
              <p className="lightPara text-center pt-5">
                Get ready for a thrilling ride with Driver On Hire in Navi
                Mumbai! We bring you unparalleled convenience, substantial cost
                savings, and top-notch safety. It is the smartest choice for all
                your personal and professional transportation needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="location_we_cater navi_mumbai_section_loc layout_padding">
        <div className="container locWeCater">
          <h4 className="text-center headStyle mb-3">Location We Cater</h4>
          <div className="mt-5">
            <div className="row g-5">
              <div className="col-3">
                <Link href="/booking-mumbai/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Vashi
                </Link>
              </div>
              <div className="col-3">
                <Link href="/booking-mumbai/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Nerul
                </Link>
              </div>
              <div className="col-3">
                <Link href="/booking-mumbai/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Kharghar
                </Link>
              </div>
              <div className="col-3">
                <Link href="/booking-mumbai/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Panvel
                </Link>
              </div>
              <div className="col-3">
                <Link href="/booking-mumbai/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Ghansoli
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ourHappyClients layout_padding">
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
    </>
  );
}

export function generateMetadata() {
  return {
    title: "Hire Verified Drivers in Navi Mumbai | 24x7 Reliable Service",
    description:
      "Book verified drivers in Navi Mumbai for commutes, trips, or events. Anytime, anywhere, with no hidden charges and 24x7 reliable service. Call now!",
    alternates: {
      canonical: "https://www.driveronhire.com/drivers-in-navi-mumbai/",
    },
  };
}
