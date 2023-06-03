import { useLocation, Routes, Route } from "react-router-dom";
import { ChooseCountry, Continent, Country, Home, Register, Sign} from "../../pages";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>} />
        <Route path="/continent" element={<Continent />} />
        <Route path="/countries" element={<ChooseCountry />} />
        <Route path="/login" element={<Sign />} />
        <Route path="/register" element={<Register />} />
        <Route path="/country" element={<Country />} />
      </Routes>
    </AnimatePresence>
  );
}
