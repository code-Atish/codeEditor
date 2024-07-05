import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#111827] p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-3xl font-bold">
          HackerRank
        </div>
        <div className="hidden md:flex space-x-8 text-lg text-white">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-lg text-white">
            <a href="#home" className="block hover:text-gray-400">Home</a>
            <a href="#about" className="block hover:text-gray-400">About</a>
            <a href="#services" className="block hover:text-gray-400">Services</a>
            <a href="#contact" className="block hover:text-gray-400">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
