function ReusableCard({ title, description }) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default ReusableCard;