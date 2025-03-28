import audiQ8 from "../assets/audiq8.png";
import audiQ8I from "../assets/audiq8-i.jpg";
import audiQ8I2 from "../assets/audiq8-i2.jpg";
import bmw5Series from "../assets/bmwg30.png";
import bmw5SeriesI from "../assets/bmwg30-i.jpg";
import bmw5SeriesI2 from "../assets/bmwg30-i2.jpg";
import golfMK7 from "../assets/golfmk7.png";
import golfMK7I from "../assets/golfmk7-i.jpg";
import golfMK7I2 from "../assets/golfmk7-i2.jpg";
import porscheCayenne from "../assets/cayenne.png";
import cayenneI from "../assets/cayenne-i.jpg";
import cayenneI2 from "../assets/cayenne-i2.jpg";
import vwPassat from "../assets/passat.png";
import vwPassatI from "../assets/passat-i.jpg";
import vwPassatI2 from "../assets/passat-i2.jpg";
import golfMK2 from "../assets/golfmk2.png";
import golfMK2I from "../assets/mk2-i.jpg";
import golfMK2I2 from "../assets/mk2-i2.jpg";

const cars = [
  {
    id: 1,
    images: [audiQ8, audiQ8I, audiQ8I2],
    name: "Audi Q8",
    type: "SUV",
    price: 300,
    transmission: "Automatic",
    fuel: "Diesel",
    airConditioning: true,
    doors: 5,
    seats: 5,
    distance: 25000,
  },
  {
    id: 2,
    images: [bmw5Series, bmw5SeriesI, bmw5SeriesI2],
    name: "BMW 5 Series",
    type: "Sedan",
    price: 100,
    transmission: "Automatic",
    fuel: "Diesel",
    airConditioning: true,
    doors: 5,
    seats: 5,
    distance: 35000,
  },
  {
    id: 3,
    images: [golfMK7, golfMK7I, golfMK7I2],
    name: "Golf MK7",
    type: "Hatchback",
    price: 30,
    transmission: "Manuel",
    fuel: "Diesel",
    airConditioning: true,
    doors: 5,
    seats: 5,
    distance: 10000,
  },
  {
    id: 4,
    images: [porscheCayenne, cayenneI, cayenneI2],
    name: "Porsche Cayenne",
    type: "SUV",
    price: 400,
    transmission: "Automatic",
    fuel: "Petrol",
    airConditioning: true,
    doors: 5,
    seats: 5,
    distance: 14000,
  },
  {
    id: 5,
    images: [vwPassat, vwPassatI, vwPassatI2],
    name: "VW Passat",
    type: "Variant",
    price: 50,
    transmission: "Automatic",
    fuel: "Diesel",
    airConditioning: true,
    doors: 5,
    seats: 5,
    distance: 83000,
  },
  {
    id: 6,
    images: [golfMK2, golfMK2I, golfMK2I2],
    name: "Golf MK2",
    type: "Hatchback",
    price: 100,
    transmission: "Manuel",
    fuel: "Petrol",
    airConditioning: false,
    doors: 3,
    seats: 5,
    distance: 18000,
  },
];

export default cars;
