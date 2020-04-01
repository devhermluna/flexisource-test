import React from 'react';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';
import MenuItem from './MenuItem';
import { IMenuProps } from '../../interfaces/Menu';

const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
`;

const Menu = ({ items }: IMenuProps) => {
  return (
    <MenuContainer>
      {items.map(item => (
        <MenuItem key={uuidv4()} {...item} />
      ))}
    </MenuContainer>
  );
};

export default Menu;
