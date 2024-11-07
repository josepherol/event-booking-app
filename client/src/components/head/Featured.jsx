import { useNavigate } from "react-router-dom";

const Featured = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(eventUrl);
  };

  const imageUrl =
    "https://m.media-amazon.com/images/S/pv-target-images/81ef275effa427553a847bc220bebe1dc314b2e79d00333f94a6bcadd7cce851.jpg";

  const title = "Featured Event Title";
  const eventUrl = "/details/123";
  const eventCity = "New York";
  const eventPlace = "Madison Square Garden";
  const eventDate = "March 15, 2025";

  return (
    <div className="flex flex-col items-center gap-6 py-12">
      {/* Event Image */}
      <div
        className="w-full max-w-6xl h-96 lg:h-[30rem] overflow-hidden rounded-sm cursor-pointer border-2 border-gray-300 hover:border-primary-600 transition p-2"
        onClick={handleClick}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Event Details Section */}
      <div className="w-full max-w-5xl text-center mt-6">
        <h2 className="text-3xl font-semibold text-primary-600 mb-4">
          {title}
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 bg-gray-100 p-6 rounded-sm shadow-md">
          <div className="text-lg">
            <span className="font-semibold">City:</span> {eventCity}
          </div>
          <div className="text-lg">
            <span className="font-semibold">Place:</span> {eventPlace}
          </div>
          <div className="text-lg">
            <span className="font-semibold">Date:</span> {eventDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
