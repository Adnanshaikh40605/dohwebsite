import Link from "next/link";
import FaqComponent from "@/app/component/faqs";
import FAQSchema from "@/app/component/FAQSchema";

export default function Mahalunge() {
  const faqs = [
    {
      question: "How do I know my driver is trustworthy?",
      answer:
        "We completely understand this is your primary concern. That's why every driver goes through a strict police verification and background check process. Your safety is our commitment.",
    },
    {
      question: "Can I book a driver at the last minute?",
      answer:
        "Yes, absolutely! Our service is active 24/7. Even if it's a last-minute plan, you can book a driver, and we'll find one near you as quickly as we can.",
    },
    {
      question: "What if my plans change and I'm running late?",
      answer:
        "Our drivers will wait for a reasonable period. We try to be as flexible as possible, but please note that significant delays might lead to additional charges.",
    },
    {
      question: "Can your drivers handle luxury or automatic cars?",
      answer:
        "Yes, they certainly can. Our drivers are well-trained and have experience with all types of vehicles, including high-end luxury models and all automatic transmissions.",
    },
    {
      question: "How would I cancel a booking if I need to?",
      answer:
        "You can cancel your booking easily through our app or website. We just ask that you check our policy, as cancellation charges may apply depending on how close it is to your pickup time.",
    },
    {
      question: "Does it cost extra to book a driver late at night?",
      answer:
        "No, it does not. We believe in fair and consistent pricing. The rate is the same whether you book during the day or for a late-night ride.",
    },
  ];

  return (
    <div className="custom-section">
      <FAQSchema faqs={faqs} pageTitle="Mahalunge" />
      <section className="pune_section mahalunge location_inner_section margin-top-bottom">
        <div className="px-md-5 px-3 banner row p-0 m-0 align-items-md-center justify-content-md-start justify-content-center">
          <div className="col-md-6 banner-left">
            <h1 style={{ fontWeight: "500" }}>
                Need a Reliable Driver in Mahalunge? We're Here to Help.
            </h1>
            <p className="mt-4" style={{ fontWeight: "500", color: "rgba(0,0,0,0.6)" }}>
                Are you navigating the developing roads of Mahalunge, commuting daily to Hinjewadi, or heading into Baner for errands? Let's take the stress out of your drive. Book a professional, verified driver and enjoy a comfortable, hassle-free journey.
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
            <h2 className="mb-5 pageHeadStyle">So, Why Choose Driver on Hire in Mahalunge?</h2>
            <div className="daily-desc lightPara">
              <p>We've seen Mahalunge transform into one of Pune's most exciting and fast-growing residential hubs, especially with its prime location near Hinjewadi and Baner. We understand that living here means you're right next to the action, but it can also mean facing the daily challenge of a busy commute.</p>
              <p>Your time is precious, whether you're an IT professional, a business owner, or managing a household. That's exactly why we're here. Our drivers know this area incredibly well. They understand the best routes to the IT park and the quickest ways to get to the highway, turning what can be a stressful part of your day into a moment of calm. You can sit back, relax, or get some work done.</p>
            </div>
          </div>
          <div className="daily-section4">
            <h2 className="mb-5 mt-5 pageHeadStyle text-center">What Kind of Driver Service Can We Help You With Today?</h2>
            <div className="mumbai-service-desc">
              <p className="lightPara pb-3 text-center">Life in a dynamic area like Mahalunge means your plans can change quickly. That's why our services are designed to be flexible and cater to whatever you have scheduled for the day.</p>
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
                        <p>Have a few appointments in the city or need to run errands in Balewadi or Baner? You can book a driver for just a couple of hours. It's simple, convenient, and you only pay for what you use.
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
                        <p>Thinking of a weekend trip to Lonavala or Mumbai? Let one of our experienced drivers manage the highway traffic. You just focus on enjoying your break.</p>
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
                        <p>If the daily commute to Hinjewadi or another part of Pune is wearing you down, we can help. A dedicated daily driver can make your routine so much smoother and more predictable.</p>
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
                        <p>Need a driver for a specific period? Maybe for a week while you have guests over, or for a month for a particular project. We have skilled professionals ready to assist.</p>
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
                        <p>Working late or have a late-night flight to catch? Your safety is our priority. Our night driver service is available 24/7 to ensure you get home safely and on time.</p>
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
                        <p>For the ultimate convenience, consider hiring a full-time driver. We can help you find a trustworthy professional who understands your schedule and becomes a valuable part of your routine.</p>
                      </div>
                    </Link>
                    <div className="card--border"></div>
                  </div>
                </div>
              </div>
              <p className="text-center lightPara pt-5">
              Whatever your driving needs in Mahalunge, we're committed to providing you with a reliable and professional solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mumbai-section">
        <h3 className="mb-5 mt-5 pageHeadStyle text-center">Let's Talk About the Benefits of Hiring a Driver Here</h3>
        <div className="mumbai-desc">
          <p className="lightPara text-center pb-3">
            When you book a driver with us in Mahalunge, you're not just getting from A to B. You're upgrading your entire travel experience. Here's what you can look forward to:
          </p>
          <div className="benefit-card-section container">
            <div className="benefit-card" style={{ "--benefit-card": 4 } as React.CSSProperties}>
              <div className="child">
                <h3 className="subHead">Your Hinjewadi Commute, Solved</h3>
                <p>Our drivers are experts on the Mahalunge-Hinjewadi route. They know the traffic patterns and the shortcuts to help you save time and start your day right.
                </p>
              </div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
            </div>
            <div className="benefit-card" style={{ "--benefit-card": 4 } as React.CSSProperties}>
              <div className="child">
                <h3 className="subHead">Navigate Developing Roads Safely</h3>
                <p>As Mahalunge grows, road conditions can be unpredictable. Our professional drivers are trained to handle all types of roads, ensuring your ride is always safe and smooth.</p>
              </div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
            </div>
            <div className="benefit-card" style={{ "--benefit-card": 4 } as React.CSSProperties}>
              <div className="child">
                <h3 className="subHead">You Can Absolutely Trust Our Drivers</h3>
                <p>We know that trust is everything. That's why every driver on our platform undergoes a thorough police verification and professional assessment. You're in safe hands.</p>
              </div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
            </div>
            <div className="benefit-card" style={{ "--benefit-card": 4 } as React.CSSProperties}>
              <div className="child">
                <h3 className="subHead">Reclaim Your Time</h3>
                <p>Imagine what you could do with the hours you spend driving each week. Let us handle the traffic while you catch up on emails, listen to a podcast, or just enjoy a quiet moment.</p>
              </div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
            </div>
            <div className="benefit-card" style={{ "--benefit-card": 4 } as React.CSSProperties}>
              <div className="child">
                <h3 className="subHead">We're Available Whenever You Need Us</h3>
                <p>Your schedule is unique, and our service reflects that. We are available 24/7, ready to drive for you early in the morning or late at night.</p>
              </div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
            </div>
            <div className="benefit-card" style={{ "--benefit-card": 4 } as React.CSSProperties}>
              <div className="child">
                <h3 className="subHead">Clear, Honest Pricing</h3>
                <p>No hidden costs, no confusing charges. We believe in transparency. You'll know the exact cost of your ride before you even confirm your booking.</p>
              </div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
            </div>
          </div>
          <p className="lightPara text-center pt-5">
            By choosing Driver On Hire in Mahalunge, your daily travelling experiences will be transformed. Reap all these benefits while enhancing your overall quality of life and travel experiences.
          </p>
        </div>
      </section>

      <section className="location_we_cater pune_section_loc layout_padding">
        <div className="container locWeCater">
          <h2 className="text-center headStyle mb-3">We Also Serve All Areas Near Mahalunge</h2>
          <p className="lightPara text-center pb-3">Our network extends throughout your neighbourhood. So whether you're in Mahalunge or a nearby area, a professional driver is always close by.</p>
          <div className="mt-5">
            <div className="row g-5">
              <div className="col-6 col-md-2 col-lg-2"><Link href="/booking-pune/" className="custom-anchor"><img src="/location-icon.svg" alt="location icon" /> Hinjewadi</Link></div>
              <div className="col-6 col-md-2 col-lg-2"><Link href="/booking-pune/" className="custom-anchor"><img src="/location-icon.svg" alt="location icon" /> Balewadi</Link></div>
              <div className="col-6 col-md-2 col-lg-2"><Link href="/booking-pune/" className="custom-anchor"><img src="/location-icon.svg" alt="location icon" /> Baner</Link></div>
              <div className="col-6 col-md-2 col-lg-2"><Link href="/booking-pune/" className="custom-anchor"><img src="/location-icon.svg" alt="location icon" /> Pashan</Link></div>
              <div className="col-6 col-md-2 col-lg-2"><Link href="/booking-pune/" className="custom-anchor"><img src="/location-icon.svg" alt="location icon" /> Wakad</Link></div>
              <div className="col-6 col-md-2 col-lg-2"><Link href="/booking-pune/" className="custom-anchor"><img src="/location-icon.svg" alt="location icon" /> Sus</Link></div>
              <div className="col-12 text-center"><p><b>Note:</b> Wherever you are in Mahalunge or nearby areas, we've got you covered! Book now for stress-free travel.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="ourHappyClients">
        <div className="container">
          <h5 className="text-center headStyle mb-5">Here's What Our Customers Say</h5>
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
              <h2 className="mt-4 mb-3 headStyle text-center">Ready to Book? It's as Easy as This:</h2>
              <p className="text-center pb-3 lightPara">We've made our booking process incredibly straightforward, so you can get a driver without any fuss.</p>
            </div>
            <div className="col-md-6">
              <div className="fixed-col">
                <img src="/Mahalunge.webp" alt="Mahalunge" style={{ overflow: "auto" }} className="img-fluid rounded shadow-sm" />
              </div>
            </div>
            <div className="col-md-6 mt-md-0 mt-3 scrollableDiv">
              <p><b>How It Works:</b></p>
              <ol className="book-a-driver-timeline">
                <li className="timeline-content"><div className="timeline-badge">1</div><b>Visit Our Website or Download the App</b><br />A quick registration is all it takes to get started and see all our available services.</li>
                <li className="timeline-content"><div className="timeline-badge">2</div><b>Tell Us What Service You Need</b><br />Are you looking for a local trip, an outstation journey, or a permanent driver? Simply choose the option that fits your plan.</li>
                <li className="timeline-content"><div className="timeline-badge">3</div><b>Pinpoint Your Location</b><br />Select Pune, and then choose Mahalunge as your specific area.</li>
                <li className="timeline-content"><div className="timeline-badge">4</div><b>Share Your Trip Details</b><br />Let us know your pickup and drop-off points, and whether you need a one-way or round trip.</li>
                <li className="timeline-content"><div className="timeline-badge">5</div><b>Tell Us About Your Car</b><br /><div className="row inner"><div className="col-md-4"><ul><li>Manual</li><li>Hatchback</li><li>SUV</li><li>Sedan Luxury</li></ul></div><div className="col-md-4"><ul><li>Automatic</li><li>Sedan</li><li>Luxury</li><li>SUV Luxury</li></ul></div></div></li>
                <li className="timeline-content"><div className="timeline-badge">6</div><b>Set the Time and Date</b><br />Tell us exactly when you need the driver and for how many hours.</li>
                <li className="timeline-content"><div className="timeline-badge">7</div><b>Confirm Your Booking</b><br />Give your details a quick review, hit confirm, and we'll immediately assign a professional driver for your trip!</li>
              </ol>
              <p><b>Ready to make your travel simpler?</b></p>
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
    title: "Hire a Driver in Mahalunge - For Hinjewadi Commute & Local Travel",
    description:
      "Looking for a driver in Mahalunge? Our verified drivers are ready 24/7 for your daily commute to Hinjewadi, local trips, or weekend travel. Let's make your drive easier.",
    alternates: {
      canonical: "https://www.driveronhire.com/drivers-in-pune/mahalunge/",
    },
  };
}
