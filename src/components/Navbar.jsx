import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle, FaIdBadge, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", to: "/" },
    { name: "About Me", to: "/aboutme" },
    { name: "Skills", to: "/skills" },
    { name: "Projects", to: "/projects" },
    { name: "Favorites", to: "/favorites" },
    { name: "Contact", to: "/kontak" },
  ];

  const menuClass = ({ isActive }) =>
    `px-4 py-2 text-sm md:text-base font-medium transition-colors relative
     ${isActive ? "text-[#071952] font-bold" : "text-[#071952] hover:text-[#071952]"}`;

  return (
    <header className="bg-[#F5EFEB]/90 backdrop-blur-md w-full sticky top-0 z-50 shadow-none">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 md:px-10 py-4">
        {/* Logo */}
        <div className="text-[#071952] font-bold text-xl md:text-2xl tracking-wide">
          Yola Keren
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-x-8">
          {menuItems.map((item) => (
            <NavLink key={item.name} to={item.to} className={menuClass}>
              <div className="relative group">
                {item.name}
                {/* Garis bawah menu */}
                <span className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-[#071952] group-hover:w-full transition-all ${window.location.pathname === item.to ? "w-full" : ""}`}></span>
              </div>
            </NavLink>
          ))}
        </nav>



        {/* Mobile Toggle */}
        <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F5EFEB] px-6 py-4 space-y-3 flex flex-col items-center">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className="w-full text-center text-[#071952] font-medium py-2 px-4 rounded hover:bg-[#071952] hover:text-white transition-colors"
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
