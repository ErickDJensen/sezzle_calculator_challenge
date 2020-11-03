import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    numberInput1: '',
    numberInput2: '',
    operator: '',
    answer: '',
    result: [],
  }

  // function that takes in the inputs to be calculated.
  handleChangeFor = (name, event) => {
    this.setState({
      ...this.state,
      [name]: event.target.value
    })
  }

  // function that takes in two numbers and an operator and computes the equation entered.
  calculate = (event) => {
    event.preventDefault();
    console.log('in calculate', this.state.result);
    let num1 = Number(this.state.numberInput1);
    let num2 = Number(this.state.numberInput2);
    let operator = this.state.operator;
    if (operator === '+') {
      this.setState({
        answer: num1 + num2,
        result: [[[num1, operator, num2, '=', num1 + num2]], ...this.state.result]
      });
    } else if (operator === '-') {
      this.setState({
        answer: num1 - num2,
        result:[ [[num1, operator, num2, '=', num1 - num2]], ...this.state.result]
      });
    } else if (operator === '*') {
      this.setState({
        answer: num1 * num2,
        result:[ [[num1, operator, num2, '=', num1 * num2]], ...this.state.result]
      });
    } else if (operator === '/') {
      this.setState({
        answer: num1 / num2,
        result:[ [[num1, operator, num2, '=', num1 / num2]], ...this.state.result]
      });
    } else {
      this.setState({
        answer: 'Something went wrong'
      });
    }
    // calls a function that resets the calculator input fields.
    this.clearFields();
  }

  // function that clears the input fields, operator and answer.
  clearFields = () => {
    console.log('In clearFields', this.state)
    this.setState({
      numberInput1: '',
      numberInput2: '',
      operator: '',
      answer: '',
    });
  }


  render() {
    return (
      <>
        {/* inputs and operators for the calculator. */}
        <div>
          <h2>Calculator</h2>
        </div>
        <div className="calculator">
          <input type="number" value={this.state.numberInput1} onChange={(event) => this.handleChangeFor('numberInput1', event)}></input>
          <button value="+" id='btn-plus' onClick={(event) => this.handleChangeFor('operator', event)}>+</button>
          <button value="-" id='btn-minus' onClick={(event) => this.handleChangeFor('operator', event)}>-</button>
          <button value="*" id='btn-multiply' onClick={(event) => this.handleChangeFor('operator', event)}>*</button>
          <button value="/" id='btn-divide' onClick={(event) => this.handleChangeFor('operator', event)}>/</button>
          <input type="number" value={this.state.numberInput2} onChange={(event) => this.handleChangeFor('numberInput2', event)}></input>
          <button onClick={this.calculate}>=</button>
          <button onClick={this.clearFields}>C</button>
        </div>
        {/* displays the calculation answer. */}
        <div>
          <h3>Answer</h3>
        </div>
        <div className="answer">
          {this.state.numberInput1}
          {this.state.operator}
          {this.state.numberInput2}
          {"=" + this.state.answer}
        </div>
        {/* displays calculation history. */}
        <div className="list">
          <h4>History</h4>
          <li>{this.state.result[0]}</li>
          <li>{this.state.result[1]}</li>
          <li>{this.state.result[2]}</li>
          <li>{this.state.result[3]}</li>
          <li>{this.state.result[4]}</li>
          <li>{this.state.result[5]}</li>
          <li>{this.state.result[6]}</li>
          <li>{this.state.result[7]}</li>
          <li>{this.state.result[8]}</li>
          <li>{this.state.result[9]}</li>
        </div>
      </>
    )
  }
}

export default App;
