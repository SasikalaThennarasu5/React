import { Component } from 'react';
class Miniproject4 extends Component {
  state = { time: new Date().toLocaleTimeString() };
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return <h3>Current Time: {this.state.time}</h3>;
  }
}
export default Miniproject4;