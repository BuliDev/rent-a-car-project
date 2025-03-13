import audiQ8 from "../assets/audiq8.png";
import bmw5Series from "../assets/bmwg30.png";
import golfMK7 from "../assets/golfmk7.png";
import porscheCayenne from "../assets/cayenne.png";
import vwPassat from "../assets/passat.png";
import golfMK2 from "../assets/golfmk2.png";

const cars = [
  {
    id: 1,
    image: audiQ8,
    name: "Audi Q8",
    type: "SUV",
    price: 300,
    transmission: "Automatic",
    fuel: "Diesel",
    airConditioning: true,
  },
  {
    id: 2,
    image: bmw5Series,
    name: "BMW 5 Series",
    type: "Sedan",
    price: 100,
    transmission: "Automatic",
    fuel: "Diesel",
    airConditioning: true,
  },
  {
    id: 3,
    image: golfMK7,
    name: "Golf MK7",
    type: "Hatchback",
    price: 30,
    transmission: "Manuel",
    fuel: "Diesel",
    airConditioning: true,
  },
  {
    id: 4,
    image: porscheCayenne,
    name: "Porsche Cayenne",
    type: "SUV",
    price: 400,
    transmission: "Automatic",
    fuel: "Petrol",
    airConditioning: true,
  },
  {
    id: 5,
    image: vwPassat,
    name: "VW Passat",
    type: "Variant",
    price: 50,
    transmission: "Automatic",
    fuel: "Diesel",
    airConditioning: true,
  },
  {
    id: 6,
    image: golfMK2,
    name: "Golf MK2",
    type: "Hatchback",
    price: 100,
    transmission: "Manuel",
    fuel: "Petrol",
    airConditioning: false,
  },
];

export default cars;
