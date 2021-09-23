/* eslint no-unused-vars: 0 no-undef: 0 */
import React from 'react';
import '../App.css';

export default function Calculator() {
  return (
    <div class='calculator-container'>
      <div>
        <button class='calc-row-one'>0</button>
      </div>
      <div class='calc-row-two'>
        <button>AC</button>
        <button>+/-</button>
        <button>%</button>
        <button class='orange'>&#0247;</button>
      </div>
      <div class='calc-row-three'>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class='orange'>&#0215;</button>
      </div>
      <div class='calc-row-four'>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button class='orange'>-</button>
      </div>
      <div class='calc-row-five'>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button class='orange'>+</button>
      </div>
      <div class='calc-row-six'>
        <button class='zero'>0</button>
        <button class='dot'>.</button>
        <button class='equal orange'>=</button>
      </div>
    </div>
  );
}
