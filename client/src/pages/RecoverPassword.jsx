const RecoverPassword = () => {
    return (
      <div className="flex items-center min-h-screen bg-white text-black">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold">Forgot Password</h1>
              <p className="text-gray-600">Enter your email to reset your password</p>
            </div>
            <div className="m-7">
              <form>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring focus:ring-black/20 focus:border-black"
                  />
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-4 text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none"
                  >
                    Send Reset Link
                  </button>
                </div>
                <p className="text-sm text-center text-gray-600">
                  Remember your password?{" "}
                  <a href="/login" className="text-black underline hover:text-gray-800">
                    Go back to login
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default RecoverPassword;
  