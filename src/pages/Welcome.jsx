import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/home");
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen text-center text-white px-4 sm:px-6 md:px-10 lg:px-20"
      style={{
        backgroundImage:
          "url('https://www.themealdb.com/images/media/meals/usywpp1511189717.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/*Overlay*/}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-yellow-400/20 animate-pulse blur-2xl"></div>


      {/*Content*/}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl">
        {/*Heading*/}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold italic mb-10 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-lg">
         Welcome <br className="sm:hidden" /> to <br className="sm:hidden" />{" "}
          Recipe Finder
        </h1>

        {/*Button*/}
        <button
          onClick={handleGetStarted}
         className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-yellow-500 hover:to-orange-600 text-white text-lg sm:text-xl font-semibold italic px-8 py-3 sm:px-10 sm:py-4 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        >
          get started
        </button>

        {/*Description*/}
        <p className="text-sm sm:text-base md:text-lg text-gray-200 mt-8 leading-relaxed max-w-lg">
          Search for different types of delicious recipes by dish name or browse
          categories to explore new tastes and cooking ideas.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
