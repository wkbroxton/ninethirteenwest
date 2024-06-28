import React, { useState, useEffect } from "react";
import "./Gallery1.css"; // Ensure you have this CSS file

const images = [
  "https://images.pexels.com/photos/936097/pexels-photo-936097.jpeg",
  "https://images.pexels.com/photos/1181351/pexels-photo-1181351.jpeg",
  "https://images.pexels.com/photos/936132/pexels-photo-936132.jpeg",

  "https://images.pexels.com/photos/936144/pexels-photo-936144.jpeg",
  "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg",
];

const Gallery1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="gallery1-container">
        <div className="gallery1">
          <img src={images[currentIndex]} alt="Gallery" />
        </div>
      </div>
      <div className="dot-indicator-divider">
        <div className="dot-indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToImage(index)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery1;
