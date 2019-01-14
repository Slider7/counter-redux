import React, { Component } from 'react';
import { connect } from 'react-redux'; // ---1-й шаг - импорт connect из react-redux теперь - экспортируется connect компонент 

class App extends Component {
  state = { count: 0};
  increment = () => {

    //---React--- this.setState({ count: this.state.count + 1 });
  };
  decrement = () =>{
    //---React--- this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div className="counterDiv">
          <button onClick={this.decrement}>&ndash;</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({  // --- 2-й шаг определяем функцию mapStateToProps
  count: state.count
}); 

export default connect(mapStateToProps)(App); //привязывает стейт к пропсам и оборачивает компонент
