import React, { useState } from "react";
import logo from "../assets/logo.png";
import phoneIcon from "../assets/phoneIcon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="px-6 lg:px-0 flex justify-between items-center py-6">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Car Rental Logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold text-gray-900">Car Rental</h1>
      </div>

      <button
        className="md:hidden text-gray-900 text-2xl z-30"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      <ul className="hidden md:flex space-x-8">
        <li>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            Contact
          </a>
        </li>
      </ul>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-10"
        />
      )}

      {isOpen && (
        <ul className="flex flex-col md:hidden space-y-4 absolute top-0 left-0 shadow-md py-4 px-6 w-full bg-white z-20">
          <li>
            <a href="#" className="text-gray-700 hover:text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-orange-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-orange-500">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-orange-500">
              Contact
            </a>
          </li>
        </ul>
      )}
      <div className="hidden md:flex items-center space-x-4">
        <img src={phoneIcon} alt="Phone Icon" />
        <div className="flex flex-col">
          <span className="text-sm text-gray-700">Need help?</span>
          <span className="text-gray-900 font-bold">+49 152-1021</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
