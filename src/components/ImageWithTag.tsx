import React from 'react';
import styled from 'styled-components';
import { BACKGROUND, TAG_COLOR } from '../constants/Colors';
import { DEVICES } from '../constants/Devices';

interface Props {
  imageUrl: string;
  tag: string;
  height?: number;
}

const Container = styled.div`
  position: relative;
`;

const Image = styled.div`
  height: ${props => props.height}px;
  background-image: url(/images/${props => props.image});
  background-size: cover;
  background-position: center;

  @media ${DEVICES.laptop} {
    height: 384px;
  }
`;

const Tag = styled.div`
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

const ImageWithTag = ({ imageUrl, tag, height }: Props) => {
  return (
    <Container>
      <Image height={height} image={imageUrl} />
      <Tag>{tag}</Tag>
    </Container>
  );
};

ImageWithTag.defaultProps = {
  height: 384
};

export default ImageWithTag;
