import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow border">
      <div className="flex justify-center">{icon}</div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">
        {title}
      </h3>
      <p className="mt-2 text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;