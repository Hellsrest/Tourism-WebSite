import React from "react";

import tripsData from "./trips.json";
import guidesData from "./guides.json";

import TopCarousel from "./TopCarousel";
import CardCarousel from "./CardCarousel";
import HorizentalCards from "./HorizentalCards";
import CentralInformationSection from "./CentralInformationSection";
import ReviewCarousel from "./ReviewCarousel";
import ContactInfo from "./ContactInfo";


import banner1 from "./assets/images/banner-1.png";
import banner2 from "./assets/images/banner-2.png";
import banner3 from "./assets/images/banner-3.png";
import banner4 from "./assets/images/banner-4.png";

import pfp1 from "/assets/images/pfp1.jpg";
import pfp2 from "/assets/images/pfp2.jpg";
import pfp3 from "/assets/images/pfp3.jpg";
import pfp4 from "/assets/images/pfp4.jpg";

const getRandomItems = (data: any[], count: number): any[] => {
  return data
    .sort(() => Math.random() - 0.5) // Shuffle the data randomly
    .slice(0, count); // Take the first 'count' items
};



const Home: React.FC = () => {
  
 // Filter trips to only include those with IDs >= 5
 const filteredTrips = tripsData.filter((trip) => parseInt(trip.id, 10) >= 5);

 // Get 4 random trips and guides
 const randomTrips = getRandomItems(filteredTrips, 4);
 const randomGuides = getRandomItems(guidesData, 4);

  const carouselData = [
    {
      image: banner1,
      productName: "himalayan-trek",
      action: "/trip/3",
    },
    {
      image: banner2,
      productName: "beach-vacation",
      action: "/guide/2",
    },
    {
      image: banner3,
      productName: "city-tour",
      action: "/checkout/2",
    },
    {
      image: banner4,
      productName: "random-adventure",
      action: "/aboutus",
    },
  ];


  const reviews = [
    {
      id: "1",
      reviewerName: "John Doe",
      reviewerIcon: pfp1,
      reviewStars: 5,
      reviewDate: "Jan 10, 2025",
      reviewText: "Amazing service! Highly recommended.",
    },
    {
      id: "2",
      reviewerName: "Jane Smith",
      reviewerIcon: pfp2,
      reviewStars: 4,
      reviewDate: "Jan 5, 2025",
      reviewText: "Great experience, but room for improvement.",
    },
    {
      id: "3",
      reviewerName: "Alice Brown",
      reviewerIcon: pfp3,
      reviewStars: 5,
      reviewDate: "Dec 20, 2024",
      reviewText: "Absolutely loved it! Would book again.",
    },
    {
      id: "4",
      reviewerName: "Bisham Raj Pandey",
      reviewerIcon: pfp4,
      reviewStars: 5,
      reviewDate: "Dec 20, 2024",
      reviewText: "I Absolutely loved it! Would book again.",
    },
  ];



  return (
    <>
 

      <TopCarousel data={carouselData} interval={3000} />

      <center>
      <div className="checkout-button-container">
      {/* Button to navigate to Checkout page */}

    </div>
        <b>Featured Trips</b>
      </center>
      <CardCarousel/>

      <center>
        <b>Our Services</b>
      </center>
      <center>Trekking and Hiking all over the World</center>
      <HorizentalCards
        data={randomTrips.map((trip) => ({
          id: trip.id,
          name: trip.tripname,
          image: trip.timage,
        }))}
        type="trip"
      />

      <center>
        <b>Why Us</b>
      </center>
      <CentralInformationSection />

      <center>
        <b>Reviews</b>
      </center>
      <ReviewCarousel reviews={reviews} />

      <center>
        <b>Travel Guides</b>
      </center>
      <HorizentalCards
        data={randomGuides.map((guide) => ({
          id: guide.id,
          name: guide.guidename,
          image: guide.guideimage,
        }))}
        type="guide"
      />

      <ContactInfo />

      
    </>
  );
};

export default Home;
