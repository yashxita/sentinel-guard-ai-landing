import React from "react";
import Image from "next/image";
import joinus from "../../../public/joinus.svg";
import Navbar from "@/components/Navbar";
export default function JoinUs() {
  return (
    <div className="bg-black min-h-screen overflow-hidden relative">
      <Navbar/>
      <div className="flex flex-col justify-center items-center mt-72 ">
        <div className="bg-[#58a7bd] absolute top-[10rem] z-10 left-[20rem] h-[25.25rem] w-[26rem] rounded-full blur-[25rem] "></div>
        <div className="absolutee z-20 text-white text-center">
          <h1 className="text-[100px] md:text-[200px] font-bebas">Join Our</h1>
          <h1 className="text-[100px] md:text-[200px] font-bebas -mt-12 md:-mt-36">
            Team
          </h1>
        </div>
        <Image
          src={joinus}
          alt="Join Us"
          width={1000}
          height={1000}
          className="mx-auto absolute z-30"
        />
        <div className="bg-[#ca596f] absolute top-[40rem] z-10 left-[50rem] h-[10.25rem] w-[26rem] rounded-full blur-[15rem] "></div>
      </div>
      <div className="mt-72 text-center font-poppins text-white ">
        <h1 className=" text-6xl  font-bold">Apply today!</h1>
        <p className="mt-16  text-xl max-w-[50rem] mx-auto">
          Drop us an email with your CV and let us know why you're excited to
          join SentinelGuard AI.
          <br></br>We look forward to hearing from you!
        </p>
        <p className="mt-20 text-md">emailaddress@email.com</p>
      </div>
    </div>
  );
}
