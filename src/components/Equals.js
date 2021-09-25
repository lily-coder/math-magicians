/* eslint no-unused-vars: 0 no-undef: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Equal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {};
  }

  handleClick = (e) => {
    const { handleClick } = this.props;
    handleClick(e.target.value);
  }

  render = () => {
    const r = '';
    return (
        <div className='calc-row-six equal-container'>
        <button value='=' className='equal orange' onClick={this.handleClick}>=</button>
      </div>
    );
  }
}

Equal.propTypes = { handleClick: PropTypes.func };

Equal.defaultProps = { handleClick: null };

export default Equal;