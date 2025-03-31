import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import fbIcon from "../assets/fbIcon.png";
import xIcon from "../assets/xIcon.png";
import instaIcon from "../assets/instaIcon.png";
import youtubeIcon from "../assets/youtubeIcon.png";
import mapIcon from "../assets/mapPin.png";
import mailIcon from "../assets/mail.png";
import phoneIcon from "../assets/phone.png";
import DownloadButton from "./DownloadButton";
import appleIcon from "../assets/apple.png";
import playIcon from "../assets/play.png";

const Footer = () => {
  return (
    <footer className="p-15">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-25 place-items-center md:place-items-stretch">
          <div className="flex flex-col">
            <Link
              to="/"
              className="flex items-center space-x-2 justify-center md:justify-start"
            >
              <img src={logo} alt="Car Rental Logo" className="w-10 h-10" />
              <h1 className="text-xl font-bold text-gray-900">Car Rental</h1>
            </Link>

            <p className="text-sm mt-15 text-center md:text-left text-gray-600">
              Faucibus faucibus pellentesque dictum turpis. Id pellentesque
              turpis massa a id iaculis lorem...
            </p>

            <div className="flex space-x-4 mt-6 md:mt-auto justify-center md:justify-start">
              <img
                src={fbIcon}
                alt="Facebook"
                className="w-6 h-6 bg-black rounded-full p-1"
              />
              <img
                src={instaIcon}
                alt="Facebook"
                className="w-6 h-6 bg-black rounded-full p-1"
              />
              <img
                src={youtubeIcon}
                alt="Facebook"
                className="w-6 h-6 bg-black rounded-full p-1"
              />
              <img
                src={xIcon}
                alt="Facebook"
                className="w-6 h-6 bg-black rounded-full p-1"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex itmes-center space-x-3">
              <img
                src={mapIcon}
                alt="Location"
                className="w-10 h-10 bg-[#FF9E0C] rounded-full p-2"
              />
              <div>
                <p className="text-sm text-gray-600 tracking-wider">Address</p>
                <p className="text-base font-semibold text-gray-900">
                  Oxford Ave NC 27511
                </p>
              </div>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mt-15 text-center md:text-left">
              Useful Links
            </h2>
            <ul className="mt-6 space-y-2 text-sm text-gray-700 text-center md:text-left">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">F.A.Q</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center space-x-3">
              <img
                src={mailIcon}
                alt="Email"
                className="w-10 h-10 bg-[#FF9E0C] rounded-full p-2"
              />
              <div>
                <p className="text-sm text-gray-600 tracking-wider">Email</p>
                <p className="text-base font-semibold text-gray-900">
                  nwiger@yahoo.com
                </p>
              </div>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mt-15 text-center md:text-left">
              Vehicles
            </h2>
            <ul className="mt-6 space-y-2 text-sm text-gray-700 text-center md:text-left">
              <li>
                <a href="#">Sedan</a>
              </li>
              <li>
                <a href="#">Cabriolet</a>
              </li>
              <li>
                <a href="#">Pickup</a>
              </li>
              <li>
                <a href="#">Minivan</a>
              </li>
              <li>
                <a href="#">SUV</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center space-x-3">
              <img
                src={phoneIcon}
                alt="Phone"
                className="w-10 h-10 bg-[#FF9E0C] rounded-full p-2"
              />
              <div>
                <p className="text-sm text-gray-600 tracking-wider">Phone</p>
                <p className="text-base font-semibold text-gray-900">
                  +537 547-6401
                </p>
              </div>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mt-15 text-center md:text-left">
              Download App
            </h2>
            <div className="mt-6 space-y-3 text-center md:text-left">
              <DownloadButton
                icon={appleIcon}
                title="App Store"
                subtitle="Download on the"
                href="#"
              />
              <DownloadButton
                icon={playIcon}
                title="Google Play"
                subtitle="GET IT ON"
                href="#"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
