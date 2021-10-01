/* eslint no-unused-vars: 0 no-undef: 0 */
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect.js';
import Equal from '../components/Equals.js';

describe('Equal Component', () => {
  const handleClick = () => { ''; };

  it('renders correctly', () => {
    const equalTree = renderer.create(<Equal handleClick={handleClick}/>).toJSON();
    expect(equalTree).toMatchSnapshot();
  });
});