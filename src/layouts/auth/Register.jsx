export default function Register() {
  return (
    <div className="bg-[#F3F0E8] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-semibold text-[#015C3E] mb-6 text-center tracking-wide">
          Create Your Account ✨
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-[#FAF9F6] text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#015C3E]/30"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-[#FAF9F6] text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#015C3E]/30"
              placeholder="********"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-[#FAF9F6] text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#015C3E]/30"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#015C3E] hover:bg-[#014432] text-white font-semibold py-2 rounded-full shadow-md transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
