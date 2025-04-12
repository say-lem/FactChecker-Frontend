type TrendingCardProps = {
  image: string;
  title: string;
  date: string;
  description: string;
};

const TrendingCard = ({
  image,
  title,
  date,
  description,
}: TrendingCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm">
      <img
        src={image}
        alt="Trending Post"
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TrendingCard;
