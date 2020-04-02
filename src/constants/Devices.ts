interface IDevice {
  mobile: string;
  tablet: string;
  laptop: string;
  desktop: string;
}

const size: IDevice = {
  mobile: '424px',
  tablet: '767px',
  laptop: '1023px',
  desktop: '2559px'
};

export const DEVICES: IDevice = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`
};
