import React from 'react';
import uuidv4 from 'uuid/v4';
import { ILinkProps } from '../../interfaces/Link';
import {
  StyledItemContainer,
  StyledLinkItem
} from '../../styled-components/Menu.styled';

const MenuItem = ({ label, href }: ILinkProps) => {
  if (!href || !label) return null;

  return (
    <StyledItemContainer key={uuidv4()} data-testid="menu-item-link-container">
      <StyledLinkItem to={href}>{label}</StyledLinkItem>
    </StyledItemContainer>
  );
};

export default MenuItem;
