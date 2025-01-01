import AboutUs from "@/app/aboutus/page";
import HomePage from "@/components/HomePage";
import JoinUs from "@/app/joinus/page";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      
      <Navbar/>
      <HomePage/>
      
    </main>
  );
}
