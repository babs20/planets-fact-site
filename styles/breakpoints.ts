interface sizeType {
  768: string;
  1024: string;
  1440: string;
}

interface deviceType {
  tablet: string;
  laptop: string;
  desktop: string;
}

const size: sizeType = {
  768: '768px',
  1024: '1024px',
  1440: '1440px',
};

export const device: deviceType = {
  tablet: `(min-width: ${size[768]})`,
  laptop: `(min-width: ${size[1024]})`,
  desktop: `(min-width: ${size[1440]})`,
};

export default device;
