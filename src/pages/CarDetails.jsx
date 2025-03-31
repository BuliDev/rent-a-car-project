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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

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

  const handleRentCar = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseBookingConfirmed = () => {
    setIsBookingConfirmed(false);
    setName("");
    setSurname("");
    setEmail("");
    setPhone("");
    setPickUpDate("");
    setDropOffDate("");
    setSuccessMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsModalOpen(false);
    setIsBookingConfirmed(true);
  };

  return (
    <section className="container mx-auto p-6">
      {isModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={handleCloseModal}
          />
          <div className="fixed inset-0 z-20 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-80 relative">
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 text-red-500 text-lg font-bold cursor-pointer"
              >
                Close
              </button>
              <h2 className="text-xl font-bold mb-4">Book this car</h2>
              <form onSubmit={handleSubmit}>
                <label className="block mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-gray-300 p-2 rounded w-full mb-4"
                  required
                />
                <label className="block mb-2">Your Surname</label>
                <input
                  type="text"
                  placeholder="Enter your surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  className="border border-gray-300 p-2 rounded w-full mb-4"
                  required
                />
                <label className="block mb-2">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 p-2 rounded w-full mb-4"
                  required
                />
                <label className="block mb-2">Your Phone</label>
                <input
                  type="tel"
                  placeholder="Enter your phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border border-gray-300 p-2 rounded w-full mb-4"
                  required
                />
                <label className="block mb-2">Pick Up Date</label>
                <input
                  type="date"
                  value={pickUpDate}
                  onChange={(e) => setPickUpDate(e.target.value)}
                  className="border border-gray-300 p-2 rounded w-full mb-4"
                  required
                />
                <label className="block mb-2">Drop Off Date</label>
                <input
                  type="date"
                  value={dropOffDate}
                  onChange={(e) => setDropOffDate(e.target.value)}
                  className="border border-gray-300 p-2 rounded w-full mb-4"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#5937E0] text-white py-2 px-6 rounded-md w-full mt-4 hover:bg-[#4C2F9B] cursor-pointer transition"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        </>
      )}

      {isBookingConfirmed && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={handleCloseBookingConfirmed}
          />
          <div className="fixed inset-0 z-20 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-80 relative">
              <h2 className="text-center text-xl font-bold text-green-600 mb-4">
                Booking Confirmed!
              </h2>
              <p className="text-gray-700 text-center mb-4">
                Thank you {name} {surname}, your booking for the{" "}
                <span className="font-bold">{car.name}</span> from {pickUpDate}{" "}
                to {dropOffDate} has been confirmed! <br />
                You will receive an email confirmation shortly.
              </p>
              <button
                onClick={handleCloseBookingConfirmed}
                className="bg-green-600 text-white py-2 px-6 rounded-md w-full hover:bg-green-700 cursor-pointer transition"
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}

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
          <button
            onClick={handleRentCar}
            className="bg-[#5937E0] text-white py-2 px-6 mt-8 rounded-md w-45 hover:bg-[#4C2F9B] cursor-pointer block text-center transition"
          >
            Rent a car
          </button>
        </div>
      </div>
      <CarsList cars={cars} />
    </section>
  );
};

export default CarDetails;
