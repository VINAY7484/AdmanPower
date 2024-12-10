import React from 'react';
import { AiFillStar } from 'react-icons/ai';

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  author,
  role,
  company,
  rating,
  image
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <AiFillStar key={i} className="h-5 w-5 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 mb-6">{content}</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={author}
          loading="lazy"
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-500">{role} at {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;