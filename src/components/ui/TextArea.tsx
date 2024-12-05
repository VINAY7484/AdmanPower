import React from 'react';
import { cn } from '../../utils/styles';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, id, className, ...props }) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={cn(
          "block w-full rounded-md border-gray-300 shadow-sm",
          "focus:border-blue-500 focus:ring-blue-500",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default TextArea;