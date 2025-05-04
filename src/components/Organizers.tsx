import React from 'react';

interface OrganizerProps {
  name: string;
  role: string;
  image: string;
  contact?: string;
}

const OrganizerCard = ({ name, role, image, contact }: OrganizerProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-blue-600 text-sm font-medium mb-2">{role}</p>
      {contact && (
        <p className="text-gray-600 text-sm">{contact}</p>
      )}
    </div>
  );
};

const Organizers = () => {
  const organizers = [
    {
      name: "Tanushree Tripathy",
      role: "GDGOC Organizer/Lead",
      image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Samaleswari Prasad Nayak",
      role: "Faculty Co-Ordinator",
      image: "https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Jay Dev Das",
      role: "Blockchain Lead",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Subham Kumar Das",
      role: "WebDev Lead",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      contact: "+91 8596824861"
    },
    {
      name: "Sanskar Lohani",
      role: "Event Management Lead",
      image: "https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      contact: "+91 7780029905"
    }
  ];

  return (
    <section id="organizers" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">Our Team</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet the Organizers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">The passionate individuals behind GDG Silicon University who make it all happen.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {organizers.map((organizer, index) => (
            <OrganizerCard key={index} {...organizer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizers;