import React, { useState } from "react";
import "./CentralInformationSection.css";

const CentralInformationSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="video-text-container">
      {/* Left Section: Text */}
      <div className="text-section">
        <h2>Discover Amazing Destinations</h2>
        <p>
          Explore the world and experience the beauty of nature, vibrant cities, and serene landscapes. Tourism brings you closer to new cultures and unforgettable experiences. Whether you're planning a peaceful getaway or an adventurous expedition, there's something for everyone to enjoy. 
          <br />
          <br />
          <button className="click-me-button">Click Me</button>
        </p>
      </div>

      {/* Right Section: Video */}
      <div className="video-section">
        {isPlaying ? (
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            src="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
            alt="Video Thumbnail"
            className="video-thumbnail"
            onClick={handleVideoPlay}
          />
        )}
      </div>
    </div>
  );
};

export default CentralInformationSection;
