import { useLocation, Routes, Route } from "react-router-dom";
import { ChooseCountry } from "../../pages";
import { Title } from "../Title";
import { LoginForm } from "../LoginForm";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Title />} />
        <Route path="/country" element={<ChooseCountry />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </AnimatePresence>
  );
}
