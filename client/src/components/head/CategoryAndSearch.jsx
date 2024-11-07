import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../../utils/db/static.js";
import ScrollableSelectMenu from "./ScrollableSelectMenu.jsx";

const CategoryAndSearch = () => {
  const navigate = useNavigate();

  // Initialize selectedCategory as an array to support multiple selections
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Şehir seçin");
  const [selectedDate, setSelectedDate] = useState("Tarih seçin");

  const handleApplyFilters = () => {
    // Create a filter string based on selected filters
    const filters = [];
    if (selectedCategory.length > 0) filters.push(`category=${selectedCategory.join(",")}`);
    if (selectedCity && selectedCity !== "Şehir seçin")
      filters.push(`city=${selectedCity}`);
    if (selectedDate && selectedDate !== "Tarih seçin")
      filters.push(`date=${selectedDate}`);

    // Combine filters into a query string
    const queryString = filters.length > 0 ? `?${filters.join("&")}` : "";
    navigate(`/events${queryString}`);
  };

  const toggleCategory = (categoryId) => {
    setSelectedCategory((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId) // Deselect category
        : [...prevSelected, categoryId] // Select category
    );
  };

  return (
    <div>
      <div className="flex flex-col items-center p-6 space-y-4 shadow-sm">
        {/* CATEGORY BAR */}
        <div className="flex flex-wrap justify-center">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => toggleCategory(category.id)}
              className={`flex flex-col items-center justify-center m-3 p-2 sm:p-3 md:p-4 w-28 sm:w-32 md:w-36 lg:w-36 h-28 sm:h-32 md:h-36 lg:h-36 cursor-pointer shadow-md border-2 rounded-sm  transition hover:scale-105 hover:border-primary-600 ${
                selectedCategory.includes(category.id)
                  ? "border-primary-600 scale-105"
                  : ""
              }`}
            >
              <img
                src={category.icon}
                alt={`${category.title} icon`}
                className="w-8 sm:w-10 md:w-12 lg:w-14 h-8 sm:h-10 md:h-12 lg:h-12 mb-2"
              />
              <span className="px-1 sm:px-2 md:px-3 lg:px-4 py-1 text-primary-600 font-semibold text-xs sm:text-sm md:text-base lg:text-base text-center">
                {category.title}
              </span>
            </div>
          ))}
        </div>

        {/* SEARCH CITY AND DATE */}
        <div className="flex flex-col sm:flex-row gap-4">
          <ScrollableSelectMenu
            type="city"
            selectedOption={selectedCity}
            onSelect={setSelectedCity}
          />
          <ScrollableSelectMenu
            type="date"
            selectedOption={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>

        {/* FILTERS */}
        {selectedCategory.length > 0 ||
        selectedCity !== "Şehir seçin" ||
        selectedDate !== "Tarih seçin" ? (
          <div className="flex mt-4 border p-3 rounded-sm shadow-lg">
            {selectedCategory.map((categoryId) => (
              <div key={categoryId} className="flex items-center bg-black bg-opacity-70 text-white text-sm font-medium px-3 py-1 rounded-sm mr-2">
                <span>{categories.find((c) => c.id === categoryId).title}</span>
                <span
                  onClick={() => toggleCategory(categoryId)}
                  className="ml-2 cursor-pointer hover:bg-white hover:bg-opacity-20 rounded-sm p-1 transition"
                >
                  &times;
                </span>
              </div>
            ))}
            {selectedCity !== "Şehir seçin" && (
              <div className="flex items-center bg-black bg-opacity-70 text-white text-sm font-medium px-3 py-1 rounded-sm mr-2">
                <span>{selectedCity}</span>
                <span
                  onClick={() => setSelectedCity("Şehir seçin")}
                  className="ml-2 cursor-pointer hover:bg-white hover:bg-opacity-20 rounded-sm p-1 transition"
                >
                  &times;
                </span>
              </div>
            )}
            {selectedDate !== "Tarih seçin" && (
              <div className="flex items-center bg-black bg-opacity-70 text-white text-sm font-medium px-3 py-1 rounded-sm mr-2">
                <span>{selectedDate}</span>
                <span
                  onClick={() => setSelectedDate("Tarih seçin")}
                  className="ml-2 cursor-pointer hover:bg-white hover:bg-opacity-20 rounded-sm p-1 transition"
                >
                  &times;
                </span>
              </div>
            )}

            <button
              onClick={handleApplyFilters}
              type="button"
              className="ms-5 py-2 px-8 rounded-sm font-bold bg-primary-600 text-white transition hover:bg-primary-700"
            >
              Filtreleri Uygula
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CategoryAndSearch;
