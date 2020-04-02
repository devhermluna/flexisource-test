import styled, { css, createGlobalStyle } from 'styled-components';
import { LOADER_COLOR, BACKGROUND } from '../constants/Colors';
import { DEVICES } from '../constants/Devices';

export const BaseStyledGlobal = createGlobalStyle`
  body {
    background: ${BACKGROUND};
  }
`;

export const BaseStyledHalfContainer = css`
  width: calc(50% - 15px);

  @media ${DEVICES.laptop} {
    width: 100%;
  }
`;

export const BaseStyledLink = css`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 13px;
  color: black;
`;

export const BaseStyledFlexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BaseStyledFlexCenterVertically = css`
  display: flex;
  align-items: center;
`;

export const BaseStyledFlexCenterHorizontally = css`
  display: flex;
  justify-content: center;
`;

export const StyledLoader = styled.div`
  background: ${LOADER_COLOR};
  border-radius: 5px;
  height: ${props => props.height}px;
  max-width: ${props => props.width}px;
`;
