import React from 'react';

const GlassHero = () => {
    return (
        <div className="hero-glass">
            <div className="hero-card">
                <img src="/images/building-chennai-1.jpg" alt="TNHSS Building Chennai" />
            </div>

            <div className="hero-watermark" aria-hidden="true" />

            <div className="hero-content">
                <h1>Tamilnadu Hajj Service Society</h1>
                <p>A symbol of our community's strength and dedication to service.</p>
            </div>
        </div>
    );
};

export default GlassHero;
