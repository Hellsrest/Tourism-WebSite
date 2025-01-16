import React from "react";
import CentralInformationSection from "./ContactInfo";
import UserDetails from "./CheckoutComponents/UserDetails"; // Assuming UserDetails is a valid component
import "./ContactUs.css";

const ContactUs: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Collect data from the UserDetails form
    const formData = new FormData(event.target as HTMLFormElement);

    const userMessage = `
      Name: ${formData.get("name")}
      Email: ${formData.get("email")}
      Phone: ${formData.get("phone")}
      Message: ${formData.get("message")}
    `;

    const mailToLink = `mailto:bishampandey100@gmail.com?subject=Contact%20Form%20Submission&body=${encodeURIComponent(
      userMessage
    )}`;
    window.location.href = mailToLink;
  };

  return (
<>
<CentralInformationSection/>
<div className="contact-us-container">
           
      <form className="contact-us-form" onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        <UserDetails />
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>

      {/* Map Section (Visible only on desktop) */}
      <div className="map-container">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094494!2d144.95592381531735!3d-37.81720997975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5773fdd35d90231!2sMelbourne%20CBD%2C%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1612507863845!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </div>
</>

    
  );
};

export default ContactUs;
