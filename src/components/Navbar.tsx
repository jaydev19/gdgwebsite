
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
// Import the specified PNG logo
import GDGLogoPng from '../assets/Copy of GDG On Campus - Horizontal -  Template.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md py-2 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo only, no text */}
          <a href="#" className="flex items-center">
            <img
              src={GDGLogoPng}
              alt="GDG On Campus Logo"
              className="h-10 w-auto"
              style={{ maxHeight: '40px' }}
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition duration-200">Programs</a>
            <a href="#events" className="text-gray-700 hover:text-blue-600 font-medium transition duration-200">Events</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition duration-200">Community</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition duration-200">Contact</a>
            <a href="#" className="px-5 py-2 rounded-lg font-medium transition duration-300 bg-blue-600 text-white hover:bg-blue-700">
              Join Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute left-0 right-0 bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          <div className="p-4 space-y-3">
            <a href="#features" className="block py-2 text-gray-700 font-medium hover:text-blue-600" onClick={() => setIsOpen(false)}>Programs</a>
            <a href="#events" className="block py-2 text-gray-700 font-medium hover:text-blue-600" onClick={() => setIsOpen(false)}>Events</a>
            <a href="#testimonials" className="block py-2 text-gray-700 font-medium hover:text-blue-600" onClick={() => setIsOpen(false)}>Community</a>
            <a href="#contact" className="block py-2 text-gray-700 font-medium hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</a>
            <a href="#" className="block py-2 px-4 bg-blue-600 text-white rounded-lg font-medium text-center" onClick={() => setIsOpen(false)}>Join Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
