import React from "react";
import Footer from "./layout/Footer";
// Components - Standardized to Default Imports (No curly braces)
import Navbar from "./layout/Navbar";
import Hero from "./layout/Hero";
import About from "./layout/About";
import Projects from "./layout/Projects";
import Experience from "./layout/Experience";
import Testimonials from "./layout/Testimonials";
import Contact from "./layout/Contact";

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
        {/* Uncomment these as you finish the components */}
        {/* <Experience /> */} 
      </main>
      <Footer />
    </div>
  );
}

export default App;