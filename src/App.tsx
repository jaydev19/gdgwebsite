import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Events from './components/Events';
import PastEvents from './components/PastEvents';
import Organizers from './components/Organizers';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Events />
      <PastEvents />
      <Organizers />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;