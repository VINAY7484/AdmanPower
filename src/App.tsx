import React from 'react';
import Navbar from './components/Navbar';
import SliderSection from './components/slider/SliderSection';
import Features from './components/features/Features';
import Services from './components/Services';
import AboutSection from './components/about/AboutSection';
import Vendors from './components/vendors/Vendors';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <SliderSection />
      <Hero/>
      <Services />
      <AboutSection />
      <Features />
      <Testimonials />
      <Vendors />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;