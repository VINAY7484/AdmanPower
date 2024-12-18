import React from 'react';
import { HiBriefcase, HiChartBar, HiUserGroup, HiShieldCheck } from 'react-icons/hi';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: <HiBriefcase className="h-8 w-8 text-blue-600" />,
    title: 'Business Consulting',
    description: 'Strategic guidance to help your business reach its full potential'
  },
  {
    icon: <HiChartBar className="h-8 w-8 text-blue-600" />,
    title: 'Performance Optimization',
    description: 'Enhance operational efficiency and maximize productivity'
  },
  {
    icon: <HiUserGroup className="h-8 w-8 text-blue-600" />,
    title: 'Team Management',
    description: 'Build and manage high-performing teams for sustainable growth'
  },
  {
    icon: <HiShieldCheck className="h-8 w-8 text-blue-600" />,
    title: 'Risk Management',
    description: 'Identify and mitigate potential risks to protect your business'
  }
];

const ServiceList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default ServiceList;