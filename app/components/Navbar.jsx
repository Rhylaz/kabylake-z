// components/Navbar.jsx
"use client";

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white shadow-md w-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-white hover:text-gray-200 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-between sm:items-stretch">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold">
                <img src="/img/KabyLake.png" alt="Logo" className="w-24 h-34 bg-transparent dark:invert " />
              </Link>
            </div>
            <div className={`flex flex-col sm:flex-row sm:space-x-4 ${isOpen ? 'block' : 'hidden'} sm:block`}>
              <Link href="/" className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium backdrop-filter backdrop-blur-lg">
                Home
              </Link>
              <Link href="/about" className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium backdrop-filter backdrop-blur-lg">
                About
              </Link>
              <Link href="/services" className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium backdrop-filter backdrop-blur-lg">
                Services
              </Link>
              <Link href="/contact" className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium backdrop-filter backdrop-blur-lg">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
