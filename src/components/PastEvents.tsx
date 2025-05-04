import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface PastEventProps {
  title: string;
  date: string;
  type: string;
  description: string;
  venue: string;
  instagramLink?: string;
}

const PastEventCard = ({ title, date, type, description, venue, instagramLink }: PastEventProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
            {type}
          </span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{venue}</span>
        </div>
        {instagramLink && (
          <a 
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            View on Instagram →
          </a>
        )}
      </div>
    </div>
  );
};

const PastEvents = () => {
  const pastEvents = [
    {
      title: "Tech Synopsis",
      date: "February 21, 2025",
      type: "Workshop",
      description: "Think, Document, Innovate! Create powerful SRS documents and prove your analytical skills with this industry-standard documentation challenge.",
      venue: "TH-2, CSE Building",
      instagramLink: "https://www.instagram.com/p/DGGZ8UHTQZc/?igsh=cnluY3k5ejlrcWsw"
    },
    {
      title: "Tech Winter Break: Web Dev Workshop",
      date: "December 28, 2024",
      type: "Workshop",
      description: "Build a basic Paytm-like app with React, Express, MongoDB, and JWT! Led by Shubham Kumar Das.",
      venue: "Google Meet"
    },
    {
      title: "Hands-On With Google Colab",
      date: "November 30, 2024",
      type: "Workshop",
      description: "Deep dive into data science tools and techniques. Master Python libraries like Pandas and Matplotlib while exploring data workflows.",
      venue: "Room No. 658, CSE Building"
    },
    {
      title: "Crack-A-Thon",
      date: "November 7, 2024",
      type: "Workshop",
      description: "Learn essential strategies and tips for succeeding in hackathons. Get insider knowledge on hackathon preparation.",
      venue: "Room No. 658, CSE Building"
    }
  ];

  return (
    <section id="past-events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">Event History</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Past Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our previous events and see what makes our community special.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pastEvents.map((event, index) => (
            <PastEventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;