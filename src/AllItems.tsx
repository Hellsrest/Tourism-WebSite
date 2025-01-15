import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AllItems.css";
import tripsData from "./trips.json";
import guidesData from "./guides.json";

interface Trip {
  id: string;
  tripname: string;
  tripshortdescription: string;
  timage: string;
  tduration: string;
  tgrade: string;
}

interface Guide {
  id: string;
  guidename: string;
  guideshortdescription: string;
  guideimage: string;
}

interface AllItemsProps {
  type: "trip" | "guide";
}

const AllItems: React.FC<AllItemsProps> = ({ type }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  // Determine the data to display based on the type
  const data = type === "trip" ? (tripsData as Trip[]) : (guidesData as Guide[]);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  const handleNavigate = (id: string) => {
    navigate(`/${type}/${id}`);
  };

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="all-items-container">
      <h1>All {type === "trip" ? "Trips" : "Guides"}</h1>
      {currentItems.map((item) => (
        <div key={item.id} className="item-card">
          <img
            src={type === "trip" ? (item as Trip).timage : (item as Guide).guideimage}
            alt={type === "trip" ? (item as Trip).tripname : (item as Guide).guidename}
            className="item-image"
          />
          <div className="item-details">
            <h3
              className="item-name"
              onClick={() => handleNavigate(item.id)}
            >
              {type === "trip" ? (item as Trip).tripname : (item as Guide).guidename}
            </h3>
            <p className="item-description">
              {type === "trip"
                ? (item as Trip).tripshortdescription
                : (item as Guide).guideshortdescription}
            </p>
            <button
              className="learn-more-button"
              onClick={() => handleNavigate(item.id)}
            >
              Learn More
            </button>
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

export default AllItems;
