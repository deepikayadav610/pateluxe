import React, { useRef, useEffect, useState } from "react";
import "./GemstoneCollection.css";

const gemstones = [
    { name: "Ruby", desc: "Passion & Power", color: "linear-gradient(135deg, #ff5f6d, #ffc371)", image: "/image/RubyIcon.png" },
    { name: "Pearl", desc: "Purity & Wisdom", color: "linear-gradient(135deg, #f8f8f8, #e4e0dc)", image: "/image/PearlIcon.png" },
    { name: "Red Coral", desc: "Energy & Vitality", color: "linear-gradient(135deg, #ff758c, #ff7eb3)", image: "/image/RedCoralIcon.png" },
    { name: "Emerald", desc: "Growth & Harmony", color: "linear-gradient(135deg, #56ab2f, #a8e063)", image: "/image/EmraldIcon.png" },
    { name: "Yellow Sapphire", desc: "Prosperity & Knowledge", color: "linear-gradient(135deg, #f9d423, #ff4e50)", image: "/image/YellowSapphireIcon.png" },
    { name: "Diamond", desc: "Clarity & Strength", color: "linear-gradient(135deg, #dfe9f3, #ffffff)", image: "/image/DiamondIcon.png" },
    { name: "Blue Sapphire", desc: "Focus & Discipline", color: "linear-gradient(135deg, #396afc, #2948ff)", image: "/image/BlueSapphireIcon.png" },
    { name: "Hessonite", desc: "Confidence & Success", color: "linear-gradient(135deg, #ff9966, #ff5e62)", image: "/image/HessoniteIcon.png" },
    { name: "Cat’s Eye", desc: "Protection & Intuition", color: "linear-gradient(135deg, #bdc3c7, #2c3e50)", image: "/image/Cat'sEyeIcon.png" },
];

const GemstoneCollection = () => {
    const sliderRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-slide effect
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const slideInterval = setInterval(() => {
            if (!isHovered) {
                if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
                    slider.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    slider.scrollBy({ left: 300, behavior: "smooth" });
                }
            }
        }, 3000);

        return () => clearInterval(slideInterval);
    }, [isHovered]);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
        <section className="gemstone-section">
            <div className="container text-center">
                <h2 className="section-title">Our Exquisite Gemstone Collection</h2>
                <p className="section-subtitle mb-4">
                    Discover the rare beauty and inner light of each gemstone — where elegance meets energy.
                </p>

                <div
                    className="slider-wrapper"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <button className="slider-btn prev-btn" onClick={scrollLeft}>‹</button>
                    <div className="gemstone-slider" ref={sliderRef}>
                        {gemstones.map((gem, i) => (
                            <div key={i} className="gemstone-card" style={{ background: gem.color }}>
                                <div className="gemstone-glass">
                                    <div className="gem-icon">
                                        <img src={gem.image} alt={gem.name} />
                                    </div>

                                    <h3>{gem.name}</h3>
                                    <p>{gem.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="slider-btn next-btn" onClick={scrollRight}>›</button>
                </div>
            </div>
        </section>
    );
};

export default GemstoneCollection;
