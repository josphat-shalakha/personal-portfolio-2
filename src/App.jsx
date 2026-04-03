import React from "react"; // Note: Modern React (17+) often doesn't need this line, but it's fine to keep!
import Navbar from "./layout/Navbar";
import Hero from "./layout/Hero";
import About from "./layout/About";
import Projects from "./layout/Projects";
import Experience from "./layout/Experience";
import Testimonials from "./layout/Testimonials";
import Contact from "./layout/Contact";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <Navbar />

      <main className="pt-24">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;