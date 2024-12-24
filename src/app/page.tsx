import AboutUs from "@/components/AboutUs";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-black">
      {/* <Navbar/> */}
      {/* <HomePage/> */}
      <AboutUs/>
      </div>
    </main>
  );
}
