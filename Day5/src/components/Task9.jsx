function EmptyListCheck({ items }) {
  return (
    <div>
      {items.length === 0 ? <p>No items available</p> : (
        <ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>
      )}
    </div>
  );
}
 export default EmptyListCheck