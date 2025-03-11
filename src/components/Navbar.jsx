import React from "react";
import logo from "../assets/logo.png";
import phoneIcon from "../assets/phoneIcon.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-w-[1296px] mx-auto py-6">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Car Rental Logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold text-gray-900">Car Rental</h1>
      </div>
      <ul className="flex space-x-8">
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
      <div className="flex items-center space-x-4">
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
