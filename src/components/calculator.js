import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator_container">

        <div className="result_container">
          000
        </div>

        <div className="row_container">
          <button className="number gray_button" type="button">AC</button>

          <button className="operation" type="button">+/-</button>
          <button className="operation" type="button">%</button>
          <button className="operation" type="button">÷</button>
        </div>

        <div className="row_container" type="button">

          <button className="number" type="button">7</button>
          <button className="number" type="button">8</button>
          <button className="number" type="button">9</button>
          <button className="operation" type="button">x</button>

        </div>
        <div className="row_container">

          <button className="number" type="button">4</button>
          <button className="number" type="button">5</button>
          <button className="number" type="button">6</button>
          <button className="operation" type="button">-</button>

        </div>
        <div className="row_container">

          <button className="number" type="button">1</button>
          <button className="number" type="button">2</button>
          <button className="number" type="button">3</button>
          <button className="operation" type="button">+</button>

        </div>
        <div className="row_container">

          <button className="number_zero" type="button">0</button>
          <button className="number" type="button">.</button>
          <button className="operation" type="button">=</button>

        </div>

      </div>
    );
  }
}

export default Calculator;
