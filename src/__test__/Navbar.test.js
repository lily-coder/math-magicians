/* eslint-disable no-unused-vars */
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect.js';
import Navbar from '../components/Navbar.js';

it('renders Navbar Component correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Navbar />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
