import { useState } from "react";

function EventTask13() {
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <h2>Task 13: Disable Button</h2>
      <button disabled={disabled} onClick={() => setDisabled(true)}>
        {disabled ? "Disabled" : "Click Me"}
      </button>
    </div>
  );
}

export default EventTask13;
