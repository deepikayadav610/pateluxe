import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./GemstoneCollection.css";

const gemstones = [
  {
    name: "Ruby (माणिक - Manik)",
    desc: "Passion & Power",
    color: "linear-gradient(135deg, #ff5f6d, #ffc371)",
    image:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766831319/RubyIcon_tal33c.png",
  },
  {
    name: "Diamond  (हीरा)",
    desc: "Clarity & Strength",
    color: "linear-gradient(135deg, #dfe9f3, #ffffff)",
    image:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766831304/DiamondIcon_uvymia.png",
  },
  {
    name: "Emerald  (पन्ना - Panna)",
    desc: "Growth & Harmony",
    color: "linear-gradient(135deg, #56ab2f, #a8e063)",
    image:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766831310/EmraldIcon_d8xof1.png",
  },
  {
    name: "Yellow Sapphire (पुखराज - Pukhraj)",
    desc: "Prosperity & Knowledge",
    color: "linear-gradient(135deg, #f9d423, #ff4e50)",
    image:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766831329/YellowSapphireIcon_ryvn5z.png",
  },
  {
    name: "Blue Sapphire  (नीलम - Neelam)",
    desc: "Focus & Discipline",
    color: "linear-gradient(135deg, #396afc, #2948ff)",
    image:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766831301/BlueSapphireIcon_otzamm.png",
  },
  {
    name: "Pearl (मोती - Moti)",
    desc: "Purity & Wisdom",
    color: "linear-gradient(135deg, #f8f8f8, #e4e0dc)",
    image:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766830820/PearlIcon_ik86pl.png",
  },
  {
    name: "Hessonite (गोमेद - Gomad / Garnet)",
    desc: "Confidence & Success",
    color: "linear-gradient(135deg, #ff9966, #ff5e62)",
    image:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766831307/HessoniteIcon_pyhsxw.png",
  },
  {
    name: "Cat’s Eye (लहसुनिया - Lehsunia)",
    desc: "Protection & Intuition",
    color: "linear-gradient(135deg, #bdc3c7, #2c3e50)",
    image:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766831302/Cat_sEyeIcon_z4hwx7.png",
  },
  {
    name: "Red Coral (मूँगा - Munga)",
    desc: "Energy & Vitality",
    color: "linear-gradient(135deg, #ff758c, #ff7eb3)",
    image:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766831327/RedCoralIcon_mjl53y.png",
  },
];

const GemstoneCollection = () => {
  const swiperRef = useRef(null);

  return (
    <section className="gemstone-section">
      <div className="container text-center">
        <h2 className="gemstone-section-title">
          Our Exquisite Gemstone Collection
        </h2>
        <p className="gemstone-section-subtitle">
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
            delay: 800,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={40}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            576: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            992: { slidesPerView: 4, spaceBetween: 20 },
            1200: { slidesPerView: 5, spaceBetween: 40 },
          }}
          className="gemstone-swiper"
        >
          {gemstones.map((gem, i) => (
            <SwiperSlide key={i}>
              <Link
                to={`/products/${gem.name
                  .split("(")[0]
                  .trim()
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                className="gemstone-card clickable-card"
                style={{ background: gem.color }}
              >
                <div className="gemstone-glass">
                  <div className="gem-icon">
                    <img src={gem.image} alt={gem.name} />
                  </div>
                  <h3 className="gemstone-name">
                    {gem.name.split("(")[0]}
                    <span className="gemstone-alt">
                      ({gem.name.split("(")[1]}
                    </span>
                  </h3>
                  <p>{gem.desc}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GemstoneCollection;
