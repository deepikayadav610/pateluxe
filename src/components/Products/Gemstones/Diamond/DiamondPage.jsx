import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./DiamondPage.css";

const DiamondPage = () => {
  return (
    <section className="diamond-luxury-page mt-5">
      {/* HERO SPLIT */}
      <div className="diamond-hero-split">
        <div className="diamond-hero-left">
          <h1 className="diamond-hero-title">Diamond Is The Crown Of Gems</h1>
          <p className="diamond-hero-subtext">
            Diamond has long been revered as a symbol of strength, clarity, and
            timeless beauty. At Pateluxe, we curate premium diamonds that
            reflect our commitment to classic jewels and modern luxury.
            Astrologically, diamond is associated with the Venus and is believed
            to enhance harmony (संतुलन), love (प्रेम), beauty (सौंदर्य), and
            material comfort (सामग्री सुख).
          </p>
        </div>

        <div className="diamond-hero-right">
          <div className="hero-diamond-glow">
            <img src="/image/DiamondIcon.png" alt="Diamond" />
          </div>
        </div>
      </div>

      {/* diamond RANGE */}
      <div className="diamond-range-container">
        <div className="diamond-range-text">
          <h2>Brilliance in Every Diamond</h2>
          <p>
            At Pateluxe, our diamonds are available in
            <strong> all shapes, cuts, sizes, and carat weights, </strong>
            perfect for timeless classics and bold statement pieces.
          </p>
        </div>

        <div className="diamond-range-cta">
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
    </section>
  );
};

export default DiamondPage;
