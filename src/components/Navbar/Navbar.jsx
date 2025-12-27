import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

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
        className={`navbar navbar-expand-lg fixed-top ${
          scrolled ? "bg-nav shadow-sm" : "bg"
        }`}
      >
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <Link
            className="navbar-brand fw-bold text-gold d-flex align-items-center"
            to="/"
          >
            <img
              src="https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766831316/pateluxe-dark_bhx9qp.png"
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
              <li className="nav-item luxury-dropdown">
                {/* Clickable Product */}
                <Link
                  className="nav-link luxury-link luxury-dropdown-toggle"
                  to="/products"
                >
                  Products
                </Link>

                {/* Dropdown */}
                <ul className="luxury-dropdown-menu">
                  <li>
                    <Link to="/products/ruby">Ruby</Link>
                  </li>
                  <li>
                    <Link to="/products/diamond">Diamond</Link>
                  </li>
                  <li>
                    <Link to="/products/emerald">Emerald</Link>
                  </li>
                  <li>
                    <Link to="/products/yellow-sapphire">Yellow Sapphire</Link>
                  </li>
                  <li>
                    <Link to="/products/blue-sapphire">Blue Sapphire</Link>
                  </li>
                  <li>
                    <Link to="/products/pearl">Pearl</Link>
                  </li>
                  <li>
                    <Link to="/products/hessonite">Hessonite / Garnet</Link>
                  </li>
                  <li>
                    <Link to="/products/cats-eye">Cat’s Eye</Link>
                  </li>
                  <li>
                    <Link to="/products/red-coral">Red Coral</Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item luxury-dropdown">
                <span className="nav-link luxury-link luxury-dropdown-toggle">
                  Services
                </span>

                <ul className="luxury-dropdown-menu">
                  <li>
                    <Link to="/products">Loose Gemstone</Link>
                  </li>
                  <li>
                    <Link to="/services/lot-service">Lot / Bulk Gemstones</Link>
                  </li>
                  <li>
                    <Link to="/services/customized-jewellery">
                      Customized Jewellery
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link luxury-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link luxury-link" to="/enquiry">
                  Enquiry
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
            <Link
              className="nav-link luxury-link"
              to="/"
              onClick={() => setSidebarOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link luxury-link"
              to="/about"
              onClick={() => setSidebarOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li className="nav-item sidebar-item">
            <div
              className="nav-link luxury-link sidebar-dropdown"
              onClick={() => setProductOpen(!productOpen)}
            >
              Products
              <span className={`arrow ${productOpen ? "open" : ""}`}></span>
            </div>

            {productOpen && (
              <ul className="sidebar-submenu">
                <li>
                  <Link
                    to="/products/ruby"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Ruby
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/diamond"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Diamond
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/emerald"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Emerald
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/yellow-sapphire"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Yellow Sapphire
                  </Link>
                </li>

                <li>
                  <Link
                    to="/products/blue-sapphire"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Blue Sapphire
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/pearl"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Pearl
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/hessonite"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Hessonite / Garnet
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/cats-eye"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Cat’s Eye
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/red-coral"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Red Coral
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="nav-item sidebar-item">
            <div
              className="nav-link luxury-link sidebar-dropdown"
              onClick={() => setServiceOpen(!serviceOpen)}
            >
              Services
              <span className={`arrow ${serviceOpen ? "open" : ""}`}></span>
            </div>

            {serviceOpen && (
              <ul className="sidebar-submenu">
                <li>
                  <Link to="/products" onClick={() => setSidebarOpen(false)}>
                    Loose Gemstone
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/lot-service"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Lot / Bulk Gemstones
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/customized-jewellery"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Customized Jewellery
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="nav-item">
            <Link
              className="nav-link luxury-link"
              to="/contact"
              onClick={() => setSidebarOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link luxury-link"
              to="/enquiry"
              onClick={() => setSidebarOpen(false)}
            >
              Enquiry
            </Link>
          </li>
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
