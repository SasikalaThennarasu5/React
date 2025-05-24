function Task11() {
  function showMessage() {
    return <p>This is from a function!</p>;
  }
  return (
    <>
      <h2>Task 11</h2>
      {showMessage()}
    </>
  );
}
export default Task11;