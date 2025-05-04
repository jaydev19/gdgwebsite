import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface EventProps {
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  tags: string[];
  description: string;
}

const EventCard = ({ title, date, time, location, image, tags, description }: EventProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="text-sm">{date}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm">{time}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{location}</span>
        </div>
        <button className="w-full bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-600 py-2 px-4 rounded-lg font-medium transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

const Events = () => {
  const events = [
    {
      title: "Escape Room Challenge",
      date: "February 22, 2025",
      time: "TBA",
      location: "655 Room, CSE Building",
      image: "https://images.pexels.com/photos/7102/notes-macbook-study-conference.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Workshop", "Challenge"],
      description: "Crack the Code, Beat the Clock! Team up and solve exciting problem-solving challenges with prizes & certificates."
    },
    {
      title: "AI & ML: Transforming Android",
      date: "February 21, 2025",
      time: "TBA",
      location: "LT-1, CSE Building",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Tech Talk", "Android", "AI/ML"],
      description: "Join Belal Khan, GDG Expert and Android Engineer at American Express, for insights on AI and ML in Android development."
    },
    {
      title: "Flutter in 2025",
      date: "January 24-25, 2025",
      time: "TBA",
      location: "658, CSE Building",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Workshop", "Flutter", "Mobile"],
      description: "Build Once, Run Anywhere – Dive into the World of Flutter! Create high-performance cross-platform apps."
    }
  ];

  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">Upcoming Events</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our Next Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Stay updated with our latest workshops, tech talks, and challenges. Register early to secure your spot!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition duration-300">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;