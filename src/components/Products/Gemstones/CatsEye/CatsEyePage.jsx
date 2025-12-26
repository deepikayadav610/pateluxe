import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./CatsEyePage.css";

const CatsEyePage = () => {
  return (
    <section className="cats-eye-luxury-page mt-5">
      {/* HERO SPLIT */}
      <div className="cats-eye-hero-split">
        <div className="cats-eye-hero-left">
          <h1 className="cats-eye-hero-title">
            Lehsunia Reveals Mystery And Elegance.
          </h1>
          <p className="cats-eye-hero-subtext">
            Lehsunia embodies mystery, protection, and clarity, celebrated for
            its captivating glow. At Pateluxe, each stone is chosen to meet our
            standards of luxury, authenticity, and artistry. Astrologically,
            Lehsunia is associated with Ketu and is believed to enhance
            protection (सुरक्षा), intuition (सहजज्ञान), and mental clarity
            (मानसिक स्पष्टता).
          </p>
        </div>

        <div className="cats-eye-hero-right">
          <div className="hero-cats-eye-glow">
            <img src="/image/Cat'sEyeIcon.png" alt="Cats Eye" />
          </div>
        </div>
      </div>

      {/* cats-eye RANGE */}
      <div className="cats-eye-range-container">
        <div className="cats-eye-range-text">
          <h2>Mystery and Elegance in Every Lehsunia</h2>
          <p>
            At Pateluxe, our Cat’s Eye gemstones are available in all shapes,
            cuts, sizes, and carat weights, crafted to add elegance and energy
            to your jewellery.
          </p>
        </div>

        <div className="cats-eye-range-cta">
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

export default CatsEyePage;
