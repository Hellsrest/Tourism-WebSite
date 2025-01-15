import  { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TripPurchase.css';

const TripPurchase = () => {
  const { id } = useParams<{ id: string }>(); // Get the trip ID from the URL
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handlePurchaseClick = () => {
    // Redirect to checkout page with trip id
    navigate(`/checkout/${id}`);
  };

  const handleGroupDiscountClick = () => {
    // Toggle dropdown visibility
    setIsDropdownOpen(prevState => !prevState);
  };

  const handleAskQuestionClick = () => {
    // Redirect to contact us page with trip id
    navigate(`/contactus/${id}`);
  };

  return (
    <div className="treck-purchase">
      <button className="purchase-now-btn" onClick={handlePurchaseClick}>
        Purchase Now
      </button>

      <div className="group-discount">
        <button className="group-discount-btn" onClick={handleGroupDiscountClick}>
          Group Discounts
        </button>
        {isDropdownOpen && (
          <ul className="discount-dropdown">
            <li>10% off for 5+ people</li>
            <li>15% off for 10+ people</li>
            <li>20% off for 20+ people</li>
          </ul>
        )}
      </div>

      <button className="ask-question-btn" onClick={handleAskQuestionClick}>
        Ask a Question
      </button>
    </div>
  );
};

export default TripPurchase;
