import { useState, useRef } from "react";
import { categories } from "../../utils/db/static"; // Assume categories is an array of category objects
import HomeLayout from "../../layout/homeLayout/HomeLayout.jsx";

const cities = ["İstanbul", "Ankara", "İzmir", "Antalya", "Bursa"];

const Create = () => {
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
    date: "",
    hour: "",
    coverImg: null,
    eventImgs: [],
    location: { address: "", city: "", country: "" },
  });

  const fileInputRef = useRef(null);
  const handleSetImage = () => {
    fileInputRef.current.click();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e, type) => {
    const files = Array.from(e.target.files);
    setFormData((prevData) => ({
      ...prevData,
      [type]: type === "coverImg" ? files[0] : files,
    }));
  };

  return (
    <HomeLayout>
      <div className="flex gap-8 p-6 justify-center">
        {/* Left Side - Form */}
        <div className="w-4/12 bg-white p-6 rounded-sm shadow-md">
          {/* <h2 className="text-2xl font-semibold mb-4">Create New Event</h2> */}
          {/* Category */}
          <label className="block mb-2 font-medium">Kategori</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Kategori Seçiniz</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>
          {/* Title */}
          <label className="block mt-4 mb-2 font-medium">Başlık</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Başlık Giriniz"
            maxLength="100"
          />
          {/* Description */}
          <label className="block mt-4 mb-2 font-medium">Açıklama</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Açıklama Giriniz (İsteğe Bağlı)"
            rows="4"
            maxLength="1000"
          ></textarea>

          {/* Date and Hour */}
          <div className="flex gap-4 mt-4">
            <div className="w-1/2">
              <label className="block mb-2 font-medium">Tarih</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-2 font-medium">Saat</label>
              <input
                type="time"
                name="hour"
                value={formData.hour}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          {/* Cover Image */}
          <label className="block mt-4 mb-2 font-medium">Resim</label>
          <input
            type="file"
            name="coverImg"
            ref={fileInputRef}
            onChange={(e) => handleImageChange(e, "coverImg")}
            hidden
            accept="image/*"
          />
          <span
            type="button"
            onClick={handleSetImage}
            className="px-4 py-2 bg-primary-600 text-white rounded cursor-pointer"
          >
            Resim Seç
          </span>
          {/* Event Images */}
          {/* <label className="block mt-4 mb-2 font-medium">Event Images</label>
          <input
            type="file"
            name="eventImgs"
            multiple
            onChange={(e) => handleImageChange(e, "eventImgs")}
            className="w-full"
            accept="image/*"
          /> */}
          {/* Location */}
          {/* <h3 className="text-xl font-semibold mt-6 mb-4">Konum</h3> */}
          <label className="block mt-4 mb-2 font-medium">Şehir</label>
          <select
            name="location.city"
            value={formData.location.city}
            onChange={(e) =>
              setFormData({
                ...formData,
                location: { ...formData.location, city: e.target.value },
              })
            }
            className="w-full p-2 border rounded"
          >
            <option value="">Şehir Seçiniz</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          <label className="block mt-4 mb-2 font-medium">Mekan</label>
          {/* <input
            type="text"
            name="location.address"
            value={formData.location.place}
            onChange={(e) =>
              setFormData({
                ...formData,
                location: {
                  ...formData.location,
                  place: e.target.value,
                },
              })
            }
            className="w-full p-2 border rounded"
            placeholder="Event address"
          /> */}

          <select
            name="location.place"
            value={formData.location.place}
            onChange={(e) =>
              setFormData({
                ...formData,
                location: { ...formData.location, place: e.target.value },
              })
            }
            className={`w-full p-2 border rounded ${
              !formData.location.city && `cursor-not-allowed`
            }`}
            disabled={!formData.location.city} // Disable if category is empty
          >
            <option value="">Mekan Seçiniz</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="mt-6 w-full py-3 bg-primary-600 text-white rounded font-semibold hover:bg-primary-700 transition"
          >
            Etkinlik Oluştur
          </button>
        </div>

        {/* Right Side - Event Preview (Optional) */}
        <div className="w-3/12 bg-gray-50 p-2 rounded-sm shadow-md h-full overflow-hidden">
          {/* Event Image */}
          <img
            className="rounded-sm w-full h-48 object-cover"
            src={
              formData.coverImg
                ? URL.createObjectURL(formData.coverImg)
                : "https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg"
            }
            alt="Event"
          />
          <div className="p-5">
            {/* Event Title */}
            <h5 className="text-2xl font-bold tracking-tight text-primary-900 mb-2 break-words">
              {formData.title || "Başlık"}
            </h5>

            {/* Event Details */}
            <div className="text-sm text-gray-700 mb-4 space-y-2 break-words">
              <p>
                <span className="font-semibold">Tarih:</span>{" "}
                {formData.date || "Tarih"}
              </p>
              <p>
                <span className="font-semibold">Saat:</span>{" "}
                {formData.hour || "Saat"}
              </p>
              <p>
                <span className="font-semibold">Şehir:</span>{" "}
                {formData.location.city || "Şehir"}
              </p>
              <p>
                <span className="font-semibold">Mekan:</span>{" "}
                {formData.location.place || "Mekan"}
              </p>
            </div>

            {/* Event Category */}
            <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-primary-600 rounded-sm break-words">
              {formData.category
                ? categories[formData.category - 1].title
                : "Kategori"}
            </p>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Create;
