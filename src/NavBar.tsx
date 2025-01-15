import React from "react";
import logotop from "./assets/images/logo.jpg";
import { Link } from "react-router-dom";
import "./NavBar.css";

interface LinkProps {
  staticlinks: string[];
  tourismlicence: string;
  phonenumber1: string;
  phonenumber2: string;
}

const NavBar: React.FC<LinkProps> = ({
  staticlinks,
  tourismlicence,
  phonenumber1,
  phonenumber2,
}) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo-container">
          <Link to="/">
            <img src={logotop} alt="Logo" className="logo" />
          </Link>
        </div>

        {/* Centered Info Section */}
        <div className="info-container">
          <span className="tourism-licence">Tourism Licence: {tourismlicence}</span>
          <span className="phone-number">{phonenumber1}</span>
          <span className="phone-number">{phonenumber2}</span>
        </div>

        {/* Navigation Links Section */}
        <div className="links-container">
          <ul className="nav-links">
            {staticlinks.length === 0 ? (
              <li className="nav-item">No Links</li>
            ) : (
              staticlinks.map((link, index) => (
                <li key={index} className="nav-item">
                  <Link to="#" className="nav-link">
                    {link}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
