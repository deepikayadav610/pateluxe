import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./EmeraldPage.css";

const EmeraldPage = () => {
  return (
    <section className="emerald-luxury-page mt-5">
      {/* HERO SPLIT */}
      <div className="emerald-hero-split">
        <div className="emerald-hero-left">
          <h1 className="emerald-hero-title">Emerald Is Where Elegance Meets Nature</h1>
          <p className="emerald-hero-subtext">
            Known for its vibrant green hue and enduring beauty, emerald
            represents prosperity, balance, and insight. Pateluxe presents
            premium emeralds chosen for their natural brilliance and refined
            elegance. Astrologically, emerald is associated with Mercury and is
            believed to enhance intelligence (बुद्धिमत्ता), communication (संवाद
            क्षमता), and mental clarity (मानसिक स्पष्टता).
          </p>
        </div>

        <div className="emerald-hero-right">
          <div className="hero-emerald-glow">
            <img src="/image/EmraldIcon.png" alt="Emerald" />
          </div>
        </div>
      </div>

      {/* Emerald RANGE */}
      <div className="emerald-range-container">
        <div className="emerald-range-text">
          <h2>Complete Emerald Collection</h2>
          <p>
            At Pateluxe, we offer emeralds in all shapes, cuts, sizes, and carat
            weights, carefully selected to suit both delicate designs and bold
            statement pieces.
          </p>
        </div>

        <div className="emerald-range-cta">
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
    </section>
  );
};

export default EmeraldPage;
