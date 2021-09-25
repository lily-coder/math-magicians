/* eslint no-unused-vars: 0 no-undef: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const isNull = (prop) => {
  if (!prop) {
    return '0';
  }
  return prop;
};

const current = (total, next) => {
  if (total && next) {
    return isNull(next);
  }
  if (total) {
    return total;
  }
  return isNull(next);
};

const Answer = (props) => {
  const { total, next } = props;

  return (
      <div className='calc-row-one answer'>
        <p>{ current(total, next) }</p>
      </div>
  );
};

Answer.defaultProps = {
  total: null,
  next: null,
};

Answer.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
};

export default Answer;
