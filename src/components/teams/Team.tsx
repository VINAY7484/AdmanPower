import React from 'react';
import SectionTitle from '../common/SectionTitle';
import TeamMember from '../common/TeamMember';
import team1 from '../assets/image/team1.jpg'

const Team = () => {
  const team = [
    {
      name: "Shefali Sharma Dwivedi",
      role: "MD & Business Head",
      image: team1,
      linkedin: "#"
    },
    {
      name: "Manoj Kumar Dwivedi",
      role: "Business Coordinator - Head",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      linkedin: "#"
    },
    // {
    //   name: "Emily Rodriguez",
    //   role: "Head of Design",
    //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    //   linkedin: "#"
    // },
    // {
    //   name: "David Kim",
    //   role: "Lead Developer",
    //   image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    //   linkedin: "#"
    // }
  ];

  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Meet Our Team"
          subtitle="The Minds Behind AD Manpower"
        />
        
        <div className="mt-12 lg:mx-40 grid gap-8 md:grid-cols-2 lg:grid-cols-2 place-content-center">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;