import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import YellowSapphireGallery from "./YellowSapphireGallery/YellowSapphireGallery";
import SEO from "../../../SEO";
import "./YellowSapphirePage.css";

const YellowSapphirePage = () => {
  return (
    <>
      {/* SEO for Yellow Sapphire Page */}
      <SEO
        title="Natural Yellow Sapphire (पुखराज) Gemstone | Certified Jupiter Stone | Pateluxe®"
        description="Buy natural yellow sapphire (Pukhraj) gemstones at Pateluxe. Associated with Jupiter, yellow sapphire enhances wisdom, prosperity, financial growth, and positivity. Certified and authentic quality."
        keywords="yellow sapphire gemstone, pukhraj stone, jupiter gemstone, natural yellow sapphire india, certified pukhraj, pukhraj ratna, pateluxe yellow sapphire"
        canonical="https://www.pateluxe.com/products/yellow-sapphire"
      />

      <section className="yellow-sapphire-luxury-page mt-5">
        {/* HERO SPLIT */}
        <div className="yellow-sapphire-hero-split">
          <div className="yellow-sapphire-hero-left">
            <h1 className="yellow-sapphire-hero-title">
              Golden Glow Captured In Every Sapphire
            </h1>
            <p className="yellow-sapphire-hero-subtext">
              Yellow Sapphire has long been cherished as a stone of wisdom,
              prosperity, and optimism. At Pateluxe, we curate premium yellow
              sapphires that reflect our commitment to classic jewels and modern
              luxury. Astrologically, yellow sapphire is associated with Jupiter
              and is believed to enhance knowledge (ज्ञान), financial growth
              (आर्थिक समृद्धि), and positivity (सकारात्मकता).
            </p>
          </div>

          <div className="yellow-sapphire-hero-right">
            <div className="hero-yellow-sapphire-glow">
              <img
                src="https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766831329/YellowSapphireIcon_ryvn5z.png"
                alt="Yellow Sapphire"
              />
            </div>
          </div>
        </div>

        {/* yellow-sapphire RANGE */}
        <div className="yellow-sapphire-range-container">
          <div className="yellow-sapphire-range-text">
            <h2>Your Perfect Yellow Sapphire Awaits</h2>
            <p>
              At Pateluxe, we offer yellow sapphires in
              <strong> all shapes, cuts, sizes, and carat weights, </strong>
              sourced to bring brilliance to every creation.
            </p>
          </div>

          <div className="yellow-sapphire-range-cta">
            <Link to="/enquiry" className="btn-enquiry">
              Enquire Now
            </Link>
            <a
              href="https://wa.me/919821874031"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <FaWhatsapp className="whatsapp-icon" /> Whatsapp Now
            </a>
          </div>
        </div>
        <YellowSapphireGallery />
      </section>
    </>
  );
};

export default YellowSapphirePage;
