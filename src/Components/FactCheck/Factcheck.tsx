


import { useState, useEffect, FormEvent } from "react";
import { FaLink } from "react-icons/fa";
import hero from "../../assets/herobg.png";
import AnalyzingModal from "../Modals/AnalysingModal";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../Hooks/useTypedSelector";
import { postQuery } from "../../Redux/querySlice";

const HeroSection = () => {
  const [text, setText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isChecking, setIsChecking] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Progress animation for modal
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null;


    if (isChecking && showModal) {
      let progressValue = 0;
      intervalId = setInterval(() => {
        progressValue += 5;
        setProgress(progressValue);
        if (progressValue >= 100) {
          clearInterval(intervalId!);
        }
      }, 200);
    } else {
      setProgress(0);
      if (intervalId) clearInterval(intervalId);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isChecking, showModal]);

  const handleCheck = async (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim() || isChecking) return;

    setShowModal(true);
    setIsChecking(true);
    setProgress(0);

    const startTime = Date.now();

    try {
      const result = await dispatch(postQuery({ text })).unwrap();
      console.log("✅ Query Response:", result);
    } catch (err) {
      console.error("❌ Error posting query:", err);
    } finally {
      const endTime = Date.now();
      const apiDuration = endTime - startTime;
      const extraDelay = 1000;
      const remainingTime = Math.max(0, 4000 - apiDuration);

      setTimeout(() => {
        setShowModal(false);
        setIsChecking(false);
        navigate("/checkdetail");
      }, remainingTime + extraDelay);
    }
  };

  return (
    <div className="relative h-[calc(100vh-64px)] flex items-center justify-center text-white px-4 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      />
      <div className="absolute inset-0 bg-[#121858]/80" />

      <AnalyzingModal isVisible={showModal} progress={progress} />

      <div className="relative z-10 text-center max-w-2xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Truth<span className="text-green-400">Check</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">Enter a claim, Get the truth.</p>

        <form
          onSubmit={handleCheck}
          className="flex items-center bg-white/10 backdrop-blur rounded-lg overflow-hidden border border-white/20"
        >
          <div className="p-3 pl-4 text-white">
            <FaLink />
          </div>
          <input
            type="text"
            placeholder="Paste or type text here"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 px-4 py-3 text-white bg-transparent placeholder-white/70 focus:outline-none"
          />
          <button
            type="submit"
            disabled={isChecking}
            className="bg-blue-600 hover:bg-blue-700 md:px-6 py-3 px-3 font-semibold"
          >
            {isChecking ? "Checking..." : "Check"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
