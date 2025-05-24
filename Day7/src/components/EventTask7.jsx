import { useState } from "react";

function EventTask7() {
  const [value, setValue] = useState("");

  return (
    <div>
      <h2>Task 7: Input Change Event</h2>
      <input onChange={(e) => setValue(e.target.value)} />
      <p>Current value: {value}</p>
    </div>
  );
}

export default EventTask7;
