import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AllTrips.css";
import tripsData from "../trips.json"; // Adjust the path as needed

const AllTrips: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const tripsPerPage = 5;
  const navigate = useNavigate();

  // Calculate pagination
  const totalPages = Math.ceil(tripsData.length / tripsPerPage);
  const startIndex = (currentPage - 1) * tripsPerPage;
  const currentTrips = tripsData.slice(startIndex, startIndex + tripsPerPage);

  const handleNavigate = (id: string) => {
    navigate(`/trip/${id}`);
  };

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="all-trips-container">
      {currentTrips.map((trip) => (
        <div key={trip.id} className="trip-card">
          <img src={trip.timage} alt={trip.tripname} className="trip-image" />
          <div className="trip-details">
            <h3 className="trip-name" onClick={() => handleNavigate(trip.id)}>
              {trip.tripname}
            </h3>
            <p className="trip-short-description">{trip.tripshortdescription}</p>
            <div className="trip-info">
              <span className="trip-duration">{trip.tduration}</span>
              <span className="trip-grade">{trip.tgrade}</span>
              <button
                className="learn-more-button"
                onClick={() => handleNavigate(trip.id)}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="pagination">
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`pagination-button ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllTrips;
