import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./HeroCarousel.css";

const slides = [
    {
        image: "/image/homecarousel1.png",
    },
    {
        image: "/image/525b3361-ddee-4258-a428-dc1009430f6e.png",
    },
    {
        image: "/image/35bac178-7289-4127-81fc-cca4be526351.png",
    },
];

const HeroCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const prevSlide = () => {
        setIndex(index === 0 ? slides.length - 1 : index - 1);
    };

    const nextSlide = () => {
        setIndex(index === slides.length - 1 ? 0 : index + 1);
    };

    return (
        <section className="hero-carousel position-relative">
            {/* Carousel Backgrounds */}
            <Carousel fade controls={false} indicators={false} interval={4000} activeIndex={index} onSelect={handleSelect}>
                {slides.map((slide, i) => (
                    <Carousel.Item key={i}>
                        <div
                            className="carousel-bg"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        ></div>
                    </Carousel.Item>
                ))}
            </Carousel>

            {/* Overlay Content */}
            <div className="carousel-overlay">
                <div className="carousel-content text-center text-light">
                    <p className="tagline">Classic Jewels, Modern Luxury.</p>
                    <h1 className="headline">Find the Beauty in Each Gem.</h1>

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

            {/* Always Visible Custom Indicators */}
            <div className="carousel-indicators-custom">
                <button className="nav-arrow left" onClick={prevSlide}>
                    <span>❮</span>
                </button>

                <div className="indicator-circles">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`circle-indicator ${i === index ? "active" : ""}`}
                        >
                            <div className="inner-glow"></div>
                        </div>
                    ))}
                </div>

                <button className="nav-arrow right" onClick={nextSlide}>
                    <span>❯</span>
                </button>
            </div>
        </section>
    );
};

export default HeroCarousel;
