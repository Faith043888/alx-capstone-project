import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import RecipeDetails from "./pages/RecipeDetails";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/add" element={<AddRecipe />} />
      <Route path="/recipes/:id" element={<RecipeDetails />} />
    </Routes>
  );
}

export default App;


