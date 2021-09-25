/* eslint no-unused-vars: 0 no-undef: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Equal = (props) => {
  const handleClick = (e) => {
    const { handleClick } = props;
    handleClick(e.target.value);
  };

  return (
        <div className='calc-row-six equal-container'>
        <button value='=' className='equal orange' onClick={handleClick}>=</button>
      </div>
  );
};

Equal.propTypes = { handleClick: PropTypes.func };

Equal.defaultProps = { handleClick: null };

export default Equal;