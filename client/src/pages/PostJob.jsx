const PostJob = () => {
    return (
      <div className="min-h-screen bg-white text-black py-10 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Post a Job</h1>
        <form className="max-w-xl mx-auto space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Job Title</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="e.g., Frontend Developer"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              className="w-full px-4 py-2 bg-gray-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              rows="5"
              placeholder="Write the job details..."
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Location</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Remote or City"
            />
          </div>
          <button className="w-full py-3 bg-black text-white rounded-md hover:border hover:border-black hover:bg-white hover:text-black">
            Submit Job
          </button>
        </form>
      </div>
    );
  };
  
  export default PostJob;
  