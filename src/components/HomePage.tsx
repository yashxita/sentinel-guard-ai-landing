import Image from "next/image";
import header from "../../public/Demo.svg";
import bgImage from "../../public/y.svg";  // Update with the correct path

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#0A0A0A] text-white font-sans overflow-hidden">
      <div className="relative flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: "url('/y.svg')",
        backgroundPositionY: "-40%",
      }}
      >
        <div className="w-full max-w-10xl mx-auto relative">
          <div className="relative z-10 mt-12 ">
            <Image
              src={header}
              alt="Sentinel Guard AI"
              width={1000}
              height={1000}
              className="mx-auto"
            />
          </div>
          <div className="h-60">
            About us
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
