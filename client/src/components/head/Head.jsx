import { useState } from "react";
import { categories } from "../../utils/dummy";
import Loading from "../common/Loading.jsx";
import ScrollableSelectMenu from "./ScrollableSelectMenu";

const Head = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCity, setSelectedCity] = useState("Şehir seçin");
  const [selectedDate, setSelectedDate] = useState("Tarih seçin");

  const authUser = false;

  return (
    <>
      {/* NAVBAR */}
      <div className="shadow-sm">
        <div className="container mx-auto flex items-center justify-between p-4">
          <a href="/" className="text-4xl font-bold text-primary-600">
            Etkinlikler.com
          </a>

          <div className="space-x-4">
            <a
              href="/contact"
              className="text-primary-600 hover:text-primary-700 hover:underline"
            >
              İletişim
            </a>
            <a
              href="/about"
              className="text-primary-600 hover:text-primary-700 hover:underline"
            >
              Hakkımızda
            </a>
            {authUser ? (
              <a
                href="/profile"
                className="text-primary-600 hover:text-primary-700 hover:underline"
              >
                Profilim
              </a>
            ) : (
              <a
                href="/register"
                className="text-primary-600 hover:text-primary-700 hover:underline"
              >
                Giriş Yap / Kayıt Ol
              </a>
            )}
          </div>
        </div>
      </div>

      {/* CATEGORY AND SEARCH COLUMN */}
      <div className="flex flex-col items-center p-6 space-y-4 shadow-sm">
        {/* CATEGORY BAR */}
        <div className="flex flex-wrap justify-center">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex flex-col items-center justify-center m-3 p-2 sm:p-3 md:p-4 w-28 sm:w-32 md:w-36 lg:w-36 h-28 sm:h-32 md:h-36 lg:h-36 cursor-pointer shadow-md border rounded-lg  transition hover:scale-105 hover:border-primary-600 ${
                selectedCategory === category.id
                  ? "shadow-primary-600 border-primary-600 scale-105"
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
        <>
          {selectedCategory &&
          (selectedCity === "Şehir seçin" || selectedDate === "Tarih seçin") ? (
            <div className="">
              <p className="text-red-600 font-semibold italic">
                Lütfen Şehir ve Tarih Seçiniz!
              </p>
            </div>
          ) : selectedCity !== "Şehir seçin" &&
            selectedDate !== "Tarih seçin" &&
            !selectedCategory ? (
            <div className="">
              <p className="text-red-600 font-semibold italic">
                Lütfen Kategori Seçiniz!
              </p>
            </div>
          ) : null}

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
          {selectedCategory &&
          selectedCity !== "Şehir seçin" &&
          selectedDate !== "Tarih seçin" ? (
            <Loading />
          ) : null}
        </>
      </div>
      {/* FEATURED */}
      <></>
    </>
  );
};

export default Head;
