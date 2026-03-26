import Link from "next/link";
import FaqComponent from "@/app/component/faqs";
import FAQSchema from "@/app/component/FAQSchema";

export default function Rahatani() {
  const faqs = [
    {
      question: "How do I know my driver is trustworthy?",
      answer:
        "This is our most important commitment to you. Every driver undergoes a thorough police verification and background check. Your safety is our absolute priority.",
    },
    {
      question: "Can I book a driver at the last minute?",
      answer:
        "Yes, of course! Our services are available 24/7. If you have a spontaneous plan, you can book a driver, and we'll find one for you as quickly as possible.",
    },
    {
      question: "What if my plans change and I am delayed?",
      answer:
        "We understand that delays can happen. Our drivers will wait for a reasonable period. We always aim to be flexible, but please know that very long delays might result in extra charges.",
    },
    {
      question: "Can your drivers handle luxury cars or automatic vehicles?",
      answer:
        "Yes, absolutely. Our drivers are experienced and professionally trained to handle all kinds of vehicles, including premium luxury cars and all models of automatic cars.",
    },
    {
      question: "How do I cancel a booking if my plans change?",
      answer:
        "You can easily cancel your booking directly from our app or website. We just recommend checking our cancellation policy, as charges may apply depending on how close it is to your pickup time.",
    },
    {
      question: "Is there an extra charge for booking a driver late at night?",
      answer:
        "No, there isn't. We believe in fair and consistent pricing. The rate you see is the rate you pay, regardless of the time of day or night.",
    },
  ];

  return (
    <div className="custom-section">
      <FAQSchema faqs={faqs} pageTitle="Rahatani" />
      <section className="pune_section rahatani location_inner_section margin-top-bottom">
        <div className="px-md-5 px-3 banner row p-0 m-0 align-items-md-center justify-content-md-start justify-content-center">
          <div className="col-md-6 banner-left">
            <h1 style={{ fontWeight: "500" }}>
                Need a Professional Driver in Rahatani? Let's Smooth Out Your Journey.
            </h1>
            <p className="mt-4" style={{ fontWeight: "500", color: "rgba(0,0,0,0.6)" }}>
                Are you dealing with the constant traffic on Rahatani Road, navigating the crowded lanes, or planning your daily commute? Let us handle the driving. Book a trusted professional for your office travel, family errands, or a trip to the city.
            </p>
            <div className="row inner-desc mt-md-4">
              <div className="col-12 col-md-6 col-lg-5">
                <Link href="/booking-pune/" className="btn btn-warning custom-w-md-100">
                  Hire Your Driver
                </Link>
              </div>
              <div className="mt-4 mt-md-0 col-12 col-md-6 col-lg-5">
                <Link href="https://driveronhire.onelink.me/Uy5P/gejeikwj" target="_blank" className="btn btn-dark custom-w-md-100">
                  Download Our App
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
                  <span>5,000+ <br /></span>
                  Verified Drivers in Pune
                </p>
                <img src="/Police-verified-drivers.svg" alt="Police verified driver icon" />
              </div>
            </div>
            <div className="badges col-lg-4 col-md-4 col-12 p-4">
              <div className="happy-clients p-3">
                <p>
                  <span>5 LAC+ <br /></span>
                  Rides Completed Successfully
                </p>
                <img src="/Happy-clients.svg" alt="Happy clients icon" />
              </div>
            </div>
            <div className="badges col-lg-4 col-md-4 col-12 p-4">
              <div className="permanent-drivers p-3">
                <p>
                  <span>1 LAC+ <br /></span>
                  Permanent Drivers with Happy Clients
                </p>
                <img src="/permanent-drivers.svg" alt="Permanent drivers icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-div">
        <div className="container">
          <div className="daily-section1 text-center">
            <h2 className="mb-5 pageHeadStyle">So, Why Choose Driver on Hire in Rahatani?</h2>
            <div className="daily-desc lightPara">
              <p>We know Rahatani is a vibrant and centrally located neighbourhood in the heart of PCMC, bustling with families and professionals. Its excellent connectivity to areas like Pimple Saudagar and Kalewadi makes it a fantastic place to live. But this central location also means you're often at the heart of the traffic, with busy roads connecting you to the rest of the city.</p>
              <p>Your daily journey should be peaceful, not a source of stress. Whether you're commuting to Hinjewadi, heading to the industrial belt, or taking your family out, we want to make it easier for you. Our local drivers are experts in this specific area. They know the best times to travel, the smartest routes to avoid the main road congestion, and how to navigate the internal lanes efficiently, ensuring you always have a comfortable ride.</p>
            </div>
          </div>
          <div className="daily-section4">
            <h2 className="mb-5 mt-5 pageHeadStyle text-center">Services We Offer in Rahatani</h2>
            <div className="mumbai-service-desc">
              <p className="lightPara pb-3 text-center">Life in a well-connected area like Rahatani means you could be heading in any direction on any given day. Our services are designed to be as flexible as your plans.</p>
              <div className="whatWeServe">
                <div className="card-container">
                  <div className="service-card">
                    <Link href="/hourly-drivers/">
                      <div className="card--display">
                        <img src="/hourly-drivers.svg" alt="Icon representing Hourly Drivers" />
                        <h6 className="text-uppercase mt-4">Hourly Drivers</h6>
                      </div>
                      <div className="card--hover">
                        <h3 className="text-uppercase p-2 border-bottom border-secondary h6">Hourly Driver</h3>
                        <p>Need a driver for a few hours for a shopping trip in Pimple Saudagar or to handle appointments in Aundh? Our hourly service is perfect for getting multiple local tasks done without any hassle.
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
                        <img src="/outstation-drivers.svg" alt="Icon representing Outstation Drivers" />
                        <h6 className="text-uppercase mt-4">Outstation Drivers</h6>
                      </div>
                      <div className="card--hover">
                        <h3 className="text-uppercase p-2 border-bottom border-secondary h6">Outstation Driver</h3>
                        <p>Planning a weekend trip to Lonavala or a pilgrimage to Shirdi? We’ll get you on the highway quickly and safely. Let our experienced drivers manage the long drive while you relax.</p>
                      </div>
                    </Link>
                    <div className="card--border"></div>
                  </div>
                </div>
                <div className="card-container">
                  <div className="service-card">
                    <Link href="/daily-drivers/">
                      <div className="card--display">
                        <img src="/daily-drivers.svg" alt="Icon representing Daily Drivers" />
                        <h6 className="text-uppercase mt-4">Daily Drivers</h6>
                      </div>
                      <div className="card--hover">
                        <h3 className="text-uppercase p-2 border-bottom border-secondary h6">Daily Driver</h3>
                        <p>Let's make your daily commute to Hinjewadi, Talawade IT Park, or central Pune a comfortable experience. A reliable daily driver means you can use your travel time to prepare for your day, not fight traffic.</p>
                      </div>
                    </Link>
                    <div className="card--border"></div>
                  </div>
                </div>
                <div className="card-container">
                  <div className="service-card">
                    <Link href="/temporary-drivers/">
                      <div className="card--display">
                        <img src="/temporary-drivers.svg" alt="Icon representing Temporary Drivers" />
                        <h6 className="text-uppercase mt-4">Temporary Drivers</h6>
                      </div>
                      <div className="card--hover">
                        <h3 className="text-uppercase p-2 border-bottom border-secondary h6">Temporary Driver</h3>
                        <p>Expecting guests, or need a driver for a specific short-term period? We provide skilled, professional drivers who can step in whenever you need them.</p>
                      </div>
                    </Link>
                    <div className="card--border"></div>
                  </div>
                </div>
                <div className="card-container">
                  <div className="service-card">
                    <Link href="/night-drivers/">
                      <div className="card--display">
                        <img src="/night-drivers.svg" alt="Icon representing Night Drivers" />
                        <h6 className="text-uppercase mt-4">Night Drivers</h6>
                      </div>
                      <div className="card--hover">
                        <h3 className="text-uppercase p-2 border-bottom border-secondary h6">Night Driver</h3>
                        <p>Working late or have a late-night function to attend? Your safety is our top concern. Our 24/7 night driver service ensures you always have a secure ride home, no matter the hour.</p>
                      </div>
                    </Link>
                    <div className="card--border"></div>
                  </div>
                </div>
                <div className="card-container">
                  <div className="service-card">
                    <Link href="/permanent-drivers/">
                      <div className="card--display">
                        <img src="/permanent-drivers.svg" alt="Icon representing Permanent Drivers" />
                        <h6 className="text-uppercase mt-4">Permanent Drivers</h6>
                      </div>
                      <div className="card--hover">
                        <h3 className="text-uppercase p-2 border-bottom border-secondary h6">Permanent Driver</h3>
                        <p>For the ultimate convenience and peace of mind, consider a full-time driver. We can help you find a trustworthy professional who understands your family’s routine and travel needs.</p>
                      </div>
                    </Link>
                    <div className="card--border"></div>
                  </div>
                </div>
              </div>
              <p className="text-center lightPara pt-5">
              Whatever your destination from Rahatani, we’re here to provide a simple, safe, and professional driving solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mumbai-section">
        <h3 className="mb-5 mt-5 pageHeadStyle text-center">Let’s Talk About the Benefits of Hiring a Driver Here</h3>
        <div className="mumbai-desc">
          <p className="lightPara text-center pb-3">
            When you book a driver with us in Rahatani, you're choosing a smarter, safer, and more efficient way to travel. Here’s how you’ll benefit:
          </p>
          <div className="benefit-card-section container">
            <div className="benefit-card" style={{ "--benefit-card": 4 } as React.CSSProperties}>
              <div className="child">
                <h3 className="subHead">Navigate Rahatani’s Traffic Like a Pro</h3>
                <p>The main roads and internal lanes can get very congested. Our drivers know them inside-out, ensuring your local travel is always as quick and efficient as possible.
                </p>
              </div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
            </div>
            <div className="benefit-card" style={{ "--benefit-card": 4 } as React.CSSProperties}>
              <div className="child">
                <h3 className="subHead">Your Stress-Free Hinjewadi Commute</h3>
                <p>For the many professionals in Rahatani, the daily commute is a major part of the day. We can make it a stress-free one, giving you more time and energy.</p>
              </div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
            </div>
            <div className="benefit-card" style={{ "--benefit-card": 4 } as React.CSSProperties}>
              <div className="child">
                <h3 className="subHead">You Can Absolutely Trust Our Drivers</h3>
                <p>We know how important safety and trust are. Every single driver on our platform is put through a strict police verification and background check. Your peace of mind is our priority.</p>
              </div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
            </div>
            <div className="benefit-card" style={{ "--benefit-card": 4 } as React.CSSProperties}>
              <div className="child">
                <h3 className="subHead">Reclaim Your Precious Time</h3>
                <p>Think of the hours you spend driving each week. Now imagine having that time back for yourself, your work, or your family. We can make that happen.</p>
              </div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
            </div>
            <div className="benefit-card" style={{ "--benefit-card": 4 } as React.CSSProperties}>
              <div className="child">
                <h3 className="subHead">Ready Whenever You Are</h3>
                <p>Your schedule isn't always from 9 to 5, and neither is our service. We are available 24/7 to accommodate your early morning starts or late-night returns.</p>
              </div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
            </div>
            <div className="benefit-card" style={{ "--benefit-card": 4 } as React.CSSProperties}>
              <div className="child">
                <h3 className="subHead">Ready Whenever You Are</h3>
                <p>Our service is available 24/7. Whether you have an early morning meeting or a late-night arrival, you can count on us to be there.</p>
              </div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
            </div>
          </div>
          <p className="lightPara text-center pt-5">
            By choosing Driver On Hire Rahatani, your daily travelling experiences will be transformed. Reap all these benefits while enhancing your overall quality of life and travel experiences.
          </p>
        </div>
      </section>

      <section className="location_we_cater pune_section_loc layout_padding">
        <div className="container locWeCater">
          <h2 className="text-center headStyle mb-3">We Also Serve All Areas Near Rahatani</h2>
          <p className="lightPara text-center pb-3">Our network is strong throughout PCMC. So whether you are in Rahatani or a nearby locality, a professional driver is always within reach.</p>
          <div className="mt-5">
            <div className="row g-5">
              <div className="col-6 col-md-2 col-lg-2"><Link href="/booking-pune/" className="custom-anchor"><img src="/location-icon.svg" alt="location icon" /> Pimple Saudagar</Link></div>
              <div className="col-6 col-md-2 col-lg-2"><Link href="/booking-pune/" className="custom-anchor"><img src="/location-icon.svg" alt="location icon" /> Kalewadi</Link></div>
              <div className="col-6 col-md-2 col-lg-2"><Link href="/booking-pune/" className="custom-anchor"><img src="/location-icon.svg" alt="location icon" /> Thergaon</Link></div>
              <div className="col-6 col-md-2 col-lg-2"><Link href="/booking-pune/" className="custom-anchor"><img src="/location-icon.svg" alt="location icon" /> Wakad</Link></div>
              <div className="col-6 col-md-2 col-lg-2"><Link href="/booking-pune/" className="custom-anchor"><img src="/location-icon.svg" alt="location icon" /> Pimpri-Chinchwad</Link></div>
              <div className="col-6 col-md-2 col-lg-2"><Link href="/booking-pune/" className="custom-anchor"><img src="/location-icon.svg" alt="location icon" /> Pimple Gurav</Link></div>
              <div className="col-12 text-center"><p><b>Note:</b> Wherever you are in Rahatani or PCMC, we've got you covered! Book now for stress-free travel.</p></div>
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
              <h2 className="mt-4 mb-3 headStyle text-center">How to Book a Driver in Rahatani</h2>
              <p className="text-center pb-3 lightPara">We've made our booking process incredibly simple so you can arrange for a driver in just a few minutes.</p>
            </div>
            <div className="col-md-6">
              <div className="fixed-col">
                <img src="/Rahatani.webp" alt="Rahatani" style={{ overflow: "auto" }} className="img-fluid rounded shadow-sm" />
              </div>
            </div>
            <div className="col-md-6 mt-md-0 mt-3 scrollableDiv">
              <p><b>How It Works:</b></p>
              <ol className="book-a-driver-timeline">
                <li className="timeline-content"><div className="timeline-badge">1</div><b>Visit Our Website or Download the App</b><br />A quick, one-time registration is all it takes to get full access to our services.</li>
                <li className="timeline-content"><div className="timeline-badge">2</div><b>Tell Us What Service You Need</b><br />Just choose the service that matches your plan—whether it's local, outstation, or permanent.</li>
                <li className="timeline-content"><div className="timeline-badge">3</div><b>Pinpoint Your Location</b><br />Select Pune, and then choose Rahatani as your area.</li>
                <li className="timeline-content"><div className="timeline-badge">4</div><b>Share Your Trip Details</b><br />Let us know your pickup and drop-off points, and whether you need a one-way or return trip.</li>
                <li className="timeline-content"><div className="timeline-badge">5</div><b>Tell Us About Your Car</b><br /><div className="row inner"><div className="col-md-4"><ul><li>Manual</li><li>Hatchback</li><li>SUV</li><li>Sedan Luxury</li></ul></div><div className="col-md-4"><ul><li>Automatic</li><li>Sedan</li><li>Luxury</li><li>SUV Luxury</li></ul></div></div></li>
                <li className="timeline-content"><div className="timeline-badge">6</div><b>Set the Time and Date</b><br />Tell us exactly when you need the driver and for how long you'll need them.</li>
                <li className="timeline-content"><div className="timeline-badge">7</div><b>Confirm Your Booking</b><br />Just give all the details a final look, press 'confirm', and we'll assign a professional driver to you right away!</li>
              </ol>
              <p><b>Ready to make your travel from Rahatani easier?</b></p>
              <Link href="/booking-pune/" className="btn btn-warning">Book Your Driver Now</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section layout_padding">
        <div className="container">
          <h2>A Few Common Questions You Might Have</h2>
          <FaqComponent faqs={faqs} />
        </div>
      </section>
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Hire a Driver in Rahatani - For Local & Hinjewadi Commute",
    description:
      "Need a trusted driver in Rahatani? Our verified drivers expertly navigate the busy local roads and daily commute to Hinjewadi. Available 24/7. Book now for a safe ride.",
    alternates: {
      canonical: "https://www.driveronhire.com/drivers-in-pune/rahatani/",
    },
  };
} 