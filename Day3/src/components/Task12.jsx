function InnerComponent() {
  return <p>This is the inner component</p>;
}
function Task12() {
  return (
    <div>
      <h3>Outer Component</h3>
      <InnerComponent />
    </div>
  );
}
export default Task12;