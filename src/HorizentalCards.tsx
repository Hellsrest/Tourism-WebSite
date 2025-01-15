import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import tripsData from "./trips.json"; // Assuming the JSON file is in the same folder
import "./HorizentalCards.css";

interface Trip {
  id: string;
  tripname: string;
  timage: string;
}

const HorizentalCards: React.FC = () => {
  const [filteredTrips, setFilteredTrips] = useState<Trip[]>([]);

  useEffect(() => {
    // Filter trips starting from ID 5 and shuffle their order
    const filtered = tripsData
      .filter((trip) => parseInt(trip.id, 10) >= 5)
      .sort(() => Math.random() - 0.5) // Shuffle the trips randomly
      .slice(0, 4); // Limit to 4 items

    setFilteredTrips(filtered);
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/alltrips");
  };

  return (
    <div className="horizontal-cards-container">
      <div className="horizontal-hover-grid">
        {filteredTrips.map((trip) => (
          <div className="hover-item" key={trip.id}>
            <div className="hover-image-container">
              <img src={trip.timage} alt={trip.tripname} className="hover-image" />
            </div>
            <p className="hover-text">
              <Link
                to={`/trip/${trip.id}`}
                style={{ textDecoration: "none", color: "inherit" }} // Remove text decoration
              >
                {trip.tripname}
              </Link>
            </p>
          </div>
        ))}
      </div>
      <button className="view-trips-button" onClick={handleClick}>
        View Trips
      </button>
    </div>
  );
};

export default HorizentalCards;
