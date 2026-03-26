// Just for deployment
import Link from "next/link";
import ContactForm from "../component/contactForm";

function Contact() {
  return (
    <>
      <section className="contact_section margin-top-bottom">
        <div className="container pt-5">
          <div className="row align-items-center">
            <div className="col-12 col-md-7 col-lg-7">
              <div className="row g-4">
                <div className="col-12">
                  <h1 className="fs-4 fw-bold">Get In Touch</h1>
                  <p>Want to hire a driver or drive for us? We'd love to hear from you! Here's how you can reach us.</p>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="address1">
                    <h5 className="mb-4 fw-bold">Registered Office</h5>
                    <Link
                      href="https://maps.app.goo.gl/UgXrP3YyhFwgm8Zp7"
                      target="_blank"
                    >
                      <div className="d-flex gap-2">
                        <i className="bi bi-pin-map-fill text-dark fs-5"></i>
                        <p>
                          William industry estate office No. 19. 2nd floor SG
                          Barve Marg, Above Sheetal Mithaiwala Kurla West,
                          Mumbai, Maharashtra 400070
                        </p>
                      </div>
                    </Link>
                    <Link href="tel:022 43439099">
                      <div className="d-flex gap-2">
                        <i className="bi bi-telephone-fill text-dark fs-5"></i>
                        <p className="pd-l margin-b">022 - 4343 9090</p>
                      </div>
                    </Link>
                    <Link href="mailto:info@driveronhire.com">
                      <div className="d-flex gap-2">
                        <i className="bi bi-envelope-fill text-dark fs-5"></i>
                        <p className="pd-l margin-b">info@driveronhire.com</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="address2">
                    <h5 className="mb-4 fw-bold">(Branches) Andheri</h5>
                    <Link
                      href="https://goo.gl/maps/VtS1nrC7xmBq2Mpm8"
                      target="_blank"
                    >
                      <div className="d-flex gap-2">
                        <i className="bi bi-pin-map-fill text-dark fs-5"></i>
                        <p>
                          101, 1st Floor, B-wing, Aqsa Palace, Gaothan Lane No.4, Next To Paneri Showroom, Near Andheri Rly. Stn., Andheri (w), Mumbai - 400 058
                        </p>
                      </div>
                    </Link>
                    <Link href="mailto:support@driveronhire.com">
                      <div className="d-flex gap-2">
                        <i className="bi bi-envelope-fill text-dark fs-5"></i>
                        <p className="pd-l margin-b">support@driveronhire.com</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="address4 mb-4">
                    <h5 className="mb-4 fw-bold">Pune Office</h5>
                    <Link
                      href="https://goo.gl/maps/xSSJrx41tCDdgFsa9"
                      target="_blank"
                    >
                      <div className="d-flex gap-2">
                        <i className="bi bi-pin-map-fill text-dark fs-5"></i>
                        <p>
                          114, Bhaskar Colony, Near Krome Mall, Next to Vijay
                          Sales, Solapur Road, Hadapsar, Pune 411013.
                        </p>
                      </div>
                    </Link>
                    <Link href="tel:+91 9625390390">
                      <div className="d-flex gap-2">
                        <i className="bi bi-telephone-fill text-dark fs-5"></i>
                        <p>+91 9625 390 390</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-5 mb-5 contact-form-div p-4">
              <p className="mb-3">
                Are you a driver ?{" "}
                <Link
                  className="text-decoration-underline ms-1"
                  href="/drivers-job"
                >
                  Enquire Here!
                </Link>
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <section className="map_section mt-5">
        <div className="container">
          <div className="row">
            <div className="col12">
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1yOc9zrGA5qCExN2l1NfKEVF3qgPNHjY&amp;ehbc=2E312F"
                width="100%"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

export function generateMetadata() {
  return {
    title: "Contact-Us",
    description:
      "Contact driver on hire for any problem or issue with our service. We will try our best to fix it.",
    alternates: {
      canonical: "https://www.driveronhire.com/contact/",
    },
  };
}
