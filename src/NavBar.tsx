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
    <nav className="navbar bg-light position-relative">
      <div className="container-fluid position-relative">
        {/* Logo */}
        <div className="logo-container position-absolute top-0 start-0 h-100 d-flex align-items-center">
          <Link to="/">
            <img
              src={logotop}
              alt="Company Logo"
              className="logo"
              style={{ maxWidth: "100px", height: "auto" }}
            />
          </Link>
        </div>

        {/* Top Bar */}
        <div className="w-100 d-flex justify-content-center align-items-center top-bar">
          <span>Tourism Licence: {tourismlicence}</span>
          <span className="ms-4">{phonenumber1}</span>
          <span className="ms-4">{phonenumber2}</span>
        </div>

        {/* Bottom Bar */}
        <div className="w-100 d-flex justify-content-between align-items-center bottom-bar mt-2">
          {/* Navigation Links */}
          <ul className="navbar-nav flex-row gap-4 justify-content-center w-100">
            {staticlinks.length === 0 ? (
              <li className="nav-item">
                <span className="nav-link">No Links in Navbar</span>
              </li>
            ) : (
              staticlinks.map((link, index) => (
                <li key={index} className="nav-item">
                  <a className="nav-link fw-medium" href="#">
                    {link}
                  </a>
                </li>
              ))
            )}
          </ul>

          {/* Search Bar */}
          <div className="search-bar">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search here"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
