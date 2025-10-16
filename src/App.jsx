import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import RecipeDetails from "./pages/RecipeDetails";
import Starters from "./pages/Starters";
import MainCourse from "./pages/MainCourse";
import Desserts from "./pages/Desserts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/add" element={<AddRecipe />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route path="/category/starters" element={<Starters />} />
      <Route path="/category/maincourse" element={<MainCourse />} />
      <Route path="/category/desserts" element={<Desserts />} />
    </Routes>
  );
}

export default App;



