import './Contact.css';
import React, { useState } from "react";
import OSMMap from "../Map";
function HomeContact() {

const officeLocation = [6.9000, 37.7500 ]; // [Latitude, Longitude]

  const markers = [
    {
      id: 1,
      position: officeLocation,
      title: 'Era Zone Technology Solutions',
      description: '123 Tech Street, New York, NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'hello@erazone.com',
    },
  ];
  return (
     <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="info-item">
            <span>📍</span>
            <div>
              <h4>Address</h4>
              <p>Addis Ababa, Ethiopia <br />
                Wolaita Sodo</p>
            </div>
          </div>
          <div className="info-item">
            <span>📞</span>
            <div>
              <h4>Phone</h4>
              <p>+251 941 728 854</p>
            </div>
          </div>
          <div className="info-item">
            <span>✉️</span>
            <div>
              <h4>Email</h4>
              <p>contact@erazonetech.com</p>
            </div>
          </div>
          <div className="info-item">
            <span>🕐</span>
            <div>
              <h4>Working Hours</h4>
              <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">GitHub</a>
          </div>
        </div>

        <div className="map-wrapper">
          <OSMMap
            center={officeLocation}
            zoom={16}
            markers={markers}
            height="100%"
            width="100%"
            darkMode={true}
            showPopup={true}
          />
        </div>
      </div>
    </div>
  )
}

export default HomeContact