import { useState } from "react";
import { FaTimes, FaPlay } from "react-icons/fa";
import "./LotGallery.css";

const videos = [
  "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1767850108/Lot_1_aq9vik.mp4",
  "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1767850149/Lot_2_ovk7p0.mp4",
  "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1767850121/Lot_3_s5dwma.mp4",
  "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1767850108/Lot_4_pldnnz.mp4",
  "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1767850111/Lot_5_xlkpx3.mp4",
  "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1767850099/Lot_6_wfggry.mp4",
  "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1767951613/Lot7_criegv.mp4",
  "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1767951621/Lot8_jxxqsx.mp4",
];

const LotVideoGallery = () => {
  const [activeVideo, setActiveVideo] = useState("");

  const closeVideo = () => setActiveVideo("");

  return (
    <>
      <section className="lot-video-gallery">
        <h2 className="gallery-title">Premium Gemstone Lot Showcase</h2>

        <div className="gallery-grid container">
          {videos.map((video, idx) => (
            <div
              key={idx}
              className="gallery-card"
              onClick={() => setActiveVideo(video)}
            >
              <video src={video} muted playsInline controls={false} />
              <div className="play-overlay">
                <FaPlay />
              </div>
            </div>
          ))}
        </div>
      </section>

      {activeVideo && (
        <div className="video-modal">
          <div className="video-modal-overlay" onClick={closeVideo}></div>
          <div className="video-modal-content">
            <button className="video-close" onClick={closeVideo}>
              <FaTimes />
            </button>
            <video src={activeVideo} autoPlay playsInline  controls={false} />
          </div>6
        </div>
      )}
    </>
  );
};

export default LotVideoGallery;
