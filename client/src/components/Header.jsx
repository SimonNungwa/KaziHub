import { useState } from "react";
import { Menu, X, User, Briefcase } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b border-white/20 backdrop-blur-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <a href="/" className="text-2xl font-black text-white uppercase tracking-wider hover:text-white/80 transition-colors duration-300">
          KaziHub
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm text-white/80 items-center">
          <a href="/" className="relative group hover:text-white transition-colors duration-300">
            Home
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
          </a>
          <a href="/jobs" className="relative group hover:text-white transition-colors duration-300">
            Jobs
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
          </a>
          <a href="/post" className="relative group hover:text-white transition-colors duration-300">
            Post a Job
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
          </a>
          <a href="/about" className="relative group hover:text-white transition-colors duration-300">
            About
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-colors duration-300 group-hover:w-full"></div>
          </a>
          <a href="/contact" className="relative group hover:text-white transition-colors duration-300">
            Contact
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
          </a>
          
          {/* CTA Buttons */}
          <div className="flex items-center space-x-3 ml-6">
            <a
              href="/login"
              className="group inline-flex items-center gap-2 px-4 py-2 border-2 border-white/30 text-white text-sm font-bold hover:border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <User className="w-4 h-4" />
              LOGIN
            </a>
            <a
              href="/post"
              className="group inline-flex items-center gap-2 bg-white text-black px-4 py-2 text-sm font-bold hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
            >
              <Briefcase className="w-4 h-4" />
              POST JOB
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-white/80 focus:outline-none transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pb-6 space-y-4 text-sm text-white/80 bg-black border-t border-white/10">
          <a href="/" className="block py-2 hover:text-white hover:bg-white/5 px-2 -mx-2 transition-all duration-300">
            Home
          </a>
          <a href="/jobs" className="block py-2 hover:text-white hover:bg-white/5 px-2 -mx-2 transition-all duration-300">
            Jobs
          </a>
          <a href="/post" className="block py-2 hover:text-white hover:bg-white/5 px-2 -mx-2 transition-all duration-300">
            Post a Job
          </a>
          <a href="/about" className="block py-2 hover:text-white hover:bg-white/5 px-2 -mx-2 transition-all duration-300">
            About
          </a>
          <a href="/contact" className="block py-2 hover:text-white hover:bg-white/5 px-2 -mx-2 transition-all duration-300">
            Contact
          </a>
          
          {/* Mobile CTA Buttons */}
          <div className="pt-4 space-y-3 border-t border-white/10">
            <a
              href="/login"
              className="flex items-center gap-2 w-full px-4 py-3 border-2 border-white/30 text-white font-bold hover:border-white hover:bg-white/10 transition-all duration-300 justify-center"
            >
              <User className="w-4 h-4" />
              LOGIN
            </a>
            <a
              href="/post"
              className="flex items-center gap-2 w-full bg-white text-black px-4 py-3 font-bold hover:bg-white/90 transition-all duration-300 justify-center"
            >
              <Briefcase className="w-4 h-4" />
              POST JOB
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-white/10"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-white/10"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </header>
  );
};

export default Header;