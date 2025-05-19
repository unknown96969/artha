import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMemberProps {
  image: string;
  name: string;
  position: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, position, bio }) => {
  return (
    <div className="bg-white rounded-lg shadow-custom overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <a href="#" className="bg-white p-2 rounded-full hover:bg-accent hover:text-white transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="#" className="bg-white p-2 rounded-full hover:bg-accent hover:text-white transition-colors">
            <Twitter size={18} />
          </a>
          <a href="#" className="bg-white p-2 rounded-full hover:bg-accent hover:text-white transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-1">{name}</h3>
        <p className="text-accent font-medium mb-3">{position}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  const teamMembers = [
    {
      image: "https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Aditya Khandelwal",
      position: "Founder & CEO",
      bio: "With over 100 years of experience in the financial industry, Aditya leads our team with vision and expertise."
    },
    {
      image: "https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Hema Malini",
      position: "Chief Investment Officer",
      bio: "Hema specializes in strategic asset allocation and has managed portfolios through multiple market cycles."
    },
    {
      image: "https://images.pexels.com/photos/5392954/pexels-photo-5392954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Salman Khan",
      position: "Senior Financial Advisor",
      bio: "Salman helps clients navigate complex financial situations with personalized strategies and clear guidance."
    },
    {
      image: "https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Katrina Kaif",
      position: "Tax Specialist",
      bio: "Katrina's expertise in tax planning helps clients optimize their financial positions while ensuring compliance."
    }
  ];

  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Our team of experienced financial professionals is dedicated to helping you 
            achieve your financial goals through personalized guidance and expert advice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
              bio={member.bio}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;