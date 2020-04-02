import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';
import { ILinkProps } from '../../interfaces/Link';
import { DEVICES } from '../../constants/Devices';

const ItemContainer = styled.li`
  &:not(:first-of-type) {
    margin-left: 36px;
  }

  @media ${DEVICES.mobile} {
    margin-left: 15px !important;
    margin-right: 15px;
    margin-top: 10px;
  }
`;

const LinkItem = styled(Link)`
  font-size: 13px;
  color: black;
  text-decoration: none;
`;

const MenuItem = ({ label, href }: ILinkProps) => {
  if (!href || !label) return null;

  return (
    <ItemContainer key={uuidv4()} data-testid="menu-item-link-container">
      <LinkItem to={href}>{label}</LinkItem>
    </ItemContainer>
  );
};

export default MenuItem;
