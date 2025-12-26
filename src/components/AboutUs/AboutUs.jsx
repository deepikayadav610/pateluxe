import React from "react";
import {
  FaGem,
  FaCertificate,
  FaHandsHelping,
  FaGlobe,
  FaHistory,
} from "react-icons/fa";
import "./AboutUs.css";

const AboutUs = () => {
  const features = [
    {
      icon: <FaHistory />,
      title: "Decades of Legacy",
      desc: "Generations of gemstone expertise.",
    },
    {
      icon: <FaCertificate />,
      title: "100% Natural & Certified",
      desc: "Lab-certified gemstones and crystals.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Expert Guidance",
      desc: "Personalized gemstone recommendations.",
    },
    {
      icon: <FaGem />,
      title: "Uncompromised Quality",
      desc: "Handpicked, inspected, and certified stones.",
    },
    {
      icon: <FaGlobe />,
      title: "Trusted Worldwide",
      desc: "Serving customers globally with honesty and care.",
    },
  ];
  return (
    <section className="aboutus-premium">
      {/* Hero / Our Story */}
      {/* Our Story – Luxury Hero */}
      <section className="story-hero">
        <div className="story-bg">
          <img src="/image/homecarousel1.png" alt="Pateluxe Our Story" />
        </div>

        <div className="story-content">
          <h2 className="story-title">Our Story</h2>

          <div className="story-divider"></div>

          <p className="story-text">
            Pateluxe is a trusted online destination to buy authentic gemstones,
            Navratna stones, and healing crystals in India. Built on decades of
            gemstone expertise and modern digital innovation, Pateluxe unites
            generations of gemstone knowledge with the convenience of the
            digital era.
            <br />
            <br />
            Every stone, from Ruby (माणिक - Manik), Yellow Sapphire (पुखराज -
            Pukhraj), Blue Sapphire (नीलम - Neelam), Emerald (पन्ना - Panna),
            Diamond (हीरा) to Pearl (मोती - Moti), Coral (मूँगा - Munga),
            Hessonite (गोमेद - Gomed) and Cat’s Eye (लहसुनिया - Lahasunia), is
            certified, natural, and ethically sourced. Whether you seek
            astrological gemstones, spiritual healing crystals, or custom
            gemstone jewelry, Pateluxe ensures authenticity, transparency, and
            satisfaction. Discover the power of real gemstones and timeless
            craftsmanship Pateluxe, where tradition meets trust.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us py-5">
        <div className="container text-center">
          <h3 className="section-heading mb-4">Why Choose Us?</h3>
          <p className="intro-text mb-5">
            Authenticity. Integrity. Expertise. <br />
            Pateluxe isn’t just a gemstone store, it’s a legacy of trust and
            craftsmanship.
          </p>

          <div className="row justify-content-center g-4">
            {features.map((item, index) => (
              <div key={index} className="col-md-4 col-sm-6">
                <div className="feature-card shadow-sm">
                  <div className="icon-circle">{item.icon}</div>
                  <h5 className="feature-title">{item.title}</h5>
                  <p className="feature-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="aboutus-text mt-5 pt-3 fw-bold">
            Pateluxe, Where Every Gemstone Tells a Story of Purity and Trust.
          </p>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
