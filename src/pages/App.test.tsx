import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../pages/App';

afterEach(cleanup);

test('should have app container', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const appContainer = getByTestId('app-container');
  expect(appContainer).toBeInTheDocument();
});

test('should have topbar', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const topbar = getByTestId('topbar');
  expect(topbar).toBeInTheDocument();
});

test('should have footer', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const footer = getByTestId('footer');
  expect(footer).toBeInTheDocument();
});
