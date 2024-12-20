import React from "react";

function FilterBar({ categories, onFilter }) {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-lg font-bold mb-2">Filter Products</h2>
      <div className="flex gap-2 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onFilter(category)}
            className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
