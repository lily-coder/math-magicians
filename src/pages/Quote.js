/* eslint no-unused-vars: 0 no-undef: 0 */
import React from 'react';
import { useParams } from 'react-router-dom';

const Quote = () => {
  const top = useParams();
  return (
    <div className='quote-content'>
      <p>
        Mathematics is not about numbers, equations, computations, or
        algorithms: its about understanding- William Paul Thurston
      </p>
    </div>
  );
};
export default Quote;
