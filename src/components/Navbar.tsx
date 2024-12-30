"use client";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("Home");

  return (
    <nav
      className="fixed top-10 left-[15%] z-50 flex items-center justify-between px-4 py-3 rounded-full shadow-lg w-[70%] mx-auto border font-poppins border-gray-400 text-md bg-[#0A0A0A] "
    >
      <div className="text-black rounded-full py-2 px-3 bg-[#D6CCD5]">
        <p className="font-bold">Sentil Guard AI</p>
      </div>
      <ul className="flex items-center gap-3 text-white">
        {["Home", "About Us", "Work With Us", "Contact US"].map((link) => (
          <li
            key={link}
            onClick={() => setActiveLink(link)}
            className={`cursor-pointer transition-all duration-300 p-2 rounded-full ${
              activeLink === link
                ? "font-bold text-[#0A0A0A] bg-white"
                : "text-gray-400 hover:text-[#0A0A0A] hover:bg-white"
            }`}
          >
            {link}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <button className="w-24 h-10 bg-[#D6CCD5] rounded-full text-black font-bold">
          Log In
        </button>
        <button className="w-32 h-10 bg-[#EE0163] rounded-full text-white font-bold ">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
