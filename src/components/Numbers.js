/* eslint no-unused-vars: 0 no-undef: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Numericals = (props) => {
  const handleClick = (e) => {
    const { handleClick } = props;
    handleClick(e.target.value);
  };

  return (
      <div className='calculator-container numbers-container'>
          <div className='calc-row-five numbers-five'>
            <button value='1' onClick={handleClick}>1</button>
            <button value='2' onClick={handleClick}>2</button>
            <button value='3' onClick={handleClick}>3</button>
        </div>
        <div className='calc-row-four numbers-four'>
            <button value='4' onClick={handleClick}>4</button>
            <button value='5' onClick={handleClick}>5</button>
            <button value='6' onClick={handleClick}>6</button>
        </div>
        <div className='calc-row-three numbers-three'>
            <button value='7' onClick={handleClick}>7</button>
            <button value='8' onClick={handleClick}>8</button>
            <button value='9' onClick={handleClick}>9</button>
        </div>
        <div className='calc-row-six numbers-six'>
            <button className='zero' value='0' onClick={handleClick}>0</button>
            <button className='dot' value='.' onClick={handleClick}>.</button>
        </div>
      </div>
  );
};

Numericals.propTypes = { handleClick: PropTypes.func };

Numericals.defaultProps = { handleClick: null };

export default Numericals;