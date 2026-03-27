import React from "react";
import { Quote } from "lucide-react"; // Optional: adds a nice icon

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-900"> 
      <div className="max-w-7xl mx-auto px-6">
        {/* Changed this to Testimonials to match the section */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight">
  <span className="relative inline-block">
    {/* The main white text */}
    <span className="relative z-10 text-white">Testimonials</span>
    
    {/* The Green Glow Underline */}
    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent shadow-[0_0_15px_rgba(74,222,128,0.8)]"></span>
    
    {/* Optional: Subtle background glow behind the text */}
    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-500/10 blur-3xl -z-10"></span>
  </span>
</h2>

        {/* This div is now INSIDE the return block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
          
          {/* Testimonial 1 */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <p className="italic text-gray-300">
              "Josephat is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable."
            </p>
            <p className="mt-4 font-semibold text-green-400">
              — Technical Lead
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <p className="italic text-gray-300">
              "Working with Shalakha was a game changer to our projects. He delivered ahead of schedule with code quality that set new standards for our projects."
            </p>
            <p className="mt-4 font-semibold text-green-400">
              — Project Manager
            </p>
          </div>
          
        </div> {/* End of grid */}
      </div> {/* End of container */}
    </section>
  ); // The return ends HERE
};

export default Testimonials;