import React from "react";
import { Carousel } from "react-bootstrap";
import "./HeroCarousel.css";

const HeroCarousel = () => {
    return (
        <section className="hero-carousel">
            <Carousel fade controls={false} indicators={true} interval={4000}>
                {/* Slide 1 */}
                <Carousel.Item>
                    <div
                        className="carousel-bg"
                        style={{
                            backgroundImage: "url('/image/bg-1.png')",
                        }}
                    >
                        <div className="carousel-overlay">
                            <div className="carousel-content text-center text-light">
                                <p className="tagline">Classic Jewels, Modern Luxury.</p>
                                <h1 className="headline">Find the Beauty in Each Gem.</h1>
                                <p className="subline">
                                    At Pateluxe, you can see the timeless beauty and rarity of expertly crafted gemstones.
                                    Every stunning piece is a combination of luxury and trust.
                                </p>
                                <div className="hero-buttons">
                                    <a href="#collections" className="btn btn-light me-3">
                                        Explore Collections
                                    </a>
                                    <a href="#about" className="btn btn-outline-light">
                                        Discover Our Story
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>

                {/* Slide 2 */}
                <Carousel.Item>
                    <div
                        className="carousel-bg"
                        style={{
                            backgroundImage: "url('/image/bg-2.png')",
                        }}
                    >
                        <div className="carousel-overlay">
                            <div className="carousel-content text-center text-light">
                                <p className="tagline">Tradition Improved, Luxury Redefined.</p>
                                <h1 className="headline">Every Gem Tells a Story.</h1>
                                <p className="subline">
                                    Each gemstone reflects a journey of artistry, trust, and timeless sophistication.
                                </p>
                                <div className="hero-buttons">
                                    <a href="#collections" className="btn btn-light me-3">
                                        Explore Collections
                                    </a>
                                    <a href="#about" className="btn btn-outline-light">
                                        Discover Our Story
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>

                {/* Slide 3 */}
                <Carousel.Item>
                    <div
                        className="carousel-bg"
                        style={{
                            backgroundImage: "url('/image/bg-3.png')",
                        }}
                    >
                        <div className="carousel-overlay">
                            <div className="carousel-content text-center text-light">
                                <p className="tagline">Crafting Trust with Every Sparkle.</p>
                                <h1 className="headline">Your Story Deserves a One-of-a-Kind Gem.</h1>
                                <p className="subline">
                                    Discover rare, certified gemstones crafted with passion and purpose.
                                </p>
                                <div className="hero-buttons">
                                    <a href="#collections" className="btn btn-light me-3">
                                        Explore Collections
                                    </a>
                                    <a href="#about" className="btn btn-outline-light">
                                        Discover Our Story
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default HeroCarousel;
