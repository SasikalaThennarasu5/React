import { useState } from "react";

function EventProject3() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <h2>Mini Project 3: Show/Hide Paragraph</h2>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"} Paragraph
      </button>
      {visible && <p>This paragraph can be toggled.</p>}
    </div>
  );
}

export default EventProject3;
