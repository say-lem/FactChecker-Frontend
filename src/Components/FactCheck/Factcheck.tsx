import { FaLink } from "react-icons/fa";
import hero from "../../assets/herobg.png"

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white px-4">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      />

      <div className="absolute inset-0 bg-[#121858]/80" />

      
      <div className="relative z-10 text-center max-w-2xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Truth<span className="text-green-400">Check</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">Enter a claim, Get the truth.</p>

        <div className="flex items-center bg-white/10 backdrop-blur rounded-lg overflow-hidden border border-white/20">
          <div className="p-3 pl-4 text-white">
            <FaLink />
          </div>
          <input
            type="text"
            placeholder="Paste the URL or type text here"
            className="flex-1 px-4 py-3 text-white bg-transparent placeholder-white/70 focus:outline-none"
          />
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 font-semibold">
            Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
