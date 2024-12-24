import React from "react";
import Image from "next/image";
import Group495 from "../../public/Group 495.png";
import bg from "../../public/bg.svg";

export default function FoundationSection() {
  return (
    <div className="bg-black ">
        <div className="h-screen w-full flex overflow-hidden relative">
      <div className="relative w-1/2 flex items-center justify-center overflow-hidden">
        <div className="absolute transform -rotate-90 text-[12rem] font-bebas text-white opacity-90 z-10">
          <div>FOUNDA</div>
          <div className="-mt-36 ">TION</div>
        </div>
        <div className="absolute z-20 opacity-80 pointer-events-none">
          <Image
            src={Group495}
            alt="Decorative SVG"
            className="w-[800px]"
            priority
          />
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-start justify-center pr-28 font-poppins">
        <h2 className="text-7xl text-white">
          Securing Tomorrow,{" "}
          <span className="text-[#00C4EF] font-bold">Today</span>
        </h2>
        <p className="mt-10 text-lg md:text-xl text-gray-300 leading-relaxed">
          SentinelGuard AI leverages advanced AI and LLMs to predict, identify,
          and counteract evolving cyber threats, ensuring a safer digital
          future.
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 bg-[#EE0163] text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
      
      </div>
      
    </div>
  );
}
