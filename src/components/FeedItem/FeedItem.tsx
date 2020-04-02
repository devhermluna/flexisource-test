import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ImageWithTag from '../ImageWithTag/ImageWithTag';
import { IItem } from '../../interfaces/Item';
import { DEVICES } from '../../constants/Devices';

const ItemWrapper = styled.div`
  width: calc(50% - 15px);
  margin-bottom: 73px;

  @media ${DEVICES.laptop} {
    width: 100%;
  }
`;

const Title = styled.p`
  margin: 27px 0 30px;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
`;

const StyledLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  color: #3852f7;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    display: inline-block;
    background: #3852f7;
    height: 2px;
    width: 32px;
    margin-right: 16px;
  }
`;

const ItemComponent = ({ id, slug, thumb, tag, title_long }: IItem) => {
  if (!id || !slug || !thumb || !tag || !title_long) return null;

  return (
    <ItemWrapper data-testid="feed-list-item">
      <ImageWithTag imageUrl={thumb} tag={tag} />
      <Title>{title_long}</Title>
      <StyledLink to={`/item/${id}-${slug}`}>View Case Study</StyledLink>
    </ItemWrapper>
  );
};

export default ItemComponent;
