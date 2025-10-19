import { Link, useLocation } from "react-router-dom";
import { useState } from "react";


const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

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

  {/*mobile menu button*/}
<button
  onClick={() => setIsOpen(!isOpen)}
  className="md:hidden text-orange-700 focus:outline-none"
>
  {isOpen ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )}
</button>

<div className="hidden md:flex gap-4">
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
{/*dropdown*/}
{isOpen && (
  <div className="flex flex-col items-start space-y-2 mt-3 md:hidden animate-slide-down">
    <Link to="/home" onClick={() => setIsOpen(false)} className={linkClasses("/home")}>Home</Link>
    <Link to="/category/starters" onClick={() => setIsOpen(false)} className={linkClasses("/category/starters")}>Starters</Link>
    <Link to="/category/maincourse" onClick={() => setIsOpen(false)} className={linkClasses("/maincourse")}>Main Course</Link>
    <Link to="/category/desserts" onClick={() => setIsOpen(false)} className={linkClasses("/desserts")}>Desserts</Link>
  </div>
)}
    </nav>
  );
};

export default Navbar;

