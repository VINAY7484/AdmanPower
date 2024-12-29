import React from 'react';

interface SliderIndicatorProps {
  total: number;
  current: number;
}

const SliderIndicator: React.FC<SliderIndicatorProps> = ({ total, current }) => {
  return (
    <div className="flex justify-center space-x-2 mt-6">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`h-2 rounded-full transition-all duration-300 ${
            index === current 
              ? 'w-4 bg-blue-600' 
              : 'w-2 bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default SliderIndicator;