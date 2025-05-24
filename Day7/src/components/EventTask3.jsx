function EventTask3() {
  const sayHi = () => {
    alert("Hi from function!");
  };

  return (
    <div>
      <h2>Task 3: Function Binding</h2>
      <button onClick={sayHi}>Say Hi</button>
    </div>
  );
}

export default EventTask3;
