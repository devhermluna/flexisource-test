import React from 'react';
import styled from 'styled-components';

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
`;

const Tag = styled.div`
  position: absolute;
  transform: rotate(-90deg) translate(-100%, 0);
  transform-origin: left top;
  top: 0;
  background: #f5f5f5;
  padding-left: 10px;
  padding-bottom: 5px;
  font-size: 12px;
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
  height: 280
};

export default ImageWithTag;
