import React, { useState, useEffect } from 'react';
import { useLoading } from '../contexts/LoadingContext';
import HomeHighlights from '../components/home/HomeHighlights';
import GlassHero from '../components/home/GlassHero';

const PRELOADER_SHOWN_KEY = 'tnhss_preloader_shown';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setIsLoading: setGlobalLoading } = useLoading();

  useEffect(() => {
    // Check if preloader has been shown before
    const hasShownPreloader = localStorage.getItem(PRELOADER_SHOWN_KEY);
    
    if (!hasShownPreloader) {
      // First visit - show preloader
      setIsLoading(true);
      setGlobalLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
        setGlobalLoading(false);
        // Mark preloader as shown
        localStorage.setItem(PRELOADER_SHOWN_KEY, 'true');
      }, 1000);

      return () => {
        clearTimeout(timer);
        setGlobalLoading(false);
      };
    } else {
      // Not first visit - skip preloader
      setIsLoading(false);
      setGlobalLoading(false);
    }
  }, [setGlobalLoading]);

  if (isLoading) {
    return (
      <div className="page-home-loading">
        <div className="loading-overlay"></div>
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-logo">
            <img src="/images/logo.jpg" alt="TNHSS Logo" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-home">
      <GlassHero />
      <section className="section">
        <div className="container">
          <HomeHighlights />
        </div>
      </section>
      <section className="leadership-section">
        <div className="leadership-container">
          <div className="leadership-header">
            <h2>Leadership Team</h2>
            <p>Our management team is committed to delivering the highest level of service and trust.</p>
          </div>
          <div className="leadership-grid">
            <div className="leader-card">
              <div className="leader-photo">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='70' r='35' fill='%23e0e0e0'/%3E%3Cpath d='M 50 180 Q 50 130 100 130 Q 150 130 150 180 L 150 200 L 50 200 Z' fill='%23e0e0e0'/%3E%3C/svg%3E" alt="Leader 1" />
              </div>
              <h3 className="leader-name">Abdul Basith Bukhari</h3>
              <p className="leader-title">Chief Executive Officer</p>
            </div>
            <div className="leader-card">
              <div className="leader-photo">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='70' r='35' fill='%23e0e0e0'/%3E%3Cpath d='M 50 180 Q 50 130 100 130 Q 150 130 150 180 L 150 200 L 50 200 Z' fill='%23e0e0e0'/%3E%3C/svg%3E" alt="Leader 2" />
              </div>
              <h3 className="leader-name">Mufti Menk</h3>
              <p className="leader-title">Head of Operations</p>
            </div>
            <div className="leader-card">
              <div className="leader-photo">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='70' r='35' fill='%23e0e0e0'/%3E%3Cpath d='M 50 180 Q 50 130 100 130 Q 150 130 150 180 L 150 200 L 50 200 Z' fill='%23e0e0e0'/%3E%3C/svg%3E" alt="Leader 3" />
              </div>
              <h3 className="leader-name">Dr. Zakir Naik</h3>
              <p className="leader-title">Customer Relations Director</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
