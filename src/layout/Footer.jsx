import { FaYoutube, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <div className="text-sm text-gray-400">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center md:text-left tracking-tight">
            <span className="relative inline-block">
              
              {/* Main text */}
              <span className="relative z-10 text-white">
                © {currentYear} Josephat Shalakha. All rights reserved.
              </span>

              {/* Glow underline */}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent shadow-[0_0_15px_rgba(74,222,128,0.8)]"></span>

              {/* Background glow */}
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-500/10 blur-3xl -z-10"></span>

            </span>
          </h2>
        </div>

        {/* Center Links */}
        <div className="flex gap-6 text-sm flex-wrap justify-center">
          <a href="#home" className="hover:text-green-400">Home</a>
          <a href="#about" className="hover:text-green-400">About</a>
          <a href="#projects" className="hover:text-green-400">Projects</a>
          <a href="#contact" className="hover:text-green-400">Contact</a>
          <a href="#experience" className="hover:text-green-400">Experience</a>
          <a href="#testimonials" className="hover:text-green-400">Testimonials</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/josphat-shalakha"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/josephat-shalakha"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="https://twitter.com/josephatsha9357"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaTwitter size={20} />
          </a>

          <a
            href="https://www.facebook.com/josephat.shalakha.1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaFacebook size={20} />
          </a>

          <a
            href="https://www.youtube.com/@joshalakha"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaYoutube size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;