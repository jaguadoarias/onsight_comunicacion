import React from "react";
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
    <>
      <GlobalStyles />
      <Navbar />
      <Element name="home">
        <Hero />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </>
  );
}

export default App;
