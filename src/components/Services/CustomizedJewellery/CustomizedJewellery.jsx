import "./CustomizedJewellery.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const CustomizedJewellery = () => {
  return (
    <>
      <section className="custom-jewellery-hero ">
        <div className="custom-jewellery-content">
          <h1>
            Personalized Jewellery,
            <br />
            <span>Shaped by Your Vision.</span>
          </h1>

          <p>
            At Pateluxe, we work closely with you to create jewellery that feels
            truly personal. From selecting the right gemstone to shaping the
            final design, we guide you through every step of the process.
            <br />
            <br />
            Together, we craft every design with care, precision, and a deep
            respect for your vision — reflecting your story and style.
          </p>

          {/* CTA BUTTONS */}
          <div className="custom-jewellery-cta">
            <Link to="/enquiry" className="btn-custom-enquiry">
              Send Enquiry
            </Link>

            <a
              href="https://wa.me/919821874031"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-custom-whatsapp"
            >
              <FaWhatsapp />
              WhatsApp Now
            </a>
          </div>
        </div>

        <div className="custom-jewellery-image">
          <img src="/image/bg-4.png" alt="Customized Jewellery by Pateluxe" />
        </div>
      </section>
    </>
  );
};

export default CustomizedJewellery;
