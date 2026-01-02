import React from 'react';
import { Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, linkedin }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-600">{role}</p>
        <a
          href={linkedin}
          className="mt-2 inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          <Linkedin className="h-5 w-5 mr-1" />
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default TeamMember;