function EvenNumberList() {
  const numbers = [1, 2, 3, 4, 5, 6];
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  return (
    <ul>
      {evenNumbers.map((num, index) => (
        <li key={index}>{num}</li>
      ))}
    </ul>
  );
}
export default EvenNumberList