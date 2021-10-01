/* eslint no-unused-vars: 0 no-undef: 0 */
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect.js';
import Answer from '../components/Answer.js';

describe('Answer', () => {
  test('Correctly renders Answer component', () => {
    const answerTree = renderer.create(<Answer/>).toJSON();
    expect(answerTree).toMatchSnapshot();
  });
});