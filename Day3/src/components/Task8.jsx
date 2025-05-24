import { Component } from 'react';
class Task8 extends Component {
  state = { count: 0 };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <>
        <p>Counter: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </>
    );
  }
}
export default Task8;