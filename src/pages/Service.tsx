import React from 'react';
import Services from '../components/Services';
import Features from '../components/features/Features';
import Testimonials from '../components/testimonials/Testimonials';
import Contact from '../components/Contact';
import Vendors from '../components/vendors/Vendors';

const Service = () => {
  return (
    <section className="min-h-screen  py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Our <span className="text-blue-600">Services</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          We provide end-to-end recruitment solutions to help you
          <span className="font-semibold text-gray-800"> find, hire, and retain </span>
          the right talent.
        </p>

        {/* Cards */}
        {/* <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-300"> */}
          <Services />
        {/* </div> */}
        <Features />
            <Testimonials />
            <Contact />
            <Vendors />

      </div>
    </section>
  );
};

export default Service;
