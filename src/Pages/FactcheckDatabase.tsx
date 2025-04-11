import React from "react";
import FactCheckCard from "../Components/FactCheck/FactCheckCard";

const FactCheckDatabase: React.FC = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black px-4 py-8 text-white">
      <h1 className="text-2xl font-semibold mb-6">Fact check database</h1>
      <button className="text-blue-300 hover:underline mb-6">← Back</button>
      <div className="flex flex-col items-center">
        {facts.map((fact, index) => (
          <FactCheckCard key={index} {...fact} />
        ))}
      </div>
    </div>
  );
};

export default FactCheckDatabase;
