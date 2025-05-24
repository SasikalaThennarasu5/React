function ConditionalRenderingProps({ name }) {
  return <h3>Welcome, {name ? name : "Guest"}!</h3>;
}

export default ConditionalRenderingProps;