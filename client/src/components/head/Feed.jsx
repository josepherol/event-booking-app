import { useNavigate } from "react-router-dom";

const Feed = ({ eventUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(eventUrl); // Navigate to the specified internal route
  };

  return (
    <div
      className="max-w-sm bg-gray-50 p-2 rounded-sm shadow-md h-full overflow-hidden cursor-pointer"
      // className="max-w-sm bg-white border-2 border-gray-200 rounded-sm shadow-lg p-2 hover:border-primary-600 cursor-pointer transition"
      onClick={handleClick}
    >
      {/* Event Image */}
      <img
        className="rounded-t-sm w-full h-48 object-cover"
        src="https://m.media-amazon.com/images/S/pv-target-images/81ef275effa427553a847bc220bebe1dc314b2e79d00333f94a6bcadd7cce851.jpg"
        alt="Event"
      />
      <div className="p-5">
        {/* Event Title */}
        <h5 className="text-2xl font-bold tracking-tight text-primary-900 mb-2">
          Noteworthy Technology Acquisitions 2021
        </h5>

        {/* Event Details */}
        <div className="text-sm text-gray-700 mb-4 space-y-2">
          <p>
            <span className="font-semibold">Date:</span> November 15, 2024
          </p>
          <p>
            <span className="font-semibold">Time:</span> 7:00 PM
          </p>
          <p>
            <span className="font-semibold">City:</span> New York
          </p>
          <p>
            <span className="font-semibold">Place:</span> Madison Square Garden
          </p>
        </div>

        {/* Event Category */}
        <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-primary-600 rounded-sm">
          Concert
        </p>
      </div>
    </div>
  );
};

export default Feed;
