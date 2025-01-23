import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef} from "react";
import "./TopCarousel.css";

interface CarouselData {
  image: string; // URL or path of the image
  productName: string; // Name of the product
  action: string; // Action type
}

interface CarouselProps {
  data: CarouselData[]; // Array of carousel items
  interval: number; // Time in milliseconds
}

const Carousel: React.FC<CarouselProps> = ({ data, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [dragDistance, setDragDistance] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartTime = useRef<number>(0);
  const navigate=useNavigate();
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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  // Drag functionality for both touch and mouse events
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

  const handleClick = () => {
    const dragDuration = Date.now() - dragStartTime.current;
    navigate
    if (dragDuration < 200 && Math.abs(dragDistance) < 5) {
      const { action } = data[currentIndex];
        navigate(action);
    }
  };

  return (
    <div
      ref={containerRef}
      className="carousel-container"
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
      onTouchEnd={handleDragEnd}
      onMouseDown={(e) => {
        e.preventDefault();
        handleDragStart(e.clientX);
      }}
      onMouseMove={(e) => {
        e.preventDefault();
        handleDragMove(e.clientX);
      }}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onClick={handleClick}
      style={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        cursor: isDragging ? "grabbing" : "grab",
      }}
    >
      <img
        src={data[currentIndex].image}
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
          gap: "5px",
        }}
      >
        {data.map((_, index) => (
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
