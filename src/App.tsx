import "./App.css";
import NavBar from "./NavBar";
import TopCarousel from "./TopCarousel";
import CardCarousel from "./CardCarousel";
import HorizentalCards from "./HorizentalCards";
import CentralInformationSection from "./CentralInformationSection";
import ReviewCarousel from "./ReviewCarousel";
import ContactInfo from "./ContactInfo";
import Footer from "./Footer";

import banner1 from "./assets/images/logo.jpg";
import banner2 from "./assets/images/banner-2.jpg";
import banner3 from "./assets/images/banner-3.jpg";
import banner4 from "./assets/images/banner-4.jpg";

import cardimage1 from "./assets/images/cardimg1.jpg";
import cardimage2 from "./assets/images/cardimg2.jpg";
import cardimage3 from "./assets/images/cardimg3.jpg";
import cardimage4 from "./assets/images/cardimg4.jpg";

function App() {
  var tourismlicence = "123";
  var phonenumber1 = "321";
  var phonenumber2 = "321";

  let navbarlinks = ["Shop", "Contact Us", "About Us"];

  let carouselbanners = [banner1, banner2, banner3, banner4];
  let carousellinks = [
    "https://example.com/page1",
    "https://example.com/page2",
    "https://example.com/page3",
  ];
  let timeinterval = 5000;

  const cards = [
    {
      id: "1",
      name: "Product 1",
      image: cardimage1,
      price: "$10",
    },
    {
      id: "2",
      name: "Product 2",
      image: cardimage2,
      price: "$20",
    },
    {
      id: "3",
      name: "Product 3",
      image: cardimage3,
      price: "$30",
    },
    {
      id: "4",
      name: "Product 4",
      image: cardimage4,
      price: "$40",
    },
  ];

  const horizentalcarditems = [
    {
      image: cardimage1,
      text: "Item 1",
    },
    {
      image: cardimage2,
      text: "Item 2",
    },
    {
      image:cardimage3,
      text: "Item 3",
    },
    {
      image: cardimage4,
      text: "Item 4",
    },
  ];

  const reviews = [
    {
      id: "1",
      reviewerName: "John Doe",
      reviewerIcon: cardimage1,
      reviewStars: 5,
      reviewDate: "Jan 10, 2025",
      reviewText: "Amazing service! Highly recommended."
    },
    {
      id: "2",
      reviewerName: "Jane Smith",
      reviewerIcon: "https://via.placeholder.com/80",
      reviewStars: 4,
      reviewDate: "Jan 5, 2025",
      reviewText: "Great experience, but room for improvement."
    },
    {
      id: "3",
      reviewerName: "Alice Brown",
      reviewerIcon: "https://via.placeholder.com/80",
      reviewStars: 5,
      reviewDate: "Dec 20, 2024",
      reviewText: "Absolutely loved it! Would book again."
    }
  ];


  const treckingguides = [
    {
      image: cardimage1,
      text: "Item 1",
    },
    {
      image: cardimage2,
      text: "Item 2",
    },
    {
      image:cardimage3,
      text: "Item 3",
    },
    {
      image: cardimage4,
      text: "Item 4",
    },
  ];

  const titles = ["Home", "About Us", "Services"];
  const links = ["/home", "/about", "/services"];

  return (
    <>
      <NavBar
        staticlinks={navbarlinks}
        tourismlicence={tourismlicence}
        phonenumber1={phonenumber1}
        phonenumber2={phonenumber2}
      />

      <TopCarousel
        images={carouselbanners}
        links={carousellinks}
        interval={timeinterval}
      />

<center><b>Our Trips</b></center> 
<CardCarousel cards={cards} />


<center><b>Trekking Destinations</b></center> 
<center>Trekking and Hiking in the Himalaya</center>
<HorizentalCards items={horizentalcarditems} />

<center><b>Why Us</b></center>
<CentralInformationSection />

<center><b>Reviews</b></center>
<ReviewCarousel reviews={reviews} />

<center><b>Travel Guides</b></center>
<HorizentalCards items={treckingguides} />

<ContactInfo />

<Footer titles={titles} links={links} />
    </>
  );
}

export default App;
