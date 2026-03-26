import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import ToggleText from "./component/toggleText";

const AutoTypeText = dynamic(() => import("./component/auto_type_text"), {
  ssr: false,
});
const BookingCard = dynamic(() => import("./component/bookingCard"), {
  ssr: false,
});
const WhatWeServe = dynamic(() => import("./component/what_we_serve"), {
  ssr: false,
});
const SafeEndingBanner = dynamic(() => import("./component/SafeEndingBanner"), {
  ssr: false,
});

export default function Home() {
  const initialText = "Read More...";
  const toggledText = "...Read Less";
  return (
    <>
      {/* <RateChangeModal /> */}
      <div className="hero_area">
        <section className="slider_section ">
          <div className="container layout_padding2-top">
            <div className="row align-items-start justify-content-between">
              <div className="col-md-7">
                <div className="box">
                  <div className="detail-box">
                    <h4>FEW CLICKS AWAY TO BOOK A</h4>
                    <h2>
                      <AutoTypeText />
                    </h2>
                  </div>
                  <div className="d-none d-md-block d-lg-block d-sm-none">
                    <Image
                      src="/car-image.webp"
                      loading="eager"
                      priority
                      className="w-100"
                      width={852} // Intrinsic width of the image
                      height={310} // Intrinsic height of the image
                      style={{ height: "auto", marginTop: "8rem" }}
                      alt="slider-img"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-5 ">
                <BookingCard />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Start Trust Badge section */}
      <section className="service_section layout_padding">
        <div className="container trustBadges">
          <h1 className="text-center mb-3 homeHeadStyle">
            Hassle-free Commute with #1 Driver Service by our Professional
            Drivers
          </h1>
          <p className="text-center lightPara">
            Welcome to Driver on Hire! With our driver on call service, you can
            say goodbye to the hassles of driving, parking, and navigating
            through traffic. If you're looking for a driver for rent near you,
            we have you covered. Our mission is to provide top-notch chauffeur
            services that meet all your commuting needs.
          </p>
          <div className="collapse text-center" id="readMore1">
            <div className="moreText lightPara">
              <p>
                So whether it be for a special event, important business
                meeting, or simply need a break from driving. Experience
                convenient traveling within a few clicks. As you can rent a
                driver service that caters to your specific requirements.
              </p>
              <p>
                We take pride in our commitment to excellence and providing you
                a comfortable journey. Our drivers are meticulously trained,
                licensed with all the valid documentation. Not only that they
                have extensive knowledge of local routes and traffic patterns,
                guaranteeing you a smooth and efficient ride.
              </p>
              <p>
                So if you are looking for a driver near me? Our professional
                drivers are available in your area to provide convenient and
                safe transportation. Simply book a driver online and enjoy a
                stress-free journey to your destination. Our team of skilled
                drivers are dedicated and prioritize your safety, comfort in
                every step of the way. We understand that your time is valuable,
                and our professional drivers are here to ensure that you make
                the most of it.
              </p>
              <p>
                So what's holding you back ? Experience the convenience of
                renting a driver who will go above and beyond to make your
                journey safe. Trust our driver on call service for all your
                commuting needs. Sit back, relax, and arrive at your destination
                with ease.
              </p>
            </div>
          </div>
          <span className="text-center">
            <Link
              className="custom-anchor"
              data-bs-toggle="collapse"
              href="#readMore1"
              role="button"
              aria-expanded="false"
              aria-controls="readMore1"
            >
              <ToggleText initialText={initialText} toggledText={toggledText} />
            </Link>
          </span>
          <div className="row">
            <div className="badges col-lg-4 col-md-4 col-12 p-4">
              <div className="police-verified-driver p-3">
                <p>
                  <span>
                    20000+ <br />
                  </span>
                  POLICE VERIFIED DRIVERS
                </p>
                <Image
                  src="/Police-verified-drivers.svg"
                  loading="lazy"
                  width={60}
                  height={20}
                  style={{ width: "25%", height: "auto" }}
                  alt="police verified drivers"
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
                <Image
                  src="/Happy-clients.svg"
                  loading="lazy"
                  width={60}
                  height={20}
                  style={{ width: "25%", height: "auto" }}
                  alt="happy clients"
                />
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
                <Image
                  src="/permanent-drivers.svg"
                  loading="lazy"
                  width={60}
                  height={20}
                  style={{ width: "25%", height: "auto" }}
                  alt="permanent drivers"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Trust Badge section */}
      <section className="location_we_cater layout_padding">
        <div className="container locWeCater">
          <h2 className="text-center headStyle mb-3">Cities We Cater</h2>
          <p className="text-center lightPara">
            We are committed to providing the best possible services in all
            cities. Driveronhire provides corporate drivers in Mumbai for
            business travel, airport transfers, long/short term stays, and
            excursions.
          </p>
          <div className="locWeCaterServices text-center">
            <div className="row g-5">
              <div className="col-6">
                <Link href="/drivers-in-mumbai/" className="custom-anchor">
                  <Image
                    src="/location-icon.svg"
                    alt="location icon"
                    loading="lazy"
                    width={20}
                    height={20}
                    style={{ width: "20%", height: "auto" }}
                  />{" "}
                  <br /> Mumbai
                </Link>
              </div>
              <div className="col-6">
                <Link href="/drivers-in-navi-mumbai/" className="custom-anchor">
                  <Image
                    src="/location-icon.svg"
                    alt="location icon"
                    loading="lazy"
                    width={20}
                    height={20}
                    style={{ width: "20%", height: "auto" }}
                  />{" "}
                  <br />
                  Navi Mumbai
                </Link>
              </div>
              <div className="col-6">
                <Link href="/drivers-in-thane/" className="custom-anchor">
                  <Image
                    src="/location-icon.svg"
                    alt="location icon"
                    loading="lazy"
                    width={20}
                    height={20}
                    style={{ width: "20%", height: "auto" }}
                  />{" "}
                  <br />
                  Thane
                </Link>
              </div>
              <div className="col-6">
                <Link href="/drivers-in-pune/" className="custom-anchor">
                  <Image
                    src="/location-icon.svg"
                    alt="location icon"
                    loading="lazy"
                    width={20}
                    height={20}
                    style={{ width: "20%", height: "auto" }}
                  />{" "}
                  <br />
                  Pune
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Start of Services Section */}
      <section className="services layout_padding">
        <h2 className="text-center headStyle mb-3">What We Offer</h2>
        <p className="text-center lightPara mb-4">
          We are committed to providing safe and reliable services. Our drivers
          are carefully vetted.
        </p>

        <WhatWeServe />
      </section>
      {/* End of Services Section */}

      <section className="content-desc layout_padding">
        <div className="container">
          <h2 className="text-center headStyle fw-bold mb-3">
            Rent a Driver on Call for Effortless Travel Experience
          </h2>
          <p className="text-center lightPara">
            Are you tired of dealing with the hassles of commuting? Let us
            simplify your life with our convenient and reliable driver on call
            service. Whether you need a driver for a single trip or regular
            commuting, Driver On Hire is here to meet all your transportation
            needs. At Driver on Hire, book a driver online with quick and easy
            steps. So that it is a hassle-free experience for our customers.
            Simply provide your desired pickup and drop-off locations. Our
            user-friendly interface enables you to match you with a suitable
            driver who meets your specific requirements. Want to know what's
            more? Then check out what makes Driver On Hire the most trusted
            driver service. Discover the qualities that set our hired driver
            services apart as the most trusted in the industry.
          </p>
          <div className="collapse" id="readMore2">
            <div className="moreText1">
              <ol>
                <li className="fw-bold pb-3">
                  Quick Recruitment And Verified Drivers: {""}
                  <span className="lightPara fw-normal">
                    Rest assured with our verified, licensed, and well-trained
                    drivers who have undergone rigorous background checks,
                    ensuring your safety and peace of mind. Get drivers for your
                    service swiftly and effortlessly with our efficient
                    recruitment process, ensuring timely availability for your
                    needs.
                  </span>
                </li>
                <li className="fw-bold pb-3">
                  Driver within 60 Mins: {""}
                  <span className="lightPara fw-normal">
                    Need a driver urgently? We guarantee prompt assistance with
                    a driver arriving at your location within 60 minutes.
                    Experience a hassle-free and straightforward process for
                    driver selection, making it easy and convenient to find the
                    perfect fit for your requirements.
                  </span>
                </li>
                <li className="fw-bold pb-3">
                  Special Drivers: {""}
                  <span className="lightPara fw-normal">
                    For your high-end and luxury vehicles, we have a dedicated
                    team of professional driver service who have experience in
                    handling prestigious automobiles. Tailoring our service to
                    your unique needs, we match you with a suitable driver who
                    meets your specific requirements and preferences, ensuring a
                    personalized experience.
                  </span>
                </li>
                <li className="fw-bold pb-3">
                  Contract Basis: {""}
                  <span className="lightPara fw-normal">
                    We offer flexible contract options, providing long-term
                    driver services to cater to your situational requirement,
                    guaranteeing reliable and consistent support whenever you
                    require.
                  </span>
                  <span className="d-block mt-4 fw-normal lightPara">
                    So, don't let commuting be a source of stress anymore. Book
                    a driver on call and enjoy a comfortable and hassle-free
                    journey. {""}
                    <Link href="/contact/" className="custom-anchor">
                      Contact us today {""}
                    </Link>
                    to experience our exceptional Driver on Hire service and
                    discover the convenience of having a professional driver at
                    your fingertips.
                  </span>
                </li>
              </ol>
            </div>
          </div>
          <span className="text-center">
            <Link
              className="custom-anchor"
              data-bs-toggle="collapse"
              href="#readMore2"
              role="button"
              aria-expanded="false"
              aria-controls="readMore2"
            >
              <ToggleText initialText={initialText} toggledText={toggledText} />
            </Link>
          </span>
        </div>
      </section>

      {/* Start of Our Happy Clients Section */}

      <section className="ourHappyClients layout_padding">
        <div className="container">
          <h2 className="text-center headStyle mb-5">Our Happy Clients</h2>
          <div className="row flex-row-reverse align-items-center g-5">
            <div className="col-12 col-md-6 col-lg-6 text-center">
              <Image
                src="/reviews.svg"
                loading="lazy"
                width={300}
                height={200}
                style={{ width: "70%", height: "auto" }}
                alt="review images"
              />
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
                          <Image
                            src="https://lh3.googleusercontent.com/a-/AD_cMMQeOZvB76aAbE6Wn-1_JpXnGXSPOLb0BOer1cqgJXv0Dynd=w36-h36-p-rp-mo-br100"
                            width={36}
                            height={36}
                            className="rounded-circle"
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
                          <Image
                            src="https://lh3.googleusercontent.com/a-/AD_cMMRdk5DmSQCpWSsfs9TL0YaZCVT3hcJu99Dz9L2ew0dZAxz3=w36-h36-p-rp-mo-br100"
                            width={36}
                            height={36}
                            className="rounded-circle"
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
                          <Image
                            src="https://lh3.googleusercontent.com/a-/AD_cMMSK7KALf960-zxo_9hgZOybYVYPicXp9nuBY3fPn5NSfcH_=w36-h36-p-rp-mo-br100"
                            width={36}
                            height={36}
                            className="rounded-circle"
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
                          <Image
                            src="https://lh3.googleusercontent.com/a-/AD_cMMQM4KbKzZrAYAGx3ViJSUs56zcHQq1-whP28z7zh4Vhairv=w36-h36-p-rp-mo-br100"
                            width={36}
                            height={36}
                            className="rounded-circle"
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
                          <Image
                            src="https://lh3.googleusercontent.com/a/AAcHTtcwjWd2hjbmEDz4RpAl1EMZbZWhQhlah-S1Q8WP9IKP=w36-h36-p-rp-mo-br100"
                            width={36}
                            height={36}
                            className="rounded-circle"
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
                          <Image
                            src="https://lh3.googleusercontent.com/a-/AD_cMMTZa9JnZQpZkfwF37lW_X8snA5jVCnEGih-ZZ-uYUadX81w=w36-h36-p-rp-mo-br100"
                            width={36}
                            height={36}
                            className="rounded-circle"
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
                          <Image
                            src="https://lh3.googleusercontent.com/a-/AD_cMMR9hc9SWtbWkArQzxgqQcVNdPg8toMxTzQiDtSPubBicEE=w108-h108-p-rp-mo-ba2-br100"
                            width={36}
                            height={36}
                            className="rounded-circle"
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
                          <Image
                            src="https://lh3.googleusercontent.com/a-/AD_cMMREuEjbtWg22f2_XeXCiWJ2r5MMZE6lVmAqPxrxXy8efM4=w108-h108-p-rp-mo-br100"
                            width={36}
                            height={36}
                            className="rounded-circle"
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

      {/* End of Our Happy Clients Section */}

      <SafeEndingBanner />
    </>
  );
}

export function generateMetadata() {
  return {
    title:
      "Driver on Hire | Rent a Driver Online | Professional Driver Service",
    description:
      "Driver On Hire - Rent a driver online. Professional drivers. Trained drivers. 24x7 On-demand Service. Book Driver on Call: 022-43439090.",
    alternates: {
      canonical: "https://www.driveronhire.com/",
    },
  };
}
