import React, { useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import ContactInfo from '../components/contact/ContactInfo';
import { contactData } from '../data/contacts';

const Contact = () => {
  const [selectedLocation, setSelectedLocation] = useState('chennai');

  const handleCallClick = () => {
    const phoneNumber = contactData[selectedLocation].phone.replace(/\s/g, '');
    window.location.href = `tel:${phoneNumber}`;
  };

  const currentLocation = contactData[selectedLocation];

  return (
    <div className="page-contact">
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Contact Us"
            subtitle="Get in touch with us"
          />
          <div className="contact-wrapper">
            <div className="location-selector">
              <button
                className={selectedLocation === 'chennai' ? 'active' : ''}
                onClick={() => setSelectedLocation('chennai')}
              >
                Chennai
              </button>
              <button
                className={selectedLocation === 'mumbai' ? 'active' : ''}
                onClick={() => setSelectedLocation('mumbai')}
              >
                Mumbai
              </button>
            </div>
            <div className="contact-section">
              <ContactInfo location={selectedLocation} />
              <button className="cta-call-button" onClick={handleCallClick}>
                Call Now
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
