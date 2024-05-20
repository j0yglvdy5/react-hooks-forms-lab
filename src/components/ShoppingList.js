import React from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  return (
    <div className="ShoppingList">
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
