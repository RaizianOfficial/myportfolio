import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight z-50">
          Raizian
        </a>
        
        <div className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full" />
            </a>
          ))}
        </div>
        
        <a 
          href="#contact"
          className="hidden md:block bg-black text-white text-sm px-5 py-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

export default Navbar;