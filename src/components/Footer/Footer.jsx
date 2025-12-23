import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer text-light pt-5 ">
      <div className="footer-overlay"></div>

      <div className="container position-relative">
        <div className="row gy-4">
          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="footer-title text-center">Quick Links</h5>

            <ul className="footer-links-layout">
              <li className="home">
                <a href="/">Home</a>
              </li>
              <li className="product">
                <a href="/products">Product</a>
              </li>
              <li className="contact">
                <a href="/contact">Contact Us</a>
              </li>

              <li className="collection">
                <a href="/products">Collection</a>
              </li>
              <li className="services">
                <a href="/services">Services</a>
              </li>
              <li className="enquiry">
                <a href="/enquiry">Enquiry</a>
              </li>

              <li className="about">
                <a href="/about">About Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h5 className="footer-title">Get in Touch</h5>
            <p className="text-center">
              Email:
              <a href="mailto:pateluxe8@gmail.com"> pateluxe8@gmail.com</a>
            </p>
            <p className="text-center">
              Phone: <a href="tel:+919821874031">+91 9821874031</a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="col-md-4">
            <h5 className="footer-title">Follow Us</h5>
            <div className="d-flex justify-content-center gap-3 social-icons">
              <a href="#" className="text-center">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/pateluxe_/?utm_source=ig_web_button_share_sheet" className="text-center">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="text-center pt-3 footer-bottom">
          <p className="mb-0">
            &copy; {new Date().getFullYear()}{" "}
            <span className="brand-name">Pateluxe</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
