import { useState } from "react";

function EventTask10() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <h2>Task 10: Toggle Visibility</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Paragraph
      </button>
      {isVisible && <p>This is a toggleable paragraph.</p>}
    </div>
  );
}

export default EventTask10;
