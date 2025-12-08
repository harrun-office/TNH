import React from 'react';
import { Link } from 'react-router-dom';
import { contactData } from '../../data/contacts';

const Footer = () => {
  const chennaiPhone = contactData.chennai.phone.trim();
  const mumbaiPhone = contactData.mumbai.phone.trim();
  const chennaiAddress = contactData.chennai.address;
  const mumbaiAddress = contactData.mumbai.address;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Locations</h3>
            <div>
              <p><strong>Chennai:</strong><br />
              {chennaiAddress}</p>
              <p><strong>Mumbai:</strong><br />
              {mumbaiAddress}</p>
            </div>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: info@tnhss.org</p>
            <p>Chennai: <a href={`tel:${chennaiPhone.replace(/\s/g, '')}`} className="footer-phone-link">{chennaiPhone}</a></p>
            <p>Mumbai: <a href={`tel:${mumbaiPhone.replace(/\s/g, '')}`} className="footer-phone-link">{mumbaiPhone}</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-feedback">
            Your experience matters. Call our team to share feedback:{' '}
            <a href="tel:04426691669" className="footer-phone">044 2669 1669</a>
          </p>
          <p>&copy; {new Date().getFullYear()} TNHSS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
