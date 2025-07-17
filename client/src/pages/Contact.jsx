const Contact = () => {
    return (
      <div className="min-h-screen bg-white text-black py-10 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <form className="max-w-xl mx-auto space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              rows="5"
              className="w-full px-4 py-2 bg-gray-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button className="w-full py-3 bg-black text-white rounded-md hover:bg-white hover:border hover:border-black hover:text-black">
            Send Message
          </button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  