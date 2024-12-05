import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <div id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Powering Your Business with Expert Management Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Transform your business operations with our comprehensive management services. 
              We help you streamline processes, boost efficiency, and drive growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Get Started
                <HiArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Business team working"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;