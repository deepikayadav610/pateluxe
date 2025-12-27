import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import GarnetGallery from "./GarnetGallery/GarnetGallery";
import SEO from "../../../SEO";
import "./GarnetPage.css";

const GarnetPage = () => {
  return (
    <>
      {/* SEO for Garnet / Gomad Page */}
      <SEO
        title="Garnet (गोमेद) Gemstone | Natural Hessonite Stone | Pateluxe®"
        description="Explore premium Garnet (Gomad / Hessonite) gemstones at Pateluxe. Known for courage, clarity, and confidence, our garnets are natural, certified, and ethically sourced."
        keywords="garnet gemstone, gomed stone, hessonite gemstone, rahu gemstone, natural garnet india, certified gomad, pateluxe garnet"
        canonical="https://www.pateluxe.com/products/garnet"
      />
      <section className="garnet-luxury-page mt-5">
        {/* HERO SPLIT */}
        <div className="garnet-hero-split">
          <div className="garnet-hero-left">
            <h1 className="garnet-hero-title">
              Garnet Glows With Energy, Power, And Grace.
            </h1>
            <p className="garnet-hero-subtext">
              Garnet/ Gomad, known for its warm, honey-like glow, has long been
              cherished for its energy and charm. At Pateluxe, we present
              hand-selected garnet stones that reflect our commitment to classic
              jewels and modern luxury. Astrologically, Garnet/Gomad is
              associated with Rahu and is believed to enhance courage (साहस),
              clarity (स्पष्टता), and confidence (आत्मविश्वास).
            </p>
          </div>

          <div className="garnet-hero-right">
            <div className="hero-garnet-glow">
              <img
                src="https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766831307/HessoniteIcon_pyhsxw.png"
                alt="Garnet/ Gomad/ Hessonite"
              />
            </div>
          </div>
        </div>

        {/* garnet RANGE */}
        <div className="garnet-range-container">
          <div className="garnet-range-text">
            <h2>Fiery Elegance in Every Garnet</h2>
            <p>
              Pateluxe offers garnets in
              <strong> all shapes, cuts, sizes, and carats, </strong>
              ensuring you find the perfect stone for every creation.
            </p>
          </div>

          <div className="garnet-range-cta">
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
        <GarnetGallery />
      </section>
    </>
  );
};

export default GarnetPage;
