import React from "react";
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
                        <h6 className="section-tagline">The Modern Vault of Elegance.</h6>
                        <h2 className="section-title mb-3">Find the Beauty in Each Gem.</h2>

                        <p className="about-text mb-3">
                            At Pateluxe, you can see the timeless beauty and rarity of expertly crafted gemstones.
                            Every stunning piece is a combination of luxury and trust.
                        </p>

                        <p className="about-text">
                            We're excited to showcase our beautiful collection of rare and real gemstones at Pateluxe.
                            They're perfect for people who love timeless beauty, collectors, and anyone else.
                            Each gemstone is a bright sign of our dedication to quality and trust, inviting you to
                            explore the amazing beauty that lies ahead. Come along with us on this exciting journey
                            of style and discovery!
                        </p>

                        <a href="#collections" className="btn btn-about mt-3">
                            Explore Collections
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
