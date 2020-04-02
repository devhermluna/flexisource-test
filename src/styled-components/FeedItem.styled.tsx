import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BaseStyledHalfContainer, BaseStyledLink } from './base.styled';
import { DEVICES } from '../constants/Devices';
import { LOADER_COLOR } from '../constants/Colors';

export const StyledItemWrapper = styled.div`
  margin-bottom: 73px;

  ${BaseStyledHalfContainer}
`;

export const StyledTitle = styled.p`
  margin: 27px 0 30px;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
`;

export const StyledLink = styled(Link)`
  ${BaseStyledLink}
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

export const StyledDivTitle = styled.div`
  margin: 27px 0 30px;
`;

export const StyledFeedItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  @media ${DEVICES.laptop} {
    flex-wrap: wrap;
  }
`;

export const StyledFeedItemImageContainer = styled.div`
  ${BaseStyledHalfContainer}
`;

export const StyledFeedItemDetailsContainer = styled.div`
  ${BaseStyledHalfContainer}
  padding: 80px;

  @media ${DEVICES.laptop} {
    padding: 0;
    margin-top: 50px;
  }
`;

export const StyledFeedItemTitle = styled.h1`
  font-size: 64px;
  font-weight: 900;
  line-height: 68px;
  margin-bottom: 60px;
`;

export const StyledFeedItemTitleLoader = styled.div`
  height: 68px;
  width: 150px
  margin-bottom: 60px;
  background: ${LOADER_COLOR};
  border-radius: 5px;
`;
