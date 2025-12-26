import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import BlueSapphireGallery from "./BlueSapphireGallery/BlueSapphireGallery";
import "./BlueSapphirePage.css";

const BlueSapphirePage = () => {
  return (
    <section className="blue-sapphire-luxury-page mt-5">
      {/* HERO SPLIT */}
      <div className="blue-sapphire-hero-split">
        <div className="blue-sapphire-hero-left">
          <h1 className="blue-sapphire-hero-title">
            Dive Into The Depth Of Blue Sapphire.
          </h1>
          <p className="blue-sapphire-hero-subtext">
            Blue Sapphire has long been admired for its deep, captivating hue
            and powerful energy. At Pateluxe, we curate premium blue sapphires
            that reflect our dedication to classic jewels and modern luxury.
            Astrologically, blue sapphire is associated with Saturn and is
            believed to enhance discipline (अनुशासन), focus (एकाग्रता), and
            protection (सुरक्षा).
          </p>
        </div>

        <div className="blue-sapphire-hero-right">
          <div className="hero-blue-sapphire-glow">
            <img src="/image/BlueSapphireIcon.png" alt="Blue Sapphire" />
          </div>
        </div>
      </div>

      {/* blue-sapphire RANGE */}
      <div className="blue-sapphire-range-container">
        <div className="blue-sapphire-range-text">
          <h2>Every Blue Sapphire, Every Choice</h2>
          <p>
            Our range spans all shapes, sizes, cuts, and carats, allowing you to
            select the ideal sapphire for your classic designs.
          </p>
        </div>

        <div className="blue-sapphire-range-cta">
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
      <BlueSapphireGallery />
    </section>
  );
};

export default BlueSapphirePage;
