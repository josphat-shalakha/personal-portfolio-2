import React, { useMemo } from "react";
import { ArrowRight } from "lucide-react";
import heroImage from "../assets/hero-image.png";
import profileImg from "../assets/profile.png";

// ✅ FIX: Use named import (works even if Button is not default export)
import Button from "../components/Button";

import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

const Hero = () => {
  const socialLinks = [
    { icon: FaFacebook, link: "https://www.facebook.com/josephat.shalakha.1" },
    { icon: FaTwitter, link: "https://twitter.com/josephatsha9357" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/josephat-shalakha/" },
    { icon: FaGithub, link: "https://github.com/josphat-shalakha" },
    { icon: FaYoutube, link: "https://www.youtube.com/@joshalakha" },
  ];

  // ✅ FIX: Stable dots generation
  const dots = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* ✅ Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-60"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/1920x1080?text=Background+Missing";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      </div>

      {/* ✅ Floating dots */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: dot.left,
              top: dot.top,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT */}
          <div className="space-y-8 text-left">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Software Engineer & Digital Marketing
            </span>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tighter">
              <span className="block text-white">Building Modern</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
                Web Experiences
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-lg">
              Hi, I'm Josephat Shalakha — a Software Engineer specializing in Web
              development, Digital marketing, and Video Editing.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              
              {/* ✅ Button safe usage */}
              <Button className="flex items-center gap-2 rounded-full px-6 py-3 bg-green-500 hover:scale-105 hover:bg-green-400 text-black font-semibold transition-all duration-300 group">
                Contact Me
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              {/* Socials */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">Follow:</span>
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl text-gray-400 hover:text-green-500 transition-all duration-300 hover:scale-110"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative inline-block">
              
              {/* Glow */}
              <div className="absolute inset-0 w-72 h-72 bg-green-500/30 rounded-full blur-3xl animate-pulse"></div>

              {/* Profile */}
              <img
                src={profileImg}
                alt="Josephat Shalakha"
                className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-green-500 shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/400?text=Profile+Missing";
                }}
              />

              {/* Badge 1 */}
              <div className="absolute z-20 -top-2 right-0 translate-x-1/4 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                <span className="text-sm text-white font-medium">
                  🚀 Available for Work
                </span>
              </div>

              {/* Badge 2 */}
              <div className="absolute z-20 -top-3 -left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full animate-bounce">
                5+ Years Experience
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;