import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { bookingRules } from '../data/rules';

const BookingRules = () => {
  return (
    <div className="page-booking-rules">
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="Rules and Regulations"
            subtitle="Important information for all guests"
          />
          <div className="rules-list">
            {bookingRules.map((rule) => (
              <div key={rule.id} className="rule-item">
                <h3>{rule.title}</h3>
                <p>{rule.description}</p>
                {rule.points && (
                  <ul className="rule-points">
                    {rule.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingRules;
