const Hero = () => {
    return (
      <section className="bg-gray-50 min-h-screen flex items-center">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Find Jobs. <br className="sm:hidden" /> Avoid Scams.
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            KaziHub connects you with verified job opportunities tailored to your skills and experience.
          </p>
          <div className="mt-6">
            <a
              href="/jobs"
              className="inline-block bg-black text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition"
            >
              Explore Jobs
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  