import AboutSection from "./AboutSection/AboutSection.jsx";
import GemstoneCollection from "./GemstoneCollection/GemstoneCollection.jsx";
import HeroCarousel from "./HeroCarousel/HeroCarousel.jsx";
import WhyChoose from "./WhyChoose/WhyChoose.jsx";
import CustomerReviews from "./CustomerReviews/CustomerReviews.jsx";
import SEO from "../SEO.jsx";
import "./Home.css";

function Home() {
  return (
    <>
      {/* Minimal SEO */}
      <SEO
        title="Pateluxe® | Classic Jewels, Modern Luxury | Certified Gemstones"
        description="Pateluxe offers authentic, certified gemstones and Navratna stones including Ruby, Emerald, Blue Sapphire, Yellow Sapphire, Diamond & more. Where tradition meets modern luxury."
        keywords="Pateluxe gemstones, navratna stones, 9 ratna gemstones, certified gemstones India, ruby gemstone, blue sapphire, yellow sapphire"
        canonical="https://www.pateluxe.com/"
      />
      <HeroCarousel />
      <GemstoneCollection />
      <AboutSection />
      <WhyChoose />
      <section className="cta-section d-flex align-items-center text-center mb-5">
        <div className="container">
          <h2 className="cta-title mb-3">
            Your story deserves a one-of-a-kind gemstone.
          </h2>
          <p className="cta-subtitle mb-5">
            Start your journey with Pateluxe right now.
          </p>
          <div className="cta-buttons">
            <a href="/products" className="btn btn-cta me-3">
              Explore Collections
            </a>
            <a href="/about" className="btn btn-cta-outline">
              Discover Our Story
            </a>
          </div>
        </div>
      </section>
      <CustomerReviews />
    </>
  );
}

export default Home;
