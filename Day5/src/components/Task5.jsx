function FruitList() {
  const fruits = [
    { name: "Apple", color: "red" },
    { name: "Banana", color: "goldenrod" },
    { name: "Grapes", color: "purple" },
  ];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index} style={{ color: fruit.color }}>
          {fruit.name}
        </li>
      ))}
    </ul>
  );
}
export default FruitList