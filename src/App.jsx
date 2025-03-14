import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CarsList from "./components/CarsList";
import Facts from "./components/Facts";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <CarsList />
      <Facts />
    </div>
  );
};

export default App;
