import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Navbar.css";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`navbar navbar-expand-lg fixed-top ${scrolled ? "bg-nav shadow-sm" : "bg"
                }`}
        >
            <div className="container">
                {/* Brand Logo */}
                <Link
                    className="navbar-brand fw-bold text-gold d-flex align-items-center"
                    to="/"
                >
                    <img src="/image/pateluxe-dark.png" alt="Pateluxe logo" className="" width={150} height={65} />
                </Link>
                {/* Toggle for Mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu Items */}
                <div className="collapse navbar-collapse justify-content-end" id="navMenu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link luxury-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link luxury-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link luxury-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link luxury-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link luxury-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
