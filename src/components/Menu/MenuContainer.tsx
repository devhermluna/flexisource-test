import React from 'react';
import Logo from '../Logo';
import Menu from './Menu';
import { IMenuContainer } from '../../interfaces/Menu';
import { StyledMenuWrapper } from '../../styled-components/Menu.styled';

const MenuContainer = ({ items, logoHeight }: IMenuContainer) => {
  return (
    <StyledMenuWrapper data-testid="menu-container">
      <Logo height={logoHeight} />
      <Menu items={items} />
    </StyledMenuWrapper>
  );
};

export default MenuContainer;
