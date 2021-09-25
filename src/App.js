/* eslint no-unused-vars: 0 no-undef: 0 */
import React, { Component } from 'react';
import './App.css';
import Operators from './components/Calculator.js';
import Answer from './components/Answer.js';
import Numericals from './components/Numbers.js';
import Equal from './components/Equals.js';
import calculate from './logic/calculate.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.updateState = this.updateState.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    const output = calculate(this.state, buttonName);
    this.updateState(output);
  }

  updateState = (newState) => {
    this.setState({ ...newState });
  }

  render = () => {
    const { total, next } = this.state;
    return (
      <div>
        <div className='calculator-container'>
          <Operators handleClick={this.handleClick} />
          <Answer
          total={total}
          next={next}
        />
          <Numericals handleClick={this.handleClick} />
          <Equal handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
