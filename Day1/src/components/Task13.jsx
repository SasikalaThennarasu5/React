import React from 'react';

function Task13() {
  return (
    <div>
      <h3>13. Component Composition</h3>
      <ParentComponent />
    </div>
  );
}

function Child1() {
  return <p>This is child 1.</p>;
}

function Child2() {
  return <p>This is child 2.</p>;
}

function ParentComponent() {
  return (
    <div>
      <Child1 />
      <Child2 />
    </div>
  );
}

export default Task13;
