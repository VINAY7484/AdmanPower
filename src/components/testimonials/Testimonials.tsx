import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    content: "AdmanPower transformed our business operations. Their expertise in performance optimization led to a 40% increase in productivity.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechVision Inc",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&auto=format"
  },
  {
    content: "The team management solutions provided by AdmanPower helped us build and maintain high-performing teams across multiple departments.",
    author: "Michael Chen",
    role: "Operations Director",
    company: "Global Solutions",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format"
  },
  {
    content: "Their risk management strategies helped us navigate challenging market conditions and emerge stronger than ever.",
    author: "Emily Rodriguez",
    role: "Risk Manager",
    company: "Finance Pro",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&auto=format"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;