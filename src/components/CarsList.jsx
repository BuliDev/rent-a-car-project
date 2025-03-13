import React from "react";
import cars from "../data/carsData";
import arrowRight from "../assets/arrow-right.png";
import gearIcon from "../assets/gearShift.png";
import gasStation from "../assets/gasStations.png";
import snowIcon from "../assets/snowIcon.png";

const CarsList = () => {
  return (
    <section className="max-w-[1296px] mx-auto py-16 px-6 lg:px-0">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Choose The Car That Suits You</h2>
        <a
          href="#"
          className="flex items-center space-x-2 hover:text-orange-500"
        >
          <span>View All</span>
          <img src={arrowRight} alt="Arrow Right" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover"
            />
            <div className="mt-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">{car.name}</h3>
                <p className="text-sm text-gray-500">{car.type}</p>
              </div>

              <div>
                <p className="text-lg font-bold text-[#5937E0]">${car.price}</p>
                <p className="text-sm text-gray-500">per day</p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center gap-2">
                <img src={gearIcon} alt="Transmission" className="w-6 h-6" />
                <span className="text-sm text-gray-500">
                  {car.transmission}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <img src={gasStation} alt="Fuel Icon" className="w-6 h-6" />
                <span className="text-sm text-gray-500">{car.fuel}</span>
              </div>

              <div className="flex items-center gap-2">
                <img
                  src={snowIcon}
                  alt="Air Conditioning"
                  className="w-6 h-6"
                />
                <span className="text-sm text-gray-500">
                  {car.airConditioning
                    ? "Air Conditioning"
                    : "No Air Conditioning"}
                </span>
              </div>
            </div>

            <button className="bg-[#5937E0] text-white py-2 px-6 mt-8 rounded-md w-full hover:bg-[#4C2F9B] cursor-pointer">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarsList;
