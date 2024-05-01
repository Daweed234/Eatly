import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-red-500 py-4 px-6 flex justify-between items-center sticky top-0">

      <div>
        <span className="text-xl font-bold text-orange-500">Eatly</span>
      </div>

      <div className="flex md:hidden">
        {/* Hamburger Menu Icon */}
        <button className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <div className="hidden md:flex md:space-x-4 text-white">
        <a href="#" className="hover:text-gray-300">Programs</a>
        <a href="#" className="hover:text-gray-300">Services</a>
        <a href="#" className="hover:text-gray-300">Menu</a>
        <a href="#" className="hover:text-gray-300">Testimonials</a>
      </div>

      <div>
        <button className="bg-orange-500 hover:bg-orange-600 font-semibold py-2 px-4 rounded-md text-black">Let's Talk</button>
      </div>
    </nav>
  );
}

export default Navbar;
