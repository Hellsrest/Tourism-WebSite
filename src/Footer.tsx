import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface FooterProps {
  titles: string[];
  links: string[];
}

const Footer: React.FC<FooterProps> = ({ titles, links }) => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          {/* Useful Links Section */}
          <Col md={6} className="text-start">
            <h5>Useful Links</h5>
            <Row>
              {/* First Row of Links */}
              <Col xs={6}>
                <ul className="list-unstyled">
                  {titles.slice(0, Math.ceil(titles.length / 2)).map((title, index) => (
                    <li key={index}>
                      <a href={links[index]} className="text-white text-decoration-none">
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </Col>
              {/* Second Row of Links */}
              <Col xs={6}>
                <ul className="list-unstyled">
                  {titles.slice(Math.ceil(titles.length / 2)).map((title, index) => (
                    <li key={index}>
                      <a href={links[index + Math.ceil(titles.length / 2)]} className="text-white text-decoration-none">
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>

          {/* Google Map and Address Section */}
          <Col md={6}>
            <div className="mb-3">
              <h5>Our Location</h5>
              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799141211!2d-74.25986650113969!3d40.69767010000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ab90f2e0d7%3A0x32c200d7d07f653f!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1627324561231!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}           
                loading="lazy"
              ></iframe>
            </div>
            <div>
              <h6>Address:</h6>
              <p>123 Random Street, Some City, Some Country</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
