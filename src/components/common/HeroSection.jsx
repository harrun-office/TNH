import React from 'react';

const HeroSection = ({ title, subtitle, backgroundImage }) => {
  return (
    <section className={`hero-section ${backgroundImage ? 'hero-with-image' : 'hero-without-image'}`}>
      {backgroundImage && (
        <img 
          src={backgroundImage} 
          alt="" 
          className="hero-background-image"
          onError={(e) => {
            console.error('Image failed to load:', backgroundImage);
            e.target.style.display = 'none';
          }}
          onLoad={() => {
            console.log('Image loaded successfully:', backgroundImage);
          }}
        />
      )}
      {(title || subtitle) && (
        <div className={`hero-overlay ${backgroundImage ? 'hero-overlay-with-image' : ''}`}>
          <div className="container">
            {title && <h1>{title}</h1>}
            {subtitle && <p>{subtitle}</p>}
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;

