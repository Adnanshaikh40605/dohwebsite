import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="text-white d-flex align-items-center justify-content-center position-relative"
        style={{
          backgroundImage: `url('/about-banner.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "80vh",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100 opacity-50"
          style={{ background: "#000" }}
        />
        <div className="container text-center position-relative">
          <h1 className="fw-bold text-capitalize">
            India’s First & Only <br /> Professional Driver Agency
          </h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="container py-5">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="headStyle mb-3">Who We Are</h2>
            <p>
              Founded in 2014, Driver on Hire emerged from a vision to transform
              driver services in India. What began as a modest venture with a
              single office and a dedicated team of two has grown into a trusted
              name across Mumbai, Pune, Thane, and neighboring regions. Today,
              backed by the organizational expertise of Obey Jobs Pvt Ltd, we
              operate with 3 offices and a passionate team of over 40
              professionals, delivering seamless driver solutions tailored to
              modern needs.
            </p>
            <p>
              With over <strong>500,000 journeys facilitated</strong>, Driver on
              Hire has become synonymous with reliability. From easing daily
              commutes to empowering road adventures, we’re not just a
              service—we’re your partner in navigating life’s journeys.
            </p>
            <p>
              <strong>Our mission is simple:</strong> To redefine the driver
              hiring experience with trust, convenience, and efficiency.
            </p>
            <p>
              Today, Driver on Hire stands as one of India’s few professional
              driver agencies, helping thousands of customers every day with a
              seamless driving experience.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-5">
        <div className="row align-items-stretch">
          {/* Text Column */}
          <div className="col-md-7 d-flex flex-column justify-content-center">
            <div>
              <h2 className="headStyle mb-3">
                Our Story: From a Small Idea to a Market Leader
              </h2>
              <p>
                The journey of Driver on Hire began in 2014 with just two
                employees and a single office. The idea was born from a simple
                yet pressing issue—finding a reliable driver was difficult,
                time-consuming, and uncertain. While there were many cab service
                providers, there were barely any professional driver service
                providers in Mumbai and surrounding areas.
              </p>
              <p>
                With the ever-growing traffic congestion in Mumbai, more people
                needed drivers, but the process of hiring one was unstructured
                and inconvenient. That’s when we stepped in to bridge the gap
                between customers and trusted drivers.
              </p>
              <p>
                🚀 What started as a small initiative has now grown into a
                thriving company with:
              </p>
              <ul className="mb-2">
                <li>3 Offices across Mumbai & Pune</li>
                <li>A dedicated team of 40+ professionals</li>
                <li>A network of 20,000+ skilled drivers</li>
              </ul>
              <p>
                We’ve transformed driver hiring into a simple, efficient, and
                reliable process. With just a few clicks, you can successfully
                hire a driver. We’ve earned the trust of over 500,000 satisfied
                customers.
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-md-5 d-flex align-items-stretch">
            <div className="w-100 h-100">
              <Image
                src="/team-bg.webp"
                alt="Team"
                width={300}
                height={200}
                className="rounded shadow object-fit-cover w-100 h-100"
                style={{ objectFit: "cover", borderRadius: "0.5rem" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 position-relative bg-light">
        <div className="container">
          <h3 className="text-center mb-5 fw-semibold display-6 text-dark">
            Our Impact in Numbers
          </h3>
          <div className="row text-center justify-content-center g-4">
            {[
              {
                title: "3",
                label: "Offices Across Mumbai & Pune",
                icon: "bi bi-geo-alt",
              },
              {
                title: "5,00,000+",
                label: "Happy Clients",
                icon: "bi bi-emoji-smile",
              },
              {
                title: "20,000+",
                label: "Police Verified Drivers",
                icon: "bi bi-shield-check",
              },
            ].map((item, idx) => (
              <div key={idx} className="col-10 col-sm-6 col-md-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 p-4 hover-zoom transition">
                  <div className="mb-3">
                    <i className={`${item.icon} fs-1 text-primary`}></i>
                  </div>
                  <h2 className="fw-bold display-6 text-dark">{item.title}</h2>
                  <p className="text-secondary small fw-medium">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container py-5">
        <h3 className="headStyle mb-4">Our Core Values</h3>
        <ul className="list-unstyled">
          <li>
            <strong>✔ Trust & Reliability –</strong> Every driver is thoroughly
            verified and experienced to ensure the highest standards of safety.
          </li>
          <li>
            <strong>✔ Customer-Centric Approach –</strong> We prioritize
            customer needs, adapting and evolving to provide the best possible
            service.
          </li>
          <li>
            <strong>✔ Innovation & Technology –</strong> We continuously upgrade
            our systems to offer a seamless driver hiring experience.
          </li>
          <li>
            <strong>✔ Commitment to Safety –</strong> We go the extra mile to
            ensure the security and comfort of both drivers and passengers.
          </li>
        </ul>
      </section>

      {/* Vision for Future */}
      <section className="container py-5">
        <h3 className="headStyle mb-4">Our Vision for the Future</h3>
        <p>
          As we look ahead, our focus is on expanding beyond Mumbai and bringing
          our expertise to more cities across India.
        </p>
        <ul className="list-unstyled">
          {[
            {
              icon: "🏁",
              text: "Scaling operations to cover multiple cities.",
            },
            {
              icon: "⚙",
              text: "Enhancing technology to simplify driver bookings.",
            },
            {
              icon: "💼",
              text: "Empowering drivers with better career opportunities, training and income.",
            },
            {
              icon: "🌟",
              text: "Setting new industry standards for driver professionalism and service excellence.",
            },
          ].map((item, index) => (
            <li key={index} className="d-flex align-items-start mb-2">
              <span
                className="me-2"
                style={{ width: "2rem", display: "inline-block" }}
              >
                {item.icon}
              </span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>

        <p>
          We don’t just want to be a driver agency—we want to be a pioneer in
          redefining mobility services in India.
        </p>
      </section>

      {/* Join Our Journey CTA */}
      <section className="container py-5">
        <h3 className="headStyle mb-4">Join Our Journey</h3>
        <p>
          At Driver on Hire, we are more than just a service—we are a trusted
          mobility partner dedicated to making your travel experience
          effortless.
        </p>
        <p>
          Whether you need a driver for personal, corporate, or special
          occasions, we are here to provide you with the best professionals in
          the industry.
        </p>

        <ul className="list-unstyled">
          {[
            {
              icon: "🔹",
              text: (
                <>
                  Looking for a reliable driver?{" "}
                  <strong>Book one today!</strong>
                </>
              ),
            },
            {
              icon: "🔹",
              text: (
                <>
                  Want to partner with us?{" "}
                  <strong>Join our growing network!</strong>
                </>
              ),
            },
            {
              icon: "🚗",
              text: (
                <>
                  Let's drive towards a future of convenience, safety, and
                  professionalism—together!
                </>
              ),
            },
          ].map((item, index) => (
            <li key={index} className="d-flex align-items-start mb-2">
              <span
                className="me-2"
                style={{ width: "2rem", display: "inline-block" }}
              >
                {item.icon}
              </span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Services Section */}
      <section className="py-5 position-relative about-services bg-secondary">
        <div className="container text-center">
          <h3 className="mb-5 fw-bold display-6 text-white">Our Services</h3>
          <div className="row justify-content-center g-4">
            {[
              { name: "Hourly", icon: "bi-clock" },
              { name: "Daily", icon: "bi-calendar-day" },
              { name: "Permanent", icon: "bi-person-check" },
              { name: "Outstation", icon: "bi-geo-alt" },
              { name: "Night Drivers", icon: "bi-moon-stars" },
            ].map((service, index) => (
              <div key={index} className="col-6 col-md-2">
                <div className="glass-card d-flex flex-column align-items-center justify-content-center p-4 rounded-4 shadow-sm h-100">
                  <div className="icon-wrapper mb-3">
                    <i className={`bi ${service.icon} fs-2`}></i>
                  </div>
                  <span className="text-white">{service.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-white py-4" style={{ background: "#0b2743" }}>
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="text-md-start mb-3 mb-md-0">
            <h4 className="headStyle">
              Need a Driver?
              <br />
              Book Now or Download App
            </h4>
          </div>
          <a
            href="tel:02243439090"
            className="btn btn-warning fw-bold px-4 py-2"
          >
            Call 022-43460900
          </a>
        </div>
      </section>
    </>
  );
}

export function generateMetadata() {
  return {
    title: "About Driver On Hire | Our Journey and Vision",
    description:
      "Founded in 2014 with one office, Driver On Hire is now India’s first professional driver agency, offering innovative, reliable driver solutions.",
    alternates: {
      canonical: "https://www.driveronhire.com/about/",
    },
  };
}
