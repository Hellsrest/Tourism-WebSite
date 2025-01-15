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

import cardimage1 from "./assets/images/cardimg1.jpg";
import cardimage2 from "./assets/images/cardimg2.jpg";
import cardimage3 from "./assets/images/cardimg3.jpg";
import cardimage4 from "./assets/images/cardimg4.jpg";

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

  const horizentalcarditems = [
    { image: cardimage1, text: "Item 1" },
    { image: cardimage2, text: "Item 2" },
    { image: cardimage3, text: "Item 3" },
    { image: cardimage4, text: "Item 4" },
  ];

  const reviews = [
    {
      id: "1",
      reviewerName: "John Doe",
      reviewerIcon: cardimage1,
      reviewStars: 5,
      reviewDate: "Jan 10, 2025",
      reviewText: "Amazing service! Highly recommended.",
    },
    {
      id: "2",
      reviewerName: "Jane Smith",
      reviewerIcon: "https://via.placeholder.com/80",
      reviewStars: 4,
      reviewDate: "Jan 5, 2025",
      reviewText: "Great experience, but room for improvement.",
    },
    {
      id: "3",
      reviewerName: "Alice Brown",
      reviewerIcon: "https://via.placeholder.com/80",
      reviewStars: 5,
      reviewDate: "Dec 20, 2024",
      reviewText: "Absolutely loved it! Would book again.",
    },
  ];

  const treckingguides = [
    { image: cardimage1, text: "Item 1" },
    { image: cardimage2, text: "Item 2" },
    { image: cardimage3, text: "Item 3" },
    { image: cardimage4, text: "Item 4" },
  ];



  return (
    <>
 

      <TopCarousel data={carouselData} interval={3000} />

      <center>
      <div className="checkout-button-container">
      {/* Button to navigate to Checkout page */}

    </div>
        <b>Our Trips</b>
      </center>
      <CardCarousel/>

      <center>
        <b>Trekking Destinations</b>
      </center>
      <center>Trekking and Hiking in the Himalaya</center>
      <HorizentalCards items={horizentalcarditems} />

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
      <HorizentalCards items={treckingguides} />

      <ContactInfo />

      
    </>
  );
};

export default Home;
