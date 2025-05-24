function EventTask5() {
  const showEvent = (e) => {
    console.log(e);
  };

  return (
    <div>
      <h2>Task 5: Event Object</h2>
      <button onClick={showEvent}>Log Event</button>
    </div>
  );
}

export default EventTask5;
