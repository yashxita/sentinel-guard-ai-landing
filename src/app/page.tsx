import AboutUs from "@/components/AboutUs";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      
      <Navbar/>
      {/* <HomePage/> */}
      <AboutUs/>
      
    </main>
  );
}
