import React from 'react';
import { ReactComponent as ImgLogo } from '../assets/images/adrenalin.svg';
import { ILogo } from '../interfaces/Logo';

const Logo = ({ height, width, color }: ILogo) => {
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
