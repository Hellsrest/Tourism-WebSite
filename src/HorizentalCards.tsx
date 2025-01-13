import React from "react";
import "./HorizentalCards.css";
interface HoverItemProps {
    items: { image: string; text: string }[];
  }
  
  const HorizentalCards: React.FC<HoverItemProps> = ({ items }) => {
    return (
      <div className="horizontal-hover-grid">
        {items.map((item, index) => (
          <div className="hover-item" key={index}>
            <div className="hover-image-container">
              <img src={item.image} alt={item.text} className="hover-image" />
            </div>
            <p className="hover-text">{item.text}</p>
          </div>
        ))}
      </div>
    );
  };

export default HorizentalCards;
