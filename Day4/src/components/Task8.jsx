function ObjectProps({ user }) {
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}

export default ObjectProps;