import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tripsData from "../trips.json";
import "./CheckoutTripView.css";

interface Trip {
  id: string;
  name: string;
  image: string;
  price: string;
}

interface CheckoutTripViewProps {
  travellers: number;
}

const CheckoutTripView: React.FC<CheckoutTripViewProps> = ({ travellers }) => {
  const { tripId } = useParams<{ tripId: string }>();
  const [trip, setTrip] = useState<Trip | null>(null);
  const [discount, setDiscount] = useState<number>(0);

  useEffect(() => {
    if (tripId) {
      const tripDetails = tripsData.find((t) => t.id.toString() === tripId);
      if (tripDetails) {
        const mappedTrip: Trip = {
          id: tripDetails.id,
          name: tripDetails.tripname,
          image: tripDetails.timage,
          price: tripDetails.tprice,
        };
        setTrip(mappedTrip);
      } else {
        setTrip(null);
      }
    }
  }, [tripId]);

  useEffect(() => {
    if (travellers >= 20) {
      setDiscount(20);
    } else if (travellers >= 10) {
      setDiscount(15);
    } else if (travellers >= 5) {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  }, [travellers]);

  if (!trip) {
    return <div>Loading...</div>;
  }

  const priceNumber = parseFloat(trip.price.replace("$", ""));
  const finalPrice = priceNumber * (1 - discount / 100);

  return (
    <div className="checkout-container">
      <div className="checkout-trip-details">
        <img src={trip.image} alt={trip.name} className="trip-image" />
        <div className="trip-info">
          <h3>{trip.name}</h3>
          <p>Price: {trip.price}</p>
          <p>Number of Travellers: {travellers}</p>
        </div>
      </div>

      <div className="checkout-discount">
        <h5>Discounts based on the number of people:</h5>
        <ul>
          <li>10% off for 5+ people</li>
          <li>15% off for 10+ people</li>
          <li>20% off for 20+ people</li>
        </ul>
        <div className="final-price">
          <p>
            Final Price after {discount}% discount: ${finalPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutTripView;
