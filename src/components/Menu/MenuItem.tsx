import React from 'react';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';
import { ILinkProps } from '../../interfaces/Link';

const ItemContainer = styled.li`
  &:not(:first-of-type) {
    margin-left: 30px;
  }
`;

const LinkItem = styled.a`
  color: black;
  text-decoration: none;
`;

const MenuItem = ({ label, href }: ILinkProps) => {
  return (
    <ItemContainer key={uuidv4()}>
      <LinkItem href={href}>{label}</LinkItem>
    </ItemContainer>
  );
};

export default MenuItem;
