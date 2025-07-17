import { useAuth } from "react-oidc-context";

const Login = () => {
  const auth = useAuth();

  return (
    <div className="flex items-center min-h-screen bg-white text-black">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10 text-center">
          <h1 className="text-3xl font-semibold mb-4">Welcome Back</h1>
          <p className="text-gray-600 mb-6">Sign in securely with Cognito</p>
          <button
            onClick={() => auth.signinRedirect()}
            className="px-6 py-3 text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none"
          >
            Sign In with AWS Cognito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
