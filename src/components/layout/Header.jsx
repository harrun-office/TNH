import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="logo">
            <img src="/images/logo.jpg" alt="TNHSS Logo" />
            <h1>TNHSS</h1>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;

