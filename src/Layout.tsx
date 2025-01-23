import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

var tourismlicence = "123";
var phonenumber1 = "321";
var phonenumber2 = "321";

let navbarlinks = ["Trips", "Guides", "About Us", "Contact us"];
let navlinks = ["/alltrips", "/allguides", "/aboutus","/contactus"];
const titles = ["Trips", "Guides", "About Us", "Contact us"];
const links = ["/alltrips", "/allguides", "/aboutus","/contactus"];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <NavBar
        staticlinks={navbarlinks}
        redirect={navlinks}
        tourismlicence={tourismlicence}
        phonenumber1={phonenumber1}
        phonenumber2={phonenumber2}
      />
      <main>{children}</main>

      <Footer titles={titles} links={links} />
    </div>
  );
};

export default Layout;
