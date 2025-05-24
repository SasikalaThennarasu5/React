function EvenStyledList() {
  const numbers = [1, 2, 3, 4, 5, 6];

  return (
    <ul>
      {numbers
        .filter((num) => num % 2 === 0)
        .map((num, index) => (
          <li key={index} style={{ color: "blue", fontWeight: "bold" }}>
            {num}
          </li>
        ))}
    </ul>
  );
}
export default EvenStyledList;