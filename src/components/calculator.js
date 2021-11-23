import React from "react";
import './calculator.css'

class Calculator extends React.Component {
    render() {
      return (
        <div className="calculator_container">
          
        <div className="result_container">
          000
        </div>

        <div className="row_container">
        <button className="number gray_button">AC</button>

        <button className="operation">+/-</button>
        <button className="operation">%</button>
        <button className="operation">÷</button>
        </div>

        <div className="row_container">
        
        <button className="number">7</button>
        <button className="number">8</button>
        <button className="number">9</button>
        <button className="operation">x</button>
        
        </div>
        <div className="row_container">
        
        <button className="number">4</button>
        <button className="number">5</button>
        <button className="number">6</button>
        <button className="operation">-</button>
        
        </div>
        <div className="row_container">
        
        <button className="number">1</button>
        <button className="number">2</button>
        <button className="number">3</button>
        <button className="operation">+</button>
        
        </div>
        <div className="row_container">
        
        <button className="number_zero">0</button>
        <button className="number">.</button>
        <button className="operation">=</button>
        
        </div>

     


        </div>
      )
    }
  }
  

export default Calculator