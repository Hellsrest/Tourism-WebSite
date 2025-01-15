import React from "react";

import TopCarousel from "./TopCarousel";
import CardCarousel from "./CardCarousel";
import HorizentalCards from "./HorizentalCards";
import CentralInformationSection from "./CentralInformationSection";
import ReviewCarousel from "./ReviewCarousel";
import ContactInfo from "./ContactInfo";


import banner1 from "./assets/images/logo.jpg";
import banner2 from "./assets/images/banner-2.jpg";
import banner3 from "./assets/images/banner-3.jpg";
import banner4 from "./assets/images/banner-4.jpg";

import pfp1 from "/assets/images/pfp1.jpg";
import pfp2 from "/assets/images/pfp2.jpg";
import pfp3 from "/assets/images/pfp3.jpg";
import pfp4 from "/assets/images/pfp4.jpg";

const Home: React.FC = () => {
  

  const carouselData = [
    {
      image: banner1,
      productName: "himalayan-trek",
      action: "checkout" as "checkout",
    },
    {
      image: banner2,
      productName: "beach-vacation",
      action: "blog" as "blog",
    },
    {
      image: banner3,
      productName: "city-tour",
      action: "info" as "info",
    },
    {
      image: banner4,
      productName: "random-adventure",
      action: "none" as "none",
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
      <HorizentalCards />

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
      <HorizentalCards />

      <ContactInfo />

      
    </>
  );
};

export default Home;
