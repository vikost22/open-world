import { useLocation, Routes, Route } from "react-router-dom";
import {
  ChooseCountry,
  Continent,
  Country,
  Home,
  Register,
  Sign,
} from "../../pages";
import { AnimatePresence } from "framer-motion";
import { AboutTour } from "../AboutTour";
import { ForgotForm } from "../ForgotForm";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact  path="/" element={<Home />} />
        <Route exact  path="/continent" element={<Continent />} />
        <Route exact  path="/countries" element={<ChooseCountry />} />
        <Route exact  path="/login" element={<Sign />} />
        <Route exact  path="/register" element={<Register />} />
        <Route exact  path="/about" element={<AboutTour />} />
        <Route exact  path="/country" element={<Country />} />
        <Route exact  path="/forgot" element={<ForgotForm />} />
      </Routes>
    </AnimatePresence>
  );
}
