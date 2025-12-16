import React from "react";
import "./StickyContact.css";

const StickyContact = () => {
  return (
    <div className="sticky-contact">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919821874031"
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-btn whatsapp-btn"
      >
        <i className="bi bi-whatsapp"></i>
      </a>

      {/* Call Button */}
      <a href="tel:+919821874031" className="sticky-btn call-btn">
        <i className="bi bi-telephone-fill"></i>
      </a>
    </div>
  );
};

export default StickyContact;
