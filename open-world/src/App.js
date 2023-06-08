import Header from './components/header';
import { Routes, Route } from "react-router-dom";
import { ChooseCountry } from './pages';
import { Title } from "./components/Title";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Title/>}/>
      <Route path='/country' element={<ChooseCountry/>}/>
    </Routes>

    </>
  );
}

export default App;
