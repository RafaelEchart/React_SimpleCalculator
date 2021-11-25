import React from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((previousState) => calculate(previousState, e.target.innerText));
  }

  render() {
    let val = 0;
    const { total, next } = this.state;
    if (next) {
      val = next;
    } else if (total) {
      val = total;
    }

    return (
      <div className="calculator_container">

        <div className="result_container">
          {val}
        </div>

        <div className="row_container">
          <button className="number gray_button" type="button" onClick={this.handleClick}>AC</button>

          <button className="operation" type="button" onClick={this.handleClick}>+/-</button>
          <button className="operation" type="button" onClick={this.handleClick}>%</button>
          <button className="operation" type="button" onClick={this.handleClick}>÷</button>
        </div>

        <div className="row_container" type="button">

          <button className="number" type="button" onClick={this.handleClick}>7</button>
          <button className="number" type="button" onClick={this.handleClick}>8</button>
          <button className="number" type="button" onClick={this.handleClick}>9</button>
          <button className="operation" type="button" onClick={this.handleClick}>x</button>

        </div>
        <div className="row_container">

          <button className="number" type="button" onClick={this.handleClick}>4</button>
          <button className="number" type="button" onClick={this.handleClick}>5</button>
          <button className="number" type="button" onClick={this.handleClick}>6</button>
          <button className="operation" type="button" onClick={this.handleClick}>-</button>

        </div>
        <div className="row_container">

          <button className="number" type="button" onClick={this.handleClick}>1</button>
          <button className="number" type="button" onClick={this.handleClick}>2</button>
          <button className="number" type="button" onClick={this.handleClick}>3</button>
          <button className="operation" type="button" onClick={this.handleClick}>+</button>

        </div>
        <div className="row_container">

          <button className="number_zero" type="button" onClick={this.handleClick}>0</button>
          <button className="number" type="button" onClick={this.handleClick}>.</button>
          <button className="operation" type="button" onClick={this.handleClick}>=</button>

        </div>

      </div>
    );
  }
}

export default Calculator;
