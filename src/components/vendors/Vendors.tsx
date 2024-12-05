import React from 'react';
import VendorLogo from './VendorLogo';

const vendors = [
  {
    src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format",
    alt: "Microsoft Logo"
  },
  {
    src: "https://images.unsplash.com/photo-1599305446902-17250482b616?w=200&h=100&fit=crop&auto=format",
    alt: "Apple Logo"
  },
  {
    src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format",
    alt: "Google Logo"
  },
  {
    src: "https://images.unsplash.com/photo-1599305446902-17250482b616?w=200&h=100&fit=crop&auto=format",
    alt: "Amazon Logo"
  },
  {
    src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format",
    alt: "Meta Logo"
  },
  {
    src: "https://images.unsplash.com/photo-1599305446902-17250482b616?w=200&h=100&fit=crop&auto=format",
    alt: "IBM Logo"
  }
];

const Vendors: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-12">
          Trusted by Industry Leaders
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {vendors.map((vendor, index) => (
            <VendorLogo key={index} {...vendor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vendors;