import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F0E8] px-4 py-10">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl transition-all duration-300">

        {/* Brand */}
        <div className="flex justify-center mb-4">
          <h1 className="text-4xl font-extrabold font-poppins tracking-wide text-[#015C3E]">
            Lacof<span className="text-[#F5EFEB]">.</span>
          </h1>
        </div>

        {/* Main auth content */}
        <Outlet />

        {/* Optional footer */}
        {/* 
        <p className="text-center text-sm text-gray-400 mt-6">
          © 2025 Lacof. All rights reserved.
        </p> 
        */}

      </div>
    </div>
  );
}
