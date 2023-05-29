import Header from "./components/header";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <>
      <Router>
        <Header />
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
