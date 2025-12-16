import React from "react";
import "./Enquiry.css";

export default function Enquiry() {
  return (
    <section className="enquiry-wrapper">
      <div className="enquiry-form-box">
        <h2 className="form-title">Enquiry Form</h2>

        <form className="form-grid">
          <div className="input-box">
            <label>Full Name</label>
            <input type="text" placeholder="Your full name" />
          </div>

          <div className="input-box">
            <label>Email Address</label>
            <input type="email" placeholder="Enter email" />
          </div>

          <div className="input-box">
            <label>Phone Number</label>
            <input type="text" placeholder="Contact number" />
          </div>

          <div className="input-box">
            <label>Gemstone of Interest</label>
            <select>
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
            <input type="number" placeholder="e.g. 3.5" />
          </div>

          <div className="input-box">
            <label>Shape / Cut</label>
            <select>
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
            <input type="text" placeholder="₹80,000 - ₹3,00,000" />
          </div>

          <div className="input-box">
            <label>Certification Required</label>
            <select>
              <option>Yes</option>
              <option>No</option>
            </select>
            <p className="note">*Certification charges will be additional</p>
          </div>
        </form>

        <button className="lux-btn">Submit Enquiry</button>
      </div>
    </section>
  );
}
