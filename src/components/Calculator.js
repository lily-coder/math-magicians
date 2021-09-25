/* eslint no-unused-vars: 0 no-undef: 0 */
import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class Operators extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const { handleClick } = this.props;
    handleClick(e.target.value);
  }

  render = () => {
    const r = '';
    return (
      <div className='calculator-container'>
        <div className='calc-row-two'>
          <button value='AC' className='operator' onClick={this.handleClick}>AC</button>
          <button value='+/-' className='operator' onClick={this.handleClick}>+/-</button>
          <button value='%' className='operator' onClick={this.handleClick}>%</button>
          <button value='÷' className='divide operator' onClick={this.handleClick}>÷</button>
        </div>
        <div className='calc-row-three orange-right'>
          <button value='x' className='orange operator' onClick={this.handleClick}>x</button>
        </div>
        <div className='calc-row-four orange-right'>
          <button value='-' className='orange operator' onClick={this.handleClick}>-</button>
        </div>
        <div className='calc-row-five orange-right'>
          <button value='+' className='orange operator' onClick={this.handleClick}>+</button>
        </div>
      </div>
    );
  }
}
Operators.propTypes = { handleClick: PropTypes.func };

Operators.defaultProps = { handleClick: null };

export default Operators;
