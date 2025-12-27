import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import SEO from "../../../SEO";
import "./RubyPage.css";

const RubyPage = () => {
  return (
    <>
    {/* SEO for Ruby Page */}
      <SEO
        title="Natural Ruby (माणिक) Gemstone | Certified Sun Stone | Pateluxe®"
        description="Buy natural ruby (Manik) gemstones at Pateluxe. Associated with the Sun, ruby enhances confidence, leadership, vitality, and authority. Certified, authentic, and premium quality."
        keywords="ruby gemstone, manik stone, sun gemstone, natural ruby india, certified ruby, manik ratna, pateluxe ruby"
        canonical="https://www.pateluxe.com/products/ruby"
      />
      <section className="ruby-luxury-page mt-5">
        {/* HERO SPLIT */}
        <div className="ruby-hero-split">
          <div className="ruby-hero-left">
            <h1 className="ruby-hero-title">
              Ruby Is Where <span>Passion Meets Luxury</span>
            </h1>
            <p className="ruby-hero-subtext">
              Ruby has long been revered as a stone of power, vitality, and
              authority, symbolizing passion and timeless beauty. At Pateluxe,
              we present hand-selected rubies that reflect our commitment to
              classic jewels and modern luxury. Astrologically, ruby is believed
              to strengthen confidence (आत्मविश्वास), leadership (नेतृत्व
              क्षमता), and the life force (जीवन ऊर्जा) associated with the Sun.
            </p>
          </div>

          <div className="ruby-hero-right">
            <div className="hero-ruby-glow">
              <img src="/image/RubyIcon.png" alt="Ruby" />
            </div>
          </div>
        </div>

        {/* RUBY RANGE */}
        <div className="ruby-range-container">
          <div className="ruby-range-text">
            <h2>Our Ruby Range</h2>
            <p>
              At Pateluxe, we offer rubies across
              <strong>
                {" "}
                all shapes, cuts, sizes, and carat weights,{" "}
              </strong>{" "}
              from small accent stones to bold centrepieces, aligning perfectly
              with your design and intention.
            </p>
          </div>

          <div className="ruby-range-cta">
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
    </>
  );
};

export default RubyPage;
