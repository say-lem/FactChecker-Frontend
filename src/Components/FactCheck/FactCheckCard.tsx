import React from "react";
import { LuThumbsUp, LuThumbsDown } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa6";

interface FactCheckCardProps {
  user: string;
  time: string;
  title: string;
  description: string;
  link: string;
  likes: number;
  shares: number;
  comments: number;
}

const FactCheckCard: React.FC<FactCheckCardProps> = ({
  user,
  time,
  title,
  description,
  link,
  likes,
  shares,
  comments,
}) => {
  return (
    <div className="bg-white backdrop-blur-md rounded-xl md:px-11 p-4 mb-6 shadow-md w-full max-w-3xl">
     
      <div className="text-sm text-blue-400 flex items-center gap-2 mb-2">
        <span className="font-semibold">{user}</span>
        <span className="text-[#080B38]">{time} ago</span>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className=" text-sm mb-2">{description}</p>
      <a
        href={link}
        className="text-blue-300 underline text-sm break-all"
        target="_blank"
        rel="noopener noreferrer"
      >
        {link}
      </a>
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
    </div>
  );
};

export default FactCheckCard;
