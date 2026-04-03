import React from "react";
import talesImg from "../assets/tales-of-wonder.png";
import deltaImg from "../assets/delta-energy.png";

const projects = [
  {
 id: 1,
    title: "Delta Energy System (K) Ltd",
    category: "Energy Solutions",
    description: "Developed a robust platform for energy power solutions and backup systems.",
    image: deltaImg, // ✨ Use the variable name here
    tags: ["React", "Tailwind", "Vite"],
  },
  {
    id: 2,
    title: "Tales of Wonder",
    category: "Cultural Storytelling",
    description: "A YouTube platform dedicated to preserving and sharing folk African stories.",
    image: talesImg, // ✨ Use the variable name here
    tags: ["Content Strategy", "Digital Branding"],
  },
];

const Projects = () => {
  return (
    // Added id="projects" here to fix the linking!
    // Added max-w-7xl mx-auto px-6 to fix the alignment.
    <section id="projects" className="text-white py-20 max-w-7xl mx-auto px-6">
      
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight">
        <span className="relative inline-block">
          <span className="relative z-10 text-white">Projects</span>
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent shadow-[0_0_15px_rgba(74,222,128,0.8)]"></span>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-500/10 blur-3xl -z-10"></span>
        </span>
      </h2>

      {/* Grid for project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
          >
            {/* IMAGE */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-green-400 text-sm font-medium mb-3 uppercase tracking-wider">
                {project.category}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono bg-gray-900 text-green-400 border border-green-500/30 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;