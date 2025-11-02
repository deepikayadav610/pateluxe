import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Detect Scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close sidebar when clicking outside it
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                sidebarOpen &&
                !e.target.closest(".luxury-sidebar") &&
                !e.target.closest(".luxury-menu-btn")
            ) {
                setSidebarOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [sidebarOpen]);

    return (
        <>
            <nav
                className={`navbar navbar-expand-lg fixed-top ${scrolled ? "bg-nav shadow-sm" : "bg"
                    }`}
            >
                <div className="container d-flex justify-content-between align-items-center">
                    {/* Logo */}
                    <Link
                        className="navbar-brand fw-bold text-gold d-flex align-items-center"
                        to="/"
                    >
                        <img
                            src="/image/pateluxe-dark.png"
                            alt="Pateluxe logo"
                            width={150}
                            height={65}
                        />
                    </Link>

                    {/* Sidebar Toggle */}
                    <button
                        className="luxury-menu-btn"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <span className="luxury-line"></span>
                        <span className="luxury-line"></span>
                        <span className="luxury-line"></span>
                    </button>

                    {/* Desktop Menu */}
                    <div className="collapse navbar-collapse justify-content-end d-none d-lg-flex">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link luxury-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link luxury-link" to="/about">
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link luxury-link" to="/products">
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link luxury-link" to="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link luxury-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Luxury Sidebar */}
            <div className={`luxury-sidebar ${sidebarOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={() => setSidebarOpen(false)}>
                    &times;
                </button>
                <ul className="sidebar-links">
                    <li className="nav-item">
                        <Link className="nav-link luxury-link" to="/" onClick={() => setSidebarOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link luxury-link" to="/about" onClick={() => setSidebarOpen(false)}>
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link luxury-link" to="/products" onClick={() => setSidebarOpen(false)}>
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link luxury-link" to="/blog" onClick={() => setSidebarOpen(false)}>
                            Blog
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link luxury-link" to="/contact" onClick={() => setSidebarOpen(false)}>
                            Contact
                        </Link>
                    </li>
                    {/* {["Home", "About Us", "Products", "Blog", "Contact"].map(
                        (item, idx) => (
                            <li key={idx}>
                                <Link
                                    to={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "")}`}
                                    onClick={() => setSidebarOpen(false)}
                                >
                                    {item}
                                </Link>
                            </li>
                        )
                    )} */}
                </ul>
            </div>

            {/* Overlay */}
            {sidebarOpen && (
                <div
                    className="luxury-overlay"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
        </>
    );
}

export default Navbar;
