import React from "react";
import BookingForm from "./BookingForm";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="p-6 lg:p-[78px] bg-[#5937E0] rounded-4xl grid grid-cols-1 lg:grid-cols-[686px_auto] gap-6 items-center text-center lg:text-left space-y-9 hero-section">
      <div className="max-w-[686px] w-full mx-auto">
        <h1 className="text-5xl font-bold text-white leading-tight tracking-wider">
          Experience the road like never before
        </h1>
        <p className="mt-6 text-gray-300 max-w-[464px] tracking-wide mx-auto lg:mx-0">
          Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
          tristique et gravida. Quis nunc interdum gravida ullamcorper
        </p>
        <Link
          to="/vehicles"
          className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition cursor-pointer"
        >
          View all cars
        </Link>
      </div>

      <div className="flex justify-center w-full">
        <BookingForm />
      </div>
    </section>
  );
};

export default Hero;
