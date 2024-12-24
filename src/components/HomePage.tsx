import Image from "next/image";
import header from "../../public/Demo.svg";
import bgImage from "../../public/bg.svg";  // Update with the correct path

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#0A0A0A] text-white font-sans overflow-hidden">
      <div className="relative flex flex-col items-center justify-center text-center">
        <div className="w-full max-w-10xl mx-auto relative">
          <div className="absolute inset-0 z-[-1]">
            <Image
              src={bgImage}
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="opacity-80"
            />
          </div>
          <div className="relative z-10 mt-12 ">
            <Image
              src={header}
              alt="Sentinel Guard AI"
              width={1000}
              height={1000}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
