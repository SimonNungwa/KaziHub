import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <a href="/" className="text-xl font-semibold text-gray-800">KaziHub</a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm text-gray-600 items-center">
          <a href="/" className="hover:text-gray-900">Home</a>
          <a href="/jobs" className="hover:text-gray-900">Jobs</a>
          <a href="/post" className="hover:text-gray-900">Post a Job</a>
          <a href="/about" className="hover:text-gray-900">About</a>
          <a href="/contact" className="hover:text-gray-900">Contact</a>
          <a
            href="/login"
            className="ml-4 px-4 py-1.5 border border-gray-300 rounded-md text-gray-700 text-sm hover:bg-gray-100 transition"
          >
            Login
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm text-gray-600">
          <a href="/" className="block hover:text-gray-900">Home</a>
          <a href="/jobs" className="block hover:text-gray-900">Jobs</a>
          <a href="/post" className="block hover:text-gray-900">Post a Job</a>
          <a href="/about" className="block hover:text-gray-900">About</a>
          <a href="/contact" className="block hover:text-gray-900">Contact</a>
          <a
            href="/login"
            className="block px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
          >
            Login
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
