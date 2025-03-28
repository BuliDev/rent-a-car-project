import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarsList from "../components/CarsList";
import cars from "../data/carsData";
import TechnicalCard from "../components/TechnicalCard";
import technicalSpecs from "../data/technicalSpecs";

const CarDetails = () => {
  const { id } = useParams();
  const car = cars.find((car) => car.id === Number(id));

  if (!car) {
    return (
      <div className="text-center text-red-500 text-xl mt-10">
        CAR NOT FOUND
      </div>
    );
  }

  const [activeImage, setActiveImage] = useState(car?.images?.[0] || "");

  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, [id]);

  useEffect(() => {
    if (car && car.images.length > 0) {
      setActiveImage(car.images[0]);
    }
  }, [car]);

  const updatedSpecs = technicalSpecs.map((spec) => {
    let value;
    switch (spec.title) {
      case "Air Conditioner":
        value = car.airConditioning ? "Yes" : "No";
        break;
      case "Transmission":
        value = car.transmission;
        break;
      case "Fuel":
        value = car.fuel;
        break;
      case "Doors":
        value = car.doors;
        break;
      case "Seats":
        value = car.seats;
        break;
      case "Distance":
        value = car.distance;
        break;
      default:
        value = "N/A";
        break;
    }
    return { ...spec, value };
  });
  return (
    <section className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="car-images">
          <h1 className="text-3xl font-bold">{car.name}</h1>
          <p className="text-lg font-bold text-[#5937E0] my-5">
            ${car.price}{" "}
            <span className="text-sm text-gray-500 font-normal"> / day</span>
          </p>
          <img
            src={activeImage}
            alt={car.name}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="flex mt-4 gap-4 justify-center lg:justify-start">
            {car.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={car.name}
                className={`w-40 h-25 object-cover rounded-lg cursor-pointer`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="font-bold">Technical Specification</h2>
          <div className="grid grid-cols-3 gap-4">
            {updatedSpecs.map((spec, index) => (
              <TechnicalCard
                key={index}
                icon={spec.icon}
                title={spec.title}
                value={spec.value}
              />
            ))}
          </div>
          <button className="bg-[#5937E0] text-white py-2 px-6 mt-8 rounded-md w-45 hover:bg-[#4C2F9B] cursor-pointer block text-center transition">
            Rent a car
          </button>
        </div>
      </div>
      <CarsList cars={cars} />
    </section>
  );
};

export default CarDetails;
