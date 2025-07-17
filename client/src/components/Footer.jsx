const Footer = () => {
    return (
      <footer className="bg-gray-50 border-t border-gray-200 text-sm text-gray-600 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h1 className="text-lg font-semibold text-gray-800">KaziHub</h1>
            <p className="mt-2 text-gray-500">
              Smart job matching. Scam-free listings.
            </p>
          </div>
  
          <div>
            <h6 className="text-gray-800 font-medium mb-2">Company</h6>
            <ul className="space-y-1">
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/jobs" className="hover:underline">Jobs</a></li>
              <li><a href="/press" className="hover:underline">Press</a></li>
            </ul>
          </div>
  
          <div>
            <h6 className="text-gray-800 font-medium mb-2">Legal</h6>
            <ul className="space-y-1">
              <li><a href="/terms" className="hover:underline">Terms of Use</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/cookies" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>
  
          <div>
            <h6 className="text-gray-800 font-medium mb-2">Follow Us</h6>
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-800">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8...Z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-800">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.6c-.9.4-1.8.6-2.8.8...Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
  
        <div className="mt-10 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} KaziHub. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  