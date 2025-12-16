import React from "react";
import { Link } from "react-router-dom";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section py-5" id="about">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="about-img-wrapper">
              <img
                src="/image/bg-4.png"
                alt="Pateluxe Gemstones"
                className="img-fluid rounded-3 shadow-sm"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-md-6">
            <h2 className="section-title mb-3">Find the Beauty in Each Gem.</h2>

            <p className="about-text mb-3">
              At Pateluxe, you can see the timeless beauty and rarity of
              expertly crafted gemstones. Every stunning piece is a combination
              of luxury and trust.
            </p>

            <p className="about-text">
              We're excited to showcase our beautiful collection of rare and
              real gemstones at Pateluxe. They're perfect for people who love
              timeless beauty, collectors, and anyone else. Each gemstone is a
              bright sign of our dedication to quality and trust, inviting you
              to explore the amazing beauty that lies ahead. Come along with us
              on this exciting journey of style and discovery!
            </p>
            {/* Button */}
            <Link
              to="/customized-jewellery"
              className="btn btn-about"
            >
              Explore Customized Jewellery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
