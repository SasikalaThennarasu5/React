function Project1({ name = "Guest", age, city }) {
  return (
    <div style={{ border: "1px solid #aaa", padding: "10px", borderRadius: "5px" }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}
export default Project1;
