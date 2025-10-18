import React from "react";

const SearchBar = ({ query, setQuery, handleSearch }) => {
  return (
    <form
      onSubmit={handleSearch}
      className="flex justify-center mb-10 gap-2 flex-wrap"
    >
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
  );
};

export default SearchBar;
