import { useLocation, Routes, Route } from "react-router-dom";
import { ChooseCountry } from "../../pages";
import Home from "../../pages/Home";
import { AnimatePresence } from "framer-motion";
import Continent from "../../pages/Continent";
import Sign from "../../pages/Sign";
import Register from "../../pages/Register";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/continent" element={<Continent />} />
        <Route path="/country" element={<ChooseCountry />} />
        <Route path="/login" element={<Sign />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AnimatePresence>
  );
}
