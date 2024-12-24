"use client"
import { useState } from "react";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("Home");

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-[#0A0A0A] rounded-full shadow-lg w-[70%] mx-auto mt-5 borde font-poppins border-white">
      <div className="bg-[#D6CCD5] text-black rounded-lg p-2">
        <p className="font-bold">Sentil Guard AI</p>
      </div>
      <ul className="flex items-center gap-8 text-white">
        {["Home", "About Us", "Work With Us", "Contact US"].map((link) => (
          <li
            key={link}
            onClick={() => setActiveLink(link)}
            className={`cursor-pointer transition-all duration-300  p-2 rounded-xl ${
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
        <button className="w-20 h-10 bg-[#D6CCD5] rounded-full text-black font-bold">Log In</button>
        <button className="w-40 h-10 bg-[#EE0163] rounded-full text-white font-bold">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
