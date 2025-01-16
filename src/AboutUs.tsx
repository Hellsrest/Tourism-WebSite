import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import aboutus1 from "/assets/images/aboutus1.jpg";
import aboutus2 from "/assets/images/aboutus2.jpg";
const AboutUs = () => {
  const stats = [
    { value: "50,000+", label: "Happy Travelers" },
    { value: "100+", label: "Destinations" },
    { value: "15+", label: "Years Experience" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="position-relative" style={{ height: '60vh' }}>
        <div className="position-absolute w-100 h-100">
          <img
            src={aboutus1}
            alt="Tourism background"
            className="w-100 h-100 object-fit-cover"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
        </div>
        <div className="position-relative h-100 d-flex align-items-center justify-content-center text-center px-4">
          <div>
            <h1 className="display-3 text-white fw-bold mb-4">
              Discover the World With Us
            </h1>
            <p className="lead text-white mb-0">
              Creating unforgettable experiences and memories that last a lifetime
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-5">
        <div className="container">
          <div className="row">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-md-3 text-center mb-4">
                <div className="display-4 fw-bold text-primary">{stat.value}</div>
                <div className="text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="display-4 fw-bold mb-4">Our Story</h2>
              <p className="lead mb-4">
                Founded in 2009, we started with a simple mission: to make world-class travel experiences accessible to everyone. Our journey began with just three passionate travel enthusiasts and has grown into a global community of adventurers and explorers.
              </p>
              <p className="lead">
                Today, we're proud to be one of the most trusted names in tourism, helping thousands of travelers create their perfect adventures across the globe.
              </p>
            </div>
            <div className="col-md-6">
              <div className="rounded overflow-hidden">
                <img
                  src={aboutus2}
                  alt="Our team"
                  className="w-100 h-100 object-fit-cover"
                  style={{ minHeight: '400px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-5">
        <div className="container">
          <h2 className="display-4 fw-bold text-center mb-5">Our Values</h2>
          <div className="row">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in every experience we create, ensuring our travelers receive nothing but the best."
              },
              {
                title: "Authenticity",
                description: "We believe in creating genuine connections with local cultures and providing authentic travel experiences."
              },
              {
                title: "Sustainability",
                description: "We're committed to responsible tourism that preserves destinations for future generations to enjoy."
              }
            ].map((value, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm hover-shadow transition">
                  <div className="card-body">
                    <h3 className="h4 mb-3">{value.title}</h3>
                    <p className="text-muted mb-0">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="display-4 fw-bold mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="lead mb-4">
            Join thousands of satisfied travelers who have experienced the world with us
          </p>
          <Link to="/alltrips">
  <button className="btn btn-light btn-lg px-5">
    Plan Your Trip
  </button>
</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;