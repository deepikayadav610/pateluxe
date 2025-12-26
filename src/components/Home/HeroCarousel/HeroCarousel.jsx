import { useRef, useEffect, useState } from "react";
import "./HeroCarousel.css";

const HeroCarousel = () => {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const [active, setActive] = useState(1);

  useEffect(() => {
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;

    const playSecond = () => {
      setActive(2);
      v2.currentTime = 0;
      v2.play();
    };

    const playFirst = () => {
      setActive(1);
      v1.currentTime = 0;
      v1.play();
    };

    v1.addEventListener("ended", playSecond);
    v2.addEventListener("ended", playFirst);

    v1.play();

    return () => {
      v1.removeEventListener("ended", playSecond);
      v2.removeEventListener("ended", playFirst);
    };
  }, []);

  return (
    <section className="hero-video">
      {/* Video 1 */}
      <video
        ref={video1Ref}
        className={`bg-video ${active === 1 ? "active" : ""}`}
        muted
        playsInline
        preload="auto"
      >
        <source src="/video/Video 1.mp4" type="video/mp4" />
      </video>

      {/* Video 2 */}
      <video
        ref={video2Ref}
        className={`bg-video ${active === 2 ? "active" : ""}`}
        muted
        playsInline
        preload="auto"
      >
        <source src="/video/Video 4.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-tagline">Classic Jewels, Modern Luxury.</p>
          <h1 className="hero-heading">Find the Beauty in Each Gem.</h1>

          <div className="hero-actions">
            <a href="/products" className="btn btn-primary-lux">
              Explore Collections
            </a>
            <a href="/about" className="btn btn-outline-lux">
              Discover Our Story
            </a>
          </div>
        </div>
      </div>
    </section>

  );
};

export default HeroCarousel;
