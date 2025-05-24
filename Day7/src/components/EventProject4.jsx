import { useState } from "react";

function EventProject4() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    alert("Button Clicked");
  };

  return (
    <div>
      <h2>Mini Project 4: Disable After Click</h2>
      <button onClick={handleClick} disabled={clicked}>
        {clicked ? "Clicked" : "Click Me"}
      </button>
    </div>
  );
}

export default EventProject4;
