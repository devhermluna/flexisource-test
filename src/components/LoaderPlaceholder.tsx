import React from 'react';
import { ILoader } from '../interfaces/Loader';
import { StyledLoader } from '../styled-components/base.styled';

const LoaderPlaceholder = ({ height, width }: ILoader) => {
  return <StyledLoader height={height} width={width} />;
};

LoaderPlaceholder.defaultProps = {
  width: 'auto'
};

export default LoaderPlaceholder;
