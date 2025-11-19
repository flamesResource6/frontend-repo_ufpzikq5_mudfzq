import React from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Invitation from './components/Invitation';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Family from './components/Family';
import Map from './components/Map';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-rose-50 text-slate-800">
      {/* Elegant serif font utility */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
          .font-serif-elegant { font-family: 'Playfair Display', serif; }
        `}
      </style>

      {/* Gold accent border top */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200" />

      <Hero />
      <Countdown date="2025-12-14T09:00:00" />
      <Invitation />
      <Events />
      <Gallery />
      <Family />
      <Map />
      <RSVP />
      <Footer />
    </div>
  );
}

export default App;
