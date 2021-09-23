/* eslint no-unused-vars: 0 no-undef: 0 */
import React, { Component } from 'react';
import '../App.css';

class Calculator extends Component {
  render() {
    return (
      <div class='calculator-container'>
        <div class='calc-row-two'>
          <button name='AC' onClick={(e) => this.props.onClick(e.target.name)}>AC</button>
          <button name='+/-' onClick={(e) => this.props.onClick(e.target.name)}>+/-</button>
          <button name='%' onClick={(e) => this.props.onClick(e.target.name)}>%</button>
          <button name='/' class='orange' onClick={(e) => this.props.onClick(e.target.name)}>&#0247;</button>
        </div>
        <div class='calc-row-three'>
          <button name='7' onClick={(e) => this.props.onClick(e.target.name)}>7</button>
          <button name='8' onClick={(e) => this.props.onClick(e.target.name)}>8</button>
          <button name='9' onClick={(e) => this.props.onClick(e.target.name)}>9</button>
          <button name='*' class='orange' onClick={(e) => this.props.onClick(e.target.name)}>&#0215;</button>
        </div>
        <div class='calc-row-four'>
          <button name='4' onClick={(e) => this.props.onClick(e.target.name)}>4</button>
          <button name='5' onClick={(e) => this.props.onClick(e.target.name)}>5</button>
          <button name='6' onClick={(e) => this.props.onClick(e.target.name)}>6</button>
          <button name='-' class='orange' onClick={(e) => this.props.onClick(e.target.name)}>-</button>
        </div>
        <div class='calc-row-five'>
          <button name='1' onClick={(e) => this.props.onClick(e.target.name)}>1</button>
          <button name='2' onClick={(e) => this.props.onClick(e.target.name)}>2</button>
          <button name='3' onClick={(e) => this.props.onClick(e.target.name)}>3</button>
          <button name='+' class='orange' onClick={(e) => this.props.onClick(e.target.name)}>+</button>
        </div>
        <div class='calc-row-six'>
          <button name='0' class='zero' onClick={(e) => this.props.onClick(e.target.name)}>0</button>
          <button name='.' class='dot' onClick={(e) => this.props.onClick(e.target.name)}>.</button>
          <button name='=' class='equal orange' onClick={(e) => this.props.onClick(e.target.name)}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
