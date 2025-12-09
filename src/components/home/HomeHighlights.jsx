import React from 'react';

const HomeHighlights = () => {
  const highlights = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
          <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" />
        </svg>
      ),
      title: "Comfortable Accommodations",
      description: "Well-furnished rooms with modern amenities"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
      title: "Prime Locations",
      description: "Conveniently located in Chennai and Mumbai"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
      title: "Dedicated Service",
      description: "Serving pilgrims with care and respect"
    }
  ];

  return (
    <section className="home-highlights">
      <div className="container">
        <div className="highlights-grid">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-icon">{highlight.icon}</div>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHighlights;
