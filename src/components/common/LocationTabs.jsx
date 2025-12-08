import React, { useState } from 'react';

const LocationTabs = ({ locations, onLocationChange }) => {
  const [activeLocation, setActiveLocation] = useState(locations[0]?.id || '');

  const handleTabClick = (locationId) => {
    setActiveLocation(locationId);
    onLocationChange(locationId);
  };

  return (
    <div className="location-tabs">
      {locations.map((location) => (
        <button
          key={location.id}
          className={`tab-button ${activeLocation === location.id ? 'active' : ''}`}
          onClick={() => handleTabClick(location.id)}
        >
          {location.name}
        </button>
      ))}
    </div>
  );
};

export default LocationTabs;

