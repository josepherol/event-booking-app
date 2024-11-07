import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { categories } from "../../utils/db/static.js";
import Feed from "../../components/head/Feed.jsx"; // Event card component
import HomeLayout from "../../layout/homeLayout/HomeLayout.jsx";
import ScrollableSelectMenu from "../../components/head/ScrollableSelectMenu.jsx";

const Events = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(search);
  const categoryParam = query.get("category");
  const city = query.get("city");
  const date = query.get("date");

  const categoryIds = categoryParam ? categoryParam.split(",").map(Number) : [];
  // const selectedCategoryTitles = categories
  //   .filter((cat) => categoryIds.includes(cat.id))
  //   .map((cat) => cat.title);

  const [selectedCategory, setSelectedCategory] = useState(categoryIds);
  const [selectedCity, setSelectedCity] = useState(city || "Tüm Şehirler");
  const [selectedDate, setSelectedDate] = useState(date || "Tüm Tarihler");

  const handleApplyFilters = () => {
    const filters = [];
    if (selectedCategory.length > 0)
      filters.push(`category=${selectedCategory.join(",")}`);
    if (selectedCity) filters.push(`city=${selectedCity}`);
    if (selectedDate) filters.push(`date=${selectedDate}`);
    const queryString = filters.length > 0 ? `?${filters.join("&")}` : "";
    navigate(`/events${queryString}`);
  };

  return (
    <HomeLayout>
      <div className="flex justify-center p-6 space-x-4">
        {/* Left Sidebar */}
        <div className="w-1/4 max-w-xs p-4 border-2 rounded-sm shadow self-start">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Etkinlikleri Filtrele
          </h2>

          {/* Category Filter */}
          <div className="mb-6">
            <div className="flex flex-col space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() =>
                    setSelectedCategory((prevSelected) =>
                      prevSelected.includes(category.id)
                        ? prevSelected.filter((id) => id !== category.id)
                        : [...prevSelected, category.id]
                    )
                  }
                  className={`text-left px-3 py-2 rounded-sm text-sm font-medium ${
                    selectedCategory.includes(category.id)
                      ? "bg-primary-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* City Filter */}
          <div className="mb-6">
            <ScrollableSelectMenu
              type="city"
              selectedOption={selectedCity}
              onSelect={setSelectedCity}
              width={"full"}
            />
          </div>

          {/* Date Filter */}
          <div className="mb-6">
            <ScrollableSelectMenu
              type="date"
              selectedOption={selectedDate}
              onSelect={setSelectedDate}
              width={"full"}
            />
          </div>

          {/* Apply Filters Button */}
          <button
            onClick={handleApplyFilters}
            className="w-full py-3 mt-4 bg-primary-600 text-white font-semibold rounded-sm hover:bg-primary-700 transition"
          >
            Filtreleri Uygula
          </button>
        </div>

        {/* Events Section */}
        <div className="ml-auto mr-96 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Dummy data for event display */}
          {Array(60)
            .fill(0)
            .map((_, index) => (
              <Feed
                key={index}
                eventUrl={`/details/${index + 1}`}
                event={{
                  id: index + 1,
                  title: `Event ${index + 1}`,
                  date: "2024-11-07",
                  time: "6:00 PM",
                  city: "Istanbul",
                  place: "Event Venue",
                  imageUrl:
                    "https://m.media-amazon.com/images/S/pv-target-images/81ef275effa427553a847bc220bebe1dc314b2e79d00333f94a6bcadd7cce851.jpg",
                }}
              />
            ))}
        </div>
      </div>
    </HomeLayout>
  );
};

export default Events;
