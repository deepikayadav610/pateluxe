import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import RedCoralGallery from "./RedCoralGallery/RedCoralGallery";
import "./RedCoralPage.css";

const RedCoralPage = () => {
  return (
    <section className="red-coral-luxury-page mt-5">
      {/* HERO SPLIT */}
      <div className="red-coral-hero-split">
        <div className="red-coral-hero-left">
          <h1 className="red-coral-hero-title">
            Pure Red Coral With Powerful Energy.
          </h1>
          <p className="red-coral-hero-subtext">
            Red Coral is valued for its vibrant hue and enduring strength,
            symbolizing courage, vitality, and protection. At Pateluxe, we
            sources premium red corals that reflect both tradition and modern
            refinement. Astrologically, red coral is associated with Mars and is
            believed to enhance confidence (आत्मविश्वास), physical energy
            (शारीरिक ऊर्जा), and inner strength (आंतरिक शक्ति).
          </p>
        </div>

        <div className="red-coral-hero-right">
          <div className="hero-red-coral-glow">
            <img src="/image/RedCoralIcon.png" alt="Red Coral" />
          </div>
        </div>
      </div>

      {/* red-coral RANGE */}
      <div className="red-coral-range-container">
        <div className="red-coral-range-text">
          <h2>Red Coral Availability</h2>
          <p>
            Pateluxe provides red coral across all shapes, cuts, sizes, and
            carats, making it easy to find the right stone for your design and
            purpose.
          </p>
        </div>

        <div className="red-coral-range-cta">
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
      <RedCoralGallery />
    </section>
  );
};

export default RedCoralPage;
