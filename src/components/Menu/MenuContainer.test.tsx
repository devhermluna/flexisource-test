import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import MenuContainer from './MenuContainer';
import { TOPBAR_MENU } from '../../constants/Menu';

afterEach(cleanup);

const props = {
  logoHeight: 20,
  items: TOPBAR_MENU
};

test('should have menu container', async () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <MenuContainer {...props} />
    </MemoryRouter>
  );
  const menuContainer = getByTestId('menu-container');

  expect(menuContainer).toBeInTheDocument();
});
