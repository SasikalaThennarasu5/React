// Task2.jsx - State vs. Props
const Task2 = () => {
  return (
    <div>
      <h2>State vs. Props</h2>
      <ul>
        <li>State is managed within the component, while props are passed from parent to child.</li>
        <li>State can change, but props are read-only.</li>
        <li>State is used for dynamic data, props for data passed between components.</li>
      </ul>
    </div>
  );
};
export default Task2;