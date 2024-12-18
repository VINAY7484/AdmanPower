import React from 'react';
import LogoIcon from'../assets/logo.png'

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  className = "flex items-center",
  iconClassName = "h-12 w-12 text-blue-600",
  textClassName = "ml-2 text-xl font-bold text-gray-800"
}) => {
  return (
    <div className={className}>
      {/* <HiOfficeBuilding className={iconClassName} /> */}
      <img src={LogoIcon} alt="Logo" loading="lazy" className={iconClassName} />
      <span className={textClassName}>AD Manpower</span>
    </div>
  );
};

export default Logo;