import React from 'react';

function Task11() {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <React.Fragment key={user.id}>
            <tr>
              <td>{user.name}</td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
export default Task11;