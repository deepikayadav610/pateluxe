import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import SEO from "../../../SEO";
import "./PearlPage.css";

const PearlPage = () => {
  return (
    <>
     {/* SEO for Pearl Page */}
      <SEO
        title="Natural Pearl (मोती) Gemstone | Certified Moon Stone | Pateluxe®"
        description="Discover natural pearl (Moti) gemstones at Pateluxe. Associated with the Moon, pearls promote peace, emotional balance, and elegance. Ethically sourced and certified."
        keywords="pearl gemstone, moti stone, moon gemstone, natural pearl india, certified pearl, white pearl gemstone, pateluxe pearls"
        canonical="https://www.pateluxe.com/products/pearl"
      />
      
      <section className="pearl-luxury-page mt-5">
        {/* HERO SPLIT */}
        <div className="pearl-hero-split">
          <div className="pearl-hero-left">
            <h1 className="pearl-hero-title">Grace In Its Purest Form</h1>
            <p className="pearl-hero-subtext">
              Pearls have been cherished for centuries as symbols of purity,
              wisdom, and quiet elegance. At Pateluxe, we curate exquisite
              pearls that reflect our dedication to classic jewels and modern
              luxury. Astrologically, pearl is believed to promote emotional
              balance (भावनात्मक संतुलन), inner peace (आंतरिक शांति), and
              calmness (शांतता), and is associated with the Moon.
            </p>
          </div>

          <div className="pearl-hero-right">
            <div className="hero-pearl-glow">
              <img src="/image/PearlIcon.png" alt="Pearl" />
            </div>
          </div>
        </div>

        {/* pearl RANGE */}
        <div className="pearl-range-container">
          <div className="pearl-range-text">
            <h2>Pearl in Every Form</h2>
            <p>
              At Pateluxe, we offer pearls in
              <strong> all shapes, sizes, and natural varieties, </strong> from
              delicate accents to statement centrepieces, thoughtfully selected
              to complement your vision.
            </p>
          </div>

          <div className="pearl-range-cta">
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

export default PearlPage;
