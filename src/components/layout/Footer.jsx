import React from 'react';
import { Link } from 'react-router-dom';
import { contactData } from '../../data/contacts';

const makeDirectionsUrl = (address) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

const Footer = () => {
  const chennaiPhone = contactData.chennai.phone.trim();
  const mumbaiPhone = contactData.mumbai.phone.trim();
  const chennaiAddress = contactData.chennai.address;
  const mumbaiAddress = contactData.mumbai.address;

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/images/logo.jpg" alt="TNHSS Logo" />
            <div>
              <p className="footer-brand-name">TNHSS</p>
              <p className="footer-tagline">Serving pilgrims with trust and care</p>
            </div>
          </div>
          <p className="footer-mission">Community-first support for Hajj & Umrah travellers.</p>
          <div className="footer-badges">
            <span>Trusted since 1975</span>
            <span>24/7 Support</span>
          </div>
        </div>

        <div className="footer-section">
          <h3>Locations</h3>
          <div className="footer-location">
            <div>
              <p className="footer-location-title">Chennai</p>
              <p className="footer-text">{chennaiAddress}</p>
              <div className="footer-links-row">
                <a href={contactData.chennai.mapUrl} target="_blank" rel="noreferrer" className="footer-link-btn">View on Map</a>
                <a href={makeDirectionsUrl(chennaiAddress)} target="_blank" rel="noreferrer" className="footer-link-btn subtle">Directions</a>
              </div>
            </div>
            <div>
              <p className="footer-location-title">Mumbai</p>
              <p className="footer-text">{mumbaiAddress}</p>
              <div className="footer-links-row">
                <a href={contactData.mumbai.mapUrl} target="_blank" rel="noreferrer" className="footer-link-btn">View on Map</a>
                <a href={makeDirectionsUrl(mumbaiAddress)} target="_blank" rel="noreferrer" className="footer-link-btn subtle">Directions</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact & Support</h3>
          <p className="footer-text">Email: <a href="mailto:info@tnhss.org" className="footer-phone-link">info@tnhss.org</a></p>
          <p className="footer-text">Chennai: <a href={`tel:${chennaiPhone.replace(/\s/g, '')}`} className="footer-phone-link">{chennaiPhone}</a></p>
          <p className="footer-text">Mumbai: <a href={`tel:${mumbaiPhone.replace(/\s/g, '')}`} className="footer-phone-link">{mumbaiPhone}</a></p>
          <div className="footer-cta-row">
            <a href="tel:04426691669" className="footer-cta">Call for Feedback</a>
            <a href="mailto:info@tnhss.org" className="footer-cta ghost">Email Us</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-list">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/accommodations">Accommodations</Link></li>
            <li><Link to="/booking-rules">Booking Rules</Link></li>
            <li><Link to="/marriage-hall">Marriage Hall</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/">Feedback</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-feedback">
          Your experience matters. Call our team to share feedback:{' '}
          <a href="tel:04426691669" className="footer-phone">044 2669 1669</a>
        </p>
        <p className="footer-meta">
          <span>Privacy Policy</span>
          <span className="dot">•</span>
          <span>Terms</span>
          <span className="dot">•</span>
          <span>Support</span>
        </p>
        <p>&copy; {new Date().getFullYear()} TNHSS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
