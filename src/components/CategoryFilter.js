import React from "react";

function CategoryFilter({categories, categoryFilter, onCategoryFilter}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (
        <button
          onClick={onCategoryFilter}
          key={category}
          value={category}
          className={categoryFilter === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
