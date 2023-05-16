import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Portfolio from "./pages/portfolio/Portfolio";
import Navbar from "./components/Navbar";
import Themes from "./components/Themes";
// import emailjs from "emailjs-com";

// emailjs.init("B4PwQa9zolbruMUDj");

function App() {
  return (
    <>
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
