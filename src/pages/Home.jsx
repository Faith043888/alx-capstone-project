import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";


const Home = () => {
   const navigate = useNavigate();
 const [query, setQuery] = useState("");
const [results, setResults] = useState([]);
const [loading, setLoading] = useState(false);
const [noResults, setNoResults] = useState(false);

const handleSearch = async (e) => {
  e.preventDefault();
  if (!query.trim()) return;

  setLoading(true);
  setNoResults(false);

  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await res.json();
    if (data.meals) {
      setResults(data.meals);
    } else {
      setResults([]);
      setNoResults(true);
    }
  } catch (error) {
    console.error("Error searching recipes:", error);
    setNoResults(true);
  } finally {
    setLoading(false);
  }
};

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
    <Navbar />

      {/* Header */}
      <h1 className="text-4xl font-bold text-orange-700 text-center mb-2">
        Recipe Finder
      </h1>

      {/* Subtitle */}
      <p className="text-center text-gray-700 mb-6">
        Select a category or search for your favorite dish by name.
      </p>

 {/* Search Bar */}
<form
  onSubmit={handleSearch}
  className="flex justify-center mb-10 gap-2 flex-wrap">

  <input
    type="text"
    placeholder="Search by dish name..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    className="w-full max-w-md p-3 rounded-full border border-orange-300 shadow-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
  />
  <button
    type="submit"
    className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition"
  >
    Search
  </button>
</form>

    {/* Search Results */}
{loading && (
  <p className="text-center text-gray-500">Searching recipes...</p>
)}

{noResults && (
  <p className="text-center text-gray-500">
    sorry, no recipes found for "{query}"
  </p>
)}

{results.length > 0 && (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
    {results.map((meal) => (
      <div
        key={meal.idMeal}
        onClick={() => navigate(`/recipe/${meal.idMeal}`)}
        className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] cursor-pointer overflow-hidden"
      >
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-40 object-cover"
        />
        <div className="p-3 text-center">
          <h2 className="text-lg font-semibold text-orange-700">
            {meal.strMeal}
          </h2>
        </div>
      </div>
    ))}
  </div>
)}

  {/* Category List */}
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => navigate(`/category/${cat.name.replace(/\s+/g, "").toLowerCase()}`)}
              className="flex flex-col md:flex-row items-center bg-white/90 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 hover:scale-[1.01] cursor-pointer overflow-hidden p-4"
          >
            {/* Image */}
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full md:w-1/3 h-40 object-cover rounded-lg border-2 border-orange-200"
            />

            {/* Text*/}
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

