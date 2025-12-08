import React, { useState } from 'react';
import EnquireModal from '../common/EnquireModal';

const GlassHero = () => {
    const [showEnquire, setShowEnquire] = useState(false);

    return (
        <div className="hero-glass">
            <div className="hero-card">
                <img src="/images/building-chennai-1.jpg" alt="TNHSS Building Chennai" />
            </div>

            <div className="hero-content">
                <h1>Tamilnadu Hajj Service Society</h1>
                <p>A symbol of our community's strength and dedication to service.</p>
                <button className="btn-book" onClick={() => setShowEnquire(true)}>Enquire Now</button>
            </div>

            <EnquireModal
                isOpen={showEnquire}
                onClose={() => setShowEnquire(false)}
            />
        </div>
    );
};

export default GlassHero;
