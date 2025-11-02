import AboutSection from "./AboutSection/AboutSection.jsx";
import GemstoneCollection from "./GemstoneCollection/GemstoneCollection.jsx";
import HeroCarousel from "./HeroCarousel/HeroCarousel.jsx";
import WhyChoose from "./WhyChoose/WhyChoose.jsx";
import "./Home.css";

function Home() {
    return (
        <>
            <HeroCarousel />
            <GemstoneCollection />
            <AboutSection />
            <WhyChoose />
            <section className="cta-section d-flex align-items-center text-center">
                <div className="container">
                    <h2 className="cta-title mb-3">
                        Your story deserves a one-of-a-kind gemstone.
                    </h2>
                    <p className="cta-subtitle mb-5">
                        Start your journey with Pateluxe right now.
                    </p>
                    <div className="cta-buttons">
                        <a href="#collections" className="btn btn-cta me-3">
                            Explore Collections
                        </a>
                        <a href="#about" className="btn btn-cta-outline">
                            Discover Our Story
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
