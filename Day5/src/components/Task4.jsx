function UserList() {
  const users = [
    { name: "John", age: 25 },
    { name: "Sara", age: 30 },
  ];
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user.name} - {user.age} years</li>
      ))}
    </ul>
  );
}
export default UserList