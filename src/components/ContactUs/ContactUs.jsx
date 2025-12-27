import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";
import { FaPhoneAlt, FaEnvelope, FaCheckCircle } from "react-icons/fa";
import SEO from "../SEO";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      user_name: formRef.current.user_name.value,
      user_email: formRef.current.user_email.value,
      user_phone: formRef.current.user_phone.value,
      subject: formRef.current.subject.value,
      message: formRef.current.message.value,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        formRef.current.reset();
        setTimeout(() => setSuccess(false), 4000);
      })
      .catch((error) => {
        setLoading(false);
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      {/* Minimal SEO for Contact Page */}
      <SEO
        title="Contact Pateluxe | Certified Gemstones & Navratna Stones"
        description="Get in touch with Pateluxe. Reach out for inquiries, orders, or guidance on authentic, certified gemstones and Navratna stones."
        keywords="Pateluxe contact, certified gemstones contact, Navratna stones inquiry, gemstone store India contact"
        canonical="https://www.pateluxe.com/contact"
      />
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
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="contact-form-luxury p-4"
              >
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="user_name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="tel"
                      name="user_phone"
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
                    name="user_email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>

                <div className="mb-2">
                  <textarea
                    className="form-control"
                    rows="5"
                    name="message"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <div className="mb-3 ">
                  <small className="text-muted">
                    *All fields are mandatory
                  </small>
                </div>
                <button
                  type="submit"
                  className={`btn btn-luxury ${loading ? "loading" : ""}`}
                  disabled={loading}
                >
                  {loading ? <span className="loader"></span> : "Send Message"}
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
                      <a href="mailto:pateluxe8@gmail.com">
                        pateluxe8@gmail.com
                      </a>
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
        {/* SUCCESS POPUP */}
        {success && (
          <div className="luxury-popup-overlay">
            <div className="luxury-popup">
              <FaCheckCircle className="success-icon" />
              <h3>Message Sent</h3>
              <p>
                Thank you for reaching out. Our team will contact you shortly.
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Contact;
