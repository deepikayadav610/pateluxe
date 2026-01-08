import { useState } from "react";
import "./CustomizedJewelleryGallery.css";
import { FaTimes } from "react-icons/fa";

const images = [
  "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1767803000/Earring_pm6xuv.jpg",
  "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1767803000/Emerald_Necklace_dq4ulq.jpg",
  "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1767803000/Set_1_q8ymbz.jpg",
  "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1767803000/Earring_2_owg0t8.jpg",
  "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1767803000/Nose_Ring_pz4obm.jpg",
  "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1767803000/Diamond_long_Earring_qvqtug.jpg",
  "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1767802999/Set_2_pknj9t.jpg",
  "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1767802999/Ring_3_lweqmd.jpg",
  "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1767802999/Ruby_Ring_jblsqz.jpg",
  "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1767802998/Ring_2_rvn9ik.jpg",
  "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1767802997/Ruby_ring_2_wbk2fp.jpg",
  "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1767802997/Ring_1_r5zh1b.jpg",
  "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1767802997/Mangalsutra_pcsboh.jpg",
  "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1767802997/Pendant_2_zzkvjh.jpg",
  "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1767802996/Ring_5_iytqha.jpg",
  "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1767802996/Heart_pendant_be9fwi.jpg",
  "https://res.cloudinary.com/dhtrmwxyn/image/upload/f_auto,q_auto,w_1600/v1767802996/Ring_4_ursrua.jpg",
];

const CustomizedJewelleryGallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <>
      <section className="luxury-gallery-section">
        <h2 className="luxury-gallery-title">
          Customized Jewellery <span>Gallery</span>
        </h2>
        <p className="luxury-gallery-sub-title">To preserve authenticity, the images you see here are captured by our customers themselves, real moments, real Pateluxe creations.</p>

        <div className="luxury-gallery-grid">
          {images.map((img, index) => (
            <div
              key={index}
              className="luxury-gallery-card"
              onClick={() => setActiveImage(img)}
            >
              <img src={img} alt={`Customized Jewellery ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {activeImage && (
        <div className="luxury-modal" onClick={() => setActiveImage(null)}>
          <button
            className="luxury-modal-close"
            onClick={() => setActiveImage(null)}
          >
            <FaTimes />
          </button>

          <div
            className="luxury-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={activeImage} alt="Customized Jewellery Large View" />
          </div>
        </div>
      )}
    </>
  );
};

export default CustomizedJewelleryGallery;
