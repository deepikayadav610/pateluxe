import "./EmeraldGallery.css";
import { useState, useRef, useEffect } from "react";
import { FaImage, FaSyncAlt, FaPlay } from "react-icons/fa";
import { FaVolumeMute, FaVolumeUp, FaExpand } from "react-icons/fa";

const emeralds = [
  {
    id: 1,
    name: "Emerald 1",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766469028/EM-001-F_jogbrj.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/EM-001-B_aap6yt.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/Em-001_te65dh.mp4",
  },
  {
    id: 2,
    name: "Emerald 2",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766469027/EM-002-F_vrggai.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766469028/EM-002-B_rnslc8.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766475147/Em-002_ftimx8.mp4",
  },
  {
    id: 3,
    name: "Emerald 3",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766469026/EM-003-F_ihpkxs.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766469027/EM-003-B_a7ltfx.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766475150/Em-003_wqnn8y.mp4",
  },
  {
    id: 4,
    name: "Emerald 4",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766469024/EM-004-F_aezzza.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766469025/EM-004-B_ffl9ta.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766475146/Em-004_bhgyva.mp4",
  },
  {
    id: 5,
    name: "Emerald 5",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766469025/EM-005-F_jpltaj.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766469023/EM-005-B_j0gpn1.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766475137/Em-005_cs99k8.mp4",
  },
  {
    id: 6,
    name: "Emerald 6",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766469023/EM-006-F_driszd.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766469023/EM-006-B_jtihpr.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766475146/Em-006_zf95z5.mp4",
  },
  {
    id: 7,
    name: "Emerald 7",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766469028/EM-007-F_meytos.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766469022/EM-007-B_a9dqyx.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766475149/Em-007_ropnyc.mp4",
  },
];

const EmeraldGallery = () => {
  return (
    <section className="emerald-gallery">
      {emeralds.map((item) => (
        <EmeraldCard key={item.id} item={item} />
      ))}
    </section>
  );
};

const EmeraldCard = ({ item }) => {
  const [view, setView] = useState("front");

  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="emerald-showcase-card">
      <div className="emerald-media-box">
        {view === "video" ? (
          <>
            <video
              ref={videoRef}
              src={item.video}
              muted={isMuted}
              autoPlay
              loop
              playsInline
            />

            <div className="emerald-video-controls">
              {/* LEFT – Volume */}
              <button className="left" onClick={toggleMute}>
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>

              {/* RIGHT – Fullscreen */}
              <button
                className="right"
                onClick={() => videoRef.current.requestFullscreen()}
              >
                <FaExpand />
              </button>
            </div>
          </>
        ) : (
          <img
            src={view === "front" ? item.frontImg : item.backImg}
            alt={item.name}
          />
        )}
      </div>

      <div className="emerald-info">

        <div className="emerald-controls">
          <button
            className={view === "front" ? "active" : ""}
            onClick={() => setView("front")}
          >
            <FaImage /> Front
          </button>

          <button
            className={view === "back" ? "active" : ""}
            onClick={() => setView("back")}
          >
            <FaSyncAlt /> Back
          </button>

          <button
            className={view === "video" ? "active" : ""}
            onClick={() => setView("video")}
          >
            <FaPlay /> Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmeraldGallery;
