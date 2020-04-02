import React from 'react';
import styled from 'styled-components';
import { LOADER_COLOR } from '../constants/Colors';

interface Props {
  height: number;
  width?: number | string;
}

const Loader = styled.div`
  background: ${LOADER_COLOR};
  border-radius: 5px;
  height: ${props => props.height}px;
  max-width: ${props => props.width}px;
`;

const LoaderPlaceholder = ({ height, width }: Props) => {
  return <Loader height={height} width={width} />;
};

LoaderPlaceholder.defaultProps = {
  width: 'auto'
};

export default LoaderPlaceholder;
