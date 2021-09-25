/* eslint no-unused-vars: 0 no-undef: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Numericals extends React.Component {
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
      <div className='calculator-container numbers-container'>
          <div className='calc-row-five numbers-five'>
            <button value='1' onClick={this.handleClick}>1</button>
            <button value='2' onClick={this.handleClick}>2</button>
            <button value='3' onClick={this.handleClick}>3</button>
        </div>
        <div className='calc-row-four numbers-four'>
            <button value='4' onClick={this.handleClick}>4</button>
            <button value='5' onClick={this.handleClick}>5</button>
            <button value='6' onClick={this.handleClick}>6</button>
        </div>
        <div className='calc-row-three numbers-three'>
            <button value='7' onClick={this.handleClick}>7</button>
            <button value='8' onClick={this.handleClick}>8</button>
            <button value='9' onClick={this.handleClick}>9</button>
        </div>
        <div className='calc-row-six numbers-six'>
            <button className='zero' value='0' onClick={this.handleClick}>0</button>
            <button className='dot' value='.' onClick={this.handleClick}>.</button>
        </div>
      </div>
    );
  }
}

Numericals.propTypes = { handleClick: PropTypes.func };

Numericals.defaultProps = { handleClick: null };

export default Numericals;