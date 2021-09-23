/* eslint no-unused-vars: 0 no-undef: 0 */
import React, { Component } from 'react';

class Answer extends Component {
  render() {
    const { answer } = this.props;
    return (
      <div class='calc-row-one answer'>
        <p>{ answer }</p>
      </div>
    );
  }
}

export default Answer;
