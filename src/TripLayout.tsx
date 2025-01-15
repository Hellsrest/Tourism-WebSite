import React from "react";
import NavBar from "./NavBar";
import TripTitle from "./TripDescriptionComponents/TripTitle";
import TripGeneralInfo from "./TripDescriptionComponents/TripGeneralInfo";
import TripPurchase from "./TripDescriptionComponents/TripPurchase";
import TripDescription from "./TripDescriptionComponents/TripDescription";
import ContactInfo from "./ContactInfo";
import Footer from "./Footer";

var tourismlicence = "123";
var phonenumber1 = "321";
var phonenumber2 = "321";

let navbarlinks = ["Shop", "Contact Us", "About Us"];

const titles = ["Home", "About Us", "Services"];
const links = ["/home", "/about", "/services"];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
          <NavBar
        staticlinks={navbarlinks}
        tourismlicence={tourismlicence}
        phonenumber1={phonenumber1}
        phonenumber2={phonenumber2}
      />
      
      <TripTitle/>
      <TripGeneralInfo/>
      <TripPurchase/>
      <TripDescription/>
      <ContactInfo/>
      <main>{children}</main>

      <Footer titles={titles} links={links} />
    </div>
  );
};

export default Layout;
