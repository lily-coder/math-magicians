/* eslint no-unused-vars: 0 no-undef: 0 */
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect.js';
import Calculator from '../components/Calculator.js';

describe('Calculator Component', () => {
  const handleClick = () => { ''; };

  it('renders correctly', () => {
    const calculatorTree = renderer.create(<Calculator handleClick={handleClick}/>).toJSON();
    expect(calculatorTree).toMatchSnapshot();
  });
});