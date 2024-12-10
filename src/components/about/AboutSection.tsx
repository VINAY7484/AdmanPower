import React from 'react';
import { BsCheckCircle, BsTrophy, BsPeople, BsBarChart } from 'react-icons/bs';
import Container from '../ui/Container';
import StatCard from './StatCard';
import ValueCard from './ValueCard';

const stats = [
  {
    icon: BsTrophy,
    value: '15+',
    label: 'Years Experience'
  },
  {
    icon: BsPeople,
    value: '500+',
    label: 'Happy Clients'
  },
  {
    icon: BsBarChart,
    value: '98%',
    label: 'Success Rate'
  }
];

const values = [
  {
    title: 'Excellence',
    description: 'We strive for excellence in every project we undertake'
  },
  {
    title: 'Innovation',
    description: 'Embracing new technologies and methodologies'
  },
  {
    title: 'Integrity',
    description: 'Building trust through transparent business practices'
  }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Transforming Businesses Since 2009
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At AdmanPower, we're dedicated to helping businesses reach their full potential through innovative management solutions and strategic guidance.
            </p>
            <div className="space-y-4">
              {['Industry-leading expertise', 'Customized solutions', 'Proven track record'].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <BsCheckCircle className="text-blue-600 text-xl" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                loading="lazy"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg">
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              {values.map((value, index) => (
                <ValueCard key={index} {...value} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;