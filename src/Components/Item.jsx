/* eslint-disable react/prop-types */
export const Item = ({ item, onDeleteItem, handleToggleItem }) => {
  //   const { quantity, description, packed, id } = item;

  // const handleDelete = (abId) => { we can directly pass onDeleteItem on button
  //     onDeleteItem(abId);
  //   };

  const handleToggle = (baId) => {
    handleToggleItem(baId);
  };
  return (
    <li>
      <input
        type='checkbox'
        value={item.packed}
        onClick={() => handleToggle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}> ❌ </button>
    </li>
  );
};
