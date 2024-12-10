import React from 'react';

interface VendorLogoProps {
  src: string;
  alt: string;
}

const VendorLogo: React.FC<VendorLogoProps> = ({ src, alt }) => {
  return (
    <div className="flex items-center justify-center p-4 bg-white rounded-lg">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
      />
    </div>
  );
};

export default VendorLogo;