import { useState } from "react";

function ToggleList() {
  const [show, setShow] = useState(true);
  const items = ["One", "Two", "Three"];

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide List" : "Show List"}
      </button>
      {show && (
        <ul>
          {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      )}
    </div>
  );
}
export default ToggleList