import { useState, useRef, useEffect } from "react";
import { FaImage, FaSyncAlt, FaPlay } from "react-icons/fa";
import { FaVolumeMute, FaVolumeUp, FaExpand } from "react-icons/fa";
import "./RubyGallery.css";

const ruby = [
  {
    id: 1,
    name: "Ruby 1",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1767850081/Ruby_Final_Video_1_dti8sc.mp4",
  },
  {
    id: 2,
    name: "Ruby 2",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1767850074/Ruby_Final_Video_2_yg0xnk.mp4",
  },
  {
    id: 3,
    name: "Ruby 3",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1767850075/Ruby_Final_Video_3_swete3.mp4",
  },
  {
    id: 4,
    name: "Ruby 4",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1767850108/Lot_1_aq9vik.mp4",
  },
  {
    id: 5,
    name: "Ruby 5",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1767850149/Lot_2_ovk7p0.mp4",
  },
  {
    id: 6,
    name: "Ruby 6",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1767850121/Lot_3_s5dwma.mp4",
  },
  {
    id: 7,
    name: "Ruby 7",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1767850108/Lot_4_pldnnz.mp4",
  },
  {
    id: 8,
    name: "Ruby 8",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1767850111/Lot_5_xlkpx3.mp4",
  },
  {
    id: 9,
    name: "Ruby 9",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1767850099/Lot_6_wfggry.mp4",
  },
  {
    id: 10,
    name: "Ruby 10",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1767951613/Lot7_criegv.mp4",
  },
  {
    id: 11,
    name: "Ruby 11",
    video:
      "https://res.cloudinary.com/dhtrmwxyn/video/upload/q_auto,f_auto/v1767951621/Lot8_jxxqsx.mp4",
  },
];

const RubyGallery = () => {
  return (
    <section className="ruby-gallery">
      {ruby.map((item) => (
        <RubyCard key={item.id} item={item} />
      ))}
    </section>
  );
};

const RubyCard = ({ item }) => {
  const getInitialView = () => {
    if (item.frontImg) return "front";
    if (item.video) return "video";
    if (item.backImg) return "back";
    return null;
  };

  const [view, setView] = useState(getInitialView);

  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openFullscreen = () => {
    if (!videoRef.current) return;

    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }

    setIsFullscreen(true);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      }
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
        videoRef.current?.pause();
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    if (view === "front" && !item.frontImg) setView(getInitialView());
    if (view === "back" && !item.backImg) setView(getInitialView());
    if (view === "video" && !item.video) setView(getInitialView());
  }, [item, view]);

  return (
    <div className="ruby-showcase-card">
      <div className="ruby-media-box">
        {view === "video" && item.video ? (
          <>
            <video
              ref={videoRef}
              src={item.video}
              muted={isMuted}
              autoPlay
              loop
              playsInline
              controls={false}
              controlsList="nodownload noplaybackrate nofullscreen"
            />

            {isFullscreen && (
              <button
                className="blue-sapphire-close-btn"
                onClick={() => document.exitFullscreen()}
              >
                ✕
              </button>
            )}

            <div className="ruby-video-controls">
              <button onClick={toggleMute}>
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>

              <button onClick={openFullscreen}>
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

      <div className="ruby-info">
        <div className="ruby-controls">
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

export default RubyGallery;
