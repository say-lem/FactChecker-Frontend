import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { fetchAllQueries } from "../Redux/querySlice";
import { useNavigate } from "react-router-dom";
import FactCheckCard from "../Components/FactCheck/FactCheckCard";
import { FaArrowLeft } from "react-icons/fa";
import hero from "../assets/herobg.png";

interface CheckDetailsProps {
  onBack?: () => void;
}

export const FactCheckDatabase: FC<CheckDetailsProps> = ({ onBack }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { allQueries, loading } = useSelector(
    (state: RootState) => state.query
  );

  useEffect(() => {
    dispatch(fetchAllQueries());
  }, [dispatch]);

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  const handleCardClick = (id: string) => {
    navigate(`/checkdetail/${id}`);
  };

  const facts = allQueries.map((query) => {
    const createdAt = new Date(query.createdAt);
    const now = new Date();
    const diffMs = now.getTime() - createdAt.getTime();
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    let time = "";
    if (diffMinutes < 60) {
      time = `${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""} ago`;
    } else if (diffHours < 24) {
      time = `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
    } else {
      time = `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
    }

    const verdictRaw = query.verdictFromApi?.[0]?.verdict || "unverified";
    let verdict = "";

    if (verdictRaw === "negative") {
      verdict = "False";
    } else if (verdictRaw === "positive") {
      verdict = "True";
    } else {
      verdict = "Unverified";
    }

    return {
      id: query._id,
      user: query.userId?.username || "Unknown",
      time,
      description: query.text,
      likes: query.upvotes,
      dislike: query.downvotes,
      comments: query.commentCount,
      verdict,
    };
  });

  return (
    <div className="flex items-center justify-center h-[calc(100vh-64px)] overflow-hidden relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      />
      <div className="absolute inset-0 bg-[#121858]/80" />

      <div className="min-h-screen bg-gradient-to-b max-w-7xl px-4 py-8 container relative z-10">
        <div
          className="flex items-center absolute text-white gap-2 mt-16 cursor-pointer mb-6 md:mb-[70px] hover:text-gray-200"
          onClick={handleBack}
        >
          <FaArrowLeft className="hidden md:block" />
          <span>Back</span>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center h-[800px] text-white mt-36">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-white h-12 w-12 mb-4 animate-spin" />
            <p>Loading queries...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center mt-36 h-[800px] overflow-hidden overflow-y-scroll mb-11 hide-scrollbar">
            {facts.map((fact) => (
              <FactCheckCard key={fact.id} {...fact} onClick={handleCardClick} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
