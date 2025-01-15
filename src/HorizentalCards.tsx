import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HorizentalCards.css";

interface CardData {
  id: string;
  name: string;
  image: string;
}

interface HorizentalCardsProps {
  data: CardData[];
  type: "trip" | "guide";
}

const HorizentalCards: React.FC<HorizentalCardsProps> = ({ data, type }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(type === "trip" ? "/alltrips" : "/allguides");
  };

  return (
    <div className="horizontal-cards-container">
      <div className="horizontal-hover-grid">
        {data.map((item) => (
          <div className="hover-item" key={item.id}>
            <div className="hover-image-container">
              <img src={item.image} alt={item.name} className="hover-image" />
            </div>
            <p className="hover-text">
              <Link
                to={`/${type}/${item.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {item.name}
              </Link>
            </p>
          </div>
        ))}
      </div>
      <button className="view-trips-button" onClick={handleClick}>
        View {type === "trip" ? "Trips" : "Guides"}
      </button>
    </div>
  );
};

export default HorizentalCards;
