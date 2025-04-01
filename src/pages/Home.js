import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Sections/Services";
import Portfolio from "../components/Sections/Portfolio";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
