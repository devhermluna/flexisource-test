import React from 'react';
import uuidv4 from 'uuid/v4';
import MenuItem from './MenuItem';
import { IMenuProps } from '../../interfaces/Menu';
import { StyledMenuContainer } from '../../styled-components/Menu.styled';

const Menu = ({ items }: IMenuProps) => {
  return (
    <StyledMenuContainer data-testid="menu-item-container">
      {items.map(item => (
        <MenuItem key={uuidv4()} {...item} />
      ))}
    </StyledMenuContainer>
  );
};

export default Menu;
