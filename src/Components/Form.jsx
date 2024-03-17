/* eslint-disable react/prop-types */
import { useState } from "react";

export const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  // const [item, setItem] = useState([]); lifting state in app.jsx

  // const handleAddItem = (item) => {
  //   // create a copy of array. cant use preStateItem.push
  //   setItem((prevStateItem) => [...prevStateItem, item]);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };

    localStorage.setItem("item", JSON.stringify(newItem));

    onAddItems(newItem);

    // or setItem((prevStateItem) => [...prevStateItem, newItem])
    setDescription("");
    setQuantity(1);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };
  return (
    <>
      <form className='add-form' onSubmit={handleSubmit}>
        <h3> What do you need for your trip ?</h3>
        <select value={quantity} onChange={handleQuantity}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <input
          type='text'
          placeholder='Item'
          value={description}
          onChange={handleDescription}
        />
        <button>Add</button>
      </form>
    </>
  );
};
