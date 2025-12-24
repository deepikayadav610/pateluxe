import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./AboutSection.css";

const images = [
  "/image/Gemstone with zodiac Image.png",
  "/image/Hand Image.png",
];

const AboutSection = () => {
  const [zoomImg, setZoomImg] = useState(null);

  return (
    <>
      <section className="about-section py-5" id="about">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Slider */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop
                spaceBetween={30}
                slidesPerView={1}
                className="luxury-swiper"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="gem-click-wrapper"
                      onClick={(e) => {
                        e.stopPropagation();
                        setZoomImg(img);
                      }}
                    >
                      <img
                        src={img}
                        alt={`Gemstone ${index + 1}`}
                        className="gem-image"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Right Content */}
            <div className="col-lg-6">
              <h2 className="section-title mb-3">
                Find the Beauty in Each Gem.
              </h2>

              <p className="about-text mb-3">
               At Pateluxe, you can see the timeless beauty and rarity of expertly crafted gemstones. Every stunning piece is a combination of luxury and trust.
              </p>

              <p className="about-text">
                We're excited to showcase our beautiful collection of rare and real gemstones at Pateluxe. They're perfect for people who love timeless beauty, collectors, and anyone else. Each gemstone is a bright sign of our dedication to quality and trust, inviting you to explore the amazing beauty that lies ahead. Come along with us on this exciting journey of style and discovery!

              </p>

              <Link to="/customized-jewellery" className="btn btn-about">
                Explore Customized Jewellery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE ZOOM MODAL */}
      {zoomImg && (
        <div className="image-modal" onClick={() => setZoomImg(null)}>
          <span className="close-btn" onClick={() => setZoomImg(null)}>
            &times;
          </span>
          <img src={zoomImg} alt="Zoomed Gem" className="zoomed-image" />
        </div>
      )}
    </>
  );
};

export default AboutSection;
