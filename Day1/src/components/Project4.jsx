
function Project4({ hobbies }) {
  return (
    <ul className="hobby-list">
      {hobbies.map((hobby, index) => (
        <li key={index}>{hobby}</li>
      ))}
    </ul>
  );
}
export default Project4;