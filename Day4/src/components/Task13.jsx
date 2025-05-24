import ChildComponent from './Task13';

function ParentComponent() {
  const message = "Hello from Parent!";
  return (
    <div>
      <ChildComponent text={message} />
      <ChildComponent text="Another message!" />
    </div>
  );
}

export default ParentComponent;