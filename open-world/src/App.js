import Header from './components/header';
import { Routes, Route } from "react-router-dom";
import { ChooseCountry } from './pages';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/country' element={<ChooseCountry/>}/>
    </Routes>
    </>
  );
}

export default App;
