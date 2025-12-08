import React from 'react';
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