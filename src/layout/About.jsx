import React from "react";
import { ArrowRight, Code2, Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
  const skills = ["Website & App Development", "Video & Picture Editing", "Product advertising & Branding", "Digital Marketing", "Social Media Manager"];

  return (
    <section id="about" className="py-24 grid lg:grid-cols-2 gap-16 border-t border-white/5">
      <div>
       <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight">
  <span className="relative inline-block">
    {/* The main white text */}
    <span className="relative z-10 text-white">About Me</span>
    
    {/* The Green Glow Underline */}
    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent shadow-[0_0_15px_rgba(74,222,128,0.8)]"></span>
    
    {/* Optional: Subtle background glow behind the text */}
    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-500/10 blur-3xl -z-10"></span>
  </span>
</h2>
        <p className="text-lg text-gray-400 leading-relaxed mb-6">
          I am a software engineer with over 5 years of professional experience crafting digital products. 
          My focus is on performance, accessibility, and creating interfaces that tell a story.
        </p>
        <p className="text-lg text-gray-400 leading-relaxed">
          Beyond engineering, I am passionate about cultural preservation through my YouTube channel, 
          highlighting the beauty of African folklore.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-mono uppercase tracking-widest text-blue-400 mb-8">Technical Proficiencies</h3>
        <div className="flex flex-wrap gap-4">
          {skills.map(skill => (
            <div key={skill} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:border-blue-500 transition-colors">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;