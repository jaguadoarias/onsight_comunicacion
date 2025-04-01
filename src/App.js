import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { Element } from "react-scroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Sections/Services";
import Portfolio from "./components/Sections/Portfolio";
import Contact from "./components/Sections/Contact";
import GlobalStyles from "./styles/GlobalStyles";
import "./styles/reset.css";
import "./styles/variables.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
