import { FC  } from "react";
import { useNavigate } from "react-router-dom";
import FactCheckCard from "../Components/FactCheck/FactCheckCard";
import { FaArrowLeft} from "react-icons/fa";
import hero from "../assets/herobg.png";

interface CheckDetailsProps {
  onBack?: () => void; 
}

export const FactCheckDatabase: FC<CheckDetailsProps> = ({ onBack }) => {
  const navigate = useNavigate();
  const facts = [
    {
      user: "Divine",
      time: "12 hours",
      title:
        "Old video of Emir asking herders to exit Taraba resurfaces online",
      description:
        "An X user, Dr Crocs (@MgajilInnocent), posted the video with a caption that Abbas Tafida, the Emir of Muri kingdom in Taraba State...",
      link: "https://www.tagesschau.de/wirtschaft/verbraucher/adac-pannenstatistiks-elektr...",
      likes: 1200,
      shares: 123,
      comments: 550,
    },
  ];

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="flex items-center justify-center">
       <div
        className="absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: `url(${hero})` }}
      />
      <div className="absolute inset-0 bg-[#121858]/80" />
      <div className="min-h-screen bg-gradient-to-b max-w-7xl  px-4 py-8 container ">
        <div
          className="flex items-center absolute text-white gap-2 cursor-pointer mb-6 md:mb-[70px] hover:text-gray-200"
          onClick={handleBack}
        >
          <FaArrowLeft />
          <span>Back</span>
        </div>
      <div className="flex flex-col items-center mt-36">
        {facts.map((fact, index) => (
          <FactCheckCard key={index} {...fact} />
        ))}
      </div>
      </div>
      
    </div>
  );
};

