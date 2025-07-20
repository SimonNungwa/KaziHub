import React from 'react';
import { ArrowRight, Shield, Users, Briefcase } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-black min-h-screen flex items-center overflow-hidden">
      {/* Dynamic geometric background */}
      <div className="absolute inset-0">
        {/* Animated geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/10 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 border border-white/5 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 border border-white/10 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
        
        {/* Diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse delay-2000"></div>
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse"></div>
        
        {/* Moving dots */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-bounce opacity-30"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-bounce delay-500 opacity-50"></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-white rounded-full animate-bounce delay-1000 opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-white rounded-full animate-bounce delay-700 opacity-40"></div>
        
        {/* Floating squares */}
        <div className="absolute top-60 left-10 w-8 h-8 border border-white/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-80 right-10 w-6 h-6 border border-white/10 rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-60 w-4 h-4 border border-white/15 rotate-45 animate-pulse delay-2000"></div>
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black/80"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Trust indicators */}
        <div className="flex justify-center items-center gap-8 mb-8 text-white/60 text-sm">
          <div className="flex items-center gap-2 hover:text-white transition-colors duration-300">
            <Shield className="w-4 h-4" />
            <span>Verified Jobs</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors duration-300">
            <Users className="w-4 h-4" />
            <span>10k+ Job Seekers</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors duration-300">
            <Briefcase className="w-4 h-4" />
            <span>500+ Companies</span>
          </div>
        </div>

        {/* Main heading with animated underline */}
        <div className="relative inline-block mb-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight text-white">
            Find Jobs.
            <br />
            <span className="relative">
              Avoid Scams.
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-white animate-pulse"></div>
            </span>
          </h1>
        </div>

        {/* Subtitle with typewriter effect styling */}
        <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          KaziHub connects you with <span className="text-white font-bold border-b border-white/50">verified job opportunities</span> tailored to your skills and experience in Nigeria.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="/jobs"
            className="group relative inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-none text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl border-2 border-white"
          >
            <span>EXPLORE JOBS</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </a>
          <a
            href="/post-job"
            className="group inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-none text-lg font-bold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            <span>POST A JOB</span>
          </a>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="group bg-black border-2 border-white/20 p-6 hover:border-white hover:bg-white/5 transition-all duration-300 transform hover:scale-105">
            <div className="w-12 h-12 bg-white text-black flex items-center justify-center mb-4 mx-auto">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2 uppercase tracking-wide">Scam-Free Zone</h3>
            <p className="text-white/70 text-sm">Every job posting is verified to protect you from fraudulent opportunities.</p>
          </div>
          
          <div className="group bg-black border-2 border-white/20 p-6 hover:border-white hover:bg-white/5 transition-all duration-300 transform hover:scale-105">
            <div className="w-12 h-12 bg-white text-black flex items-center justify-center mb-4 mx-auto">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2 uppercase tracking-wide">Smart Matching</h3>
            <p className="text-white/70 text-sm">Advanced algorithms match you with jobs that fit your skills and preferences.</p>
          </div>
          
          <div className="group bg-black border-2 border-white/20 p-6 hover:border-white hover:bg-white/5 transition-all duration-300 transform hover:scale-105">
            <div className="w-12 h-12 bg-white text-black flex items-center justify-center mb-4 mx-auto">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2 uppercase tracking-wide">Local Focus</h3>
            <p className="text-white/70 text-sm">Specialized in connecting Nigerian talent with quality employment opportunities.</p>
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-white/30"></div>
      <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-white/30"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-white/30"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-white/30"></div>
      
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .bg-gradient-radial {
          background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.8) 100%);
        }
      `}</style>
    </section>
  );
};

export default Hero;