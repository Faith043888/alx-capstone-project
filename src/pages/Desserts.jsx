import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


const Desserts = () => {
  const [desserts, setDesserts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
      .then((res) => res.json())
      .then((data) => setDesserts(data.meals || []))
      .catch((err) => console.error("Error fetching desserts:", err));
  }, []);

  return (
    <div className="min-h-screen bg-orange-50 px-4 py-6">
      <Navbar/>

      <button
        onClick={() => navigate(-1)}
        className="text-orange-700 font-semibold hover:text-orange-900 flex items-center gap-2 mb-4" >
      
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-orange-700 mb-2">Desserts</h1>

      <p className="text-gray-700 mb-6 max-w-2xl">
        Indulge your sweet tooth with our delicious dessert collection, discover recipes that will satisfy every craving!</p>

      {/* Recipes Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {desserts.length > 0 ? (
          desserts.map((meal) => (
            <div
              key={meal.idMeal}
              onClick={() => navigate(`/recipe/${meal.idMeal}`)}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 cursor-pointer"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="p-3 text-center">
                <h2 className="text-lg font-semibold text-orange-700">
                  {meal.strMeal}
                </h2>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            Loading desserts...
          </p>
        )}
      </div>
    </div>
  );
};

export default Desserts;

