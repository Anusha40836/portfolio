import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import CapstoneProject from "./components/CapstoneProject";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <CapstoneProject />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
