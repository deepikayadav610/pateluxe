import React from "react";
import { Link } from "react-router-dom";
import "./GemstoneProductCollection.css";

const gemstones = [
  {
    name: "Ruby (माणिक - Manik)",
    desc: "Symbol of passion, confidence & power.",
    color: "linear-gradient(145deg, #ff5f6d, #ffc371)",
    image:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766831319/RubyIcon_tal33c.png",
  },
  {
    name: "Diamond  (हीरा)",
    desc: "Ultimate symbol of purity & strength.",
    color: "linear-gradient(145deg, #e6eef5, #ffffff)",
    image:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766831304/DiamondIcon_uvymia.png",
  },
  {
    name: "Emerald  (पन्ना - Panna)",
    desc: "Stone of harmony, success & growth.",
    color: "linear-gradient(145deg, #56ab2f, #a8e063)",
    image:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766831310/EmraldIcon_d8xof1.png",
  },
  {
    name: "Yellow Sapphire (पुखराज - Pukhraj)",
    desc: "Attracts prosperity, clarity & luck.",
    color: "linear-gradient(145deg, #f9d423, #ff4e50)",
    image:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766831329/YellowSapphireIcon_ryvn5z.png",
  },
  {
    name: "Blue Sapphire  (नीलम - Neelam)",
    desc: "Enhances discipline & mental focus.",
    color: "linear-gradient(145deg, #396afc, #2948ff)",
    image:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766831301/BlueSapphireIcon_otzamm.png",
  },
  {
    name: "Pearl (मोती - Moti)",
    desc: "Represents purity, wisdom & calmness.",
    color: "linear-gradient(145deg, #f9f9f9, #e1dcd4)",
    image:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766830820/PearlIcon_ik86pl.png",
  },
  {
    name: "Hessonite (गोमेद - Gomad / Garnet)",
    desc: "Boosts success, balance & confidence.",
    color: "linear-gradient(145deg, #ff9966, #ff5e62)",
    image:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766831307/HessoniteIcon_pyhsxw.png",
  },
  {
    name: "Cat’s Eye (लहसुनिया - Lehsunia)",
    desc: "Brings protection, clarity & intuition.",
    color: "linear-gradient(145deg, #bdc3c7, #2c3e50)",
    image:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766831302/Cat_sEyeIcon_z4hwx7.png",
  },
  {
    name: "Red Coral (मूँगा - Munga)",
    desc: "Brings strength, vitality & courage.",
    color: "linear-gradient(145deg, #ff758c, #ff7eb3)",
    image:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766831327/RedCoralIcon_mjl53y.png",
  },
];

const GemstoneProductCollection = () => {
  return (
    <section className="product-gemstone-section">
      <div className="container text-center">
        <h2 className="section-title">
          Natural Loose Gemstones For Every Creation
        </h2>
        <p className="section-subtitle">
          At Pateluxe, we offer a carefully curated selection of loose
          gemstones, sourced for their natural beauty, quality, and
          authenticity. Each stone is hand-selected to meet high standards of
          cut, colour, and clarity. Whether for investment, astrology, or fine
          jewellery, our loose gemstones reflect timeless elegance.
        </p>

        <div className="gemstone-grid">
          {gemstones.map((gem, i) => {
            const gemLink = `/products/${gem.name
              .split("(")[0] // take main name before parentheses
              .trim()
              .replace(/\s+/g, "-") // replace spaces with dashes
              .toLowerCase()}`;

            return (
              <Link to={gemLink} key={i} className="gemstone-link">
                <div
                  className="gemstone-card"
                  style={{ background: gem.color }}
                >
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GemstoneProductCollection;
