import Link from "next/link";
export default function Mumbai() {
  return (
    <>
      {/* <section className="mumbai_section margin-top-bottom">
        <div className="banner d-flex align-items-center">
          <div className="banner-left">
            <h1>Hire a Driver in Mumbai – The City That Never Stops Moving</h1>
            <p className="mt-4 lightPara">
              Book a trusted, professional driver to navigate Mumbai’s bustling
              streets. Enjoy stress-free travel for your daily commute, weekend
              trips, or special events.
            </p>
            <div className="row inner-desc">
              <div className="mt-5 col-12 col-md-6 col-lg-4 d-none d-md-block d-lg-block d-sm-none">
                <Link href="/booking-mumbai/" className="btn btn-warning w-100">
                  Reserve Your Driver Today
                </Link>
              </div>
              <div className="mt-5 col-12 col-md-6 col-lg-4 d-none d-md-block d-lg-block d-sm-none">
                <Link
                  href="https://driveronhire.onelink.me/Uy5P/gejeikwj"
                  target="_blank"
                  className="btn btn-dark w-100"
                >
                  Download App
                </Link>
              </div>
            </div>
          </div>
          <div className="banner-right d-flex">
            <div className="family">
              <img
                src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVtYmFpfGVufDB8fDB8fHww"
                alt="Mumbai image"
                className="mx-100 h-auto"
              />
              <img
                src="https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVtYmFpfGVufDB8fDB8fHww"
                alt="Mumbai image"
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
                src="https://images.unsplash.com/photo-1557846920-5efd5c916286?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11bWJhaXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Mumbai image"
                className="mx-100 h-auto"
              />
              <img
                src="https://images.unsplash.com/photo-1532633130319-f16ab0a3a9c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG11bWJhaXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Mumbai image"
                className="mx-100 h-auto"
              />
            </div>
            <div className="sale">
              <img
                src="https://images.unsplash.com/photo-1594146032116-80033545b0b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11bWJhaXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Mumbai image"
                className="mx-100 h-auto"
              />
              <img
                src="https://images.unsplash.com/photo-1567359485688-f39861174e25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG11bWJhaXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Mumbai image"
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
                src="https://images.unsplash.com/photo-1571214453696-8852eeb35bce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG11bWJhaXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Mumbai image"
                className="mx-100 h-auto"
              />
              <img
                src="https://images.unsplash.com/photo-1584782559059-89669ef4e1cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fG11bWJhaXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Mumbai image"
                className="mx-100 h-auto"
              />
            </div>
          </div>
          <div className="d-block d-md-none d-lg-none d-sm-block mt-5 w-100">
            <Link href="/booking-mumbai/" className="btn btn-warning w-100">
              Reserve Your Driver Today
            </Link>
            <Link
              href="https://driveronhire.onelink.me/Uy5P/gejeikwj"
              target="_blank"
              className="btn btn-dark w-100 mt-3"
            >
              Download App
            </Link>
          </div>
        </div>
      </section> */}
      <section className="container city_intro">
        <h2 className="city_intro__title">Mumbai</h2>
        <h1 className="city_intro__subtitle">
          Hire a Driver in Mumbai - The City That Never Stops Moving
        </h1>
        <img className="intro__illustration" src="/mumbai-city1.svg" alt="Mumbai Illusttration" />
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
              Why Choose DriverOnHire for Your Rides in Mumbai?
            </h2>
            <div className="daily-desc lightPara">
              <p>
                Tired of long commutes and stressful traffic in Mumbai? Let us
                take the wheel while you sit back, relax, and enjoy your ride.
                Whether it's for your daily office commute, a weekend getaway,
                or a late-night trip, DriverOnHire is here to make your travel
                seamless. Our fleet of police-verified, trained, and
                professional drivers ensures that you get where you need to go
                safely and on time, every time.
              </p>
              {/* <p>
              Tired of long commutes and stressful traffic in Mumbai? Let us take the wheel while you sit back, relax, and enjoy your ride. Whether it's for your daily office commute, a weekend getaway, or a late-night trip, DriverOnHire is here to make your travel seamless. Our fleet of police-verified, trained, and professional drivers ensures that you get where you need to go safely and on time, every time.
              </p>
              <p>
                But here's the good news! Where there's a problem, there's a
                solution right at your fingertips. With Driver On Hire, your
                daily commute becomes much easier. Our skilled drivers have
                profound knowledge of Mumbai's roadways. This leads to a
                productive journey that lets you focus on your work. Moreover,
                you can enjoy the sights without worrying about parking or
                directions.
              </p>
              <p>
                With Driver On Hire, you can enjoy the convenience of a personal
                driver without the hassle of recruitment and management. Whether
                you need a driver for a few hours, a full day, or on a long-term
                basis, we have flexible options to meet your requirements.
              </p>
              <p>
                Say goodbye to the hassles of Mumbai traffic and let our expert
                drivers take the wheel while you sit back and relax. Contact us
                today to hire the best drivers in Mumbai and experience the
                difference.
              </p> */}
            </div>
          </div>
          <div className="daily-section4">
            <h3 className="mb-5 mt-5 pageHeadStyle text-center">
              Types of Driver Services in Mumbai
            </h3>
            <div className="mumbai-service-desc">
              <p className="lightPara pb-3 text-center">
                Need to hire drivers in Mumbai? We’ve got you covered. Our
                experienced driver's are trained to provide a safe, comfortable,
                and efficient driver service. Choose the service that fits your
                needs.
              </p>

              <div className="whatWeServe">
                <div className="card-container">
                  <div className="service-card">
                    <Link href="/hourly-drivers/">
                      <div className="card--display">
                        <img
                          src="/hourly-drivers.svg"
                          alt="Icon representing  Hourly Drivers"
                        />
                        <h6 className="text-uppercase mt-4">Hourly Drivers</h6>
                      </div>
                      <div className="card--hover">
                        <h6 className="text-uppercase p-2 border-bottom border-secondary">
                          Hourly Drivers
                        </h6>
                        <p>
                          For quick trips or errands, book a car driver on an
                          hourly basis. Our professional drivers will be ready
                          to take you where you need to go promptly, without
                          delay.
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
                          Need to travel long-distance? Our outstation drivers
                          are experienced in handling extended trips, ensuring a
                          safe and comfortable journey to any destination.
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
                          For your regular commute, our daily drivers know the
                          best routes around Mumbai. They’ll help you avoid
                          traffic and get to your destination on time, every
                          day.
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
                          Whether it’s for a wedding, meeting, or special event,
                          our temporary drivers are available for short-term
                          bookings, providing hassle-free, professional service
                          tailored to your needs.
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
                          Whether it’s a late-night party or a business meeting,
                          our night drivers are ready to get you home safely at
                          any hour.
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
                          If you need a driver on a long-term basis, our
                          permanent drivers are here for you. They’ll take care
                          of your daily commute, so you can enjoy a stress-free
                          ride every day.
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
            <h3 className="mb-5 mt-5 pageHeadStyle text-center">
              Benefits of Hiring Drivers in Mumbai
            </h3>
            <div className="mumbai-desc">
              <p className="lightPara text-center pb-3">
                Hiring a driver with DriverOnHire brings several advantages to
                make your travel seamless and stress-free.
              </p>
              <div className="benefit-card-section container">
                <div
                  className="benefit-card"
                  style={{ "--benefit-card": 4 } as React.CSSProperties}
                >
                  <div className="child">
                    <h3 className="subHead">Stress-Free Commute</h3>
                    <p>
                      Leave the traffic behind and let our professional drivers
                      handle it. You can focus on work, relax, or enjoy your
                      time without worrying about the road. It’s the ultimate
                      way to reclaim your time during daily commutes.
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
                    <h3 className="subHead">Expert Navigation</h3>
                    <p>
                      Our drivers are experts at navigating Mumbai’s roads. They
                      know the best routes, shortcuts, and ways to avoid traffic
                      jams, ensuring that you reach your destination faster and
                      more efficiently, every time.
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
                    <h3 className="subHead">Punctual & Reliable Service</h3>
                    <p>
                      You can always count on us. Whether you need a driver for
                      an important meeting, a special event, or a weekend
                      getaway, we guarantee that you’ll never be late. Our
                      drivers arrive on time, every time, to get you to your
                      destination without delay.
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
                    <h3 className="subHead">Flexibility & Convenience</h3>
                    <p>
                      Our services are tailored to your needs. Whether it’s for
                      a few hours, a full day, or a long-term hire, we provide
                      flexible options. You can book a driver whenever you need
                      one, making your travel experience more convenient and
                      stress-free.
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
                    <h3 className="subHead">Safety First</h3>
                    <p>
                      Your safety is our priority. All our drivers are
                      police-verified and professionally trained, ensuring that
                      you travel securely. Whether it’s a night ride or a
                      long-distance trip, we make sure you’re in safe hands from
                      start to finish.
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
                    <h3 className="subHead">Cost-Effective Travel</h3>
                    <p>
                      Forget about the costs of owning and maintaining a
                      vehicle. Hiring a driver is a cost-effective alternative.
                      With affordable rates and no hidden fees, we make it easy
                      for you to travel without breaking the bank.
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
          <h4 className="text-center headStyle mb-3">Location We Cater</h4>
          <div className="mt-5">
            <div className="row g-5">
              <div className="col-6 col-md-2 col-lg-2">
                <Link
                  href="/drivers-in-mumbai/bandra/"
                  className="custom-anchor"
                >
                  <img src="/location-icon.svg" alt="location icon" /> Bandra
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link
                  href="/drivers-in-mumbai/marine-lines/"
                  className="custom-anchor"
                >
                  <img src="/location-icon.svg" alt="location icon" /> Marine
                  Lines
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link
                  href="/drivers-in-mumbai/andheri/"
                  className="custom-anchor"
                >
                  <img src="/location-icon.svg" alt="location icon" /> Andheri
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/juhu" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Juhu
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link
                  href="/drivers-in-mumbai/colaba/"
                  className="custom-anchor"
                >
                  <img src="/location-icon.svg" alt="location icon" /> Colaba
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link
                  href="/drivers-in-mumbai/worli/"
                  className="custom-anchor"
                >
                  <img src="/location-icon.svg" alt="location icon" /> Worli
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link
                  href="/drivers-in-mumbai/churchgate/"
                  className="custom-anchor"
                >
                  <img src="/location-icon.svg" alt="location icon" />
                  Churchgate
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link
                  href="/drivers-in-mumbai/dadar/"
                  className="custom-anchor"
                >
                  <img src="/location-icon.svg" alt="location icon" /> Dadar
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/powai/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Powai
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/wadala/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Wadala
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link
                  href="/drivers-in-mumbai/santacruz/"
                  className="custom-anchor"
                >
                  <img src="/location-icon.svg" alt="location icon" /> Santacruz
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link
                  href="/drivers-in-mumbai/borivali/"
                  className="custom-anchor"
                >
                  <img src="/location-icon.svg" alt="location icon" /> Borivali
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/kandivali/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Kandivali
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/kurla/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Kurla
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/mira-road/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Mira Road
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/sion/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Sion
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/malad/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Malad
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/chembur/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Chembur
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/ghatkopar/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Ghatkopar
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/fort/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Fort
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/cuffe-parade/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Cuffe Parade
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/mazgaon/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Mazgaon
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/tardeo/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Tardeo
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/byculla/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Byculla
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/lower-parel/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Lower Parel
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/lalbaug/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Lalbaug
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/parel/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Parel
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/sewri/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Sewri
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/jogeshwari/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Jogeshwari
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/goregaon/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Goregaon
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/versova/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Versova
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/vile-parle/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Vile Parle
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/dahisar/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Dahisar
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/mulund/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Mulund
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/bhandup/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Bhandup
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/vikhroli/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Vikhroli
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/kanjurmarg/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Kanjurmarg 
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/bhayandar/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Bhayandar 
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/mumbra/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Mumbra 
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/dombivli/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Dombivli 
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/asangaon/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Asangaon 
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/titwala/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Titwala 
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/mankhurd/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Mankhurd 
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/nahur/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Nahur 
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/naigaon/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Naigaon 
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/sandhurst-road/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Sandhurst Road 
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/vidya-vihar/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Vidya Vihar 
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/matunga/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Matunga 
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/chinchpokli/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Chinchpokli 
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/currey-road/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Currey Road
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/virar/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Virar
                </Link>
              </div>
              <div className="col-6 col-md-2 col-lg-2">
                <Link href="/drivers-in-mumbai/vasai/" className="custom-anchor">
                  <img src="/location-icon.svg" alt="location icon" /> Vasai
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7043301909657!2d72.8429068743024!3d19.12062265057199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c92b5cb09667%3A0x683a078eb084312a!2sDriver%20on%20Hire%20-%20%231%20Driver%20Service%20In%20Mumbai!5e0!3m2!1sen!2sin!4v1706703753830!5m2!1sen!2sin"
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
    title: "Hire Drivers in Mumbai – Safe, Trusted & Stress-Free Travel",
    description:
      "Need to hire drivers in Mumbai? Book professional, police-verified drivers for hourly, daily, or long-term needs. Enjoy safe, reliable, and hassle-free rides.",
    alternates: {
      canonical: "https://www.driveronhire.com/drivers-in-mumbai/",
    },
  };
}
