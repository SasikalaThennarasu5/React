function ClickableList() {
  const items = ["React", "JavaScript", "HTML"];
  const handleClick = (item) => {
    alert(`You clicked ${item}`);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} onClick={() => handleClick(item)} style={{ cursor: "pointer" }}>
          {item}
        </li>
      ))}
    </ul>
  );
}
export default ClickableList