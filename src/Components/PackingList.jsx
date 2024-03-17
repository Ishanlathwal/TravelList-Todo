/* eslint-disable react/prop-types */
import { useState } from "react";
import { Item } from "./Item";

export const PackingList = ({
  item,
  onDeleteItem,
  handleToggleItem,
  clearAll,
}) => {
  const [sortBy, setSortby] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = item;
  }
  // slice to make a copy of the item array because sort mutate the original array
  if (sortBy === "description") {
    sortedItems = item.slice().sort((a, b) => {
      return a.description.localeCompare(b.description);
    });
  }

  if (sortBy === "packed") {
    sortedItems = item.slice().sort((a, b) => {
      // packed is a boolean value so convert to number first because sort use numbers. this is ascending order. reverse for descending

      return Number(b.packed) - Number(a.packed);
    });
  }

  return (
    <div className='list'>
      <ul>
        {sortedItems.map((value) => {
          return (
            <Item
              key={value.id}
              item={value}
              onDeleteItem={onDeleteItem}
              handleToggleItem={handleToggleItem}
            />
          );
        })}
      </ul>
      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortby(e.target.value)}>
          <option value='input'> Sort by input order</option>
          <option value='description'> Sort by description</option>
          <option value='packed'> Sort by packed status</option>
        </select>

        <button onClick={clearAll}>Clear All</button>
      </div>
    </div>
  );
};
