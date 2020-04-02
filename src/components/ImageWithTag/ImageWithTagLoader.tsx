import React from 'react';
import LoaderPlaceholder from '../LoaderPlaceholder';

interface Props {
  height: number;
}

const ItemComponent = ({ height }: Props) => {
  return <LoaderPlaceholder height={height} />;
};

export default ItemComponent;
