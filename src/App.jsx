import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CarsList from "./components/CarsList";
import Facts from "./components/Facts";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <CarsList />
      <Facts />
      <DownloadApp />
      <Footer />
    </div>
  );
};

export default App;
