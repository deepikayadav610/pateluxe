import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/ContactUs/ContactUs";
import Enquiry from "./components/Enquiry/Enquiry";
import ScrollToTop from "./components/ScrollToTop";
import Products from "./components/Products/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StickyContact from "./components/StickyComponent/StickyComponent";
import "./App.css";

function App() {
  // useEffect(() => {
  //   const disableRightClick = (e) => e.preventDefault();
  //   document.addEventListener("contextmenu", disableRightClick);

  //   return () => {
  //     document.removeEventListener("contextmenu", disableRightClick);
  //   };
  // }, []);
  // useEffect(() => {
  //   const disableKeys = (e) => {
  //     if (
  //       (e.ctrlKey &&
  //         ["c", "x", "s", "u", "p"].includes(e.key.toLowerCase())) ||
  //       e.key === "F12"
  //     ) {
  //       e.preventDefault();
  //     }
  //   };

  //   document.addEventListener("keydown", disableKeys);
  //   return () => document.removeEventListener("keydown", disableKeys);
  // }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <StickyContact />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/products/*" element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
