import { useState, useRef, useEffect } from "react";
import { FaImage, FaSyncAlt, FaPlay } from "react-icons/fa";
import { FaVolumeMute, FaVolumeUp, FaExpand } from "react-icons/fa";
import "./RedCoralGallery.css";

const redcoral = [
  {
    id: 1,
    name: "Red Coral 1",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766473853/RC-001-F_b3dkmo.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766473853/RC-001-B_ifkscl.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766555472/Rc-001_sgh8rq.mp4",
  },
  {
    id: 2,
    name: "Red Coral 2",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766473854/RC-002-F_advlp6.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766473854/RC-002-B_fe3hdz.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766555471/Rc-002_xfif3f.mp4",
  },
];

const RedCoralGallery = () => {
  return (
    <section className="red-coral-gallery">
      {redcoral.map((item) => (
        <RedCoralCard key={item.id} item={item} />
      ))}
    </section>
  );
};

const RedCoralCard = ({ item }) => {
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
    <div className="red-coral-showcase-card">
      <div className="red-coral-media-box">
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

            <div className="red-coral-video-controls">
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

      <div className="red-coral-info">
        <div className="red-coral-controls">
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

export default RedCoralGallery;
