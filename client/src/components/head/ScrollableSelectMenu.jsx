import { useState } from "react";

const ScrollableSelectMenu = ({
  type,
  selectedOption,
  onSelect,
  width = 64,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Options based on the type of select menu
  const options =
    type === "city"
      ? [
          "Tüm Şehirler",
          "İstanbul",
          "Ankara",
          "İzmir",
          "Antalya",
          "Bursa",
          "Adana",
          "Konya",
          "Gaziantep",
          "Trabzon",
          "Eskişehir",
        ]
      : ["Tüm Tarihler", "Bugün", "Yarın", "Bu Hafta", "Bu Ay", "Sonraki Ay"];

  const handleSelect = (option) => {
    onSelect(option); // Update parent component's state
    setIsOpen(false);
  };

  return (
    <div className={`relative w-${width}`}>
      {/* <label
        htmlFor="select"
        className="block text-sm font-semibold text-primary-600 mb-1"
      >
        {type === "city" ? "Şehir Seç" : "Tarih Seç"}
      </label> */}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-2 border border-gray-300 rounded-sm text-left focus:outline-none focus:ring-2 focus:ring-primary-600"
      >
        {selectedOption}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-1 w-full max-h-64 border border-gray-300 rounded-sm shadow-lg bg-white overflow-y-auto z-10">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 cursor-pointer hover:bg-primary-600 hover:text-white"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ScrollableSelectMenu;
