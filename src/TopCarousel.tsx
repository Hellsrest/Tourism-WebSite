import React, { useState, useEffect, useRef } from "react";
import "./TopCarousel.css"

interface CarouselProps {
  images: string[];
  links: string[];
  interval: number; // Time in milliseconds
}

const Carousel: React.FC<CarouselProps> = ({ images, links, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [dragDistance, setDragDistance] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartTime = useRef<number>(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging) {
        handleNext();
      }
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, interval, isDragging]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Enhanced drag functionality for both touch and mouse events
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setDragDistance(0);
    dragStartTime.current = Date.now();
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
        handleNext();
      } else {
        handlePrev();
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
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  // Improved click handler to better distinguish between drags and clicks
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const dragDuration = Date.now() - dragStartTime.current;
    
    // Only redirect if it was a short interaction and minimal dragging occurred
    if (dragDuration < 200 && Math.abs(dragDistance) < 5) {
      window.location.href = links[currentIndex];
    }
  };

  return (
    <div
    
      ref={containerRef}
      className="carousel-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ 
        width: "100%", 
        overflow: "hidden", 
        position: "relative",
        cursor: isDragging ? "grabbing" : "grab"
      }}
    >
      <img
        src={images[currentIndex]}
        alt={`Carousel Image ${currentIndex + 1}`}
        className="carousel-image"
        style={{
          width: "100%",
          objectFit: "cover",
          transform: isDragging ? `translateX(${-dragDistance}px)` : "translateX(0)",
          transition: isDragging ? "none" : "transform 0.3s ease-out",
        }}
      />

      <div
        className="carousel-dots"
        style={{ 
          position: "absolute", 
          bottom: "10px", 
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "5px"
        }}
      >
        {images.map((_, index) => (
          <span
            key={index}
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the container's click handler
              setCurrentIndex(index);
            }}
            style={{
              height: "10px",
              width: "10px",
              backgroundColor: currentIndex === index ? "black" : "white",
              borderRadius: "50%",
              cursor: "pointer",
              border: "1px solid black",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;