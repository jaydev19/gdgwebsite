import React from 'react';

interface TestimonialProps {
  content: string;
  name: string;
  role: string;
  avatar: string;
}

const TestimonialCard = ({ content, name, role, avatar }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
      <p className="text-gray-700 mb-6 italic">{content}</p>
      <div className="flex items-center">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      content: "Joining GDG Silicon University has been transformative for my career. The workshops helped me master Android development, and I landed my dream job at a tech startup!",
      name: "Alexis Chen",
      role: "Software Engineer",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      content: "The community is incredibly welcoming. As a beginner, I found mentors who guided me through my first coding projects and hackathon participation.",
      name: "Marcus Johnson",
      role: "CS Student",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      content: "GDG events provide excellent networking opportunities. I've connected with industry professionals and even secured an internship through a community connection.",
      name: "Priya Patel",
      role: "UI/UX Designer",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">Testimonials</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover how Google Developer Groups at Silicon University has impacted the lives and careers of our community members.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;