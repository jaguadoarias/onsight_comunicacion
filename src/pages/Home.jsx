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
      <main>
        <section id="home" aria-label="Hero section">
          <Hero />
        </section>
        <section id="services" aria-label="Our services">
          <Services />
        </section>
        <section id="portfolio" aria-label="Our portfolio">
          <Portfolio />
        </section>
        <section id="contact" aria-label="Contact us">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
