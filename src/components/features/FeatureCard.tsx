import React from 'react';
import { IconType } from 'react-icons';

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border">
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;