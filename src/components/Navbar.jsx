import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav className="fixed w-full z-[9999] top-0 left-0 bg-sky-100 shadow-lg border-b border-gray-100 py-2 px-4 flex justify-between items-center h-14">
      <Link to="/home" className={`text-xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg transition-all ${animated ? 'translate-x-0 opacity-100' : 'translate-x-[-10px] opacity-0'} hover:scale-105`}>
        Jahaazibano
      </Link>
      
      <button
        className="md:hidden p-1.5 bg-gradient-to-r from-indigo-100 to-purple-100 hover:from-indigo-200 hover:to-purple-200 rounded-lg shadow hover:shadow-md hover:scale-105 transition-all duration-200 w-11 h-11 flex items-center justify-center"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg className="w-5 h-5 text-indigo-700" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} />
        </svg>
      </button>

      <div className={`md:hidden fixed top-14 left-0 w-full max-h-64 bg-sky-50 shadow-xl border-x border-indigo-200 rounded-b-xl overflow-hidden transform transition-all duration-300 ease-out origin-top ${menuOpen ? 'translate-y-0 opacity-100 scale-y-100 max-h-64' : 'translate-y-[-4px] opacity-0 scale-y-98 pointer-events-none max-h-0'}`}>
        <div className="p-2 space-y-1 pt-4">
          <Link to="/home" className="block p-3 text-lg font-semibold text-gray-800 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-200 text-center border-l-2 border-transparent hover:border-indigo-300" onClick={toggleMenu}>🏠 Home</Link>
          <Link to="/courses" className="block p-3 text-lg font-semibold text-gray-800 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-200 text-center border-l-2 border-transparent hover:border-indigo-300" onClick={toggleMenu}>📚 Courses</Link>

          <Link to="/contact" className="block p-3 text-lg font-semibold text-gray-800 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-200 text-center border-l-2 border-transparent hover:border-indigo-300" onClick={toggleMenu}>📞 Contact</Link>
          <Link to="/why-choose-us" className="block p-3 text-lg font-semibold text-gray-800 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-200 text-center border-l-2 border-transparent hover:border-indigo-300" onClick={toggleMenu}>⭐ Why Us</Link>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-4 ml-auto">
        <Link to="/home" className="px-3 py-1.5 text-base font-semibold text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap">Home</Link>
        <Link to="/courses" className="px-3 py-1.5 text-base font-semibold text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap">Courses</Link>

        <Link to="/contact" className="px-3 py-1.5 text-base font-semibold text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap">Contact</Link>
        <Link to="/why-choose-us" className="px-3 py-1.5 text-base font-semibold text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap">Why Choose Us</Link>
        <div className="ml-3 flex space-x-1">
          <a href="#" className="p-2 hover:bg-indigo-50 rounded-xl hover:shadow transition-all group hover:scale-105" aria-label="Instagram">
            <svg className="w-5 h-5 text-gray-700 group-hover:text-pink-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4.163-1.954-4.163-4.163s1.954-4.163 4.163-4.163 4.163 1.954 4.163 4.163c0 2.209-1.954 4.163-4.163 4.163zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
            </svg>
          </a>
          <a href="#" className="p-2 hover:bg-indigo-50 rounded-xl hover:shadow transition-all group hover:scale-105" aria-label="Email">
            <svg className="w-5 h-5 text-gray-700 group-hover:text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 8l9 5 9-5v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

