import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import CarDetails from "./pages/CarDetails";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/car/:id" element={<CarDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
