function Task13() {
  const isVisible = true;
  return (
    <>
      <h2>Task 13: Conditional Rendering</h2>
      {isVisible && <p>This is conditionally rendered</p>}
    </>
  );
}
export default Task13;