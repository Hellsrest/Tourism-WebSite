import React, { useState } from "react";
import "./DateAndTravellers.css";

const DateAndTravellers: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [travellers, setTravellers] = useState<number>(1);

  // Get today's date for validation
  const today = new Date().toISOString().split("T")[0];

  // Handle date change
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  // Handle number increment
  const incrementTravellers = () => {
    setTravellers(prev => prev + 1);
  };

  // Handle number decrement
  const decrementTravellers = () => {
    if (travellers > 1) {
      setTravellers(prev => prev - 1);
    }
  };

  return (
    <div className="container">
      <h2>Date and Travellers</h2>

      <div className="d-flex justify-content-start align-items-center">
        {/* Date Field */}
        <div className="me-3">
          <label htmlFor="date">Select Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={selectedDate}
            min={today}
            onChange={handleDateChange}
            required
            className="form-control"
          />
        </div>

        {/* Travellers Field */}
        <div className="d-flex align-items-center">
          <label htmlFor="travellers" className="me-2">Number of Travellers:</label>
          <div className="number-input d-flex align-items-center">
            <button
              type="button"
              className="decrement-button"
              onClick={decrementTravellers}
            >
              -
            </button>
            <input
              type="number"
              id="travellers"
              name="travellers"
              value={travellers}
              min="1"
              readOnly
              className="form-control text-center"
            />
            <button
              type="button"
              className="increment-button"
              onClick={incrementTravellers}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateAndTravellers;
