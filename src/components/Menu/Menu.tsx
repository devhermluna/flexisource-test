import React from 'react';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';
import MenuItem from './MenuItem';
import { IMenuProps } from '../../interfaces/Menu';
import { DEVICES } from '../../constants/Devices';

const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media ${DEVICES.mobile} {
    margin-top: 20px;
  }
`;

const Menu = ({ items }: IMenuProps) => {
  return (
    <MenuContainer data-testid="menu-item-container">
      {items.map(item => (
        <MenuItem key={uuidv4()} {...item} />
      ))}
    </MenuContainer>
  );
};

export default Menu;
