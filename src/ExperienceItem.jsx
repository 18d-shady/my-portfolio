import React from 'react';

function ExperienceItem({ label, datee, children, isOpen, toggleDropdown }) {
  return (
    <div className="text-left w-full md:w-3/4 lg:w-3/4 xl:w-1/2 font-mono text-xs lg:text-base">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between site-colorr text-white px-4 py-5 md:font-bold 
        rounded-md focus:outline-none w-full"
      >
        {/* Dropdown label */}
        <span className="mr-2 text-left">
          {label}
        </span>

        <span className='flex justify-end items-center w-1/10 md:w-1/4'>
            <p className='hidden md:flex '>{datee}</p>

            {/* Toggle icon */}
            <svg
            className={`ms-5 w-4 h-4 transform transition-transform duration-200 
                 ${isOpen ? '' : 'rotate-45'}`}
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
        </span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="mt-2 bg-white border rounded-md shadow-lg">
          <div className="py-1 bg-green-200">{children}</div>
        </div>
      )}
    </div>
  );
}

export default ExperienceItem;
