import React, { Component } from 'react';
import { connect } from 'react-redux'; // ---1-й шаг - импорт connect из react-redux теперь - экспортируется connect компонент 

class Counter extends Component {
  state = {};
  increment = () => {
    //---React без Redux--- this.setState({ count: this.state.count + 1 });
    this.props.dispatch({type: "INCREMENT"});
  };
  decrement = () =>{
    //---React без Redux--- this.setState({ count: this.state.count - 1 });
    this.props.dispatch({type: "DECREMENT"})
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

export default connect(mapStateToProps)(Counter); //привязывает стейт к пропсам и оборачивает компонент передает методы store в компонент 
