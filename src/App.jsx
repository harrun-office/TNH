import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoadingProvider, useLoading } from './contexts/LoadingContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Accommodations from './pages/Accommodations';
import BookingRules from './pages/BookingRules';
import MarriageHall from './pages/MarriageHall';
import NotFound from './pages/NotFound';
import './App.css';

const AppContent = () => {
  const { isLoading } = useLoading();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 180);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      {!isLoading && <Header />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accommodations" element={<Accommodations />} />
          <Route path="/booking-rules" element={<BookingRules />} />
          <Route path="/marriage-hall" element={<MarriageHall />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isLoading && <Footer />}
      {showScrollTop && (
        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <LoadingProvider>
        <AppContent />
      </LoadingProvider>
    </Router>
  );
};

export default App;




// quick links
// remove contact us and add feedback
// accomodation booking rules
// add location
// work on quick links
// facilties