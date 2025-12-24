'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { colors } from '../../styles/utils/colors';
import { typography } from '../../styles/utils/typography';
import { layout } from '../../styles/utils/layoutUtils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Top blue section with logo */}
      <div className="bg-blue-50 py-2 px-4">
        <div className="container mx-auto flex items-center">
          <Link href="/" className="flex items-center mr-auto">
            <img 
              src="/images/logo.png" 
              alt="Guépard Construction" 
              className="h-12 mr-3"
              style={{ 
                width: 'auto',
                maxHeight: '48px',
                objectFit: 'contain'
              }}
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950 tracking-wider uppercase">Guépard Construction</span>
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-full my-0.5"></div>
              <span className="text-xs text-slate-600 font-medium tracking-wide uppercase">Building Excellence Since 2011</span>
            </div>
          </Link>
          
          {/* Contact info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-slate-600">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@guepardconstruction.com</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main blue navigation bar */}
      <div className="bg-slate-800 hover:bg-slate-700">
        <div className="container mx-auto flex justify-end items-center px-4">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link href="/" className="text-white hover:text-yellow-200 font-medium py-2 px-3 transition-all duration-300">
              Home
            </Link>
            <div className="relative group">
              <button className="text-white hover:text-yellow-200 font-medium flex items-center py-2 px-3 transition-all duration-300">
                Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full w-64 bg-white shadow-xl rounded-b-md py-2 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 border-t-2 border-yellow-500">
                <Link href="/services/schools-universities" className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">
                  Schools & Universities
                </Link>
                <Link href="/services/houses" className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">
                  Houses
                </Link>
                <Link href="/services/water-drilling" className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">
                  Water Drilling
                </Link>
                <Link href="/services/others" className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">
                  Others
                </Link>
              </div>
            </div>

            <Link href="/about" className="text-white hover:text-yellow-200 font-medium py-2 px-3 transition-all duration-300">
              About Us
            </Link>
            <Link href="/contact" className="text-white hover:text-yellow-200 font-medium py-2 px-3 transition-all duration-300">
              Contact
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 text-white hover:text-yellow-200 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg border-t border-blue-100 absolute left-0 right-0 z-50">
            <div className="flex flex-col p-4 space-y-2">
              <Link href="/" className="text-slate-700 hover:text-blue-700 font-medium py-2 border-b border-slate-100">
                Home
              </Link>
              <div className="py-2 border-b border-slate-100">
                <div className="font-medium text-slate-700 mb-2">
                  Services
                </div>
                <div className="pl-4 space-y-2">
                  <Link href="/services/schools-universities" className="block text-slate-600 hover:text-blue-700 py-1">
                    Schools & Universities
                  </Link>
                  <Link href="/services/houses" className="block text-slate-600 hover:text-blue-700 py-1">
                    Houses
                  </Link>
                  <Link href="/services/water-drilling" className="block text-slate-600 hover:text-blue-700 py-1">
                    Water Drilling
                  </Link>
                </div>
              </div>
              <Link href="/projects" className="text-slate-700 hover:text-blue-700 font-medium py-2 border-b border-slate-100">
                Projects
              </Link>
              <Link href="/about" className="text-slate-700 hover:text-blue-700 font-medium py-2 border-b border-slate-100">
                About Us
              </Link>
              <Link href="/contact" className="text-slate-700 hover:text-blue-700 font-medium py-2 border-b border-slate-100">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
