import React, { useState, useRef } from "react";
import "./ReviewCarousel.css";

interface ReviewData {
  id: string;
  reviewerName: string;
  reviewerIcon: string;
  reviewStars: number; // Number of stars (1 to 5)
  reviewDate: string;
  reviewText: string;
}

interface ReviewCarouselProps {
  reviews: ReviewData[];
}

const ReviewCarousel: React.FC<ReviewCarouselProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [dragDistance, setDragDistance] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Get previous, current, and next indices in a circular manner
  const getPrevIndex = (index: number) => (index - 1 + reviews.length) % reviews.length;
  const getNextIndex = (index: number) => (index + 1) % reviews.length;

  // Get the reviews to display
  const visibleReviews = [
    reviews[getPrevIndex(currentIndex)], // Left review
    reviews[currentIndex],               // Center review
    reviews[getNextIndex(currentIndex)]  // Right review
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
    const baseTranslate = 0;
    const dragOffset = isDragging ? -dragDistance : 0;
    return `translateX(${baseTranslate + dragOffset}px)`;
  };

  return (
    <div
      className="review-carousel"
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
        {visibleReviews.map((review, index) => (
          <div
            key={`${review.id}-${index}`}
            className={`carousel-card ${index === 1 ? "active-card" : ""}`}
          >
            <img src={review.reviewerIcon} alt={review.reviewerName} className="reviewer-icon" />
            <h5 className="reviewer-name">{review.reviewerName}</h5>
            <div className="review-stars">
              {"★".repeat(review.reviewStars)}{"☆".repeat(5 - review.reviewStars)}
            </div>
            <p className="review-date">{review.reviewDate}</p>
            <p className="review-text">{review.reviewText}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
