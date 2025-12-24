import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import YellowSapphireGallery from "./YellowSapphireGallery/YellowSapphireGallery";
import "./YellowSapphirePage.css";

const YellowSapphirePage = () => {
  return (
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
            <img src="/image/YellowSapphireIcon.png" alt="Yellow Sapphire" />
          </div>
        </div>
      </div>

      {/* yellow-sapphire RANGE */}
      <div className="yellow-sapphire-range-container">
        <div className="yellow-sapphire-range-text">
          <h2>Your Perfect Yellow Sapphire Awaits</h2>
          <p>
            At Pateluxe, we offer yellow sapphires in all shapes, cuts, sizes,
            and carat weights, sourced to bring brilliance to every creation.
          </p>
        </div>

        <div className="yellow-sapphire-range-cta">
          <Link to="/enquiry" className="btn-enquiry">
            Enquiry Now
          </Link>
          <a
            href="https://wa.me/919821874031"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <FaWhatsapp className="whatsapp-icon" /> Whatsapp
          </a>
        </div>
      </div>
      <YellowSapphireGallery />
    </section>
  );
};

export default YellowSapphirePage;
