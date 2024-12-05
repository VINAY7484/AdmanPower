import React from 'react';
import Container from './ui/Container';
import ServiceList from './services/ServiceList';

const Services: React.FC = () => {
  return (
    <div id="services" className="bg-white py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>
        <div className="mt-16">
          <ServiceList />
        </div>
      </Container>
    </div>
  );
};

export default Services;