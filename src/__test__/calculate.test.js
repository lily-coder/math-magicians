import calculate from '../logic/calculate.js';

describe('Calculates user inputs correctly', () => {
  it('AC input should return null for all object elements', () => {
    const obj = {
      total: '5',
      next: '4',
      operation: '+',
    };
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should return empty object if total and next are zero values', () => {
    const obj = {
      total: '0',
      next: '0',
      operation: null,
    };
    expect(calculate(obj, '0')).toEqual({});
  });

  it('should return calculated sum of 10', () => {
    const obj = {
      total: '5',
      next: '5',
      operation: '+',
    };
    expect(calculate(obj, '=')).toEqual({
      next: null,
      operation: null,
      total: '10',
    });
  });

  it('should return calculated product 0f 200', () => {
    const obj = {
      total: '10',
      next: '20',
      operation: 'x',
    };
    expect(calculate(obj, '=')).toEqual({
      next: null,
      operation: null,
      total: '200',
    });
  });

  it('+/- input should return negative value', () => {
    const obj = {
      total: null,
      next: '5',
      operation: null,
    };
    expect(calculate(obj, '+/-')).toEqual({
      next: '-5',
      operation: null,
      total: null,
    });
  });

  it('. input should return a decimal point', () => {
    const obj = {
      total: null,
      next: '9',
      operation: null,
    };
    expect(calculate(obj, '.')).toEqual({
      next: '9.',
      operation: null,
      total: null,
    });
  });
});
