import React from 'react';
function Project2() {
  const users = [
    { id: 1, name: 'Alice', age: 24 },
    { id: 2, name: 'Bob', age: 30 }
  ];
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Project2;