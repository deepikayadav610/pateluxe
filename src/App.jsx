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
import PageNotFound from "./components/PageNotFound";

// Gemstones Pages
import RubyPage from "./components/Products/Gemstones/Ruby/RubyPage";
import EmeraldPage from "./components/Products/Gemstones/Emerald/EmeraldPage";
import PearlPage from "./components/Products/Gemstones/Pearl/PearlPage";
import RedCoralPage from "./components/Products/Gemstones/RedCoral/RedCoralPage";
import YellowSapphirePage from "./components/Products/Gemstones/YellowSapphire/YellowSapphirePage";
import DiamondPage from "./components/Products/Gemstones/Diamond/DiamondPage";
import BlueSapphirePage from "./components/Products/Gemstones/BlueSapphire/BlueSapphirePage";
import GarnetPage from "./components/Products/Gemstones/Garnet/GarnetPage";
import CatsEyePage from "./components/Products/Gemstones/CatsEye/CatsEyePage";

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
        <Route path="/products" element={<Products />} />

        {/* Gemstones page */}
        <Route path="/products/ruby" element={<RubyPage />} />
        <Route path="/products/emerald" element={<EmeraldPage />} />
        <Route path="/products/pearl" element={<PearlPage />} />
        <Route path="/products/red-coral" element={<RedCoralPage />} />
        <Route
          path="/products/yellow-sapphire"
          element={<YellowSapphirePage />}
        />
        <Route path="/products/diamond" element={<DiamondPage />} />
        <Route path="/products/blue-sapphire" element={<BlueSapphirePage />} />
        <Route path="/products/hessonite" element={<GarnetPage />} />
        <Route path="/products/cats-eye" element={<CatsEyePage />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
