import Link from "next/link";
export default function Pune() {
  return (
    <>
      {/* <section className="pune_section margin-top-bottom">
        <div className="banner d-flex align-items-center">
          <div className="banner-left">
            <h1>
              Ride in Comfort with the #1 Driver Service in Pune for Your Loved
              Ones
            </h1>
            <div className="row inner-desc">
              <div className="mt-5 col-12 col-md-5 col-lg-5 d-none d-md-block d-lg-block d-sm-none">
                <Link
                  href="/booking-pune/"
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
                src="https://images.unsplash.com/photo-1608019425630-bec4810ccb60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHVuZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Pune image"
                className="mx-100 h-auto"
              />
              <img
                src="https://images.unsplash.com/photo-1544719489-1a3a62c0b1db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHB1bmV8ZW58MHx8MHx8fDA%3D"
                alt="Pune image"
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
                src="https://images.unsplash.com/photo-1598090216740-eb040d8c3f82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHB1bmV8ZW58MHx8MHx8fDA%3D"
                alt="Pune image"
                className="mx-100 h-auto"
              />
              <img
                src="https://images.unsplash.com/photo-1559897135-0ee247ae807b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHB1bmV8ZW58MHx8MHx8fDA%3D"
                alt="Pune image"
                className="mx-100 h-auto"
              />
            </div>
            <div className="sale">
              <img
                src="https://images.unsplash.com/photo-1571592311284-20be12500bd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHB1bmV8ZW58MHx8MHx8fDA%3D"
                alt="Pune image"
                className="mx-100 h-auto"
              />
              <img
                src="https://images.unsplash.com/photo-1631804276023-599c9a6e61a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHB1bmV8ZW58MHx8MHx8fDA%3D"
                alt="Pune image"
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
                src="https://images.unsplash.com/photo-1567319210485-63e23072cc30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHB1bmV8ZW58MHx8MHx8fDA%3D"
                alt="Pune image"
                className="mx-100 h-auto"
              />
              <img
                src="https://images.unsplash.com/photo-1600596525163-36b26caa9c89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHB1bmV8ZW58MHx8MHx8fDA%3D"
                alt="Pune image"
                className="mx-100 h-auto"
              />
            </div>
          </div>
          <div className="d-block d-md-none d-lg-none d-sm-block mt-5 w-100">
            <Link
              href="/booking-pune/"
              className="btn btn-lg btn-warning w-100"
            >
              Book a driver now
            </Link>
          </div>
        </div>
      </section> */}
      <section className="container city_intro">
        <h2 className="city_intro__title">Pune</h2>
        <h1 className="city_intro__subtitle">
          Ride in Comfort with the #1 Driver Service in Pune for Your Loved Ones
        </h1>
        <img
          className="intro__illustration"
          src="/Pune1.svg"
          alt="Pune illustration"
        />
        <div className="city-btn gap-2 mt-2">
          <Link href="/booking-pune/" className="btn btn-warning">
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
            <h2 className="mb-5 pageHeadStyle">Hire Drivers in Pune</h2>
            <div className="daily-desc lightPara">
              <p>
                Pune is a hub for IT, and education, and has a lot of cultural
                significance. Ultimately, making it an epicenter for students
                and working professionals. Therefore, If you're in Pune for
                studies or work and struggling to commute. You've hit the
                jackpot as Driver On Hire is now in Pune! Our driver-on-hire
                services help you find a reliable driver in Pune. So that you
                can experience hassle-free and safe journeys.
              </p>
              <p>
                With our skilled drivers, navigating Pune's busy roadways will
                be stress-free. Hire drivers in Pune who are skilled and
                qualified. Moreover, they are committed to giving you a safe
                driving experience in this lively city. Our drivers are
                dedicated to being on time and upholding a high standard of
                professionalism. You can let us take care of the driving so that
                you can have a relaxed journey.
              </p>
              <p>
                With our reasonable fees, we guarantee you get the most value
                for your money. Whether you require a driver for a day, a week,
                or more. We provide adaptable options to suit your specific
                requirements. Don't let transportation hinder your adventures or
                work commitments. Reach out today to book your driver on hire
                and let the journey begin!
              </p>
            </div>
          </div>
          <div className="daily-section4">
            <h3 className="container mb-5 mt-5 pageHeadStyle text-center">
              Types of Driver Services in Pune
            </h3>
            <div className="mumbai-service-desc">
              <p className="container lightPara pb-3 text-center">
                In Pune, you can find a variety of driver services to cater to
                your specific needs. Whether you're looking to book a driver in
                Pune or hire drivers for different purposes, here are some types
                of driver services available:
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
                          Hourly drivers in Pune provide flexibility for quick
                          errands or hauls. With experienced drivers, you can
                          ensure smooth efficient journeys. Attend meetings or
                          explore popular sights in the city with family and
                          friends.
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
                          Considering a road trip from Pune? Hire professional
                          outstation drivers with a broad understanding of
                          long-distance routes. They'll make sure the trip is
                          comfy and safe. Making it possible for you to fully
                          enjoy the adventure.
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
                          Daily drivers are professional and experienced,
                          providing a smooth and efficient daily commute. They
                          save time and energy by allowing you to relax or be
                          productive during your daily travels.
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
                          Temporary drivers are cost-effective, flexible, and
                          adaptable for short-term needs like vacations or
                          emergencies. This is best as you don't have to make
                          long-term contracts.
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
                          Night drivers are experienced in navigating dark,
                          unfamiliar roads. Providing reliable and secure
                          transportation for late-night outings or events. They
                          are trained to stay alert and focused, minimizing the
                          risk of accidents or fatigue-related incidents.
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
                          Permanent drivers provide dependable, long-term
                          driving support, offering flexibility and convenience.
                          You can count on them to navigate even the most
                          challenging routes efficiently. Due to their in-depth
                          knowledge of roads and traffic patterns.
                        </p>
                      </div>
                    </Link>
                    <div className="card--border"></div>
                  </div>
                </div>
              </div>
              <p className="container lightPara pt-3 text-center">
                No matter your driver service requirement, you can easily find
                drivers in Pune to match your preferences and make your travel
                experience convenient and stress-free.
              </p>
            </div>
          </div>
          <div className="container mumbai-section">
            <h3 className="mb-5 mt-5 pageHeadStyle text-center">
              Benefits of Hiring Drivers in Pune
            </h3>
            <div className="mumbai-desc">
              <p className="lightPara text-center pb-3">
                With Pune's Excellent Driver Service from Driver On Hire. You
                can unlock a world of comfort and flexibility. Discover an array
                of benefits that can completely transform your daily life and
                vacation experiences.
              </p>
              <div className="benefit-card-section container">
                <div
                  className="benefit-card"
                  style={{ "--benefit-card": 4 } as React.CSSProperties}
                >
                  <div className="child">
                    <h3 className="subHead">Productivity Boost</h3>
                    <p>
                      With a skilled driver at your access, you're no longer
                      tied to the steering wheel. Use that time to catch up on
                      work, make important calls, or simply enjoy some
                      well-deserved relaxation. Your commute becomes more
                      productive.
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
                    <h3 className="subHead">Lifestyle Enhancement</h3>
                    <p>
                      Bid farewell to the headaches of parking, fueling up, and
                      vehicle maintenance. By opting for our driver service in
                      Pune, you're freeing up your resources to enjoy a more
                      lavish lifestyle or invest in experiences that truly
                      matter to you.
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
                    <h3 className="subHead">In Demand</h3>
                    <p>
                      Pune's driver services are like a lifeline when public
                      transportation falls short. With the ease of booking, you
                      always have a trustworthy option, even during peak hours
                      or late at night.
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
                    <h3 className="subHead">Smooth Transitions</h3>
                    <p>
                      If you're new to Pune, hiring a driver can ease your
                      transition to the city. They can assist with directions,
                      and introductions to new places.
                    </p>
                  </div>
                  <div className="child"></div>
                  <div className="child"></div>
                  <div className="child"></div>
                  <div className="child"></div>
                </div>
              </div>
              <p className="lightPara text-center pt-5">
                By choosing Driver On Hire Pune your daily travelling
                experiences will be transformed. Reap all these benefits while
                enhancing your overall quality of life and travel experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="location_we_cater pune_section_loc layout_padding">
        <div className="container locWeCater">
          <h4 className="text-center headStyle mb-3">Location We Cater</h4>
          <div className="mt-5">
            <div className="row g-5">
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/baner/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Baner
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/kalyani-nagar/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Kalyani
                  Nagar
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/hadapsar/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Hadapsar
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/aundh/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Aundh
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/pimpri/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Pimpri
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/koregaon-park/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Koregaon
                  Park
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/pashan/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Pashan
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/viman-nagar/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Viman
                  Nagar
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/wakad/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Wakad
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/hinjewadi/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Hinjewadi
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/balewadi/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Balewadi
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/magarpatta-city/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Magarpatta City
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/bhavdan/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Bhavdan
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/undri/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Undri
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/lohegaon/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Lohegaon
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/shivaji-nagar/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Shivaji Nagar
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/deccan-gymkhana/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Deccan Gymkhana
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/warje/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Warje
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/dhanori/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Dhanori
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/sus-road/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Sus Road
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/manjri/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Manjri
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/dhankawadi/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Dhankawadi
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/karve-nagar/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Karve Nagar
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/nibm-road/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> NIBM Road
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/mundhwa/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Mundhwa
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/bund-garden/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Bund Garden
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/yerwada/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Yerwada
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/vishrantwadi/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Vishrantwadi
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/pirangut/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Pirangut
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/katraj/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Katraj
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/dhayari/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Dhayari
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/narhe/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Narhe
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/sinhagad-road/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Sinhagad Road
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/thergaon/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Thergaon
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/rahatani/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Rahatani
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/bibwewadi/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Bibwewadi
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/mahalunge/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Mahalunge
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <Link href="/drivers-in-pune/nanded-city/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Nanded City
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
    </>
  );
}

export function generateMetadata() {
  return {
    title: "Hire Verified Drivers in Pune for Safe and Reliable Service",
    description:
      "Hire verified drivers in Pune for hourly, daily or outstation trips. Experienced and police checked professionals providing on-time, safe and affordable service",
    alternates: {
      canonical: "https://www.driveronhire.com/drivers-in-pune/",
    },
  };
}
