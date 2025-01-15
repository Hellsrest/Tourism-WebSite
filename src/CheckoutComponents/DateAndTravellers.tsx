import React from "react";
import "./DateAndTravellers.css";

interface DateAndTravellersProps {
  travellers: number;
  setTravellers: (value: number) => void;
  selectedDate: string;
  setSelectedDate: (value: string) => void;
}

const DateAndTravellers: React.FC<DateAndTravellersProps> = ({
  travellers,
  setTravellers,
  selectedDate,
  setSelectedDate,
}) => {
  const today = new Date().toISOString().split("T")[0];

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const incrementTravellers = () => {
    setTravellers(travellers + 1);
  };

  const decrementTravellers = () => {
    if (travellers > 1) {
      setTravellers(travellers - 1);
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
          <label htmlFor="travellers" className="me-2">
            Number of Travellers:
          </label>
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
