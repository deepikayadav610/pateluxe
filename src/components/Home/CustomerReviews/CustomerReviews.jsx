import { useState, useEffect } from "react";
import "./CustomerReviews.css";

const reviews = [
  "What I appreciate about Pateluxe is that they don’t oversell. The gemstones are genuine, well-selected, and suitable for astrological use.",
  "I bought a gemstone for astrological reasons and had a lot of doubts initially. They explained everything patiently and helped me choose the right stone.",
  "We regularly purchase gemstone lots from Pateluxe. The quality remains consistent, and communication is smooth.",
  "I wanted a ring made using my own idea, and Pateluxe executed it beautifully. They kept me updated at every step.",
  "The final jewellery piece turned out even better than I imagined. You can tell they care about craftsmanship.",
  "This was my first time buying from them, and they made it simple and transparent.",
];

const CustomerReviews = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="lux-review-wrap">
      <span className="lux-review-label">Customer Reviews</span>

      <div className="lux-review-slider">
        <span className="lux-quote">“</span>
        {reviews.map((review, i) => (
          <p
            key={i}
            className={`lux-review-text ${i === index ? "active" : ""}`}
          >
            {review}
          </p>
        ))}
      </div>

      <div className="lux-controls">
        <button
          onClick={() =>
            setIndex((index - 1 + reviews.length) % reviews.length)
          }
        >
          ←
        </button>
        <button onClick={() => setIndex((index + 1) % reviews.length)}>
          →
        </button>
      </div>
    </section>
  );
};

export default CustomerReviews;
