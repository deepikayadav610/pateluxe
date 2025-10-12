import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer text-light pt-5 mt-5">
            <div className="container">
                <div className="row">

                    {/* Quick Links */}
                    <div className="col-md-4">
                        <h5 className="footer-title">Quick Links</h5>
                        <ul className="list-unstyled footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#collections">Collections</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-4 mb-4">
                        <h5 className="footer-title">Contact Us</h5>
                        <p>Email: <a href="mailto:info@pateluxe.com">info@pateluxe.com</a></p>
                        <p>Phone: <a href="tel:+911234567890">+91 123 456 7890</a></p>
                    </div>

                    {/* Social Icons */}
                    <div className="col-md-4 mb-4">
                        <h5 className="footer-title">Follow Us</h5>
                        <div className="d-flex gap-3 social-icons">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaLinkedinIn /></a>
                        </div>
                    </div>

                </div>

                <div className="text-center pt-4 pb-2 footer-bottom">
                    <p className="mb-0">&copy; {new Date().getFullYear()} Pateluxe. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
