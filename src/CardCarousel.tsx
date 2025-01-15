import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./CardCarousel.css";

// Import the trips data (Assuming you have a local JSON file)
import tripsData from "./trips.json"; // Adjust the path ast needed

const CardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [dragDistance, setDragDistance] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Fetch the trips data from the trips.json
  const cards = tripsData;

  // Get the previous, current, and next indices in a circular manner
  const getPrevIndex = (index: number) => (index - 1 + cards.length) % cards.length;
  const getNextIndex = (index: number) => (index + 1) % cards.length;

  // Get the cards to display in the correct order
  const visibleCards = [
    cards[getPrevIndex(currentIndex)], // Left card
    cards[currentIndex],               // Center card
    cards[getNextIndex(currentIndex)]  // Right card
  ];

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setDragDistance(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging || startX === null) return;
    const diff = startX - clientX;
    setDragDistance(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    if (Math.abs(dragDistance) > 50) {
      if (dragDistance > 0) {
        setCurrentIndex(getNextIndex(currentIndex));
      } else {
        setCurrentIndex(getPrevIndex(currentIndex));
      }
    }

    setIsDragging(false);
    setStartX(null);
    setDragDistance(0);
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (isDragging) {
      handleDragMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  const getTranslateX = () => {
    const baseTranslate = 0; // Center position
    const dragOffset = isDragging ? -dragDistance : 0;
    return `translateX(${baseTranslate + dragOffset}px)`;
  };

  const handleLearnMoreClick = (id: string) => {
    navigate(`/trip/${id}`); // Redirect to the trip description page with the trip ID
  };

  return (
    <div
      className="card-carousel"
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="carousel-track"
        style={{
          transform: getTranslateX(),
          transition: isDragging ? "none" : "transform 0.3s ease-out"
        }}
      >
        {visibleCards.map((card, index) => (
          <div
            key={`${card.id}-${index}`}
            className={`carousel-card ${index === 1 ? "active-card" : ""}`}
          >
            <img src={card.timage} alt={card.tripname} className="card-img" />
            <h5 className="card-title">{card.tripname}</h5>
            <p className="card-price">Price: {card.tprice}</p>
            {index === 1 && (
              <button
                onClick={() => handleLearnMoreClick(card.id)} // Call the function to navigate to the trip description page
                className="btn btn-primary"
              >
                Learn More
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
