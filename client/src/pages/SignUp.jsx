import { useState } from "react";
// import { Auth } from "aws-amplify";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await Auth.signUp({
        username: formData.email,
        password: formData.password,
        attributes: {
          email: formData.email,
          name: formData.name,
        },
      });
      alert("Check your email for the confirmation code!");
      // Optionally navigate to confirm page or login
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center min-h-screen bg-white text-black">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold">Create Account</h1>
            <p className="text-gray-600">Sign up to get started</p>
          </div>
          <div className="m-7">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring focus:ring-black/20 focus:border-black"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring focus:ring-black/20 focus:border-black"
                />
              </div>
              <div className="mb-6 relative">
                <label htmlFor="password" className="block mb-2 text-sm text-gray-700">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring focus:ring-black/20 focus:border-black"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-9 text-sm text-gray-600 focus:outline-none"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {error && <p className="text-sm text-red-600 mb-4">{error}</p>}
              <div className="mb-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-3 py-4 text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none disabled:opacity-50"
                >
                  {isSubmitting ? "Signing up..." : "Sign up"}
                </button>
              </div>
              <p className="text-sm text-center text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="text-black underline hover:text-gray-800">
                  Sign in
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

export default SignUp;
