import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import contact from "../../../public/contact.png";

const page = () => {
  return (
    <div className="min-h-screen relative overflow-hidden  bg-black">
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-64 ">
        <div className="bg-[#58a7bd] absolute top-[10rem] z-50 left-[20rem] h-[35.25rem] w-[26rem] rounded-full blur-[22rem] "></div>
        <div className="absolutee z-20 text-white ">
          <h1 className="text-[100px] md:text-[200px] font-bebas">Contact</h1>
          <h1 className="text-[100px] md:text-[200px] font-bebas  md:-mt-36">
            Us!
          </h1>
        </div>
        <Image
          src={contact}
          alt="Join Us"
          width={1000}
          height={1000}
          className=" absolute z-30  right-[70px]"
        />
      </div>
      <div className="mt-72 mb-10 font-poppins text-white flex flex-col justify-center  max-w-[500px] mx-auto">
        <p className="text-4xl font-bold">Contact Us</p>
        <p className="mt-2 text-xl text-left">
          Get in Touch! <br />
          Have questions, ideas, or partnership proposals? <br />
          We’d love to hear from you.
        </p>
      </div>
      <div className=" text-white font-poppins p-8 max-w-[900px] mx-auto">
        <div className="border-2 border-white  p-4 mb-4 rounded-lg text-center ">
          <p className="text-lg">
            Got questions? Email us at <a>contact@sentinelguard.ai</a>, and
            we’ll get back to you promptly.
          </p>
        </div>

        <div className="border-2 border-white p-4 mb-4 rounded-lg text-center ">
          <p className="text-lg">
            Call Us: Speak with our team directly at{" "}
            <span className="font-semibold">+91-XXXX-XXXX</span> during business
            hours.
          </p>
        </div>

        <div className="border-2 border-white p-4 rounded-lg text-center">
          <p className="text-lg">
            Stay updated with our latest news and opportunities on{" "}
            <a>LinkedIn</a>, <a>Twitter</a>, and <a>Instagram</a>.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 my-10">
        <div className="h-6 w-6 bg-pink-600 rounded-full "></div>
        <div className="h-6 w-6 bg-pink-600 rounded-full "></div>
        <div className="h-6 w-6 bg-pink-600   rounded-full"></div>
      </div>
      <div className="text-center text-xl font-poopins text-white font-semibold my-4">
        Your journey with SentinelGuard AI begins with a conversation. Let’s
        start now!
      </div>
      <div className=" text-white font-poppins p-8 max-w-[900px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col w-full">
            <label className="text-sm mb-1">Name</label>
            <input
              type="text"
              className="bg-black border border-gray-400 p-2 rounded-md "
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sm mb-1">Email</label>
            <input
              type="email"
              className="bg-black border border-gray-400 p-2 rounded-md f"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sm mb-1">Phone Number</label>
            <input
              type="text"
              className="bg-black border border-gray-400 p-2 rounded-md "
            />
          </div>
        </div>

        <div className="flex flex-col w-full mt-4">
          <label className="text-sm mb-1">Say hi, Don't be shy!</label>
          <input
            type="text"
            className="bg-black border border-gray-400 p-2 rounded-md h-20"
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 my-10">
        <div className="h-5 w-32 bg-pink-600 rounded-xl "></div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 my-10">
        <h2 className="text-2xl font-semibold ">
          Lorem ipsum dolor, sit amet consectetur
        </h2>
        <div className="relative">
          <input
            type="text"
            className="bg-transparent  border-2 border-white rounded-2xl h-8 p-4"
            placeholder="Email"
          />
          <div className="h-7 w-7 bg-pink-600 rounded-full absolute top-1 right-1"></div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="h-6 w-6 bg-pink-600 rounded-full "></div>
          <div className="h-6 w-6 bg-pink-600 rounded-full "></div>
          <div className="h-6 w-6 bg-pink-600   rounded-full"></div>
          <div className="h-6 w-6 bg-pink-600   rounded-full"></div>
          <div className="h-6 w-6 bg-pink-600   rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
