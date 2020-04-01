import React from 'react';
import { ReactComponent as ImgLogo } from '../assets/images/adrenalin.svg';

interface Props {
  height?: number | string;
  width?: number | string;
}

const Logo = ({ height, width, color }: Props) => {
  return (
    <ImgLogo
      style={{
        height,
        width
      }}
    />
  );
};

Logo.defaultProps = {
  height: 'auto',
  width: 'auto'
};

export default Logo;
