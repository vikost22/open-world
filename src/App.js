import Header from "./components/header";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import FavModal from "./components/FavModal";
import { useEffect } from "react";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <AnimatedRoutes />
        <FavModal />
      </Router>
    </>
  );
}

export default App;
