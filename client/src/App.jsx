import "./App.css";

function App() {
  const handleGoogleAuth = () => {
    console.log("Google Auth Clicked");
  };

  const handleAppleAuth = () => {
    console.log("Apple Auth Clicked");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Create an Account
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Register
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center text-gray-500 text-sm">
          or
        </div>

        <div className="mt-6 space-y-4">
          <button
            onClick={handleGoogleAuth}
            className="w-full flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-100"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign up with Google
          </button>

          <button
            onClick={handleAppleAuth}
            className="w-full flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-100"
          >
            <img
              src="https://www.svgrepo.com/show/508761/apple.svg"
              alt="Apple"
              className="w-5 h-5 mr-2"
            />
            Sign up with Apple
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
