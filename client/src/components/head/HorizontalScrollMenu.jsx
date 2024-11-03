import { useRef } from "react";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const HorizontalScrollMenu = ({ images }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10"
      >
        {/* <ChevronLeftIcon className="w-6 h-6 text-gray-600" /> */}
        LEFT
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 p-4 scrollbar-hide"
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-96 h-96 ">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10"
      >
        {/* <ChevronRightIcon className="w-6 h-6 text-gray-600" /> */}
        RIGHT
      </button>
    </div>
  );
};

export default HorizontalScrollMenu;
