import { Linkedin, Twitter, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/20 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-white"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-white"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-white"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h1 className="text-2xl font-black text-white uppercase tracking-wider">KaziHub</h1>
            <p className="text-white/70 leading-relaxed">
              Nigeria's premier job platform connecting talent with verified opportunities. Smart matching, scam-free listings.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-white/60">
                <MapPin className="w-4 h-4" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Mail className="w-4 h-4" />
                <span>hello@kazihub.ng</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Phone className="w-4 h-4" />
                <span>+234 800 KAZI HUB</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h6 className="text-white font-bold uppercase tracking-wide text-sm border-b border-white/20 pb-2">Quick Links</h6>
            <ul className="space-y-3">
              <li>
                <a href="/jobs" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-white/50 group-hover:bg-white transition-colors duration-300"></span>
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="/post" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-white/50 group-hover:bg-white transition-colors duration-300"></span>
                  Post a Job
                </a>
              </li>
              <li>
                <a href="/about" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-white/50 group-hover:bg-white transition-colors duration-300"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-white/50 group-hover:bg-white transition-colors duration-300"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h6 className="text-white font-bold uppercase tracking-wide text-sm border-b border-white/20 pb-2">Resources</h6>
            <ul className="space-y-3">
              <li>
                <a href="/help" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-white/50 group-hover:bg-white transition-colors duration-300"></span>
                  Help Center
                </a>
              </li>
              <li>
                <a href="/safety" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-white/50 group-hover:bg-white transition-colors duration-300"></span>
                  Safety Tips
                </a>
              </li>
              <li>
                <a href="/blog" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-white/50 group-hover:bg-white transition-colors duration-300"></span>
                  Career Blog
                </a>
              </li>
              <li>
                <a href="/faq" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-white/50 group-hover:bg-white transition-colors duration-300"></span>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Legal */}
          <div className="space-y-6">
            {/* Social Media */}
            <div className="space-y-4">
              <h6 className="text-white font-bold uppercase tracking-wide text-sm border-b border-white/20 pb-2">Connect</h6>
              <div className="flex space-x-4">
                <a href="#" aria-label="LinkedIn" className="group">
                  <div className="w-10 h-10 border-2 border-white/30 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-110">
                    <Linkedin className="w-5 h-5 text-white/70 group-hover:text-white" />
                  </div>
                </a>
                <a href="#" aria-label="Twitter" className="group">
                  <div className="w-10 h-10 border-2 border-white/30 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-110">
                    <Twitter className="w-5 h-5 text-white/70 group-hover:text-white" />
                  </div>
                </a>
                <a href="#" aria-label="Instagram" className="group">
                  <div className="w-10 h-10 border-2 border-white/30 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-110">
                    <Instagram className="w-5 h-5 text-white/70 group-hover:text-white" />
                  </div>
                </a>
                <a href="#" aria-label="Facebook" className="group">
                  <div className="w-10 h-10 border-2 border-white/30 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-110">
                    <Facebook className="w-5 h-5 text-white/70 group-hover:text-white" />
                  </div>
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h6 className="text-white font-bold uppercase tracking-wide text-sm border-b border-white/20 pb-2">Legal</h6>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/terms" className="text-white/60 hover:text-white transition-colors duration-300">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-white/60 hover:text-white transition-colors duration-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/cookies" className="text-white/60 hover:text-white transition-colors duration-300">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-white/70 mb-6">Get the latest job opportunities and career tips delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors duration-300"
              />
              <button className="bg-white text-black px-6 py-3 font-bold hover:bg-white/90 transition-colors duration-300 transform hover:scale-105">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-white/5 border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} KaziHub. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Made with ❤️ in Nigeria</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;