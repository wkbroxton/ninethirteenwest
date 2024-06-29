import React, { useState, useEffect } from "react";
import "./Gallery1.css"; // Ensure you have this CSS file

const images = [
  "https://images.pexels.com/photos/936150/pexels-photo-936150.jpeg",
  "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
  "https://images.pexels.com/photos/936114/pexels-photo-936114.jpeg",
  "https://images.pexels.com/photos/936128/pexels-photo-936128.jpeg",
  "https://images.pexels.com/photos/936122/pexels-photo-936122.jpeg",
  "https://images.pexels.com/photos/1181371/pexels-photo-1181371.jpeg",
  "https://images.pexels.com/photos/3810760/pexels-photo-3810760.jpeg",
  "https://images.pexels.com/photos/3810758/pexels-photo-3810758.jpeg",
  "https://images.pexels.com/photos/3810754/pexels-photo-3810754.jpeg",
  "https://images.pexels.com/photos/3810730/pexels-photo-3810730.jpeg",
  "https://images.pexels.com/photos/3810727/pexels-photo-3810727.jpeg",
  "https://images.pexels.com/photos/936150/pexels-photo-936150.jpeg",
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
