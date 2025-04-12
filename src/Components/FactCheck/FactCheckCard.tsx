import React from "react";
import { LuThumbsUp, LuThumbsDown } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa6";
import logo from "../../assets/Asset 1@4x 1.png";

interface FactCheckCardProps {
  id: string;
  user: string;
  time: string;
  verdict: string;
  description: string;
  likes: number;
  dislike: number;
  comments: number;
  onClick?: (id: string) => void;
}

const FactCheckCard: React.FC<FactCheckCardProps> = ({
  id,
  user,
  time,
  description,
  likes,
  dislike,
  verdict,
  comments,
  onClick,
}) => {
  return (
    <div
      className="cursor-pointer bg-white backdrop-blur-md rounded-2xl md:px-11 p-4 mb-6 shadow-md w-full max-w-3xl hover:shadow-lg transition"
      onClick={() => onClick?.(id)}
    >
      <div className="text-sm text-blue-400 flex items-center gap-2 mb-2">
        <div className="flex items-center gap-1">
          <div>
            <img src={logo} alt="" className="size-5" />
          </div>
          <span className="font-semibold">{user}</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="rounded-full size-[5px] bg-[#080B38]" />
          <span className="text-[#080B38]">{time}</span>
        </div>
      </div>

      <p className="text-sm mb-2">{description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 mt-4 text-sm">
          <div className="flex items-center gap-1">
            <LuThumbsUp />
            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <LuThumbsDown />
            <span>{dislike}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaRegCommentDots className="scale-x-[-1]" />
            <span>{comments}</span>
          </div>
        </div>
        <span className="text-sm">{verdict}</span>
      </div>
    </div>
  );
};

export default FactCheckCard;
