import React from 'react';
import { HiOfficeBuilding } from 'react-icons/hi';

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  className = "flex items-center",
  iconClassName = "h-8 w-8 text-blue-600",
  textClassName = "ml-2 text-xl font-bold text-gray-800"
}) => {
  return (
    <div className={className}>
      <HiOfficeBuilding className={iconClassName} />
      <span className={textClassName}>AdmanPower</span>
    </div>
  );
};

export default Logo;