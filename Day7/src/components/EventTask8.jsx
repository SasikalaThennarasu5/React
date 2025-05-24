import { useState } from "react";

function EventTask8() {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(input);
  };

  return (
    <div>
      <h2>Task 8: Form Submit Event</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <p>Submitted: {submitted}</p>
    </div>
  );
}

export default EventTask8;
