import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const [booking, setBooking] = useState({
    carType: "",
    rentalPlace: "",
    returnPlace: "",
    startDate: "",
    endDate: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !booking.carType ||
      !booking.rentalPlace ||
      !booking.returnPlace ||
      !booking.startDate ||
      !booking.endDate
    ) {
      alert("Please fill in all fields");
      return;
    }

    navigate(`/vehicles?carType=${booking.carType}`);

    setBooking({
      carType: "",
      rentalPlace: "",
      returnPlace: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-[416px]">
      <h3 className="text-xl font-bold mb-4 text-[#141414] text-center">
        Book Your Car
      </h3>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <select
          className="border-none bg-gray-100 p-3 rounded text-gray-700"
          onChange={handleChange}
          name="carType"
          value={booking.carType}
        >
          <option value="">Car Type</option>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
          <option value="Hatchback">Hatchback</option>
          <option value="Variant">Variant</option>
        </select>
        <select
          className="border-none bg-gray-100 p-3 rounded text-gray-700"
          onChange={handleChange}
          name="rentalPlace"
          value={booking.rentalPlace}
        >
          <option value="">Place of Rental</option>
          <option value="Airport">Airport</option>
          <option value="Frankfurt Innenstadt">Frankfurt Innenstadt</option>
        </select>
        <select
          className="border-none bg-gray-100 p-3 rounded text-gray-700"
          onChange={handleChange}
          name="returnPlace"
          value={booking.returnPlace}
        >
          <option>Place of Return</option>
          <option value="Airport">Airport</option>
          <option value="Frankfurt Innenstadt">Frankfurt Innenstadt</option>
        </select>

        <div>
          <input
            onChange={handleChange}
            name="startDate"
            type="date"
            className="border-none bg-gray-100 p-3 rounded w-full text-gray-700"
            value={booking.startDate}
          />
        </div>

        <div>
          <input
            onChange={handleChange}
            name="endDate"
            type="date"
            className="border-none bg-gray-100 p-3 rounded w-full text-gray-700"
            value={booking.endDate}
          />
        </div>

        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition cursor-pointer"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
