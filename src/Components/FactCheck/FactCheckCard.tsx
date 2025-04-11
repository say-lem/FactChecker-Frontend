import React from "react";

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
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-6 shadow-md w-full max-w-3xl">
      <div className="text-sm text-blue-400 flex items-center gap-2 mb-2">
        <span className="font-semibold">{user}</span>•
        <span className="text-gray-300">{time} ago</span>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-2">{description}</p>
      <a
        href={link}
        className="text-blue-300 underline text-sm break-all"
        target="_blank"
        rel="noopener noreferrer"
      >
        {link}
      </a>
      <div className="flex items-center gap-4 mt-4 text-sm text-white/80">
        <span>👍 {likes.toLocaleString()}</span>
        <span>🔁 {shares.toLocaleString()}</span>
        <span>💬 {comments.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default FactCheckCard;
