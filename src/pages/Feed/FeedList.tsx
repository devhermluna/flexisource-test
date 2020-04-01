import React from 'react';
import styled from 'styled-components';
import Item from '../../components/Item/Item';
import items from '../../data.json';

interface Props {}

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Feed = (props: Props) => {
  return (
    <ItemContainer>
      {items.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </ItemContainer>
  );
};

export default Feed;
