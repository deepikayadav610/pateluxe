import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./AboutSection.css";

const images = [
  "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766831310/Gemstone_with_zodiac_Image_t7njvv.png",
  "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766831330/Hand_Image_jfxvjh.png",
];

const AboutSection = () => {
  const [modalImg, setModalImg] = useState(null);

  return (
    <>
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* LEFT SLIDER */}
            <div className="col-lg-5 mb-4 mb-lg-0">
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 1500 }}
                loop
                slidesPerView={1}
                className="luxury-swiper"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="gem-click-wrapper"
                      onClick={() => setModalImg(img)}
                    >
                      <img src={img} alt="" className="gem-image" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* RIGHT CONTENT (UNCHANGED) */}
            <div className="col-lg-6">
              <h2 className="section-title">Find the Beauty in Each Gem.</h2>
              <p className="about-text">
                At Pateluxe, you can see the timeless beauty and rarity of
                expertly crafted gemstones. Every stunning piece is a
                combination of luxury and trust.
              </p>
              <p className="about-text">
                We're excited to showcase our beautiful collection of rare and
                real gemstones at Pateluxe. They're perfect for people who love
                timeless beauty, collectors, and anyone else. Each gemstone is a
                bright sign of our dedication to quality and trust, inviting you
                to explore the amazing beauty that lies ahead. Come along with
                us on this exciting journey of style and discovery!
              </p>

              <Link
                to="/services/customized-jewellery"
                className="btn btn-about"
              >
                Explore Customized Jewellery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE MODAL */}
      {modalImg && (
        <div className="image-modal">
          <span className="close-btn" onClick={() => setModalImg(null)}>
            ×
          </span>

          <img src={modalImg} alt="Gemstone Preview" className="modal-image" />
        </div>
      )}
    </>
  );
};

export default AboutSection;
