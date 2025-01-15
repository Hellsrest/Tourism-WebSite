import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import the useParams hook
import './TripGeneralInfo.css'; // Import the TripGeneralInfo component styles
// Import the trips data
import tripsData from '../trips.json';

interface Trip {
  tduration: string;
  tgrade: string;
  tmaxaltitude: string;
  tstart: string;
  tend: string;
  tarea: string;
  tactivities: string;
  tseason: string;
  tprice: string;
}

const TripGeneralInfo: React.FC = () => {
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
    <div className="general-info">
      <table className="table">
        <tbody>
          <tr>
            <td><strong>Duration</strong></td>
            <td>{trip.tduration}</td>
          </tr>
          <tr>
            <td><strong>Grade</strong></td>
            <td>{trip.tgrade}</td>
          </tr>
          <tr>
            <td><strong>Max Altitude</strong></td>
            <td>{trip.tmaxaltitude}</td>
          </tr>
          <tr>
            <td><strong>Start Date</strong></td>
            <td>{trip.tstart}</td>
          </tr>
          <tr>
            <td><strong>End Date</strong></td>
            <td>{trip.tend}</td>
          </tr>
          <tr>
            <td><strong>Area</strong></td>
            <td>{trip.tarea}</td>
          </tr>
          <tr>
            <td><strong>Activities</strong></td>
            <td>{trip.tactivities}</td>
          </tr>
          <tr>
            <td><strong>Season</strong></td>
            <td>{trip.tseason}</td>
          </tr>
          <tr>
            <td><strong>Price</strong></td>
            <td>{trip.tprice}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TripGeneralInfo;
