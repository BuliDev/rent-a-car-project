import React, { useState } from "react";
import CarsList from "../components/CarsList";
import cars from "../data/carsData";

const Vehicles = () => {
  const [filteredCars, setFilteredCars] = useState(cars);
  const [activeFilter, setActiveFilter] = useState("All");

  const filterCars = (category) => {
    setActiveFilter(category);

    if (category === "All") {
      setFilteredCars(cars);
    } else {
      setFilteredCars(cars.filter((car) => car.type === category));
    }
  };

  return (
    <>
      <section className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          Select a vehicle group
        </h1>

        <div className="flex justify-center gap-4 mb-6">
          {["All", "SUV", "Sedan", "Hatchback", "Variant"].map((category) => (
            <button
              key={category}
              onClick={() => filterCars(category)}
              className={`px-4 py-2 rounded-lg cursor-pointer ${
                activeFilter === category
                  ? "bg-[#5937E0] text-white"
                  : "bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <CarsList cars={filteredCars} hideHeader={true} />
      </section>
    </>
  );
};

export default Vehicles;
