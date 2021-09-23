/* eslint no-unused-vars: 0 no-undef: 0 */
import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator.js';
import Answer from './components/Answer.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      answer: '0',
    };
  }

  render() {
    return (
      <div>
        <div class='calculator-container'>
          <Calculator onClick={this.onClick}/>
          <Answer answer={this.state.answer}/>
        </div>
      </div>
    );
  }
}

export default App;
