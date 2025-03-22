import Hero from "../components/Hero";
import Features from "../components/Features";
import CarsList from "../components/CarsList";
import Facts from "../components/Facts";
import DownloadApp from "../components/DownloadApp";
import cars from "../data/carsData";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <CarsList cars={cars} hideHeader={false} />
      <Facts />
      <DownloadApp />
    </div>
  );
};

export default Home;
