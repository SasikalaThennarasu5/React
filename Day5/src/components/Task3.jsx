function NameList() {
  const names = ["Alice", "Bob", "Charlie"];
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}
export default NameList