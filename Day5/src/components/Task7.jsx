function TernaryGreeting({ isLoggedIn }) {
  return <h3>{isLoggedIn ? "Welcome" : "Please Log In"}</h3>;
}
 export default TernaryGreeting;