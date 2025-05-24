function project1() {
  const profileStyle = {
    backgroundColor: '#e3f2fd',
    padding: '10px',
    borderRadius: '8px'
  };
  return (
    <div className="profile-card" style={profileStyle}>
      <h2>Mini Project 1: Profile Card</h2>
      <p>Name: Alex Smith</p>
      <p>Age: 30</p>
      <p>Location: New York</p>
    </div>
  );
}
export default project1;