function EventTask6() {
  const greet = (name) => {
    alert(`Hello, ${name}`);
  };

  return (
    <div>
      <h2>Task 6: Passing Arguments</h2>
      <button onClick={() => greet("John")}>Greet John</button>
    </div>
  );
}

export default EventTask6;
