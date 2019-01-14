import React, { Component } from 'react';

class App extends Component {
  state = { count: 0};
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  decrement = () =>{
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div className="counterDiv">
          <button onClick={this.decrement}>&ndash;</button>
          <span className="count">{this.state.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

export default App;
