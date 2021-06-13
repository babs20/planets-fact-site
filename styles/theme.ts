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
      mainText: '#fff',
      'blue-900': '#070724',
      'blue-500': '#38384F',
      'blue-100': '#838391',
      mercury: '#419EBB',
      venus: '#EDA249',
      earth: '#6F2ED6',
      mars: '#D14C32',
      jupiter: '#D83A34',
      saturn: '#CD5120',
      uranus: '#1EC2A4',
      neptune: '#2D68F0',
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
        letter-spacing: -1.05px;
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
    fonts: {
      antonio:
        "'Antonio', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
      spartan:
        "'Spartan', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    },
    planetDimensions: {
      mercury: {
        mobile: css`
          height: 111px;
          width: 111px;
        `,
        tablet: css`
          height: 184px;
          width: 184px;
        `,
        desktop: css`
          height: 290px;
          width: 290px;
        `,
      },
      venus: {
        mobile: css`
          height: 154px;
          width: 154px;
        `,
        tablet: css`
          height: 253px;
          width: 253px;
        `,
        desktop: css`
          height: 400px;
          width: 400px;
        `,
      },
      earth: {
        mobile: css`
          height: 173px;
          width: 173px;
        `,
        tablet: css`
          height: 285px;
          width: 285px;
        `,
        desktop: css`
          height: 450px;
          width: 450px;
        `,
      },
      mars: {
        mobile: css`
          height: 129px;
          width: 129px;
        `,
        tablet: css`
          height: 213px;
          width: 213px;
        `,
        desktop: css`
          height: 336px;
          width: 336px;
        `,
      },
      jupiter: {
        mobile: css`
          height: 224px;
          width: 224px;
        `,
        tablet: css`
          height: 369px;
          width: 369px;
        `,
        desktop: css`
          height: 582px;
          width: 582px;
        `,
      },
      saturn: {
        mobile: css`
          height: 256px;
          width: 256px;
        `,
        tablet: css`
          height: 422px;
          width: 422px;
        `,
        desktop: css`
          height: 666px;
          width: 666px;
        `,
      },
      uranus: {
        mobile: css`
          height: 176px;
          width: 176px;
        `,
        tablet: css`
          height: 290px;
          width: 290px;
        `,
        desktop: css`
          height: 458px;
          width: 458px;
        `,
      },
      neptune: {
        mobile: css`
          height: 173px;
          width: 173px;
        `,
        tablet: css`
          height: 285px;
          width: 285px;
        `,
        desktop: css`
          height: 450px;
          width: 450px;
        `,
      },
    },
  },
};

export { mainTheme };
