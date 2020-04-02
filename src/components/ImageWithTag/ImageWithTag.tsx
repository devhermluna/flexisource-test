import React from 'react';
import { IImageWithTag } from '../../interfaces/ImageWithTag';
import {
  StyledContainer,
  StyledImage,
  StyledTag
} from '../../styled-components/ImageWithTag.styled';

const ImageWithTag = ({ imageUrl, tag, height }: IImageWithTag) => {
  if (!imageUrl || !tag) return null;

  return (
    <StyledContainer data-testid="image-with-tag-container">
      <StyledImage height={height} image={imageUrl} />
      <StyledTag>{tag}</StyledTag>
    </StyledContainer>
  );
};

ImageWithTag.defaultProps = {
  height: 384
};

export default ImageWithTag;
