import "./LotService.css";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const LotService = () => {
  return (
    <section className="lot-hero ">
      <div className="lot-hero-overlay"></div>

      <div className="lot-hero-content">
        <span className="lot-eyebrow" data-aos="fade-up" data-aos-delay="0">
          Lot / Bulk Gemstones
        </span>

        <h1 className="lot-hero-title">
          Gemstone Lots Curated <br /> For Refined Jewellery Production.
        </h1>

        <p className="lot-hero-subtext">
          Pateluxe offers premium gemstone lots and bulk supplies curated for
          consistency, quality, and reliability. Each lot is carefully selected
          to meet professional standards of colour, cut, clarity, consistency,
          and grading accuracy. Our bulk gemstone service is ideal for
          jewellers, designers, and businesses seeking trusted sourcing at scale
          and long-term business partnerships.
        </p>

        {/* CTA BUTTONS */}
        <div className="lot-hero-cta" data-aos="fade-up" data-aos-delay="450">
          <Link to="/enquiry" className="btn-enquiry">
            Enquire Now
          </Link>

          <a
            href="https://wa.me/919821874031"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <FaWhatsapp /> WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default LotService;
