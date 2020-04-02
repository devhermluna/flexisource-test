import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  BaseStyledFlexCenter,
  BaseStyledFlexCenterVertically,
  BaseStyledLink
} from './base.styled';
import { DEVICES } from '../constants/Devices';

export const StyledMenuContainer = styled.ul`
  ${BaseStyledFlexCenter}
  flex-wrap: wrap;

  @media ${DEVICES.mobile} {
    margin-top: 20px;
  }
`;

export const StyledMenuWrapper = styled.div`
  ${BaseStyledFlexCenterVertically}
  justify-content: space-between;

  @media ${DEVICES.tablet} {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const StyledItemContainer = styled.li`
  &:not(:first-of-type) {
    margin-left: 36px;
  }

  @media ${DEVICES.mobile} {
    margin-left: 15px !important;
    margin-right: 15px;
    margin-top: 10px;
  }
`;

export const StyledLinkItem = styled(Link)`
  ${BaseStyledLink}
  text-transform: none
`;
