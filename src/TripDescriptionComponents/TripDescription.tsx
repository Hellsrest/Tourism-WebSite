import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './TripDescription.css';
import tripsData from "../trips.json"; // Import the trips data

interface Trip {
    id: number;
    tripname: string;
    tripshortdescription: string;
    timage: string;
    tactualdescription: string;
  }

const TripDescription: React.FC = () => {
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
    <div className="trip-description">
      <div className="trip-description-content">
        <h2>Trip Details</h2>
        <p>{trip.tactualdescription}</p>
      </div>
    </div>
  );
};

export default TripDescription;
