/* eslint no-unused-vars: 0 no-undef: 0 */
import React, { Component, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Operators from './components/Calculator.js';
import Answer from './components/Answer.js';
import Numericals from './components/Numbers.js';
import Equal from './components/Equals.js';
import calculate from './logic/calculate.js';
import Navbar from './components/Navbar.js';
import Quote from './pages/Quote.js';
import Home from './pages/Home.js';

const App = () => {
  const initialObj = { total: null, next: null, operation: null };
  const [state, setState] = useState(initialObj);
  const [error, setError] = useState({ status: false });

  const updateState = (newState) => setState((actualState) => ({ ...actualState, ...newState }));

  const errorHandler = () => {
    setError({ status: true });
    setState({ total: 'Invalid operation: Can\'t Divide by Zero', next: null, operation: null });
  };

  useEffect(() => {
    if ('savedInput' in error) {
      setError({ status: false });

      const output = calculate(state, error.savedInput);
      updateState(output);
    }
  }, [error]);

  const handleClick = (buttonName) => {
    if (error.status) {
      setError({ savedInput: buttonName });
      setState(initialObj);
      return;
    }

    let output;
    try {
      output = calculate(state, buttonName);
    } catch (err) {
      errorHandler();
    }
    updateState(output);
  };

  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path='/calculator'>
          <div className='calc-contain'>
            <h2 className='calc-header'>Let's do some math</h2>
            <div className='calculator-container'>
              <Operators handleClick={handleClick} />
              <Answer
            total={state.total}
            next={state.next}
          />
              <Numericals handleClick={handleClick} />
              <Equal handleClick={handleClick} />
            </div>
          </div>
        </Route>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/quote'>
          <Quote />
        </Route>
      </Switch>
    </>
  );
};

export default App;
