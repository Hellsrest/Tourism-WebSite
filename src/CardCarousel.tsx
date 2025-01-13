import React, { useState, useRef } from "react";
import "./cardCarousel.css";

interface CardData {
  id: string;
  name: string;
  image: string;
  price: string;
}

interface CardCarouselProps {
  cards: CardData[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [dragDistance, setDragDistance] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

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
          transition: isDragging ? 'none' : 'transform 0.3s ease-out'
        }}
      >
        {visibleCards.map((card, index) => (
          <div
            key={`${card.id}-${index}`}
            className={`carousel-card ${index === 1 ? "active-card" : ""}`}
          >
            <img src={card.image} alt={card.name} className="card-img" />
            <h5 className="card-title">{card.name}</h5>
            <p className="card-price">Price: {card.price}</p>
            {index === 1 && (
              <a
                href={`https://example.com/${card.id}`}
                className="btn btn-primary"
              >
                Book Now
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;