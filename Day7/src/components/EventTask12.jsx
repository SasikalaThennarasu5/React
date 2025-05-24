function EventTask12() {
  const handleKey = () => {
    console.log("Key Pressed");
  };

  return (
    <div>
      <h2>Task 12: Keyboard Event</h2>
      <input onKeyDown={handleKey} />
    </div>
  );
}

export default EventTask12;
