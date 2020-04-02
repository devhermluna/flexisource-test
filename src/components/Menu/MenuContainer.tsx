import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import Menu from './Menu';
import { DEVICES } from '../../constants/Devices';
import { IMenuContainer } from '../../interfaces/Menu';

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${DEVICES.tablet} {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const MenuContainer = ({ items, logoHeight }: IMenuContainer) => {
  return (
    <MenuWrapper data-testid="menu-container">
      <Logo height={logoHeight} />
      <Menu items={items} />
    </MenuWrapper>
  );
};

export default MenuContainer;
