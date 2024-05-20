import React from "react";

function Filter({ search, onSearchChange, onCategoryChange, isPartialMatch, onTogglePartialMatch }) {
  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={onSearchChange}
      />
      <button onClick={onTogglePartialMatch}>
        {isPartialMatch ? "Partial Match" : "Full Match"}
      </button>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
