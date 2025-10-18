import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


const MainCourse = () => {
  const [mainCourses, setMainCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef")
      .then((res) => res.json())
      .then((data) => setMainCourses(data.meals || []))
      .catch((err) => console.error("Error fetching main courses:", err));
  }, []);

  return (
    <div className="min-h-screen bg-orange-50 px-4 py-6">
      <Navbar/>

      <button
        onClick={() => navigate(-1)}
        className="text-orange-700 font-semibold hover:text-orange-900 flex items-center gap-2 mb-4"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-orange-700 mb-2">Main Course</h1>

      <p className="text-gray-700 mb-6 max-w-2xl">
        Explore a variety of hearty and flavorful main course recipes. Click any meal to view its ingredients and full
        details.
      </p>

      {/* Recipes Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mainCourses.length > 0 ? (
          mainCourses.map((meal) => (
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
            Loading main courses...
          </p>
        )}
      </div>
    </div>
  );
};

export default MainCourse;

