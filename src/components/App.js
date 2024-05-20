import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Filter from "./Filter";
import ItemForm from "./ItemForm";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isPartialMatch, setIsPartialMatch] = useState(false);

  const appClass = isDarkMode ? "App dark" : "App light";

  const handleDarkModeClick = () => setIsDarkMode(!isDarkMode);
  const handleSearchChange = (event) => setSearchText(event.target.value);
  const handleCategoryChange = (event) => setSelectedCategory(event.target.value);

  const handleItemFormSubmit = (newItem) => {
    setItems([...items, newItem]);
  };

  const filteredItems = items.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearchText = isPartialMatch
      ? item.name.toLowerCase().includes(searchText.toLowerCase())
      : item.name.toLowerCase() === searchText.toLowerCase();

    return matchesCategory && matchesSearchText;
  });

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>Dark Mode</button>
      </header>
      <Filter
        search={searchText}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
        isPartialMatch={isPartialMatch}
        onTogglePartialMatch={() => setIsPartialMatch(!isPartialMatch)}
      />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList items={filteredItems} />
    </div>
  );
}

export default App;
