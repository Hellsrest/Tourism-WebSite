import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./TripTitle.css";
// Import the trips JSON data
import tripsData from "../trips.json"; // Update the path as necessary

interface Trip {
  id: number;
  tripname: string;
  tripshortdescription: string;
  timage: string;
}

const TripTitle: React.FC = () => {
  const { tripId } = useParams<{ tripId: string }>(); // Get the tripId from the URL
  const [trip, setTrip] = useState<Trip | null>(null);

  // Fetch the trip data based on the tripId from the URL
  useEffect(() => {
    if (tripId) {
      const tripDetails = tripsData.find((trip) => trip.id.toString() === tripId);
      setTrip(tripDetails || null); // Set the trip data or null if not found
    }
  }, [tripId]);

  if (!trip) {
    return <div>Loading...</div>; // Display a loading message while the trip data is being fetched
  }

  return (
    <div className="trip-title-container">
      <h1>{trip.tripname}</h1>
      <p>{trip.tripshortdescription}</p>
      <img src={trip.timage} alt={trip.tripname} className="trip-image" />
    </div>
  );
};

export default TripTitle;
