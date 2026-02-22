import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Clients from "../components/Clients/Clients";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
