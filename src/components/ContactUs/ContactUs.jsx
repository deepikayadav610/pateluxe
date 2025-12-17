import React from "react";
import "./ContactUs.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-luxury">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="luxury-title">Get in Touch</h2>
          <p className="luxury-subtitle">
            Have a question or want to explore our gemstone collection? We’d
            love to hear from you.
          </p>
        </div>

        <div className="row justify-content-center align-items-start g-5">
          {/* Contact Form */}
          <div className="col-md-6">
            <form className="contact-form-luxury p-4">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Mobile Number"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>

              <div className="mb-4">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-luxury">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-5">
            <div className="contact-box">
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <div>
                  <h5>Email</h5>
                  <p>
                    <a href="mailto:pateluxe8@gmail.com">pateluxe8@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="info-item">
                <FaPhoneAlt className="info-icon" />
                <div>
                  <h5>Phone</h5>
                  <p>
                    <a href="tel:+919821874031">+91 9821874031</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
