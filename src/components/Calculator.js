/* eslint no-unused-vars: 0 no-undef: 0 */
import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

const Operators = (props) => {
  const handleClick = (e) => {
    const { handleClick } = props;
    handleClick(e.target.value);
  };

  return (
      <div className='calculator-container'>
        <div className='calc-row-two'>
          <button value='AC' className='operator' onClick={handleClick}>AC</button>
          <button value='+/-' className='operator' onClick={handleClick}>+/-</button>
          <button value='%' className='operator' onClick={handleClick}>%</button>
          <button value='÷' className='divide operator' onClick={handleClick}>÷</button>
        </div>
        <div className='calc-row-three orange-right'>
          <button value='x' className='orange operator' onClick={handleClick}>x</button>
        </div>
        <div className='calc-row-four orange-right'>
          <button value='-' className='orange operator' onClick={handleClick}>-</button>
        </div>
        <div className='calc-row-five orange-right'>
          <button value='+' className='orange operator' onClick={handleClick}>+</button>
        </div>
      </div>
  );
};
Operators.propTypes = { handleClick: PropTypes.func };

Operators.defaultProps = { handleClick: null };

export default Operators;
