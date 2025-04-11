import { FC } from "react";
import { FaArrowLeft} from "react-icons/fa";
import { LuThumbsUp, LuThumbsDown } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa6";
import { findings } from "../Shared/constant";
import hero from "../../assets/herobg.png"
import { useNavigate } from "react-router-dom";

interface CheckDetailsProps {
  onBack?: () => void; 
}

const CheckDetails: FC<CheckDetailsProps> = ({ onBack }) => {
    const navigate = useNavigate();

    const handleBack = () => {
        if (onBack) {
          onBack();
        } else {
          navigate(-1);
        }
      };

  return (
    <div className="absolute md:py-20 py-10 inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${hero})` }}>
      <div className="absolute inset-0 bg-[#121858]/70" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-6 md:pt-[31px] text-white ">
        <div
          className="flex items-center gap-2 cursor-pointer mb-6 md:mb-[70px] hover:text-gray-200"
          onClick={handleBack}
        >
          <FaArrowLeft />
          <span>Back</span>
        </div>

        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 ">
          <div className="flex gap-3 mb-4 md:mb-0">
            <button className="bg-[#B2B3C1]  px-4 py-2 rounded-[8px] font-semibold">
              True
            </button>
            <button className="bg-[#B2B3C1] hover:bg-gray-600 px-4 py-2 rounded-[8px] font-semibold">
              Unverified
            </button>
            <button className="bg-[#CE2C2C] hover:bg-red-700 px-4 py-2 rounded-[8px] font-semibold">
              False
            </button>
          </div>

          <div className="text-sm text-gray-200">
            <div className="font-semibold">
              Source credibility: <span className="font-normal">Posted by Deborah Sampson</span>
            </div>
            <div className="font-semibold">
              Context: <span className="font-normal">Based on web searches</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 mb-8 text-gray-200">
          <div className="flex items-center gap-1">
            <LuThumbsUp />
            <span>13k</span>
          </div>
          <div className="flex items-center gap-1">
            <LuThumbsDown />
            <span>123</span>
          </div>
          <div className="flex items-center gap-1">
            <FaRegCommentDots className="scale-x-[-1]"/>
            <span>590</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {findings.map((item) => (
            <div key={item.id} className="text-white rounded-lg p-6 shadow">
              <p className="mb-4">{item.text}</p>
              <button className="bg-[#333FE8] hover:bg-blue-700 text-white px-4 py-2 rounded-[8px] font-semibold">
                Dig more
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckDetails;
