import { useState, useRef, useEffect } from "react";
import { FaImage, FaSyncAlt, FaPlay } from "react-icons/fa";
import { FaVolumeMute, FaVolumeUp, FaExpand } from "react-icons/fa";
import "./GarnetGallery.css";

const garnet = [
  {
    id: 1,
    name: "Garnet 1",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766473756/HS-001-F_nkhbq8.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766473751/HS-001-B_w8eqyx.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766555242/Ys-001_wc2tg9.mp4",
  },
  {
    id: 2,
    name: "Garnet 2",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766473750/HS-002-F_bkgxir.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766473750/HS-002-B_d9egih.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766555236/Ys-002_etoysl.mp4",
  },
];

const GarnetGallery = () => {
  return (
    <section className="garnet-gallery">
      {garnet.map((item) => (
        <GarnetCard key={item.id} item={item} />
      ))}
    </section>
  );
};

const GarnetCard = ({ item }) => {
  const getInitialView = () => {
    if (item.frontImg) return "front";
    if (item.video) return "video";
    if (item.backImg) return "back";
    return null;
  };

  const [view, setView] = useState(getInitialView);

  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if (view === "front" && !item.frontImg) setView(getInitialView());
    if (view === "back" && !item.backImg) setView(getInitialView());
    if (view === "video" && !item.video) setView(getInitialView());
  }, [item, view]);

  return (
    <div className="garnet-showcase-card">
      <div className="garnet-media-box">
        {view === "video" && item.video ? (
          <>
            <video
              ref={videoRef}
              src={item.video}
              muted={isMuted}
              autoPlay
              loop
              playsInline
            />

            <div className="garnet-video-controls">
              <button onClick={toggleMute}>
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>

              <button onClick={() => videoRef.current?.requestFullscreen()}>
                <FaExpand />
              </button>
            </div>
          </>
        ) : (
          <img
            src={
              view === "front"
                ? item.frontImg
                : view === "back"
                ? item.backImg
                : item.frontImg
            }
            alt={item.name}
          />
        )}
      </div>

      <div className="garnet-info">
        <div className="garnet-controls">
          {item.frontImg && (
            <button
              className={view === "front" ? "active" : ""}
              onClick={() => setView("front")}
            >
              <FaImage /> Front
            </button>
          )}

          {item.backImg && (
            <button
              className={view === "back" ? "active" : ""}
              onClick={() => setView("back")}
            >
              <FaSyncAlt /> Back
            </button>
          )}

          {item.video && (
            <button
              className={view === "video" ? "active" : ""}
              onClick={() => setView("video")}
            >
              <FaPlay /> Video
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GarnetGallery;
