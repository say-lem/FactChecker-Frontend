import React from "react";
import { LuThumbsUp, LuThumbsDown } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa6";
import logo from "../../assets/Asset 1@4x 1.png";

interface FactCheckCardProps {
  user: string;
  time: string;
  verdict: string;
  description: string;
  likes: number;
  shares: number;
  comments: number;
}

const FactCheckCard: React.FC<FactCheckCardProps> = ({
  user,
  time,
  description,
  likes,
  shares,
  verdict,
  comments,
}) => {
  return (
    <div className="bg-white backdrop-blur-md rounded-2xl md:px-11 p-4 mb-6 shadow-md w-full max-w-3xl">
      <div className="text-sm text-blue-400 flex items-center gap-2 mb-2">
        <div className="flex items-center gap-1">
          <div>
            <img src={logo} alt="" className="size-5" />
          </div>
          <span className="font-semibold">{user}</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="rounded-full size-2 bg-[#080B38]" />

          <span className="text-[#080B38]">{time} ago</span>
        </div>
      </div>
      <p className=" text-sm mb-2">{description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 mt-4 text-sm">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <LuThumbsUp />
            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <LuThumbsDown />
            <span>{shares}</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <FaRegCommentDots className="scale-x-[-1]" />
          <span>{comments}</span>
        </div>
      </div>
      <span>{verdict}</span>
      </div>

      
    </div>
  );
};

export default FactCheckCard;
