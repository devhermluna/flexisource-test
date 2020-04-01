import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ImageWithTag from '../ImageWithTag';

interface Props {}

const ItemWrapper = styled.div`
  width: calc(50% - 10px);
  margin-bottom: 40px;
`;

const Title = styled.p`
  margin: 20px 0 15px;
  font-size: 20px;
  font-weight: 900;
  line-height: 26px;
`;

const StyledLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 11px;
  font-weight: 900;
  color: #3852f7;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    display: inline-block;
    background: #3852f7;
    height: 2px;
    width: 25px;
    margin-right: 10px;
  }
`;

const ItemComponent = ({ id, thumb, tag, title_long }: Props) => {
  return (
    <ItemWrapper>
      <ImageWithTag imageUrl={thumb} tag={tag} />
      <Title>{title_long}</Title>
      <StyledLink to={`/item/${id}`}>View Case Study</StyledLink>
    </ItemWrapper>
  );
};

export default ItemComponent;
