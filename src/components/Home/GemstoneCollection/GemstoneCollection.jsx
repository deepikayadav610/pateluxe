import React from "react";
import "./GemstoneCollection.css";

const gemstones = [
    { name: "Ruby", desc: "Passion & Power", color: "linear-gradient(135deg, #ff5f6d, #ffc371)" },
    { name: "Pearl", desc: "Purity & Wisdom", color: "linear-gradient(135deg, #f8f8f8, #e4e0dc)" },
    { name: "Red Coral", desc: "Energy & Vitality", color: "linear-gradient(135deg, #ff758c, #ff7eb3)" },
    { name: "Emerald", desc: "Growth & Harmony", color: "linear-gradient(135deg, #56ab2f, #a8e063)" },
    { name: "Yellow Sapphire", desc: "Prosperity & Knowledge", color: "linear-gradient(135deg, #f9d423, #ff4e50)" },
    { name: "Diamond", desc: "Clarity & Strength", color: "linear-gradient(135deg, #dfe9f3, #ffffff)" },
    { name: "Blue Sapphire", desc: "Focus & Discipline", color: "linear-gradient(135deg, #396afc, #2948ff)" },
    { name: "Hessonite", desc: "Confidence & Success", color: "linear-gradient(135deg, #ff9966, #ff5e62)" },
    { name: "Cat’s Eye", desc: "Protection & Intuition", color: "linear-gradient(135deg, #bdc3c7, #2c3e50)" },
];

const GemstoneCollection = () => {
    return (
        <section className="gemstone-section ">
            <div className="container text-center">
                <h2 className="section-title">Our Exquisite Gemstone Collection</h2>
                <p className="section-subtitle mb-4">
                    Discover the rare beauty and inner light of each gemstone — where elegance meets energy.
                </p>

                <div className="gemstone-grid">
                    {gemstones.map((gem, i) => (
                        <div key={i} className="gemstone-card" style={{ background: gem.color }}>
                            <div className="gemstone-glass">
                                <div className="gem-icon">💎</div>
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

export default GemstoneCollection;
