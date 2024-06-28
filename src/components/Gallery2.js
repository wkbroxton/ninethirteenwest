import React from "react";
import "./Gallery2.css"; // Ensure this CSS file is created

const images = [
  "https://images.pexels.com/photos/936150/pexels-photo-936150.jpeg",
  "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
  "https://images.pexels.com/photos/936114/pexels-photo-936114.jpeg",
  "https://images.pexels.com/photos/936128/pexels-photo-936128.jpeg",
  "https://images.pexels.com/photos/936122/pexels-photo-936122.jpeg",
  "https://images.pexels.com/photos/1181371/pexels-photo-1181371.jpeg",
];

const Gallery2 = () => {
  return (
    <div className="gallery2-container">
      <div className="gallery2">
        {images.concat(images).map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery2;
