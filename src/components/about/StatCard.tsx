import React from 'react';
import { IconType } from 'react-icons';

interface StatCardProps {
  icon: IconType;
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label }) => {
  return (
    <div className="text-center">
      <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
};

export default StatCard;