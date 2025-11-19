import React from 'react';
import { NAV_ITEMS } from '../constants';

const BottomNav: React.FC = () => {
  // Mobile nav usually needs Home, Projects, Contact. 
  // We can filter the main items or use them all.
  // The prompt specifically asked for: Home, Projects, Contact.
  const mobileItems = NAV_ITEMS.filter(item => ['Home', 'Projects', 'Contact'].includes(item.label));

  return (
    <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-100 px-6 py-4 flex justify-between items-center">
        {mobileItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex flex-col items-center justify-center text-gray-500 hover:text-black transition-colors p-2"
          >
            <div className="text-black">
              {item.icon}
            </div>
            <span className="text-[10px] font-medium mt-1">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;