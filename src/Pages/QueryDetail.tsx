import { useParams } from "react-router-dom";
import { useEffect } from "react";
import logo from "../assets/Asset 1@4x 1.png";
import hero from "../assets/herobg.png";
import { LuThumbsUp, LuThumbsDown } from "react-icons/lu";
import { FaRegCommentDots, FaPlus } from "react-icons/fa6";

const mainQuery = {
  user: "JohnDoe",
  time: "2 hours ago",
  description: "Lagos is the commercial capital of Nigeria.",
  isTrue: false,
  likes: 3,
  dislikes: 4,
  comments: 2,
};

type Comment = {
    user: string;
    time: string;
    description: string;
  };

const dummyComments:Comment[] = [
    {
        user: "JaneSmith",
        time: "1 hour ago",
        description: "That's correct, Lagos contributes a huge chunk to Nigeria's GDP.",
      },
      {
        user: "CoolGuy123",
        time: "45 minutes ago",
        description: "I think Abuja is the capital though.",
      },
      {
        user: "HistoryBuff",
        time: "30 minutes ago",
        description: "Yes, Abuja is the capital, but Lagos is the largest city.",
      },
      {
        user: "GeoNerd",
        time: "just now",
        description: "True, but Lagos is also a former capital.",
      },
];

type CommentCardProps = {
    user: string;
    time: string;
    description: string;
  };

const CommentCard = ({ user, time, description }: CommentCardProps) => (
  <div className="bg-white backdrop-blur-md rounded-2xl md:px-11 p-4 mb-6 shadow-md w-full max-w-3xl">
    <div className="text-sm text-blue-400 flex items-center gap-2 mb-2">
      <div className="flex items-center gap-1">
        <img src={logo} alt="User" className="size-5" />
        <span className="font-semibold">{user}</span>
      </div>
      <div className="flex items-center gap-1">
        <div className="rounded-full size-[5px] bg-[#080B38]" />
        <span className="text-[#080B38]">{time}</span>
      </div>
    </div>
    <p className="text-sm mb-2">{description}</p>
  </div>
);

export const QueryDetails = () => {
    const { id } = useParams();

  useEffect(() => {
    // Fetch the query details using the id
    console.log("Query ID:", id);
  }, [id]);

  return (
    <div className="flex justify-center h-[calc(100vh-64px)] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${hero})` }} />
      <div className="absolute inset-0 z-0 bg-[#121858]/80" />

      <div className="w-full max-w-7xl flex justify-center mt-11">
        <div className="w-3xl">
          {/* Main query */}
          <CommentCard
            user={mainQuery.user}
            time={mainQuery.time}
            description={mainQuery.description}
          />
          <div className="flex items-center justify-end text-white pr-4">
            <span className="text-sm">{mainQuery.isTrue.toString()}</span>
            <h1 className="text-xl font-semibold">Query Details for ID: {id}</h1>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between absolute px-5 text-white">
            <div className="flex items-center gap-4 mt-4 text-sm">
              <div className="flex items-center gap-7 border px-5 p-3 rounded-full">
                <div className="flex items-center gap-1">
                  <LuThumbsUp />
                  <span>{mainQuery.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <LuThumbsDown />
                  <span>{mainQuery.dislikes}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 border px-5 p-3 rounded-full">
                <FaRegCommentDots className="scale-x-[-1]" />
                <span>{mainQuery.comments}</span>
              </div>
              <div className="flex items-center gap-1 border px-5 p-3 rounded-full">
                <FaPlus />
                <span>Add comment</span>
              </div>
            </div>
          </div>

          {/* Comment list */}
          <div className="mt-28 w-full h-[500px] overflow-y-scroll hide-scrollbar">
            {dummyComments.map((comment, index) => (
              <CommentCard
                key={index}
                user={comment.user}
                time={comment.time}
                description={comment.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
