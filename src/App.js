import Header from "./components/header";
import { HashRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import FavModal from "./components/FavModal";

function App() {
  return (
    <>
      <Router>
        <Header />
        <AnimatedRoutes />
        <FavModal />
      </Router>
    </>
  );
}

export default App;
