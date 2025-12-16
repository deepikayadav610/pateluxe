import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./GemstoneCollection.css";

const gemstones = [
  {
    name: "Ruby",
    desc: "Passion & Power",
    color: "linear-gradient(135deg, #ff5f6d, #ffc371)",
    image: "/image/RubyIcon.png",
  },
  {
    name: "Pearl",
    desc: "Purity & Wisdom",
    color: "linear-gradient(135deg, #f8f8f8, #e4e0dc)",
    image: "/image/PearlIcon.png",
  },
  {
    name: "Red Coral",
    desc: "Energy & Vitality",
    color: "linear-gradient(135deg, #ff758c, #ff7eb3)",
    image: "/image/RedCoralIcon.png",
  },
  {
    name: "Emerald",
    desc: "Growth & Harmony",
    color: "linear-gradient(135deg, #56ab2f, #a8e063)",
    image: "/image/EmraldIcon.png",
  },
  {
    name: "Yellow Sapphire",
    desc: "Prosperity & Knowledge",
    color: "linear-gradient(135deg, #f9d423, #ff4e50)",
    image: "/image/YellowSapphireIcon.png",
  },
  {
    name: "Diamond",
    desc: "Clarity & Strength",
    color: "linear-gradient(135deg, #dfe9f3, #ffffff)",
    image: "/image/DiamondIcon.png",
  },
  {
    name: "Blue Sapphire",
    desc: "Focus & Discipline",
    color: "linear-gradient(135deg, #396afc, #2948ff)",
    image: "/image/BlueSapphireIcon.png",
  },
  {
    name: "Hessonite",
    desc: "Confidence & Success",
    color: "linear-gradient(135deg, #ff9966, #ff5e62)",
    image: "/image/HessoniteIcon.png",
  },
  {
    name: "Cat’s Eye",
    desc: "Protection & Intuition",
    color: "linear-gradient(135deg, #bdc3c7, #2c3e50)",
    image: "/image/Cat'sEyeIcon.png",
  },
];

const GemstoneCollection = () => {
  const swiperRef = useRef(null);

  return (
    <section className="gemstone-section">
      <div className="container text-center">
        <h2 className="section-title">Our Exquisite Gemstone Collection</h2>
        <p className="section-subtitle">
          Discover the rare beauty and inner light of each gemstone, where
          elegance meets energy.
        </p>
      </div>

      {/* FULL WIDTH SWIPER */}
      <div
        className="gemstone-swiper-wrapper"
        onMouseEnter={() => swiperRef.current?.autoplay.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay.start()}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop
          speed={900}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={40}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            576: { slidesPerView: 2, spaceBetween: 25 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            992: { slidesPerView: 3, spaceBetween: 35 },
            1200: { slidesPerView: 4, spaceBetween: 40 },
          }}
          className="gemstone-swiper"
        >
          {gemstones.map((gem, i) => (
            <SwiperSlide key={i}>
              <div className="gemstone-card" style={{ background: gem.color }}>
                <div className="gemstone-glass">
                  <div className="gem-icon">
                    <img src={gem.image} alt={gem.name} />
                  </div>
                  <h3>{gem.name}</h3>
                  <p>{gem.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GemstoneCollection;
