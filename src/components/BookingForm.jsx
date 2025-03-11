import React from "react";

const BookingForm = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-[416px]">
      <h3 className="text-xl font-bold mb-4 text-[#141414] text-center">
        Book Your Car
      </h3>
      <form className="flex flex-col space-y-4">
        <select className="border-none bg-gray-100 p-3 rounded text-gray-700">
          <option>Car Type</option>
        </select>
        <select className="border-none bg-gray-100 p-3 rounded text-gray-700">
          <option>Place of Rental</option>
        </select>
        <select className="border-none bg-gray-100 p-3 rounded text-gray-700">
          <option>Place of Return</option>
        </select>

        <div>
          <input
            type="date"
            className="border-none bg-gray-100 p-3 rounded w-full text-gray-700"
          />
        </div>

        <div>
          <input
            type="date"
            className="border-none bg-gray-100 p-3 rounded w-full text-gray-700"
          />
        </div>

        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
