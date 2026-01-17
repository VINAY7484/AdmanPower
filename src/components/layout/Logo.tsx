import React from 'react';
import LogoIcon from'../../../public/image/logo.png'
import { Link } from 'react-router-dom';
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
    <Link to='/' className={className}>
      {/* <HiOfficeBuilding className={iconClassName} /> */}
      <img src={LogoIcon} alt="Logo" loading="lazy" className={iconClassName} />
      <span className={textClassName}>AD Manpower</span>
    </Link>
  );
};

export default Logo;