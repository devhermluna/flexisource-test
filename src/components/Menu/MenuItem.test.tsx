import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import MenuItem from './MenuItem';
import { TOPBAR_MENU } from '../../constants/Menu';

afterEach(cleanup);

test('should have menu item container', async () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <MenuItem label={TOPBAR_MENU[0].label} href={TOPBAR_MENU[0].href} />
    </MemoryRouter>
  );
  const menuItemContainer = getByTestId('menu-item-link-container');

  expect(menuItemContainer).toBeInTheDocument();
});
