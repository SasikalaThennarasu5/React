function GreetingByTime({ time }) {
  if (time < 12) return <p>Good Morning</p>;
  if (time < 18) return <p>Good Afternoon</p>;
  return <p>Good Evening</p>;
}
export default GreetingByTime