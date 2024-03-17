import { useState } from "react";
import "./App.css";
import { Form } from "./Components/Form";
import { Logo } from "./Components/Logo";
import { PackingList } from "./Components/PackingList";
import { Stats } from "./Components/Stats";

function App() {
  const [item, setItem] = useState(function () {
    const storedValue = localStorage.getItem("item");
    let valueArray = [];
    if (storedValue !== null) {
      valueArray.push(JSON.parse(storedValue));
    }
    return valueArray;
  });

  const handleAddItem = (item) => {
    // create a copy of array. cant use preStateItem.push
    setItem((prevStateItem) => [...prevStateItem, item]);
  };
  console.log(item);

  const handleDeleteLiftingState = (id) => {
    // deleting item . Lift state from form
    setItem((prevStateItem) => prevStateItem.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    // Updating Packed property by spreading the array

    setItem((prevStateItem) =>
      prevStateItem.map((item) => {
        return item.id === id ? { ...item, packed: !item.packed } : item;
      })
    );
  };

  const clearAll = () => {
    const Confirm = confirm("Are you sure you want to");

    if (Confirm) setItem([]);
  };

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        item={item}
        onDeleteItem={handleDeleteLiftingState}
        handleToggleItem={handleToggleItem}
        clearAll={clearAll}
      />
      <Stats item={item} />
    </div>
  );
}

export default App;
