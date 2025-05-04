import React from 'react';
import { Code, Users, Calendar, Lightbulb } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Workshops",
      description: "Hands-on sessions covering the latest technologies, frameworks, and Google developer tools."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Network",
      description: "Connect with like-minded developers, designers, and tech enthusiasts from Silicon University."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Regular Meetups",
      description: "Biweekly gatherings featuring expert talks, code labs, and collaborative problem-solving."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Projects",
      description: "Work on real-world projects with mentorship from industry professionals and Google experts."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">Our Programs</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Join our community to enhance your skills, build your network, and accelerate your career in technology.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;