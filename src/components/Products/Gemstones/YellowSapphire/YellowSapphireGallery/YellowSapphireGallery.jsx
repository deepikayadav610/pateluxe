import { useState, useRef, useEffect } from "react";
import { FaImage, FaSyncAlt, FaPlay } from "react-icons/fa";
import { FaVolumeMute, FaVolumeUp, FaExpand } from "react-icons/fa";
import "./YellowSapphireGallery.css";

const yellowsapphires = [
  {
    id: 1,
    name: "Yellow Sapphire 1",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470246/YS-001-F_jni9ww.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470247/YS-001-B_erg1sk.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766555242/Ys-001_wc2tg9.mp4",
  },
  {
    id: 2,
    name: "Yellow Sapphire 2",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470247/YS-002-F_a2tsau.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470248/YS-002-B_kw3rhi.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766555236/Ys-002_etoysl.mp4",
  },
  {
    id: 3,
    name: "Yellow Sapphire 3",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470241/YS-003-F_tvq8t5.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470248/YS-003-B_f7g9tg.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766555228/Ys-003_gfiug5.mp4",
  },
  {
    id: 4,
    name: "Yellow Sapphire 4",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470243/YS-004-F_avmzla.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470242/YS-004-B_kuojvk.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766555229/Ys-004_d34p8t.mp4",
  },
  {
    id: 5,
    name: "Yellow Sapphire 5",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470246/YS-005-F_ofvlsj.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470243/YS-005-B_aaqowk.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766555246/Ys-005_l4k9x1.mp4",
  },
  {
    id: 6,
    name: "Yellow Sapphire 6",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470244/YS-006-F_bzru0v.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470244/YS-006-B_zk7xyf.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766555230/Ys-006_j10zbk.mp4",
  },
  {
    id: 7,
    name: "Yellow Sapphire 7",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470245/YS-007-F_ofgvqa.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766555230/Ys-007_ycgfbr.mp4",
  },
  {
    id: 8,
    name: "Yellow Sapphire 8",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470245/YS-008-F_lltlyx.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470246/YS-008-B_duu0gq.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766555239/Ys-008_umxdo2.mp4",
  },
];

const YellowSapphireGallery = () => {
  return (
    <section className="yellow-sapphire-gallery">
      {yellowsapphires.map((item) => (
        <YellowSapphireCard key={item.id} item={item} />
      ))}
    </section>
  );
};

const YellowSapphireCard = ({ item }) => {
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
    <div className="yellow-sapphire-showcase-card">
      <div className="yellow-sapphire-media-box">
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

            <div className="yellow-sapphire-video-controls">
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

      <div className="yellow-sapphire-info">
        <div className="yellow-sapphire-controls">
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

export default YellowSapphireGallery;
