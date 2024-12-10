import React from 'react';
import { BsLightningCharge, BsGear, BsGraphUp, BsShield, BsPeople, BsClockHistory } from 'react-icons/bs';
import FeatureCard from './FeatureCard';
import Container from '../ui/Container';

const features = [
  {
    icon: BsLightningCharge,
    title: 'Fast Implementation',
    description: 'Quick and efficient implementation of management solutions'
  },
  {
    icon: BsGear,
    title: 'Process Automation',
    description: 'Streamline operations with intelligent automation'
  },
  {
    icon: BsGraphUp,
    title: 'Performance Analytics',
    description: 'Data-driven insights for better decision making'
  },
  {
    icon: BsShield,
    title: 'Security First',
    description: 'Enterprise-grade security for your business data'
  },
  {
    icon: BsPeople,
    title: 'Team Collaboration',
    description: 'Enhanced tools for team productivity'
  },
  {
    icon: BsClockHistory,
    title: '24/7 Support',
    description: 'Round-the-clock expert support and assistance'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover the features that make us stand out from the competition
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;