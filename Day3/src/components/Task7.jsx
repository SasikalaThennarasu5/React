import { Component } from 'react';
class Task7 extends Component {
  state = { count: 0 };
  render() {
    return <p>Counter: {this.state.count}</p>;
  }
}
export default Task7;