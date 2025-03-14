import React, { useState } from "react";

function Header(){
  // State to manage whether the navbar is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to open and close the navbar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="p-4">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center sm:justify-start">
            <div className="text-white font-bold text-2xl">
              Olehi Davis
            </div>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <a href="#introduction" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#description" className="text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#work" className="text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#contact" className="text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className={`${isOpen ? "block" : "hidden"} fixed top-0 left-0 w-full
        sm:hidden h-screen bg-transparent backdrop-blur-lg bg-opacity-30 z-10`} id="mobile-menu">
          <div className="absolute inset-y-0 left-5 top-5">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        <div className="px-2 py-72 space-y-1 sm:px-3 h-full flex flex-col justify-between">
          <a href="#introduction" onClick={handleLinkClick} className="text-white block px-3 py-2 rounded-md text-lg font-medium">Home</a>
          <a href="#description" onClick={handleLinkClick} className="text-white block px-3 py-2 rounded-md text-lg font-medium">About</a>
          <a href="#work" onClick={handleLinkClick} className="text-white block px-3 py-2 rounded-md text-lg font-medium">Services</a>
          <a href="#contact" onClick={handleLinkClick} className="text-white block px-3 py-2 rounded-md text-lg font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
