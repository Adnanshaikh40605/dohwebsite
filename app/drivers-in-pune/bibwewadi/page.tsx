import Link from "next/link";
import FaqComponent from "@/app/component/faqs";
import FAQSchema from "@/app/component/FAQSchema";

export default function Bibwewadi() {
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
      <FAQSchema faqs={faqs} pageTitle="Bibwewadi" />
      <section className="pune_section bibwewadi location_inner_section margin-top-bottom">
        <div className="px-md-5 px-3 banner row p-0 m-0 align-items-md-center justify-content-md-start justify-content-center">
          <div className="col-md-6 banner-left">
            <h1 style={{ fontWeight: "500" }}>
                Need a Professional Driver in Bibwewadi? Let's Navigate It For You.
            </h1>
            <p className="mt-4" style={{ fontWeight: "500", color: "rgba(0,0,0,0.6)" }}>
                Are you tired of the heavy traffic on the main road, finding parking near the market, or the long commute across the city? Let us take the wheel. Book a trusted driver for your daily commute, family outings, or a trip to Market Yard.
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
            <h2 className="mb-5 pageHeadStyle">So, Why Choose Driver on Hire in Bibwewadi?</h2>
            <div className="daily-desc lightPara">
              <p>We know Bibwewadi is a wonderful and one of Pune's most established residential areas. It's a place full of life, with great connectivity to key areas like Swargate and Satara Road. But this also means dealing with crowded internal roads and the constant traffic buzz, especially if you're heading towards the city center.</p>
              <p>Your time and peace of mind are what matter most. Whether you're a professional, a student at one of the nearby colleges, or managing a household, your journey should be smooth. That's where we come in. Our local drivers are true experts here. They know every lane from Gangadham to Lake Town and the smartest ways to get you to your destination, helping you avoid stress and save time.</p>
            </div>
          </div>
          <div className="daily-section4">
            <h2 className="mb-5 mt-5 pageHeadStyle text-center">What Kind of Driver Service Can We Help You With Today?</h2>
            <div className="mumbai-service-desc">
              <p className="lightPara pb-3 text-center">Life in a bustling area like Bibwewadi comes with all sorts of travel plans. We've designed our services to be flexible and ready for whatever your day holds.</p>
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
                        <p>Have to run multiple errands, go shopping at Laxmi Road, or have appointments in Camp? You can book a driver by the hour. It's the perfect way to get things done without worrying about parking or driving in traffic.
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
                        <p>Planning a pilgrimage to Jejuri or a relaxing weekend in Mahabaleshwar? Let our experienced drivers handle the highway so you can sit back, relax, and enjoy the trip with your family.</p>
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
                        <p>If your daily routine involves a long commute to IT hubs like Hinjewadi or Magarpatta, let's make it more comfortable for you. A reliable daily driver can turn that stressful travel time into your personal time.</p>
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
                        <p>Need a driver for a specific period? Perhaps for a wedding in the family or to assist guests who are visiting. We provide skilled, professional drivers for all your short-term needs.</p>
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
                        <p>Planning a late dinner in Koregaon Park or catching a late-night movie? Your safety is our top concern. Our 24/7 night driver service ensures you always have a secure ride home.</p>
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
                        <p>For the ultimate convenience, consider a full-time driver. We can help you find a trustworthy professional who understands your family's schedule and becomes a dependable part of your daily life.</p>
                      </div>
                    </Link>
                    <div className="card--border"></div>
                  </div>
                </div>
              </div>
              <p className="text-center lightPara pt-5">
              No matter your destination, we are here to offer a simple and professional driving solution for you in Bibwewadi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mumbai-section">
        <h3 className="mb-5 mt-5 pageHeadStyle text-center">Let's Talk About the Benefits of Hiring a Driver Here</h3>
        <div className="mumbai-desc">
          <p className="lightPara text-center pb-3">
            When you book a driver with us in Bibwewadi, you're choosing a smarter, safer, and more peaceful way to travel. Here's how you benefit:
          </p>
          <div className="benefit-card-section container">
            <div className="benefit-card" style={{ "--benefit-card": 4 } as React.CSSProperties}>
              <div className="child">
                <h3 className="subHead">Master Bibwewadi's Busy Roads</h3>
                <p>Our drivers are experts at navigating the dense traffic and internal lanes of Bibwewadi, ensuring your local travel is always quick and efficient.
                </p>
              </div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
            </div>
            <div className="benefit-card" style={{ "--benefit-card": 4 } as React.CSSProperties}>
              <div className="child">
                <h3 className="subHead">Hassle-Free Market Yard Trips</h3>
                <p>Need to go to Market Yard? Forget the stress of driving and parking in that chaotic environment. Our drivers will handle it all for you.</p>
              </div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
            </div>
            <div className="benefit-card" style={{ "--benefit-card": 4 } as React.CSSProperties}>
              <div className="child">
                <h3 className="subHead">You Can Absolutely Trust Our Drivers</h3>
                <p>We know that letting someone drive your car requires trust. That's why every single driver on our platform is put through a strict police verification and background check.</p>
              </div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
            </div>
            <div className="benefit-card" style={{ "--benefit-card": 4 } as React.CSSProperties}>
              <div className="child">
                <h3 className="subHead">Save Time on Cross-City Commutes</h3>
                <p>Use your travel time productively. Make calls, answer emails, or just relax. Let us handle the long drive to the other side of town.</p>
              </div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
            </div>
            <div className="benefit-card" style={{ "--benefit-card": 4 } as React.CSSProperties}>
              <div className="child">
                <h3 className="subHead">Ready Whenever You Are</h3>
                <p>Your plans can change at any moment. Our service is available 24/7, ready to help with an early morning start or a late-night return.</p>
              </div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
            </div>
            <div className="benefit-card" style={{ "--benefit-card": 4 } as React.CSSProperties}>
              <div className="child">
                <h3 className="subHead">Simple and Honest Pricing</h3>
                <p>We believe in complete transparency. You will always see the full cost of your ride before you confirm. No hidden charges, no last-minute surprises.</p>
              </div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
              <div className="child"></div>
            </div>
          </div>
          <p className="lightPara text-center pt-5">
            By choosing Driver On Hire Bibwewadi, your daily travelling experiences will be transformed. Reap all these benefits while enhancing your overall quality of life and travel experiences.
          </p>
        </div>
      </section>

      <section className="location_we_cater pune_section_loc layout_padding">
        <div className="container locWeCater">
          <h2 className="text-center headStyle mb-3">We Also Serve All Areas Near Bibwewadi</h2>
          <p className="lightPara text-center pb-3">Our extensive network covers all of Bibwewadi and its surrounding neighbourhoods. A professional driver is always just a booking away.</p>
          <div className="mt-5">
            <div className="row g-5">
              <div className="col-6 col-md-2 col-lg-2"><Link href="/booking-pune/" className="custom-anchor"><img src="/location-icon.svg" alt="location icon" /> Katraj</Link></div>
              <div className="col-6 col-md-2 col-lg-2"><Link href="/booking-pune/" className="custom-anchor"><img src="/location-icon.svg" alt="location icon" /> Dhankawadi</Link></div>
              <div className="col-6 col-md-2 col-lg-2"><Link href="/booking-pune/" className="custom-anchor"><img src="/location-icon.svg" alt="location icon" /> Swargate</Link></div>
              <div className="col-6 col-md-2 col-lg-2"><Link href="/booking-pune/" className="custom-anchor"><img src="/location-icon.svg" alt="location icon" /> Market Yard</Link></div>
              <div className="col-6 col-md-2 col-lg-2"><Link href="/booking-pune/" className="custom-anchor"><img src="/location-icon.svg" alt="location icon" /> Salisbury Park</Link></div>
              <div className="col-6 col-md-2 col-lg-2"><Link href="/booking-pune/" className="custom-anchor"><img src="/location-icon.svg" alt="location icon" /> Gultekdi</Link></div>
              <div className="col-12 text-center"><p><b>Note:</b> Wherever you are in Bibwewadi or nearby areas, we've got you covered! Book now for stress-free travel.</p></div>
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
              <p className="text-center pb-3 lightPara">We've made our booking process incredibly simple so you can arrange for a driver in just a few minutes.</p>
            </div>
            <div className="col-md-6">
              <div className="fixed-col">
                <img src="/Bibwewadi.webp" alt="Bibwewadi" style={{ overflow: "auto" }} className="img-fluid rounded shadow-sm" />
              </div>
            </div>
            <div className="col-md-6 mt-md-0 mt-3 scrollableDiv">
              <p><b>How It Works:</b></p>
              <ol className="book-a-driver-timeline">
                <li className="timeline-content"><div className="timeline-badge">1</div><b>Visit Our Website or Download the App</b><br />A quick, one-time registration is all it takes to get full access to our services.</li>
                <li className="timeline-content"><div className="timeline-badge">2</div><b>Tell Us What Service You Need</b><br />Just choose the service that matches your plan—whether it's local, outstation, or permanent.</li>
                <li className="timeline-content"><div className="timeline-badge">3</div><b>Pinpoint Your Location</b><br />Select Pune, and then choose Bibwewadi as your area.</li>
                <li className="timeline-content"><div className="timeline-badge">4</div><b>Share Your Trip Details</b><br />Let us know your pickup and drop-off points, and whether you need a one-way or return trip.</li>
                <li className="timeline-content"><div className="timeline-badge">5</div><b>Tell Us About Your Car</b><br /><div className="row inner"><div className="col-md-4"><ul><li>Manual</li><li>Hatchback</li><li>SUV</li><li>Sedan Luxury</li></ul></div><div className="col-md-4"><ul><li>Automatic</li><li>Sedan</li><li>Luxury</li><li>SUV Luxury</li></ul></div></div></li>
                <li className="timeline-content"><div className="timeline-badge">6</div><b>Set the Time and Date</b><br />Tell us exactly when you need the driver and for how long you'll need them.</li>
                <li className="timeline-content"><div className="timeline-badge">7</div><b>Confirm Your Booking</b><br />Just give all the details a final look, press 'confirm', and we'll assign a professional driver to you right away!</li>
              </ol>
              <p><b>Ready to make your travel from Bibwewadi easier?</b></p>
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
    title: "Hire a Driver in Bibwewadi - For Local & City Commutes",
    description:
      "Need a driver in Bibwewadi? Our verified professionals navigate the busy roads, Market Yard traffic, and city commutes 24/7. Book a safe and reliable ride today.",
    alternates: {
      canonical: "https://www.driveronhire.com/drivers-in-pune/bibwewadi/",
    },
  };
} 