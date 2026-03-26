"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Vishal Shrivastava",
    review:
      "Excellent services. Pilot was very polite, well dressed and smart. Handled vehicle very responsibly and was thorough in Mumbai routes. Charges are reasonable too!",
    rating: 5,
    avatar:
      "https://lh3.googleusercontent.com/a-/AD_cMMQeOZvB76aAbE6Wn-1_JpXnGXSPOLb0BOer1cqgJXv0Dynd=w36-h36-p-rp-mo-br100",
  },
  {
    name: "Kajal Ghose",
    review:
      "I got a great Driver in Parag Ganve. Extremely competent, very polite and cooperative and helpful. I would recommend him to others. The best driver I have got from you in Navi Mumbai.",
    rating: 5,
    avatar:
      "https://lh3.googleusercontent.com/a-/AD_cMMRdk5DmSQCpWSsfs9TL0YaZCVT3hcJu99Dz9L2ew0dZAxz3=w36-h36-p-rp-mo-br100",
  },
  {
    name: "Navin Bhattacharya",
    review:
      "I use driver on hire for my father. Whenever he chooses to visit someone or for his regular needs I get a driver from here. All the drivers so far have been very polite and have taken care of my father. There are no complaints, only compliments. Keep up the good work.",
    rating: 5,
    avatar:
      "https://lh3.googleusercontent.com/a-/AD_cMMSK7KALf960-zxo_9hgZOybYVYPicXp9nuBY3fPn5NSfcH_=w36-h36-p-rp-mo-br100",
  },
  {
    name: "Renuka Nair",
    review:
      "Most of the drivers we hire are good, courteous, and drive well. Quite happy with the services.",
    rating: 5,
    avatar:
      "https://lh3.googleusercontent.com/a-/AD_cMMQM4KbKzZrAYAGx3ViJSUs56zcHQq1-whP28z7zh4Vhairv=w36-h36-p-rp-mo-br100",
  },
  {
    name: "Shilpa Kalsi",
    review:
      "The drivers are reliable and well-behaved. They have a good amount of experience. The charges are reasonable. Happy with the service.",
    rating: 5,
    avatar:
      "https://lh3.googleusercontent.com/a/AAcHTtcwjWd2hjbmEDz4RpAl1EMZbZWhQhlah-S1Q8WP9IKP=w36-h36-p-rp-mo-br100",
  },
  {
    name: "Edwin P Naidu",
    review:
      "Very good person, comes on time, very good nature, neat and clean. Driving is very good. If I could give stars, I would give 10 on 10. I want more drivers like this.",
    rating: 5,
    avatar:
      "https://lh3.googleusercontent.com/a-/AD_cMMTZa9JnZQpZkfwF37lW_X8snA5jVCnEGih-ZZ-uYUadX81w=w36-h36-p-rp-mo-br100",
  },
  {
    name: "Shilpa Taimni",
    review:
      "I have been availing of Drivers on Hire services for the past 7 years. It was EXCELLENT. Rehanuma is the beacon that holds it all together. Fantastic Manager who gives the best service, even today.",
    rating: 5,
    avatar:
      "https://lh3.googleusercontent.com/a-/AD_cMMR9hc9SWtbWkArQzxgqQcVNdPg8toMxTzQiDtSPubBicEE=w108-h108-p-rp-mo-ba2-br100",
  },
  {
    name: "Manasi Joshi Roy",
    review:
      "Have been using their services since a very long time. And we are extremely satisfied with their service & drivers.",
    rating: 5,
    avatar:
      "https://lh3.googleusercontent.com/a-/AD_cMMREuEjbtWg22f2_XeXCiWJ2r5MMZE6lVmAqPxrxXy8efM4=w108-h108-p-rp-mo-br100",
  },
];

const ClientTestimonials = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-left">
                <h2 className="mb-25 wow fadeInUp ds-h2" data-wow-delay=".2s">
                  Our Happy <span className="text-yellow">Clients</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  Hear from our happy clients who trust us to deliver
                  exceptional service every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <div className="container background-wrapper">
          <div className="row p-0 m-0">
            <div className="col-12 p-0 m-0">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 2 },
                }}
                className="mx-md-5"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-card mx-4">
                      <div className="testimonial-user mb-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="testimonial-avatar"
                        />
                        <div>
                          <h5 className="mb-0">{testimonial.name}</h5>
                          <div className="stars">
                            {Array.from({ length: testimonial.rating }).map(
                              (_, i) => (
                                <span key={i}>⭐</span>
                              )
                            )}
                          </div>
                          <span className="verified-customer small">
                            ✅ Verified Customer
                          </span>
                        </div>
                      </div>
                      <p className="testimonial-text">"{testimonial.review}"</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* </div> */}
        </div>

        <style jsx>{`
          .testimonials-section {
            position: relative;
            padding: 10px 0;
          }

          .background-wrapper {
            background: linear-gradient(
              to bottom,
              #ffcc00 50%,
              rgba(241, 241, 241, 1) 50%
            );
            padding: 60px 0;
          }

          .clients-title {
            font-size: 2rem;
            font-weight: bold;
          }

          .testimonial-card {
            background: #fff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
            transition: transform 0.3s ease-in-out;
            height: 270px;
          }

          .testimonial-text {
            font-size: 16px;
            color: #333;
            margin-bottom: 15px;
          }

          .testimonial-user {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
          }

          .testimonial-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
          }

          .stars {
            color: #ffc107;
          }
          /* Swiper custom navigation */
          :global(.swiper-button-prev),
          :global(.swiper-button-next) {
            color: black;
            background: rgba(255, 255, 255, 0.9);
            padding: 5px;
            border-radius: 50%;
            width: 40px; /* Smaller arrow size */
            height: 40px; /* Smaller arrow size */
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px; /* Reduce icon size */
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          }

          /* Reduce Swiper arrow icon size */
          :global(.swiper-button-prev:after),
          :global(.swiper-button-next:after) {
            font-size: 14px !important; /* Ensure smaller arrow icon */
          }

          /* Adjust hover effect */
          :global(.swiper-button-prev:hover),
          :global(.swiper-button-next:hover) {
            background: #ffcc00;
          }
          @media (max-width: 768px) {
            .testimonial-card {
              height: 320px;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default ClientTestimonials;
