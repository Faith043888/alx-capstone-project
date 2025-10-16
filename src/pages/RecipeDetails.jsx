import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data.meals ? data.meals[0] : null))
      .catch((err) => console.error("Error fetching recipe details:", err));
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-orange-50">
        <p className="text-gray-600 text-lg">Loading recipe details...</p>
      </div>
    );
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div className="min-h-screen bg-orange-50 px-4 py-6">
      <button
        onClick={() => navigate(-1)}
        className="text-orange-700 font-semibold hover:text-orange-900 flex items-center gap-2 mb-4">
        ← Back
      </button>

      {/*Title*/}
      <h1 className="text-3xl font-bold text-orange-700 mb-4 text-center"> </h1>
        {recipe.strMeal}
     
      {/*Image */}
      <div className="flex justify-center mb-6">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="rounded-xl shadow-lg w-full max-w-md"/>  
      </div>

      {/*Category*/}
      <div className="text-center mb-6 text-gray-700">
        <p>
          <span className="font-semibold">Category:</span> {recipe.strCategory}
        </p>
        {recipe.strArea && (
          <p>
            <span className="font-semibold">Origin:</span> {recipe.strArea}
          </p>
        )}
      </div>

      {/*Ingredients*/}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-orange-700 mb-2">
          Ingredients
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Instructions*/}
      <div>
        <h2 className="text-2xl font-semibold text-orange-700 mb-2">
          Instructions
        </h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {recipe.strInstructions}
        </p>
      </div>
    </div>
  );
};

export default RecipeDetails;


