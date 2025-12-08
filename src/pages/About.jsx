import React, { useEffect, useRef } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { historyData } from '../data/history';

const About = () => {
  const timelineItemsRef = useRef([]);

  const highlights = [
    { label: 'Years of Service', value: '25+', icon: '⏳' },
    { label: 'Pilgrims Served', value: '50k+', icon: '🕋' },
    { label: 'Cities Covered', value: '2+', icon: '🌆' },
    { label: 'Rooms & Halls', value: '100+', icon: '🏨' },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    timelineItemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      timelineItemsRef.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);

  return (
    <div className="page-about">
      <section className="section">
        <div className="container">
          <SectionTitle 
            title={historyData.title}
            subtitle={historyData.description}
          />
          <div className="about-overview">
            <div className="about-text">
              <p>
                We are committed to providing pilgrims and guests with comfortable stays,
                reliable facilities, and a spiritually nurturing environment. Our team
                focuses on hospitality, safety, and accessibility across our locations.
              </p>
              <p>
                From prayer halls and dining services to secure storage and attentive
                housekeeping, every detail is designed to make your stay smooth and
                memorable.
              </p>
            </div>
            <div className="about-stats">
              {highlights.map((item) => (
                <div key={item.label} className="stat-card">
                  <div className="stat-icon" aria-hidden="true">{item.icon}</div>
                  <div className="stat-value">{item.value}</div>
                  <div className="stat-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <h3 className="timeline-title">Our Journey</h3>
          <div className="timeline">
            {historyData.timeline.map((item, index) => (
              <div 
                key={index} 
                className="timeline-item"
                ref={(el) => (timelineItemsRef.current[index] = el)}
              >
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.event}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
