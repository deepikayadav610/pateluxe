import "./BlueSapphireGallery.css";
import { useState, useRef, useEffect } from "react";
import { FaImage, FaSyncAlt, FaPlay } from "react-icons/fa";
import { FaVolumeMute, FaVolumeUp, FaExpand } from "react-icons/fa";

const bluesapphires = [
  {
    id: 1,
    name: "Blue Sapphire 1",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470105/BS-001-F_mzdgbu.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766555364/Bs-002_eqzh9t.mp4",
  },
  {
    id: 2,
    name: "Blue Sapphire 2",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470106/BS-002-F_v7ia9h.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470106/BS-002-B_eltnur.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766555368/Bs-003_mwkael.mp4",
  },
  {
    id: 3,
    name: "Blue Sapphire 3",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470106/BS-003-F_ezcmqe.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470107/BS-003-B_bpcbog.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766555365/Bs-004_vzisbt.mp4",
  },
  {
    id: 4,
    name: "Blue Sapphire 4",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470097/BS-004-F_gfiypl.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470096/BS-004-B_esmqty.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766555369/Bs-005_cu7trn.mp4",
  },
  {
    id: 5,
    name: "Blue Sapphire 5",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470101/BS-005-F_w8jeme.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470101/BS-005-B_k26fpz.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766555378/Bs-006_fv9wsj.mp4",
  },
  {
    id: 6,
    name: "Blue Sapphire 6",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470102/BS-006-F_wdfgzh.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470090/BS-006-B_d0qdab.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766555371/Bs-007_ll3wbb.mp4",
  },
  {
    id: 7,
    name: "Blue Sapphire 7",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470093/BS-007-F_cojycn.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470089/BS-007-B_fjk8vw.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766555378/Bs-008_rtwt8z.mp4",
  },
  {
    id: 8,
    name: "Blue Sapphire 8",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470106/BS-008-F_wvgu9s.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470103/BS-008-B_uqfqbt.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766555380/Bs-010_fmes9d.mp4",
  },
  {
    id: 9,
    name: "Blue Sapphire 9",
    frontImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470104/BS-009-F_iwsmuo.jpg",
    backImg:
      "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1766470104/BS-009-B_qnylgq.jpg",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766555380/Bs-009_yua9lh.mp4",
  },
  {
    id: 10,
    name: "Blue Sapphire 10",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1766555363/Bs-001_vyzosf.mp4",
  },
];

const BlueSapphireGallery = () => {
  return (
    <section className="blue-sapphire-gallery">
      {bluesapphires.map((item) => (
        <BlueSapphireCard key={item.id} item={item} />
      ))}
    </section>
  );
};

const BlueSapphireCard = ({ item }) => {
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
    <div className="blue-sapphire-showcase-card">
      <div className="blue-sapphire-media-box">
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

            <div className="blue-sapphire-video-controls">
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

      <div className="blue-sapphire-info">
        <div className="blue-sapphire-controls">
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

export default BlueSapphireGallery;
