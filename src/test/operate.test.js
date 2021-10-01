import operate from '../logic/operate.js';

const one = 10;
const two = 50;

test('the sum of one and two to equal 60', () => {
  expect(operate(one, two, '+')).toEqual('60');
});

test('the sum of one and two not to equal 30', () => {
  expect(operate(one, two, '+')).not.toEqual('30');
});

test('the difference of one and two to equal -40', () => {
  expect(operate(one, two, '-')).toEqual('-40');
});

test('the difference of one and two not to equal 70', () => {
  expect(operate(one, two, '-')).not.toEqual('70');
});

test('the multiplication of one and two to equal 500', () => {
  expect(operate(one, two, 'x')).toEqual('500');
});

test('the multiplication of one and two not to equal 50', () => {
  expect(operate(one, two, 'x')).not.toEqual('50');
});

test('the division of one and two to equal 0.2', () => {
  expect(operate(one, two, '÷')).toEqual('0.2');
});

test('the division of one and two not to equal 12', () => {
  expect(operate(one, two, '÷')).not.toEqual('12');
});

test('the modulus of one and two to equal 10', () => {
  expect(operate(one, two, '%')).toEqual('10');
});

test('the modulus of one and two not to equal 0.1', () => {
  expect(operate(one, two, '%')).not.toEqual('0.1');
});
