/* eslint-disable no-unused-vars */
import renderer from 'react-test-renderer';
import Numbers from '../components/Numbers.js';
import '@testing-library/jest-dom/extend-expect.js';

it('renders Numbers Component correctly', () => {
  const tree = renderer.create(<Numbers />).toJSON();
  expect(tree).toMatchSnapshot();
});
