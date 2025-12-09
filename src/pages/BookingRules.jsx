import React, { useEffect, useRef } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { bookingRules } from '../data/rules';

const BookingRules = () => {
  const ruleRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    );

    ruleRefs.current.forEach((el) => el && observer.observe(el));

    return () => ruleRefs.current.forEach((el) => el && observer.unobserve(el));
  }, []);

  return (
    <div className="page-booking-rules">
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="Rules and Regulations"
            subtitle="Important information for all guests"
          />
          <div className="rules-list">
            {bookingRules.map((rule, index) => (
              <div
                key={rule.id}
                className="rule-item"
                style={{ transitionDelay: `${index * 80}ms` }}
                ref={(el) => (ruleRefs.current[index] = el)}
              >
                <div className="rule-meta">
                  <span className="rule-number">{String(index + 1).padStart(2, '0')}</span>
                  <div className="rule-meta-divider" />
                  <h3>{rule.title}</h3>
                </div>
                <p>{rule.description}</p>
                {rule.points && (
                  <ul className="rule-points">
                    {rule.points.map((point, index) => (
                      <li key={index}>
                        <span className="rule-bullet" aria-hidden="true">•</span>
                        <span>{point}</span>
                      </li>
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
