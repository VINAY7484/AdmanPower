import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Vendors from './components/vendors/Vendors';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Vendors />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;