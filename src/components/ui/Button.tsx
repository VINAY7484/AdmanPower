import React from 'react';
import { cn } from '../../utils/styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  fullWidth = false,
  className,
  children,
  ...props
}) => {
  const baseStyles = 'px-4 py-2 rounded-md transition-colors flex items-center justify-center';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50'
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;