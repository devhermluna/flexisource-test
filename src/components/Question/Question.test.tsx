import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import { within } from '@testing-library/dom';
import Question from './Question';

afterEach(cleanup);

const props = {
  number: 1,
  text: 'Sample Questions'
};

test('should have question container', async () => {
  const { getByTestId } = render(<Question {...props} />);
  const questionContainer = getByTestId('question-container');

  expect(questionContainer).toBeInTheDocument();
});

test('should have header-text', async () => {
  const { getByTestId } = render(<Question {...props} />);
  const questionContainer = getByTestId('question-container');
  const headerText = within(questionContainer).getByTestId(
    'question-header-text'
  );

  expect(headerText).toBeInTheDocument();
  expect(headerText.textContent).toBe(`Question ${props.number}`);
});

test('should have body-text', async () => {
  const { getByTestId } = render(<Question {...props} />);
  const questionContainer = getByTestId('question-container');
  const bodyText = within(questionContainer).getByTestId('question-body-text');

  expect(bodyText).toBeInTheDocument();
  expect(bodyText.textContent).toBe(props.text);
});
