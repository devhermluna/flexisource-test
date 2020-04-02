import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import Menu from './Menu';
import { TOPBAR_MENU } from '../../constants/Menu';

afterEach(cleanup);

test('should have menu item container', async () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Menu items={TOPBAR_MENU} />
    </MemoryRouter>
  );
  const menuItemContainer = getByTestId('menu-item-container');

  expect(menuItemContainer).toBeInTheDocument();
});
