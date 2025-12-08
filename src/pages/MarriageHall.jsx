import React, { useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { marriageHallData } from '../data/marriageHall';

const MarriageHall = () => {
  const hallData = marriageHallData.chennai;
  const [selectedEssentials, setSelectedEssentials] = useState({});

  const handleEssentialChange = (essentialName, checked) => {
    setSelectedEssentials({
      ...selectedEssentials,
      [essentialName]: checked
    });
  };

  const calculateTotal = () => {
    let total = 0;
    // Add base rent (assuming 1 day for now)
    total += parseInt(hallData.rent.base.replace(/[₹,]/g, ''));

    // Add selected essentials
    hallData.essentials.forEach(essential => {
      if (selectedEssentials[essential.name]) {
        total += parseInt(essential.charge.replace(/[₹,]/g, ''));
      }
    });

    return total;
  };

  return (
    <div className="page-marriage-hall">
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Marriage Hall Booking"
            subtitle="Book our spacious and well-equipped marriage hall for your special occasions"
          />

          <div className="facilities-banner">
            <h4>Facilities Available</h4>
            <ul className="facilities-list">
              {hallData.facilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="marriage-hall-content">
            <div className="hall-details">
              <h2>{hallData.name}</h2>
              <p className="hall-capacity"><strong>Capacity:</strong> {hallData.capacity}</p>

              <div className="hall-facilities">
                <h3>Facilities</h3>
                <ul>
                  {hallData.facilities.map((facility, index) => (
                    <li key={index}>{facility}</li>
                  ))}
                </ul>
              </div>

              <div className="hall-rent">
                <h3>Rent</h3>
                <div className="rent-item">
                  <span className="rent-label">{hallData.rent.description}:</span>
                  <span className="rent-amount">{hallData.rent.base}</span>
                </div>
              </div>

              <div className="hall-essentials">
                <h3>Essential Services (Additional Charges)</h3>
                <div className="essentials-list">
                  {hallData.essentials.map((essential, index) => (
                    <div key={index} className="essential-item">
                      <label className="essential-checkbox">
                        <input
                          type="checkbox"
                          checked={selectedEssentials[essential.name] || false}
                          onChange={(e) => handleEssentialChange(essential.name, e.target.checked)}
                        />
                        <div className="essential-info">
                          <span className="essential-name">{essential.name}</span>
                          <span className="essential-charge">{essential.charge}</span>
                        </div>
                        <p className="essential-description">{essential.description}</p>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="total-calculation">
                <div className="total-row">
                  <span className="total-label">Estimated Total:</span>
                  <span className="total-amount">₹{calculateTotal().toLocaleString('en-IN')}</span>
                </div>
                <p className="total-note">* Final amount may vary based on actual usage and duration</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="location-section">
        <div className="location-container">
          <div className="location-header">
            <h2 className="location-title">Find Us</h2>
            <p className="location-subtitle">
              Visit our marriage hall for your special occasions
            </p>
          </div>
          <div className="location-card-wrapper">
            <div className="location-card">
              <div className="location-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="location-card-title">Marriage Hall Location</h3>
              <div className="location-address-wrapper">
                <p className="location-address">
                  <strong>Address:</strong><br />
                  3, Demellows Rd, Thattankulam,<br />
                  Choolai, Chennai, Tamil Nadu 600007
                </p>
              </div>
              <div className="location-actions">
                <a 
                  href="https://www.google.com/maps/place/Tamil+Nadu+Haj+Service+Society/@13.093512,80.2656933,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5265f07c665335:0x5d56c95c16fe4fd8!8m2!3d13.0935068!4d80.2682682!16s%2Fg%2F1hd_8dk2v?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-location btn-outline"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                  </svg>
                  View on Map
                </a>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=13.0935068,80.2682682" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-location btn-solid"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3z" fill="currentColor"/>
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarriageHall;

