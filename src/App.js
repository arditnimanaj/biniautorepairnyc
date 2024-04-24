import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import Services from "./components/Services.jsx";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
