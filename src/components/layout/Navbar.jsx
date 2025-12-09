import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import EnquireModal from '../common/EnquireModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEnquire, setShowEnquire] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand logo">
          <img src="/images/logo.jpg" alt="TNHSS Logo" />
          <span>TNHSS</span>
        </div>
        <button
          className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="/accommodations" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Accommodations</NavLink></li>
          <li><NavLink to="/booking-rules" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Booking Rules</NavLink></li>
          <li><NavLink to="/marriage-hall" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Marriage Hall</NavLink></li>
        </ul>
        <div className="nav-actions">
          <button
            className="nav-enquire-btn"
            onClick={() => {
              setShowEnquire(true);
              closeMenu();
            }}
          >
            Enquire Now
          </button>
        </div>
        {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      </div>
      <EnquireModal
        isOpen={showEnquire}
        onClose={() => setShowEnquire(false)}
      />
    </nav>
  );
};

export default Navbar;
