import React from 'react';
import {
  StyledItemWrapper,
  StyledTitle,
  StyledLink
} from '../../styled-components/FeedItem.styled';
import ImageWithTag from '../ImageWithTag/ImageWithTag';
import { IItem } from '../../interfaces/Item';

const ItemComponent = ({ id, slug, thumb, tag, title_long }: IItem) => {
  if (!id || !slug || !thumb || !tag || !title_long) return null;

  return (
    <StyledItemWrapper data-testid="feed-list-item">
      <ImageWithTag imageUrl={thumb} tag={tag} />
      <StyledTitle>{title_long}</StyledTitle>
      <StyledLink to={`/item/${id}-${slug}`}>View Case Study</StyledLink>
    </StyledItemWrapper>
  );
};

export default ItemComponent;
