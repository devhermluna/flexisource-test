import React from 'react';
import {
  StyledItemWrapper,
  StyledDivTitle
} from '../../styled-components/FeedItem.styled';
import ImageWithTagLoader from '../ImageWithTag/ImageWithTagLoader';
import LoaderPlaceholder from '../LoaderPlaceholder';

const ItemComponent = () => {
  return (
    <StyledItemWrapper data-testid="feed-list-item">
      <ImageWithTagLoader height={384} />
      <StyledDivTitle>
        <LoaderPlaceholder height={32} width={300} />
      </StyledDivTitle>
      <LoaderPlaceholder height={16} width={117} />
    </StyledItemWrapper>
  );
};

export default ItemComponent;
