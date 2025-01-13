import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsPhone } from "react-icons/bs"; // Using react-icons for phone icon

const ContactInfo: React.FC = () => {
  return (
    <div className="contact-info" style={{ backgroundColor: "#063969", padding: "40px 0" }}>
      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <h2 style={{ color: "#fff" }}>Contact Us</h2>
          </Col>

          <Col md={8}>
            <Row className="contact-info-row">
              <Col sm={6} className="contact-item">
                <BsPhone size={40} color="#2C8BC4" />
                <div className="contact-details">
                  <h5 style={{ color: "#fff" }}>John Doe</h5>
                  <p style={{ color: "#fff" }}>Customer Support</p>
                  <p style={{ color: "#fff" }}>+1 (800) 555-1234</p>
                </div>
              </Col>
              <Col sm={6} className="contact-item">
                <BsPhone size={40} color="#2C8BC4" />
                <div className="contact-details">
                  <h5 style={{ color: "#fff" }}>Jane Smith</h5>
                  <p style={{ color: "#fff" }}>Sales Representative</p>
                  <p style={{ color: "#fff" }}>+1 (800) 555-5678</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactInfo;
