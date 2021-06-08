import { DefaultTheme } from 'styled-components';
import { css } from 'styled-components';

const fonts = {
  antonio:
    "'Antonio', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  spartan:
    "'Spartan', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
};

const mainTheme: DefaultTheme = {
  main: {
    colors: {
      white: '#fff',
      'blue-900': '#070724',
      'blue-500': '#38384F',
      'blue-100': '#838391',
      mercury: '#419EBB',
      venus: '#EDA249',
      earth: '#6F2ED6',
      mars: '#D14C32',
      jupiter: '#D83A34',
      saturn: '#CD5120',
      neptune: '#1EC2A4',
      uranus: '#2D68F0',
    },
    typography: {
      'text-h1': css`
        font-family: ${fonts.antonio};
        font-size: 80px;
        line-height: 104px;
        font-weight: 500;
        text-transform: uppercase;
      `,
      'text-h2': css`
        font-family: ${fonts.antonio};
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 52px;
        letter-spacing: -1.5px;
        text-transform: uppercase;
      `,
      'text-h3': css`
        font-family: ${fonts.spartan};
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 25px;
        letter-spacing: 2.6px;
        text-transform: uppercase;
      `,
      'text-h4': css`
        font-family: ${fonts.spartan};
        font-style: normal;
        font-weight: 700;
        font-size: 11px;
        line-height: 25px;
        letter-spacing: 1px;
        text-transform: uppercase;
      `,
      'text-body': css`
        font-family: ${fonts.spartan};
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 25px;
      `,
    },
  },
};

export { mainTheme };
