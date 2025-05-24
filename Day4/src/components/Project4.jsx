function Project4({ onClick }) {
  return (
    <button onClick={() => {
      console.log("Button Clicked");
      onClick();
    }}>
      Click Me
    </button>
  );
}
export default Project4;
