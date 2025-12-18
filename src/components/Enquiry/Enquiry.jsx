import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Enquiry.css";

export default function Enquiry() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Prepare template parameters
    const templateParams = {
      full_name: formRef.current.fullName.value,
      email: formRef.current.email.value,
      phone: formRef.current.phone.value,
      gemstone: formRef.current.gemstone.value,
      carat: formRef.current.carat.value,
      shape: formRef.current.shape.value,
      budget: formRef.current.budget.value,
      certification: formRef.current.certification.value,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_ENQUIRY_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          alert("Something went wrong. Please try again.");
        }
      );
  };
  return (
    <section className="enquiry-wrapper">
      <div className="enquiry-form-box">
        <h2 className="form-title">Enquiry Form</h2>

        <form ref={formRef} onSubmit={sendEmail} className="form-grid">
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Your full name"
              required
            />
          </div>

          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="input-box">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Contact number"
              required
            />
          </div>

          <div className="input-box">
            <label>Gemstone of Interest</label>
            <select name="gemstone" required>
              <option>Ruby</option>
              <option>Pearl</option>
              <option>Red Coral</option>
              <option>Emerald</option>
              <option>Yellow Sapphire</option>
              <option>Diamond</option>
              <option>Blue Sapphire</option>
              <option>Hessonite</option>
              <option>Cat's Eye</option>
            </select>
          </div>

          <div className="input-box">
            <label>Carat Weight / Size (0.10 cents-10 carat)</label>
            <input type="number" name="carat" placeholder="e.g. 3.5" required />
          </div>

          <div className="input-box">
            <label>Shape / Cut</label>
            <select name="shape" required>
              <option>Round</option>
              <option>Oval</option>
              <option>Cushion</option>
              <option>Square</option>
              <option>Rectangle</option>
              <option>Triangle</option>
              <option>Heart</option>
              <option>Spear</option>
            </select>
          </div>

          <div className="input-box">
            <label>Budget Range</label>
            <input
              type="text"
              name="budget"
              placeholder="₹80,000 - ₹3,00,000"
              required
            />
          </div>

          <div className="input-box">
            <label>Certification Required</label>
            <select name="certification" required>
              <option>Yes</option>
              <option>No</option>
            </select>
            <p className="note">*Certification charges will be additional</p>
          </div>

          {/* FORM FOOTER */}
          <div className="form-footer">
            <p className="mandatory-note">* All fields are mandatory</p>

            <button type="submit" className="lux-btn" disabled={loading}>
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>
          </div>
        </form>
        {success && (
          <div className="lux-overlay">
            <div className="lux-modal">
              <div className="lux-icon">✓</div>

              <h3>Enquiry Submitted</h3>
              <p>
                Thank you for reaching out to <strong>Pateluxe</strong>.
                <br />
                Our gemstone specialists will contact you shortly.
              </p>

              <button
                className="lux-close-btn"
                onClick={() => setSuccess(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
