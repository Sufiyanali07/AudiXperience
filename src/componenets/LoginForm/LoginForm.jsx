const LoginForm = ({ setIsOpen }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {/* Transparent Black Background (Keeps Screen Visible) */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Form Container (Centered and Above Everything) */}
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md z-50">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-4 text-gray-600 text-xl hover:text-red-500"
        >
          ✖
        </button>

        {/* Form Title */}
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

        {/* Login Form */}
        <form className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-2 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-2 rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
