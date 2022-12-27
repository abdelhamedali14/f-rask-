import "./App.css";
import Slider from "./components/slider/Slider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompanyDetails from "./components/companyDtails/CompanyDetails.jsx";
import NavBar from "./components/ui/navbar/NavBar";

import Footer from "./components/ui/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="companyDetails/:id" element={<CompanyDetails />} />
          <Route path="/" exact element={<Slider />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
