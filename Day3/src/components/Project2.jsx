
import { Component } from 'react';
class Miniproject2 extends Component {
  state = { count: 0 };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <>
        <p>Counter: {this.state.count}</p>
        <button onClick={this.increment}>Click Me</button>
      </>
    );
  }
}
export default Miniproject2;
