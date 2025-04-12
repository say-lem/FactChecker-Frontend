//import React from "react";

const trendingData = [
  {
    id: 1,
    title: "Truth checking Peter Obi's claims on Arise TV’s prime time show",
    date: "13th April 2025",
    description:
      "The Labour Party presidential candidate in Nigeria's 2023 election, Peter Obi, appeared on Arise Television’s Prime Time on April 50...",
    image: "/images/peter-obi.jpg", //Don't have the Obi image yet, so I used this. Cant find the image in the figma file
  },
  {
    id: 2,
    title: "Truth checking Peter Obi's claims on Arise TV’s prime time show",
    date: "13th April 2025",
    description:
      "The Labour Party presidential candidate in Nigeria's 2023 election, Peter Obi, appeared on Arise Television’s Prime Time on April 50...",
    image: "/images/peter-obi.jpg", //Don't have the Obi image yet, so I used this. Cant find the image in the figma file
  },
  {
    id: 3,
    title: "Truth checking Peter Obi's claims on Arise TV’s prime time show",
    date: "13th April 2025",
    description:
      "The Labour Party presidential candidate in Nigeria's 2023 election, Peter Obi, appeared on Arise Television’s Prime Time on April 50...",
    image: "/images/peter-obi.jpg", //Don't have the Obi image yet, so I used this. Cant find the image in the figma file
  },
];

const Trending = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#181D6B]">
          Trending Claims
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trendingData.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={item.image}
                alt="Peter Obi Image"
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
