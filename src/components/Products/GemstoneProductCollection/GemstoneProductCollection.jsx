import React from "react";
import "./GemstoneProductCollection.css";

const gemstones = [
    { name: "Ruby", desc: "Symbol of passion, confidence & power.", color: "linear-gradient(145deg, #ff5f6d, #ffc371)", image: "/image/RubyIcon.png" },
    { name: "Pearl", desc: "Represents purity, wisdom & calmness.", color: "linear-gradient(145deg, #f9f9f9, #e1dcd4)", image: "/image/PearlIcon.png" },
    { name: "Red Coral", desc: "Brings strength, vitality & courage.", color: "linear-gradient(145deg, #ff758c, #ff7eb3)", image: "/image/RedCoralIcon.png" },
    { name: "Emerald", desc: "Stone of harmony, success & growth.", color: "linear-gradient(145deg, #56ab2f, #a8e063)", image: "/image/EmraldIcon.png" },
    { name: "Yellow Sapphire", desc: "Attracts prosperity, clarity & luck.", color: "linear-gradient(145deg, #f9d423, #ff4e50)", image: "/image/YellowSapphireIcon.png" },
    { name: "Diamond", desc: "Ultimate symbol of purity & strength.", color: "linear-gradient(145deg, #e6eef5, #ffffff)", image: "/image/DiamondIcon.png" },
    { name: "Blue Sapphire", desc: "Enhances discipline & mental focus.", color: "linear-gradient(145deg, #396afc, #2948ff)", image: "/image/BlueSapphireIcon.png" },
    { name: "Hessonite", desc: "Boosts success, balance & confidence.", color: "linear-gradient(145deg, #ff9966, #ff5e62)", image: "/image/HessoniteIcon.png" },
    { name: "Cat’s Eye", desc: "Brings protection, clarity & intuition.", color: "linear-gradient(145deg, #bdc3c7, #2c3e50)", image: "/image/Cat'sEyeIcon.png" },
];

const GemstoneProductCollection = () => {
    return (
        <section className="gemstone-section">
            <div className="container text-center">

                <h2 className="section-title">Premium Gemstone Collection</h2>
                <p className="section-subtitle">
                    Discover rare gemstones crafted to perfection. Every piece reflects elegance, luxury, and natural brilliance — curated exclusively for those who value sophistication.
                </p>

                <div className="gemstone-grid">
                    {gemstones.map((gem, i) => (
                        <div key={i} className="gemstone-card" style={{ background: gem.color }}>
                            <div className="shine"></div>

                            <div className="gemstone-glass">
                                <div className="gem-icon">
                                    <img src={gem.image} alt={gem.name} loading="lazy" />
                                </div>
                                <h3>{gem.name}</h3>
                                <p>{gem.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default GemstoneProductCollection;
