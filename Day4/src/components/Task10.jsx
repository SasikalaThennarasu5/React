function InlineStylingProps({ color }) {
  const style = { color: color, fontWeight: 'bold' };
  return <p style={style}>This is a colored text.</p>;
}

export default InlineStylingProps;