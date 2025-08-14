import { FaEnvelope } from "react-icons/fa";

export default function Forgot() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#015C3E] px-4 py-10">
      <div className="w-full max-w-sm bg-[#F3F0E8] rounded-3xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center text-[#015C3E] mb-4 tracking-wide">
          Forgot Your Password?
        </h2>

        <p className="text-sm text-gray-600 mb-6 text-center">
          Enter your email address and we’ll send you a link to reset your password.
        </p>

        <form className="space-y-6">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaEnvelope className="text-[#015C3E]" />
            </span>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#FAF9F6] text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#015C3E]/40"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white hover:bg-gray-100 text-[#015C3E] font-bold py-2 rounded-full shadow-md transition duration-300"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}
