import logotop from "./assets/images/logo.jpg";
import { Link } from "react-router-dom";
interface LinkProps {
  staticlinks: string[];
  tourismlicence: string;
  phonenumber1: string;
  phonenumber2: string;
}

function NavBar({
  staticlinks,
  tourismlicence,
  phonenumber1,
  phonenumber2,
}: LinkProps) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light position-relative">
      {/* Logo positioned absolutely to span both rows */}
      <div className="position-absolute top-0 end- -100 h-100 d-flex align-items-center me-4">
        <Link to="/">
          <img
            src={logotop}
            alt="Company Logo"
            style={{ width: "100px", height: "auto" }}
            className="d-inline-block"
          />
        </Link>
      </div>

      <div className="container-fluid">
        <div className="row w-100 flex-column">
          {/* Top row with Tourism License and Phone Numbers */}
          <div className="col-12 border-bottom py-2">
            <div
              className="d-flex gap-4 text-secondary justify-content-center"
              style={{ fontSize: "0.9rem" }}
            >
              <span>Tourism Licence: {tourismlicence}</span>
              <i className="bi bi-telephone"></i>
              <span>{phonenumber1}</span>
              <span>{phonenumber2}</span>
            </div>
          </div>

          {/* Bottom row with Navigation Links and Search */}
          <div className="col-12 py-2">
            <div className="d-flex justify-content-between align-items-center position-relative">
              {/* Empty div for left spacing */}
              <div
                className="invisible"
                style={{ width: "200px", backgroundColor: "#0049AF" }}
              ></div>

              {/* Navigation Links - Centered */}
              <ul className="navbar-nav mb-0 d-flex flex-row gap-4 position-absolute start-50 translate-middle-x">
                {staticlinks.length === 0 && (
                  <li className="nav-item">
                    <p className="nav-link">No Links in Navbar</p>
                  </li>
                )}
                {staticlinks.map((link, index) => (
                  <li key={index} className="nav-item">
                    <a className="nav-link fw-medium" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Search Bar - Right aligned */}
              <div className="d-flex">
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
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
