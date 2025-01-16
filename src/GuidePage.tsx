import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HorizentalCards from "./HorizentalCards";
import "./GuidePage.css";

// Interface for guide data
interface GuideData {
  id: string;
  guidename: string;
  guideshortdescription: string;
  guideimage: string;
  guidedescription: string;
  guiderelatedtrips: string[];
}

// Interface for trip data
interface TripData {
  id: string;
  tripname: string;
  timage: string;
}

// Mock data (Replace with API or data fetching logic)
import guideData from "./guides.json"; // Replace with actual guide data
import tripsData from "./trips.json"; // Replace with actual trips data

const GuidePage: React.FC = () => {
  const { guideId } = useParams<{ guideId: string }>();
  const [guide, setGuide] = useState<GuideData | null>(null);
  const [relatedTrips, setRelatedTrips] = useState<TripData[]>([]);

  useEffect(() => {
    // Find guide based on the ID from the URL
    const selectedGuide = guideData.find((g) => g.id === guideId) || null;
    setGuide(selectedGuide);

    // Fetch related trips
    if (selectedGuide) {
      const trips = tripsData.filter((trip) =>
        selectedGuide.guiderelatedtrips.includes(trip.id)
      );
      setRelatedTrips(trips);
    }
  }, [guideId]);

  if (!guide) {
    return <div className="guide-page-container">Guide not found</div>;
  }

  return (
    <div className="guide-page-container">
      {/* Guide Details */}
      <div className="guide-details">
        <h1 className="guide-title">{guide.guidename}</h1>
        <p className="guide-short-description">{guide.guideshortdescription}</p>
        <img
          src={guide.guideimage}
          alt={guide.guidename}
          className="guide-image"
        />
        <p className="guide-description">{guide.guidedescription}</p>
      </div>

      {/* Related Trips */}
      <div className="related-trips-section">
        <h2>Related Trips</h2>
        <HorizentalCards
          data={relatedTrips.slice(0, 4).map((trip) => ({
            id: trip.id,
            name: trip.tripname,
            image: trip.timage,
          }))}
          type="trip"
        />
      </div>
    </div>
  );
};

export default GuidePage;
