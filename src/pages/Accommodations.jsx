import React, { useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import LocationTabs from '../components/common/LocationTabs';
import RoomCard from '../components/common/RoomCard';
import { roomsData } from '../data/rooms';
import { contactData } from '../data/contacts';

const Accommodations = () => {
  const [selectedLocation, setSelectedLocation] = useState('chennai');

  const locations = [
    { id: 'chennai', name: 'Chennai' },
    { id: 'mumbai', name: 'Mumbai' }
  ];

  const handleLocationChange = (locationId) => {
    setSelectedLocation(locationId);
  };

  const currentRooms = roomsData[selectedLocation] || [];

  // Location data for each city
  const locationData = {
    chennai: {
      address: ["3, Demellows Rd, Thattankulam,", "Choolai, Chennai, Tamil Nadu 600007"],
      mapUrl: "https://www.google.com/maps/place/Tamil+Nadu+Haj+Service+Society/@13.093512,80.2656933,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5265f07c665335:0x5d56c95c16fe4fd8!8m2!3d13.0935068!4d80.2682682!16s%2Fg%2F1hd_8dk2v?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=13.0935068,80.2682682"
    },
    mumbai: {
      address: [contactData.mumbai.address],
      mapUrl: "https://www.google.com/maps/place/Tamil+Nadu+Haj+service+society/data=!4m2!3m1!1s0x0:0x8c8bf5070f773686?sa=X&ved=1t:2428&ictx=111",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=19.0760,72.8777"
    }
  };

  const currentLocation = locationData[selectedLocation] || locationData.chennai;

  const facilities = [
    { label: 'Food', icon: '🍽️' },
    { label: 'Prayer Hall', icon: '🕌' },
    { label: 'Luggage Storage', icon: '🧳' },
    { label: 'House Keeping', icon: '🧹' },
    { label: 'Dining & Kitchen', icon: '🍲' }
  ];

  return (
    <div className="page-accommodations">
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Choose Your Location"
            subtitle="Select a location to view available rooms"
          />
          <div className="facilities-banner">
            <h4>Facilities Available</h4>
            <ul className="facilities-list">
              {facilities.map((item) => (
                <li key={item.label}>
                  <span className="facility-icon" aria-hidden="true">{item.icon}</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <LocationTabs
            locations={locations}
            onLocationChange={handleLocationChange}
          />
          <div className="rooms-grid">
            {currentRooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                className={room.type === 'dormitory' ? 'room-card-center' : ''}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="location-section">
        <div className="location-container">
          <div className="location-header">
            <h2 className="location-title">Find Us</h2>
            <p className="location-subtitle">
              Visit our accommodation rooms at {selectedLocation === 'chennai' ? 'Chennai' : 'Mumbai'}
            </p>
          </div>
          <div className="location-card-wrapper">
            <div className="location-card">
              <div className="location-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="location-card-title">Accommodation Rooms Location</h3>
              <div className="location-address-wrapper">
                <p className="location-address">
                  <strong>Address:</strong><br />
                  {currentLocation.address.map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < currentLocation.address.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
              <div className="location-actions">
                <a 
                  href={currentLocation.mapUrl}
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
                  href={currentLocation.directionsUrl}
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

export default Accommodations;

