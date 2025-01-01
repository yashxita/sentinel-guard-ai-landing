"use client"
import React from "react";
import Image from "next/image";
import Group495 from "../../../public/Group 495.png";
import TeamCard from "../../components/TeamCard";
import bottom from "../../../bottom.png";
import Navbar from "@/components/Navbar";
export default function FoundationSection() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar/>
      <section
        className="min-h-screen bg-no-repeat bg-cover bg-top"
        style={{
          backgroundImage: "url('/y.svg')",
          backgroundPositionY: "25%",
        }}
      >
        <section className="relative">
          <div className="h-screen w-full flex overflow-hidden relative">
            <div className="relative w-1/2 flex items-center justify-center overflow-hidden">
              <div className="absolute transform -rotate-90 text-[12rem] font-bebas text-white opacity-90 z-10">
                <div>FOUNDA</div>
                <div className="-mt-36">TION</div>
              </div>
              <div className="absolute z-20 opacity-80 pointer-events-none">
                <Image
                  src={Group495}
                  alt="Decorative SVG"
                  className="mx-8 -rotate-90"
                  priority
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-start justify-center pr-28 font-poppins">
              <h2 className="text-7xl text-white leading-tight">
                Securing Tomorrow,{" "}
                <span className="text-[#00C4EF] font-bold">Today</span>
              </h2>
              <p className="mt-10 text-lg md:text-xl text-gray-300 leading-relaxed">
                SentinelGuard AI leverages advanced AI and LLMs to predict,
                identify, and counteract evolving cyber threats, ensuring a
                safer digital future.
              </p>
              <div className="mt-6">
                <button className="px-6 py-3 bg-[#EE0163] text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="max-w-6xl  mx-auto backdrop-blur-lg bg-black bg-opacity-40  text-white rounded-xl shadow-xl mt-16 relative z-20">
          <div className="p-20 font-poppins ">
            <h1 className="text-5xl font-bold mb-12 text-center">About Us</h1>
            <p className="text-lg leading-relaxed text-center px-24">
              Lorem ipsum dolor sit amet. Et laboriosam minus non molestiae
              repellat in adipisci velit non quisquam obcaecati id eligendi
              saepe. Et iste saepe qui doloremque illo vel mollitia facilis ut
              enim aperiam!
              <br></br>Ut sint galisum et quasi voluptatibus aut amet sequi qui
              consequatur enim vel eius quia aut harum voluptate. Et laudantium
              sint ex ullam molestias in optio esse. In blanditiis ducimus est
              quis corporis aut praesentium minus est assumenda voluptatem aut
              voluptas odio aut illum voluptatum et nobis fuga.
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto bg-black bg-opacity-70 text-white rounded-lg shadow-lg  mt-20 relative z-20">
          <div className="p-16 font-poppins">
            <h1 className="text-5xl font-bold mb-8 text-center">Our Story</h1>
            <p className="text-lg leading-relaxed text-center mt-16">
              Every website has a story, and your visitors want to hear yours.
              This space is a great opportunity to give a full background on who
              you are, what your team does, and what your site has to offer.
              Double click on the text box to start editing your content and
              make sure to add all the relevant details you want site visitors
              to know.
            </p>
            <p className="text-lg leading-relaxed text-center mt-4">
              If you're a business, talk about how you started and share your
              professional journey. Explain your core values, your commitment to
              customers, and how you stand out from the crowd. Add a photo,
              gallery, or video for even more engagement.
            </p>
          </div>
        </div>
      </section>
      <div className="mt-28">
        <h1 className="text-center font-poppins text-5xl text-white font-bold">
          Meet Our Team
        </h1>
        <div className="grid grid-cols-3 grid-rows-2 gap-6 mx-10 mt-16">
          <TeamCard
            name="John Doe"
            designation="CEO"
            imageURL="/path/to/john-doe.jpg"
          />
          <TeamCard
            name="Jane Smith"
            designation="CTO"
            imageURL="/path/to/jane-smith.jpg"
          />
          <TeamCard
            name="Alice Brown"
            designation="Designer"
            imageURL="/path/to/alice-brown.jpg"
          />
          <TeamCard
            name="Bob White"
            designation="Developer"
            imageURL="/path/to/bob-white.jpg"
          />
          <TeamCard
            name="Charlie Green"
            designation="Marketing"
            imageURL="/path/to/charlie-green.jpg"
          />
          <TeamCard
            name="Emily Blue"
            designation="HR"
            imageURL="/path/to/emily-blue.jpg"
          />
        </div>
      </div>
      {/* <Image
        src={bottom}
        alt="Decorative SVG"
        className="mx-8 -rotate-90"
        priority
      /> */}
    </div>
  );
}
