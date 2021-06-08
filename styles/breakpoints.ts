interface sizeType {
  640: string;
  768: string;
  1024: string;
  1280: string;
  1536: string;
}

interface deviceType {
  tablet: string;
  tabletL: string;
  laptop: string;
  laptopL: string;
  desktop: string;
}

const size: sizeType = {
  640: '640px',
  768: '768px',
  1024: '1024px',
  1280: '1280px',
  1536: '1536px',
};

export const device: deviceType = {
  tablet: `(min-width: ${size[640]})`,
  tabletL: `(min-width: ${size[768]})`,
  laptop: `(min-width: ${size[1024]})`,
  laptopL: `(min-width: ${size[1280]})`,
  desktop: `(min-width: ${size[1536]})`,
};

export default device;
