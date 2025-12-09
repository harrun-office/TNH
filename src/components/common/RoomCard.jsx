import React from 'react';

const RoomCard = ({ room, className = "" }) => {
  return (
    <div className={`room-card ${className}`}>
      <div className="room-content">
        <h3>{room.name}</h3>
        <p className="room-capacity">Capacity: {room.capacity} {room.capacity === 1 ? 'guest' : 'guests'}</p>
        {room.description && (
          <p className="room-description">{room.description}</p>
        )}
        <div className="room-amenities-section">
          <h4>Amenities</h4>
          <ul className="room-amenities">
            {room.amenities.map((amenity, index) => (
              <li key={index} className="room-amenity">
                <span className="room-amenity-icon" aria-hidden="true">✓</span>
                <span>{amenity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;

