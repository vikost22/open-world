import { useLocation, Routes, Route } from "react-router-dom";
import { ChooseCountry } from "../../pages";
import { Title } from "../Title";
import { LoginForm } from "../LoginForm";
import { AnimatePresence } from "framer-motion";
import { ContinentChoose } from "../continentChoose";
export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Title />} />
        <Route path="/continent" element={<ContinentChoose />} />
        <Route path="/country" element={<ChooseCountry />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </AnimatePresence>
  );
}
