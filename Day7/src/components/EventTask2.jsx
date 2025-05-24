function EventTask2() {
  const handleClick = () => {
    console.log("Button Clicked");
  };

  return (
    <div>
      <h2>Task 2: Button Click Event</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default EventTask2;
