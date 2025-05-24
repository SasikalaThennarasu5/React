function project4(props) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Mini Project 4: User Avatar</h2>
      <img src={props.src} alt={props.alt} width="150" height="150" style={{ borderRadius: '50%' }} />
      <p>{props.alt}</p>
    </div>
  );
}

export default project4;