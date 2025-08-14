import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("user", JSON.stringify(response.data));
          window.location.href = "https://lacof-app-vggp.vercel.app";
        } else {
          setError(response.data.message || "Login gagal");
        }
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "Terjadi kesalahan");
        } else {
          setError("Terjadi kesalahan jaringan");
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex items-center justify-center bg-[#015C3E] px-4 py-10">
      <div className="w-full max-w-sm bg-[#F3F0E8] rounded-3xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center text-[#015C3E] mb-8 tracking-wide">
          LOGIN
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 border border-red-300 p-3 mb-4 rounded flex items-center text-sm">
            <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
            {error}
          </div>
        )}

        {loading && (
          <div className="bg-gray-100 text-gray-800 border border-gray-300 p-3 mb-4 rounded flex items-center text-sm">
            <ImSpinner2 className="me-2 animate-spin" />
            Mohon Tunggu...
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaUser className="text-[#015C3E]" />
            </span>
            <input
              type="text"
              name="email"
              placeholder="Username"
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#FAF9F6] text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#015C3E]/40"
            />
          </div>

          <div className="relative">
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <FaLock className="text-[#015C3E]" />
            </span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full pl-4 pr-10 py-2 rounded-full bg-[#FAF9F6] text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#015C3E]/40"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white hover:bg-gray-100 text-[#015C3E] font-bold py-2 rounded-full shadow-md transition duration-300"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}
