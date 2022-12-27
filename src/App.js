import "./App.css";
import Slider from "./components/company/Slider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompanyDetails from "./components/companyDtails/CompanyDetails.jsx";
import NavBar from "./components/ui/navbar/NavBar";
import HomeSection from "./components/homeSection/HomeSection";
import Footer from "./components/ui/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="companyDetails/:id" element={<CompanyDetails />} />
          <Route path="/" element={<Slider />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
