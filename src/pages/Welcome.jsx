import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-orange-100 to-orange-200 text-center p-6">

      <h1 className="text-5xl font-bold text-orange-700 mb-4">
        Welcome To Recipe Finder</h1>
      

      <h2 className="text-2xl font-semibold text-orange-600 mb-4">
        Every meal tells a story. Let's share our stories through recipes!</h2>
      
    <p className="text-lg text-gray-700 mb-8 max-w-md">
        Search for different types of delicacy recipes by dish name or select one of the categories to explore delicious recipes.
      </p>

      <button
        onClick={handleGetStarted}
        className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
      >
        Get Started
      </button>
    </div>
  );
};

export default Welcome;
