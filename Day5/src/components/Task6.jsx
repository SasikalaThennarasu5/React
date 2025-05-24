function GreetIfLoggedIn({ isLoggedIn }) {
  return <div>{isLoggedIn && <h3>Hello, User!</h3>}</div>;
}
export default GreetIfLoggedIn