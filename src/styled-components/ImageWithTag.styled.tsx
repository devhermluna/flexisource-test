import styled from 'styled-components';
import { BACKGROUND, TAG_COLOR } from '../constants/Colors';
import { DEVICES } from '../constants/Devices';

export const StyledContainer = styled.div`
  position: relative;
`;

export const StyledImage = styled.div`
  height: ${props => props.height}px;
  background-image: url(/images/${props => props.image});
  background-size: cover;
  background-position: center;

  @media ${DEVICES.laptop} {
    height: 384px;
  }
`;

export const StyledTag = styled.div`
  position: absolute;
  transform: rotate(-90deg) translate(-100%, 0);
  transform-origin: left top;
  top: 0;
  background: ${BACKGROUND};
  color: ${TAG_COLOR};
  padding-left: 16px;
  padding-bottom: 5px;
  font-size: 11px;
  text-transform: uppercase;
`;
