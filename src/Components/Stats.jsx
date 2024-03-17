/* eslint-disable react/prop-types */
export const Stats = ({ item }) => {
  if (!item.length) {
    return (
      <em>
        <p className='stats'>Start adding some items to your packing list 🚀</p>
      </em>
    );
  }

  const numberOfItems = item.length;
  const numberOfItemsPacked = item.filter((item) => item.packed).length;
  const averagepacked = (numberOfItemsPacked / numberOfItems) * 100;

  return (
    <footer className='stats'>
      <em>
        {averagepacked === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numberOfItems} items on your list, and you already packed
        ${numberOfItemsPacked} (${averagepacked}%)`}
      </em>
    </footer>
  );
};
