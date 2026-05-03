import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", to: "/" },
    { name: "About Me", to: "/aboutme" },
    { name: "Skills", to: "/skills" },
    { name: "Projects", to: "/projects" },
    { name: "Favorites", to: "/favorites" },

    { name: "Contact", to: "/kontak" },
  ];

  const menuClass =
    "relative text-[#2D2D2B] font-medium tracking-wide hover:text-[#9AAA65] transition-colors";

  return (
    <header className="bg-[#FFFCF5]/90 backdrop-blur-md w-full sticky top-0 z-50 shadow-none">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 md:px-10 py-4">
        {/* Logo */}
        <div className="text-[#2D2D2B] font-bold text-xl md:text-2xl tracking-wide">
          Yola Keren
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-x-8">
          {menuItems.map((item) => (
            <NavLink key={item.name} to={item.to} className={menuClass}>
              <div className="relative group">
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-[#9AAA65] group-hover:w-full transition-all ${window.location.pathname === item.to ? "w-full" : ""
                    }`}
                ></span>
              </div>
            </NavLink>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div
          className="md:hidden cursor-pointer text-[#2D2D2B]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FFFCF5] px-6 py-4 space-y-3 flex flex-col items-center">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className="w-full text-center text-[#2D2D2B] font-medium py-2 px-4 rounded hover:bg-[#9AAA65] hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
