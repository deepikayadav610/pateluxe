import React from "react";
import { Link } from "react-router-dom";
import "./GemstoneProductCollection.css";

const gemstones = [
  {
    name: "Ruby (माणिक - Manik)",
    desc: "Symbol of passion, confidence & power.",
    color: "linear-gradient(145deg, #ff5f6d, #ffc371)",
    image: "/image/RubyIcon.png",
  },
  {
    name: "Diamond  (हीरा)",
    desc: "Ultimate symbol of purity & strength.",
    color: "linear-gradient(145deg, #e6eef5, #ffffff)",
    image: "/image/DiamondIcon.png",
  },
  {
    name: "Emerald  (पन्ना - Panna)",
    desc: "Stone of harmony, success & growth.",
    color: "linear-gradient(145deg, #56ab2f, #a8e063)",
    image: "/image/EmraldIcon.png",
  },
  {
    name: "Yellow Sapphire (पुखराज - Pukhraj)",
    desc: "Attracts prosperity, clarity & luck.",
    color: "linear-gradient(145deg, #f9d423, #ff4e50)",
    image: "/image/YellowSapphireIcon.png",
  },
  {
    name: "Blue Sapphire  (नीलम - Neelam)",
    desc: "Enhances discipline & mental focus.",
    color: "linear-gradient(145deg, #396afc, #2948ff)",
    image: "/image/BlueSapphireIcon.png",
  },
  {
    name: "Pearl (मोती - Moti)",
    desc: "Represents purity, wisdom & calmness.",
    color: "linear-gradient(145deg, #f9f9f9, #e1dcd4)",
    image: "/image/PearlIcon.png",
  },
  {
    name: "Hessonite (गोमेद - Gomad / Garnet)",
    desc: "Boosts success, balance & confidence.",
    color: "linear-gradient(145deg, #ff9966, #ff5e62)",
    image: "/image/HessoniteIcon.png",
  },
  {
    name: "Cat’s Eye (लहसुनिया - Lehsunia)",
    desc: "Brings protection, clarity & intuition.",
    color: "linear-gradient(145deg, #bdc3c7, #2c3e50)",
    image: "/image/Cat'sEyeIcon.png",
  },
  {
    name: "Red Coral (मूँगा - Munga)",
    desc: "Brings strength, vitality & courage.",
    color: "linear-gradient(145deg, #ff758c, #ff7eb3)",
    image: "/image/RedCoralIcon.png",
  },
];

const GemstoneProductCollection = () => {
  return (
    <section className="product-gemstone-section">
      <div className="container text-center">
        <h2 className="section-title">
          Exceptional Gemstones For Extraordinary Creations
        </h2>
        <p className="section-subtitle">
          Explore a curated selection of natural gemstones, chosen for their
          beauty, quality, and timeless appeal. At Pateluxe, each stone reflects
          our commitment to classic jewels and modern luxury. From rare finds to
          everyday elegance, our collection is crafted to suit every design and
          purpose.
        </p>

        <div className="gemstone-grid">
          {gemstones.map((gem, i) => (
            <Link
              to={`/products/${gem.name.split(" ")[0].toLowerCase()}`}
              key={i}
              className="gemstone-link"
            >
              <div className="gemstone-card" style={{ background: gem.color }}>
                <div className="shine"></div>
                <div className="gemstone-glass">
                  <div className="gem-icon">
                    <img src={gem.image} alt={gem.name} loading="lazy" />
                  </div>
                  <h3 className="product-gemstone-name">
                    {gem.name.split("(")[0]}
                    <span className="product-gemstone-alt">
                      ({gem.name.split("(")[1]}
                    </span>
                  </h3>
                  <p>{gem.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GemstoneProductCollection;
