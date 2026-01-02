import React from 'react';
import { useAutoSlider } from '../../hooks/useAutoSlider';
import TestimonialCard from './TestimonialCard';
import SliderIndicator from './SliderIndicator';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
  const currentIndex = useAutoSlider(testimonials.length);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="max-w-2xl mx-auto">
                <TestimonialCard {...testimonial} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <SliderIndicator 
        total={testimonials.length} 
        current={currentIndex} 
      />
    </div>
  );
};

export default TestimonialSlider;