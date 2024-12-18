// import React from 'react';
// import VendorLogo from './VendorLogo';

// const vendors = [
//   {
//     src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format",
//     alt: "Microsoft Logo"
//   },
//   {
//     src: "https://images.unsplash.com/photo-1599305446902-17250482b616?w=200&h=100&fit=crop&auto=format",
//     alt: "Apple Logo"
//   },
//   {
//     src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format",
//     alt: "Google Logo"
//   },
//   {
//     src: "https://images.unsplash.com/photo-1599305446902-17250482b616?w=200&h=100&fit=crop&auto=format",
//     alt: "Amazon Logo"
//   },
//   {
//     src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format",
//     alt: "Meta Logo"
//   },
//   {
//     src: "https://images.unsplash.com/photo-1599305446902-17250482b616?w=200&h=100&fit=crop&auto=format",
//     alt: "IBM Logo"
//   }
// ];

// const Vendors: React.FC = () => {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-center text-2xl font-semibold text-gray-800 mb-12">
//           Trusted by Industry Leaders
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
//           {vendors.map((vendor, index) => (
//             <VendorLogo key={index} {...vendor} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Vendors;




// import React, { useEffect, useState } from 'react';
// import VendorLogo from './VendorLogo';

// const vendors = [
//   {
//     src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format",
//     alt: "Microsoft Logo"
//   },
//   {
//     src: "https://images.unsplash.com/photo-1599305446902-17250482b616?w=200&h=100&fit=crop&auto=format",
//     alt: "Apple Logo"
//   },
//   {
//     src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format",
//     alt: "Google Logo"
//   },
//   {
//     src: "https://images.unsplash.com/photo-1599305446902-17250482b616?w=200&h=100&fit=crop&auto=format",
//     alt: "Amazon Logo"
//   },
//   {
//     src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format",
//     alt: "Meta Logo"
//   },
//   {
//     src: "https://images.unsplash.com/photo-1599305446902-17250482b616?w=200&h=100&fit=crop&auto=format",
//     alt: "IBM Logo"
//   }
// ];

// const Vendors: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-slide logic
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % vendors.length);
//     }, 3000); // Change slide every 3 seconds
//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   // Prepare the vendors array to show only the current item or slide effect
//   const visibleVendors = [
//     ...vendors.slice(currentIndex),
//     ...vendors.slice(0, currentIndex)
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-center text-2xl font-semibold text-gray-800 mb-12">
//           Trusted by Industry Leaders
//         </h2>
//         <div
//           className="flex gap-8 overflow-hidden transition-transform"
//           style={{
//             transform: `translateX(-${currentIndex * 100}%)`,
//             whiteSpace: 'nowrap'
//           }}
//         >
//           {visibleVendors.map((vendor, index) => (
//             <div
//               key={index}
//               className="inline-block transition-transform ease-in-out duration-500"
//               style={{ minWidth: '200px', flexShrink: 0 }}
//             >
//               <VendorLogo {...vendor} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Vendors;




import React, { useEffect, useState } from 'react';
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
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % vendors.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-center text-2xl font-semibold text-gray-800 mb-12">
          Trusted by Industry Leaders
        </h2> */}
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {vendors.map((vendor, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full"
                style={{ flexBasis: "100%" }}
              >
                <VendorLogo {...vendor} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vendors;
