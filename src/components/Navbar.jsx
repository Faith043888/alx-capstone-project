import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const linkClasses = (path) =>
    `px-4 py-2 rounded-lg font-semibold transition duration-300 ${
      location.pathname === path
        ? "bg-orange-600 text-white shadow-md"
        : "text-orange-700 hover:bg-orange-100"
    }`;

  return (
    <nav className="flex justify-between items-center bg-white/90 backdrop-blur-md shadow-md px-6 py-4 sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-orange-700 italic">
         Recipe Finder
      </Link>

<div className="flex gap-4">
  <Link to="/home" className={linkClasses("/home")}>
    Home
  </Link>
  <Link to="/category/starters" className={linkClasses("/category/starters")}>
    Starters
  </Link>
  <Link to="/category/maincourse" className={linkClasses("/category/maincourse")}>
    Main Course
  </Link>
  <Link to="/category/desserts" className={linkClasses("/category/desserts")}>
    Desserts
  </Link>
</div>
    </nav>
  );
};

export default Navbar;

