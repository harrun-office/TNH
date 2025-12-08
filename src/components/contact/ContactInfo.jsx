import React from 'react';
import { contactData } from '../../data/contacts';

const ContactInfo = ({ location = 'headOffice' }) => {
  const contact = contactData[location] || contactData.headOffice;

  return (
    <div className="contact-info">
      <div className="contact-item">
        <h4>Address</h4>
        <p>{contact.address}</p>
      </div>
      <div className="contact-item">
        <h4>Phone</h4>
        <p>{contact.phone}</p>
      </div>
      <div className="contact-item">
        <h4>Email</h4>
        <p>{contact.email}</p>
      </div>
      <div className="contact-item">
        <h4>Business Hours</h4>
        <p>{contact.hours}</p>
      </div>
    </div>
  );
};

export default ContactInfo;

