import React from 'react';
import styled from 'styled-components';
import ImageWithTagLoader from '../ImageWithTagLoader';
import LoaderPlaceholder from '../LoaderPlaceholder';

interface Props {}

const ItemWrapper = styled.div`
  width: 682px;
  margin-bottom: 73px;
`;

const Title = styled.div`
  margin: 27px 0 30px;
`;

const ItemComponent = () => {
  return (
    <ItemWrapper data-testid="feed-list-item">
      <ImageWithTagLoader height={384} />
      <Title>
        <LoaderPlaceholder height={32} width={300} />
      </Title>
      <LoaderPlaceholder height={16} width={117} />
    </ItemWrapper>
  );
};

export default ItemComponent;
