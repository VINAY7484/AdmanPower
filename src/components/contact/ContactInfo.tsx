import React from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const contactDetails = [
  {
    icon: <HiMail className="h-6 w-6 text-blue-600 mt-1" />,
    title: 'Email',
    content: 'admejobs18@gmail.com',
    // content: 'admanpowerenterprises@gmail.com'
  },
  {
    icon: <HiPhone className="h-6 w-6 text-blue-600 mt-1" />,
    title: 'Phone',
    content: '+91 9899993520 ',
    // content2: '+91 9899991560'
  },
  {
    icon: <HiLocationMarker className="h-6 w-6 text-blue-600 mt-1" />,
    title: 'Address',
    content: 'D2/2/2A, DLF Dilshad Ext. -II, ',
    content2: 'Sahibabad, Ghaziabad - 201005'
  }
];

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-8">
      {contactDetails.map((detail, index) => (
        <div key={index} className="flex items-start">
          {detail.icon}
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">{detail.title}</h3>
            <p className="mt-1 text-gray-600 whitespace-pre-line">{detail.content}</p>
            <p className="mt-1 text-gray-600 whitespace-pre-line">{detail.content2}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;