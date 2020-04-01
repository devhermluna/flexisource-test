import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import Menu from './Menu';

const Topbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface Props {}

const TopbarComponent = ({ items, logoHeight }: Props) => {
  return (
    <Topbar>
      <Logo height={logoHeight} />
      <Menu items={items} />
    </Topbar>
  );
};

export default TopbarComponent;
