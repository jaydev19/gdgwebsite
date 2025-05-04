
import  { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

// Use lowercase extension!
import heroBg from '../assets/DSC_4422.jpg';

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden min-h-screen py-20">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: `url(${heroBg})`,
          transform: `translateY(${scrollPosition * 0.5}px)`,
          transition: 'transform 0.1s linear'
        }}
      ></div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-2xl mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Learn. Build. <span className="text-blue-400">Innovate.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              Welcome to the vibrant and dynamic community of GDGOC at Silicon University, Bhubaneswar. Our mission is to cultivate a collaborative environment where passionate individuals come together to explore the world of technology, innovation, and coding.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition duration-300 flex items-center gap-2 group">
                Join Community
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent hover:bg-white/10 border border-white/30 text-white py-3 px-6 rounded-lg font-medium transition duration-300">
                Explore Events
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 lg:w-1/3">
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/20 shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Latest Event</h3>
              <div className="bg-white/5 p-4 rounded-lg mb-4">
                <div className="text-blue-400 font-medium">February 22, 2025</div>
                <h4 className="text-lg font-medium mt-1">Escape Room Challenge</h4>
                <p className="text-gray-400 mt-2">Solve logic-based puzzles, decode clues, and race against time. Only the smartest will escape!</p>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition duration-300">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

export default Hero;
