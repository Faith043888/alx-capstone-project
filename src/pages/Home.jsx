import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Starters",
      image: "https://www.themealdb.com/images/media/meals/1548772327.jpg",
      description:
        "Light and tasty meal. Perfect for whetting your appetite before the main course.",
    },

    {
      name: "Main Course",
      image: "https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg",
      description:
        "Hearty and satisfying main dishes",
    },

    {
      name: "Desserts",
      image: "https://www.themealdb.com/images/media/meals/xqrwyr1511133646.jpg",
      description:
        "Sweet indulgences . Cakes, puddings, and all your fourite treats"
    },

    {
      name: "Drinks",
      description:
        "Refreshing beverages , all coming soon.",
    },
  ];
  
 {/*page Content*/}
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-100 p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold text-orange-700 text-center mb-2">
        Recipe Finder
      </h1>

      {/* Subtitle */}
      <p className="text-center text-gray-700 mb-6">
        Select a category or search for your favorite dish by name.
      </p>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search by dish name..."
          className="w-full max-w-md p-3 rounded-full border border-orange-300 shadow-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* Category List */}
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => navigate(`/category/${cat.name.toLowerCase()}`)}
            className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer overflow-hidden p-4"
          >
            {/* Image */}
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full md:w-1/3 h-40 object-cover rounded-lg"
            />

            {/* Text Section */}
            <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
              <h2 className="text-2xl font-bold text-orange-700 mb-2">
                {cat.name}
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed max-w-md">
                {cat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

