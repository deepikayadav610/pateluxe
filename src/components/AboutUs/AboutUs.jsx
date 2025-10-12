import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <section className="aboutus-premium">

            {/* Hero / Our Story */}
            <div className="hero-premium text-center">
                <img src="/image/about-hero.png" alt="Our Story" className="hero-image" />
                <h2 className="hero-title">Our Story</h2>
                <p className="hero-text">
                    Pateluxe is a trusted online destination to buy authentic gemstones, Navratna stones,
                    and healing crystals in India. Built on decades of gemstone expertise and modern digital innovation,
                    Pateluxe unites generations of gemstone knowledge with the convenience of the digital era.
                    Every stone, from Ruby (माणिक - Manik), Yellow Sapphire (पुखराज - Pukhraj), Blue Sapphire (नीलम - Neelam),
                    Emerald (पन्ना - Panna), Diamond (हीरा) to Pearl (मोती - Moti), Coral (मूँगा - Munga), Hessonite (गोमेद - Gomed)
                    and Cat’s Eye (लहसुनिया - Lahasunia), is certified, natural, and ethically sourced.
                    Discover the power of real gemstones and timeless craftsmanship at Pateluxe.
                </p>
            </div>

            {/* Vision & Mission */}
            <div className="container py-5 vision-mission">
                <div className="row align-items-center ">
                    <div className="col-md-6">
                        <img src="/image/about2.png" alt="Vision & Mission" className="about-image" />
                    </div>
                    <div className="col-md-6">
                        <h3 className="about-title">Our Vision</h3>
                        <p className="aboutus-text">
                            Preserving heritage, empowering the future. At Pateluxe, our vision is to be India’s most trusted name for authentic, certified gemstones and healing crystals. We strive to make the timeless beauty and power of natural gemstones accessible to people worldwide.
                        </p>
                        <h3 className="about-title">Our Mission</h3>
                        <p className="aboutus-text">
                            Delivering authenticity, trust, and transparency. Our mission is to bring genuine, ethically sourced gemstones and Navratna stones to every customer through a seamless online experience.
                        </p>
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className="container py-5 core-values">
                <h3 className="section-heading text-center">Core Values</h3>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <ul className="value-list">
                            <li><strong>Authenticity Above All:</strong> Every gemstone is 100% natural, lab-certified, and ethically sourced.</li>
                            <li><strong>Heritage Meets Innovation:</strong> We carry forward decades of expertise while embracing digital innovation.</li>
                            <li><strong>Built on Trust:</strong> Every step is transparent, honest, and guided by integrity.</li>
                            <li><strong>Ethical Sourcing:</strong> Supporting fair trade and sustainable sourcing practices.</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="value-list">
                            <li><strong>Guided by Knowledge:</strong> Experts help you select gemstones that resonate with your energy.</li>
                            <li><strong>Quality Without Compromise:</strong> Rigorous testing ensures unmatched brilliance and authenticity.</li>
                            <li><strong>Relationships Over Transactions:</strong> Long-lasting customer relationships based on trust and care.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="container py-5 why-choose-us">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src="/image/bg-2.png" alt="Why Choose Us" className="about-image" />
                    </div>
                    <div className="col-md-6">
                        <h3 className="section-heading">Why Choose Us?</h3>
                        <p className="aboutus-text">
                            Authenticity. Integrity. Expertise. Pateluxe isn’t just a gemstone store — it’s a legacy of trust and craftsmanship.
                        </p>
                        <ul className="value-list">
                            <li>🕰️ <strong>Decades of Legacy:</strong> Generations of gemstone expertise.</li>
                            <li>✅ <strong>100% Natural & Certified:</strong> Lab-certified gemstones and crystals.</li>
                            <li>💬 <strong>Expert Guidance:</strong> Personalized gemstone recommendations.</li>
                            <li>💠 <strong>Uncompromised Quality:</strong> Handpicked, inspected, and certified stones.</li>
                            <li>🤝 <strong>Trusted Worldwide:</strong> Serving customers globally with honesty and care.</li>
                        </ul>
                        <p className="aboutus-text mt-3"><strong>Pateluxe — Where Every Gemstone Tells a Story of Purity and Trust.</strong></p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AboutUs;
