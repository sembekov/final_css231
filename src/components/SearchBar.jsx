import React from "react";

function SearchBar() {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SearchBar;
